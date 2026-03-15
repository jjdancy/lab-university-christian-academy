export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10 bg-black"
      aria-labelledby="hero-heading"
    >
      {/* Background video + gradient overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="h-full w-full object-cover object-[20%_40%]"
            src="/videos/in%20school%20vid.mov"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        {/* Soft global darkening for readability */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.18),_transparent_75%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(0,0,0,0.55),_rgba(0,0,0,0.85))]" />
        {/* Stronger dark gradient behind text (left side) */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-20 md:flex-row md:items-center md:gap-14 md:px-6 md:pb-20 md:pt-24">
        <div className="flex-1 space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-300/90">
            Learn • Believe • Achieve
          </p>
          <div className="inline-flex items-center rounded-full border border-yellow-400/80 bg-black/60 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-yellow-200 shadow-md shadow-black/40">
            Now enrolling for 2026–27 school year
          </div>
          <h1
            id="hero-heading"
            className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            A Christ-centered academy for{" "}
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              Scholars, Leaders, and Athletes
            </span>
            .
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
            LAB University Christian Academy in Charlotte, NC is a K–12,
            Christ-centered private academy that combines a structured
            college-prep curriculum and the Acellus learning system—with
            optional Division-1 style basketball for student-athletes. Students
            are prepared in faith, academics, and leadership for the next level.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/admissions#apply"
              className="rounded-full bg-yellow-400 px-7 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-black shadow-lg shadow-yellow-500/30 transition-transform hover:-translate-y-0.5 hover:bg-yellow-300"
            >
              Apply Now
            </a>
            <a
              href="/admissions#tour"
              className="rounded-full border border-white/25 px-7 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/85 transition-colors hover:border-yellow-400 hover:text-yellow-300"
            >
              Schedule a Tour
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/80">
            {/* K–12 badge */}
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/25 bg-black/55 px-4 py-2 shadow-md shadow-black/40">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-yellow-300/80 bg-black/40">
                {/* Open book icon: two pages */}
                <div className="flex h-5 w-6 items-stretch gap-0.5">
                  <div className="h-full w-1/2 rounded-sm bg-yellow-300/90" />
                  <div className="h-full w-1/2 rounded-sm bg-yellow-200/90" />
                </div>
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-sm font-semibold text-white">
                  K–12
                </span>
                <span className="text-[0.7rem] uppercase tracking-[0.22em] text-white/70">
                  All grade levels
                </span>
              </div>
            </div>

            {/* Reviews badge */}
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/25 bg-black/55 px-4 py-2 shadow-md shadow-black/40">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-yellow-300 text-yellow-300">
                <span className="text-base">★</span>
              </div>
              <div className="flex flex-col items-start leading-tight">
                <span className="text-sm font-semibold text-white">
                  5.0
                </span>
                <span className="text-[0.7rem] uppercase tracking-[0.22em] text-white/70">
                  Google reviews
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1" />
      </div>
    </section>
  );
}

