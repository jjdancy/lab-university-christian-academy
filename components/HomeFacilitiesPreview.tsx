export type HomeFacilitiesPreviewImage = {
  imageUrl: string;
  imageAlt: string;
  caption?: string;
};

export type HomeFacilitiesPreviewProps = {
  eyebrow?: string;
  headline?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  images?: HomeFacilitiesPreviewImage[];
};

export default function HomeFacilitiesPreview({
  eyebrow = "Facilities",
  headline = "A professional training environment at LABCITY.",
  description =
    "Arena-style court, Dr. Dish shooting lab, performance center, and academic learning spaces—for athletics and classroom learning.",
  ctaLabel = "Explore Our Facilities",
  ctaHref = "/facilities",
  images,
}: HomeFacilitiesPreviewProps) {
  const fallbackImages: HomeFacilitiesPreviewImage[] = [
    {
      imageUrl: "/images/gym%20facity.png",
      imageAlt: "LAB U gym and training facility",
      caption: "Training facility",
    },
    {
      imageUrl: "/images/area.jpg",
      imageAlt: "Arena-style court at LABCITY",
      caption: "Arena-style court",
    },
    {
      imageUrl: "/images/dr%20dish.png",
      imageAlt: "Dr. Dish shooting lab at LABCITY",
      caption: "Dr. Dish shooting lab",
    },
  ];

  const finalImages =
    images && images.length >= 3 ? images.slice(0, 3) : fallbackImages;

  return (
    <section className="border-b border-white/10 bg-black py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 text-center md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {headline}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm text-white/70">
            {description}
          </p>
          <a
            href={ctaHref}
            className="mt-5 inline-block rounded-full bg-yellow-400 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:bg-yellow-300"
          >
            {ctaLabel}
          </a>
        </div>

        {/* Facility images: gym + gym 2 + Dr. Dish */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
          {finalImages.map((img, idx) => {
            const borderClass = idx === 2 ? "border-yellow-500/20" : "border-white/10";
            return (
              <div
                key={`${img.imageAlt}-${idx}`}
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl border ${borderClass}`}
              >
                <img
                  src={img.imageUrl}
                  alt={img.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                {img.caption ? (
                  <p className="absolute bottom-3 left-3 text-[0.7rem] font-semibold uppercase tracking-wider text-yellow-200/95">
                    {img.caption}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
