export default function LeadershipFaithSection() {
  return (
    <section
      id="leadership-faith"
      className="border-b border-white/10 bg-black py-16 md:py-24"
      aria-labelledby="leadership-faith-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start md:gap-16">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
              Leadership & Faith
            </p>
            <h2
              id="leadership-faith-heading"
              className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl"
            >
              Christ-centered formation for{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                leaders on and off the court
              </span>
              .
            </h2>
            <p className="text-sm text-white/70 md:text-base">
              LAB University Christian Academy exists to develop young men and
              women of faith, discipline, and purpose—students who are prepared
              for college, career, and calling, not just the next game.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5">
              <h3 className="text-sm font-semibold text-white">
                Christ-Centered Culture
              </h3>
              <p className="mt-2 text-xs text-white/70">
                Biblical values and Christian leadership principles are woven
                into the daily rhythm of school life—classrooms, practices,
                team standards, and expectations.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5">
              <h3 className="text-sm font-semibold text-white">
                Leadership & Accountability
              </h3>
              <p className="mt-2 text-xs text-white/70">
                Students are challenged to lead themselves well—academically,
                spiritually, and athletically—through mentorship, clear
                standards, and consistent accountability.
              </p>
            </div>
            <div className="rounded-2xl border border-yellow-500/40 bg-gradient-to-br from-yellow-500/10 via-black to-black p-5">
              <h3 className="text-sm font-semibold text-yellow-300">
                Whole-Person Development
              </h3>
              <p className="mt-2 text-xs text-white/80">
                Every aspect of the LAB U experience—faith, academics,
                athletics, and character—is aligned to prepare students for
                success beyond high school with a foundation that lasts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

