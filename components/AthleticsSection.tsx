export default function AthleticsSection() {
  return (
    <section
      id="athletics"
      className="border-b border-white/10 bg-black py-16 md:py-24"
      aria-labelledby="athletics-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
          <div className="max-w-md space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
              Athletics
            </p>
            <h2
              id="athletics-heading"
              className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl"
            >
              Division-1 style{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                basketball development
              </span>{" "}
              in a Christ-centered environment.
            </h2>
            <p className="text-sm text-white/70 md:text-base">
              LAB U Basketball trains student-athletes in an arena-style
              environment with national-level competition, structured skill
              development, and an emphasis on character, discipline, and
              leadership.
            </p>
          </div>

          <div className="flex-1 space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  National Team
                </h3>
                <p className="mt-2 text-xs text-white/70">
                  Competes at the highest prep levels with a focus on exposure,
                  travel competition, and college-ready preparation.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Regional Team
                </h3>
                <p className="mt-2 text-xs text-white/70">
                  High-level competition across the Southeast with an emphasis
                  on development and system discipline.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Varsity Boys
                </h3>
                <p className="mt-2 text-xs text-white/70">
                  Structured varsity basketball experience built on fundamentals,
                  accountability, and leadership on and off the court.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-yellow-500/40 bg-gradient-to-br from-yellow-500/10 via-black to-black p-5">
                <h3 className="text-sm font-semibold text-yellow-300">
                  D-1 Intensity. Daily.
                </h3>
                <p className="mt-2 text-xs text-white/80">
                  Training blocks mirror the structure and expectations of
                  collegiate programs—film, skill work, performance training,
                  and team culture all aligned around excellence.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5">
                <h3 className="text-sm font-semibold text-white">
                  Complete Player Development
                </h3>
                <ul className="mt-3 space-y-1.5 text-xs text-white/70">
                  <li>• Skill development & position-specific work</li>
                  <li>• Strength, speed, and performance training</li>
                  <li>• Film study and basketball IQ</li>
                  <li>• Leadership, discipline, and faith integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

