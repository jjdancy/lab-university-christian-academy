export default function HomeBrandValuesSection() {
  return (
    <section className="border-b border-white/10 bg-black py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
          LAB | Learn • Believe • Achieve
        </p>
        <h2 className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          A clear path from the classroom to college and beyond.
        </h2>

        {/* Bento grid: one wide image card + two text cards */}
        <div className="mt-8 grid gap-4 md:grid-cols-4 md:grid-rows-1">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 md:col-span-2 md:min-h-[220px]">
            <img
              src="/images/little%20kids%20on%20field%20trip.jpeg"
              alt="LAB U students on field trip"
              className="h-full w-full object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300">
                One academy. One standard.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:col-span-2">
            <div className="flex-1 rounded-2xl border border-white/10 bg-zinc-950/90 p-5">
              <h3 className="text-sm font-semibold text-yellow-300">Faith</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                Christ-centered culture, daily discipleship, and leadership
                development at the center of everything we do.
              </p>
            </div>
            <div className="flex-1 rounded-2xl border border-yellow-500/30 bg-black/60 p-5">
              <h3 className="text-sm font-semibold text-yellow-300">
                Excellence & Preparation
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/80">
                Structured academics, elite training standards, and a daily
                rhythm that prepares students for college and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
