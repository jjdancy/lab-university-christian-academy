const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/labuchristianacademy/",
    icon: "instagram"
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/labcityshop/",
    icon: "facebook"
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@LABTVNC",
    icon: "youtube"
  }
] as const;

function SocialIcon({ icon }: { icon: string }) {
  const size = 20;
  if (icon === "instagram") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.919 0 3.274-.012 3.584-.069 4.919-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.919 0-3.273.012-3.584.07-4.919.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );
  }
  if (icon === "facebook") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  }
  if (icon === "youtube") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    );
  }
  if (icon === "x") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  return null;
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-xs text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <a
            href="/"
            className="inline-flex items-center gap-2 transition-opacity hover:opacity-90"
          >
            <img
              src="/images/logolab.png"
              alt="LAB University Christian Academy"
              className="h-7 w-7 object-contain"
            />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-yellow-400">
              LAB University Christian Academy
            </span>
          </a>
          <p className="mt-2 text-white/70">
            8016 Tower Point Dr • Charlotte, NC 28227
          </p>
          <p className="mt-1 text-white/70">(704) 315-1035</p>
          <div className="mt-4 flex items-center gap-4">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition-colors hover:text-yellow-400"
                aria-label={label}
              >
                <SocialIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-1 text-right md:text-left">
          <p className="text-[0.7rem] uppercase tracking-[0.25em]">
            Christ-Centered • College-Prep • Elite Development
          </p>
          <p className="text-[0.7rem] text-white/50">
            © {new Date().getFullYear()} LAB University Christian Academy. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

