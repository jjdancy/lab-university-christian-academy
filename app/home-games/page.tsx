import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MountStaggerReveal from "@/components/MountStaggerReveal";
import AdmissionsCTASection from "@/components/AdmissionsCTASection";
import { HOME_GAMES_TICKETS_URL } from "@/lib/constants";

const VENUE_ADDRESS = "333 Jeremiah Blvd, Charlotte, NC";
const DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `LAB U Christian Academy, ${VENUE_ADDRESS}`
)}`;

export const metadata: Metadata = {
  title: "Home Games & Tickets",
  description:
    "Watch LAB U basketball live in Charlotte. All home games are played at LAB U Christian Academy, 333 Jeremiah Blvd. Buy home game tickets online.",
  alternates: { canonical: "/home-games" },
  openGraph: {
    title: "Home Games & Tickets | LAB University Christian Academy",
    description:
      "Every LAB U home game is played at 333 Jeremiah Blvd, Charlotte, NC. Get your tickets online.",
    url: "/home-games",
    images: [{ url: "/images/area.jpg", width: 1200, height: 630, alt: "LAB U arena-style court" }]
  }
};

function TicketButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={HOME_GAMES_TICKETS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex rounded-full bg-yellow-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black shadow-lg shadow-yellow-500/30 transition-transform hover:-translate-y-0.5 hover:bg-yellow-300 ${className}`}
    >
      Buy Tickets
    </a>
  );
}

export default function HomeGamesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col">
        <MountStaggerReveal staggerMs={80}>
          {/* 1. Hero */}
          <section className="relative border-b border-white/10 overflow-hidden bg-black py-16 md:py-24">
            <div className="absolute inset-0">
              <img
                src="/images/area.jpg"
                alt="LAB U arena-style basketball court"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40" />
            </div>
            <div className="relative mx-auto max-w-5xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Home Games
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                Pack the gym. Watch LAB U compete at home.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
                Every LAB U home game is played on our arena-style court in
                Charlotte. Bring your family, bring your friends, and support
                our student-athletes as they compete against top programs.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <TicketButton />
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-yellow-400/65 bg-yellow-400/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300 shadow-sm shadow-yellow-500/10 transition-all hover:-translate-y-0.5 hover:border-yellow-400 hover:bg-yellow-400/10 hover:text-yellow-200"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </section>

          {/* 2. Venue */}
          <section className="border-b border-white/10 bg-black py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center md:gap-14">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                  <img
                    src="/images/action%20shot.png"
                    alt="LAB U game action"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                    The Venue
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    LAB U Christian Academy
                  </h2>
                  <p className="mt-2 text-base font-medium text-yellow-200/95">
                    {VENUE_ADDRESS}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    All home games are hosted at LAB U Christian Academy. Our
                    arena-style court features full regulation dimensions, a
                    scoreboard, and spectator seating—a true game-day
                    atmosphere for players and fans.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-white/75">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Arena-style court with spectator seating
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      National, Regional, Varsity, and Post-Grad teams
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Family-friendly, faith-centered environment
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Tickets */}
          <section
            id="tickets"
            className="border-b border-white/10 bg-zinc-950 py-16 md:py-20"
          >
            <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Tickets
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Get your home game tickets
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80">
                Tickets for LAB U home games are sold online. Purchase ahead of
                time to skip the line at the door, and see the full list of
                upcoming games on the ticket page.
              </p>
              <TicketButton className="mt-8" />
              <p className="mt-6 text-xs text-white/50">
                Questions about home games? Call (704) 315-1035 or email{" "}
                <a
                  href="mailto:admin@labuniversityprep.com"
                  className="text-white/70 transition-colors hover:text-yellow-300"
                >
                  admin@labuniversityprep.com
                </a>
                .
              </p>
            </div>
          </section>

          <AdmissionsCTASection />
        </MountStaggerReveal>
      </main>
      <Footer />
    </div>
  );
}
