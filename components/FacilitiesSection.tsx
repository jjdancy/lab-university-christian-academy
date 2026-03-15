export default function FacilitiesSection() {
  return (
    <section
      id="facilities"
      className="border-b border-white/10 bg-zinc-950 py-16 md:py-24"
      aria-labelledby="facilities-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
          <div className="max-w-md space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
              Facilities
            </p>
            <h2
              id="facilities-heading"
              className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl"
            >
              Elite facilities built for{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                student-athlete development
              </span>
              .
            </h2>
            <p className="text-sm text-white/70 md:text-base">
              In partnership with LABCITY Sports Training & Event Center, LAB U
              provides a professional training environment that mirrors the
              expectations of Division-1 programs—on the court, in the weight
              room, and in academic spaces.
            </p>
          </div>

          <div className="flex-1 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <h3 className="text-sm font-semibold text-white">
                Arena-Style Court
              </h3>
              <p className="mt-2 text-xs text-white/70">
                Full regulation court with game-ready environment, scoreboard,
                and spectator seating to prepare athletes for true college
                atmospheres.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <h3 className="text-sm font-semibold text-white">
                Dr. Dish Shooting Lab
              </h3>
              <p className="mt-2 text-xs text-white/70">
                Dedicated shooting room with Dr. Dish machines for high-volume,
                data-informed shooting sessions and form refinement.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <h3 className="text-sm font-semibold text-white">
                Performance Center
              </h3>
              <p className="mt-2 text-xs text-white/70">
                Strength and performance training focused on speed, vertical,
                durability, and long-term development.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5 md:col-span-2">
              <h3 className="text-sm font-semibold text-white">
                Academic Learning Spaces
              </h3>
              <p className="mt-2 text-xs text-white/70">
                Structured learning rooms and quiet study areas where students
                complete Acellus coursework under instructor supervision,
                ensuring accountability and focus.
              </p>
            </div>
            <div className="rounded-2xl border border-yellow-500/40 bg-gradient-to-br from-yellow-500/10 via-black to-black p-5">
              <h3 className="text-sm font-semibold text-yellow-300">
                Professional Training Atmosphere
              </h3>
              <p className="mt-2 text-xs text-white/80">
                The entire environment reinforces discipline, preparation, and
                measurable growth—so student-athletes learn to operate at the
                standard expected at the college level and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

