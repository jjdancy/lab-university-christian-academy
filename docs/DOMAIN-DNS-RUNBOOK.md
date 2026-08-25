# Domain & DNS Runbook — labuniversityprep.com

How the live domain is supposed to be wired, and how to diagnose it when the
site appears down. Written after an outage where the site was unreachable even
though the application itself was healthy.

## Summary of the intended setup

| Host | Record | Value |
| --- | --- | --- |
| `labuniversityprep.com` (apex) | `A` | `216.198.79.1` |
| `www.labuniversityprep.com` | `CNAME` | `cname.vercel-dns.com` |

The apex is the canonical hostname. `app/layout.tsx`, `app/robots.ts` and
`app/sitemap.ts` all hard-code `SITE_URL = "https://labuniversityprep.com"`, so
every canonical URL, the sitemap and the JSON-LD point at the apex. `www` should
exist only to redirect to the apex — not the other way round.

Both hostnames must also be registered as domains on the Vercel project
(`lab-university-christian-academy`). DNS alone is not enough: Vercel routes by
`Host` header, and a hostname it does not know about is not served.

Nameservers are Namecheap BasicDNS (`dns1.registrar-servers.com`,
`dns2.registrar-servers.com`), so DNS records are edited in the Namecheap
dashboard, not in Vercel.

## The failure mode we hit

Both the apex and `www` resolved to `159.198.67.61`. That address belongs to
Namecheap, not Vercel — it is the host behind Namecheap's *URL Redirect Record*
feature. The domain was therefore never reaching the application at all.

`www` was configured to redirect to `https://www.labuniversityprep.com/` — to
itself. Browsers followed the 308 until they gave up with
`ERR_TOO_MANY_REDIRECTS`.

The giveaway that a response came from Namecheap's redirect service rather than
Vercel is that it carries both a `location:` and a `refresh:` header and no
`x-vercel-id`.

## Timeline and evidence

The Namecheap SOA serial is a Unix timestamp that bumps on every zone edit. It
read `1787336339`, which is **2026-08-21 18:18:59 UTC** — so the zone was last
edited on Aug 21, and that is when to look for the change that broke this.

```
curl -sS -H 'accept: application/dns-json' \
  'https://dns.google/resolve?name=labuniversityprep.com&type=SOA'
```

Vercel Web Analytics corroborates the date, though it needs reading carefully.
Traffic did not fall to zero — it changed shape. Pageviews ran ~29/day through
Aug 20 and ~11/day from Aug 22, and pageviews-per-visitor fell from ~2.2 to
~1.3: people arriving and leaving on the first page instead of browsing.

Two traps when reading that data:

- **Overnight zeros are not an outage.** The audience is in Charlotte, so a run
  of empty hours between roughly 02:00 and 13:00 UTC is just night.
- **A residual trickle does not mean the domain is healthy.** Some requests
  still reached the app while the domain was misconfigured. Inconsistent
  resolver state and cached DNS both produce this. Judge the domain from the
  records, not from a non-zero visitor count.

## Diagnosing "the site is down"

Work from the bottom of the stack up. The first two steps are what separate an
application problem from a domain problem, and they are usually skipped.

**1. Is the application healthy?** Hit the Vercel-owned alias, which does not
depend on the custom domain's DNS at all:

```
curl -sS -o /dev/null -w '%{http_code}\n' https://lab-university-christian-academy.vercel.app/
```

`200` means the build, the deployment and the app are all fine and the problem
is domain-level. Confirm the production deployment is `READY` in the Vercel
dashboard as well.

**2. Where does DNS actually point?** No `dig` in every environment, so DNS over
HTTPS works anywhere:

```
curl -sS -H 'accept: application/dns-json' \
  'https://dns.google/resolve?name=labuniversityprep.com&type=A'
curl -sS -H 'accept: application/dns-json' \
  'https://dns.google/resolve?name=www.labuniversityprep.com&type=CNAME'
```

Anything other than the values in the table above is the bug. `159.198.x.x` is
Namecheap. `76.76.21.21`, `216.198.79.x` and `64.29.17.x` are Vercel.

**3. Who answered?** Look at the response headers:

```
curl -sS -I https://labuniversityprep.com/
```

- `x-vercel-id` present → the request reached Vercel.
- `location:` **and** `refresh:` with no `x-vercel-id` → a Namecheap URL
  Redirect Record is intercepting the hostname.
- `x-vercel-mitigated: deny` → Vercel Firewall rejected the request. Check the
  project's Firewall rules and whether Attack Challenge Mode is on. Note that
  datacenter and proxy IPs are denied more readily than home connections, so
  reproduce from a phone on cellular before concluding real visitors are
  affected.

## Things that look like causes but are not

- **`"live": false` in the Vercel API.** Every project in this account reports
  `live: false`, including ones that serve traffic normally. It is not a paused
  flag, and unpausing is not the fix. A genuinely paused project returns
  `503 DEPLOYMENT_PAUSED`, so a `403` rules a pause out on its own.
- **The project alias redirecting to `vercel.com/sso-api`.** Deployment
  protection is set to `all_except_custom_domains`, so the
  `*-jjs-projects-*.vercel.app` alias requires login while the custom domain
  does not. Expected, and unrelated to a custom-domain outage.

## Fixing it

1. In Namecheap → Domain List → `labuniversityprep.com` → **Advanced DNS**,
   delete every **URL Redirect Record** for `@` and `www`. These are what point
   the domain at `159.198.67.61`.
2. Add the two records from the table above.
3. In Vercel → project → **Settings → Domains**, make sure both
   `labuniversityprep.com` and `www.labuniversityprep.com` are listed, with
   `www` set to redirect to the apex. Only the apex was registered during the
   outage.
4. Wait for propagation and re-run the step 2 and step 3 checks. The records
   carry a 60-second TTL, so this resolves in minutes, not hours.

Verify the end state:

```
curl -sS -o /dev/null -w '%{http_code}\n' https://labuniversityprep.com/          # 200
curl -sS -o /dev/null -w '%{http_code} %{redirect_url}\n' https://www.labuniversityprep.com/  # 308 -> apex
```
