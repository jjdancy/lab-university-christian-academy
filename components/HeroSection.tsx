export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-black via-black to-zinc-950"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,_rgba(250,204,21,0.12),_transparent_55%),radial-gradient(circle_at_100%_0,_rgba(250,204,21,0.08),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(0,0,0,0.4),_rgba(0,0,0,0.9))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-20 md:flex-row md:items-center md:gap-20 md:px-6 md:pb-28 md:pt-28">
        <div className="flex-1 space-y-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300/90">
            Faith • Excellence • Preparation
          </p>
          <h1
            id="hero-heading"
            className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Forming{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Christ-centered
            </span>{" "}
            student-athletes for{" "}
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              college and beyond
            </span>
            .
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
            LAB University Christian Academy in Charlotte, NC is a K–12,
            Christ-centered private academy that combines a structured
            college-prep curriculum, the Acellus learning system, and
            Division-1 style basketball development—so students are prepared in
            faith, academics, and leadership for the next level.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#apply"
              className="rounded-full bg-yellow-400 px-7 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-black shadow-lg shadow-yellow-500/30 transition-transform hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              Apply Now
            </a>
            <a
              href="#tour"
              className="rounded-full border border-white/25 px-7 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/85 transition-colors hover:border-yellow-400 hover:text-yellow-300"
            >
              Schedule a Tour
            </a>
            <span className="text-xs text-white/55">
              Limited enrollment for 2026–27
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-white/60">
            <div>
              <div className="font-semibold text-white">
                5.0 ★ Google Reviews
              </div>
              <div className="text-[0.7rem] uppercase tracking-[0.25em] text-white/50">
                Trusted by Charlotte families
              </div>
            </div>
            <div className="hidden h-10 w-px bg-white/10 sm:block" />
            <div>
              <div className="font-semibold text-white">
                Structured Daily Preparation
              </div>
              <div className="text-[0.7rem] uppercase tracking-[0.25em] text-white/50">
                Academics 8:00–1:00 • Training 12:30–3:00
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black shadow-2xl shadow-black/70">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0,_rgba(250,204,21,0.18),transparent_55%),radial-gradient(circle_at_80%_100%,_rgba(250,204,21,0.12),transparent_55%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent,_rgba(0,0,0,0.4)_40%,_rgba(0,0,0,0.9)_100%)]" />

            <div className="relative flex h-full flex-col justify-between p-6">
              <div className="space-y-2 text-right text-[0.7rem] text-white/75">
                <p className="font-semibold tracking-[0.25em] text-yellow-300">
                  LAB U BASKETBALL
                </p>
                <p>National & Regional Teams • Varsity Boys</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-[0.7rem] text-white/65">
                  <span className="uppercase tracking-[0.25em]">
                    Academic Block
                  </span>
                  <span>8:00 AM – 1:00 PM</span>
                </div>
                <div className="flex items-center justify-between text-[0.7rem] text-white/65">
                  <span className="uppercase tracking-[0.25em]">
                    Training Block
                  </span>
                  <span>12:30 PM – 3:00 PM</span>
                </div>
                <div className="mt-2 rounded-2xl border border-yellow-400/45 bg-black/50 p-4">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-yellow-300">
                    Designed for Student-Athletes
                  </p>
                  <p className="mt-2 text-xs text-white/75">
                    Morning Acellus coursework with instructor oversight.
                    Afternoon electives, performance training, and elite
                    basketball development—within a disciplined, faith-first
                    culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

