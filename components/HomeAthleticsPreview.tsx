export type HomeAthleticsTeamPreview = {
  label: string;
  imageUrl: string;
  imageAlt: string;
};

export type HomeAthleticsPreviewProps = {
  eyebrow?: string;
  headline?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  teams?: HomeAthleticsTeamPreview[];
};

export default function HomeAthleticsPreview({
  eyebrow = "Athletics",
  headline = "Division-1 style basketball, built on faith and discipline.",
  description =
    "National and regional teams, boys and girls varsity, and a daily training environment that mirrors collegiate standards prepare players for the next level—on and off the court.",
  ctaLabel = "Learn More About Athletics",
  ctaHref = "/athletics",
  teams,
}: HomeAthleticsPreviewProps) {
  const fallbackTeams: HomeAthleticsTeamPreview[] = [
    {
      label: "National",
      imageUrl: "/images/national%20team%202.jpeg",
      imageAlt: "LAB U National Team",
    },
    {
      label: "Regional",
      imageUrl: "/images/regonial%20team.jpeg",
      imageAlt: "LAB U Regional Team",
    },
    {
      label: "Boys Varsity",
      imageUrl: "/images/varsity%20team.jpeg",
      imageAlt: "LAB U Boys Varsity",
    },
    {
      label: "Girls Varsity",
      imageUrl: "/images/Girls%20varsity.jpeg",
      imageAlt: "LAB U Girls Varsity",
    },
  ];

  const finalTeams = teams && teams.length >= 4 ? teams : fallbackTeams;

  return (
    <section className="border-b border-white/10 bg-black py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center md:gap-14 md:px-6">
        {/* Left: four team images in 2x2 grid */}
        <div className="grid w-full shrink-0 grid-cols-2 gap-3 md:w-[360px]">
          {finalTeams.slice(0, 4).map((team, idx) => {
            const borderClass =
              idx === 0
                ? "border-yellow-500/30"
                : "border-white/15";
            const textClass = idx === 0 ? "text-yellow-300" : "text-white/90";
            return (
              <div
                key={`${team.label}-${idx}`}
                className={`relative h-40 overflow-hidden rounded-xl border ${borderClass} md:h-[160px]`}
              >
                <img
                  src={team.imageUrl}
                  alt={team.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span
                  className={`absolute bottom-3 left-3 text-[0.7rem] font-semibold uppercase tracking-wider ${textClass}`}
                >
                  {team.label}
                </span>
              </div>
            );
          })}
        </div>
        {/* Right: text content — larger typography */}
        <div className="flex-1 space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
            {headline}
          </h2>
          <p className="text-base leading-relaxed text-white/70 md:text-lg">
            {description}
          </p>
          <a
            href={ctaHref}
            className="inline-flex text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300 underline-offset-4 hover:underline"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
