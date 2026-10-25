import {HOME_GAMES_TICKETS_URL} from "@/lib/constants";

export default function HomeGamesBanner() {
  return (
    <section
      id="home-games"
      className="border-b border-yellow-500/40 bg-gradient-to-r from-yellow-500/15 via-black to-black"
      aria-labelledby="home-games-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-[auto,1fr,auto] md:items-center md:gap-8 md:px-6">
        <div className="relative hidden h-28 w-28 overflow-hidden rounded-xl border border-yellow-400/40 md:block">
          <img
            src="/images/action%20shot.png"
            alt="LAB U home game action"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-300">
            Home Games
          </p>
          <h2
            id="home-games-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            Come watch LAB U play at home.
          </h2>
          <p className="mt-2 text-sm text-white/75">
            All home games are at LAB U Christian Academy — 333 Jeremiah Blvd,
            Charlotte, NC.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={HOME_GAMES_TICKETS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-yellow-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black shadow-lg shadow-yellow-500/30 transition-transform hover:-translate-y-0.5 hover:bg-yellow-300"
          >
            Buy Tickets
          </a>
          <a
            href="/home-games"
            className="rounded-full border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/85 transition-colors hover:border-yellow-400 hover:text-yellow-300"
          >
            Game Info
          </a>
        </div>
      </div>
    </section>
  );
}
