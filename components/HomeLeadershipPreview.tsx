import {PLAYBOOK_REGISTER_URL, SCHEDULE_TOUR_URL} from "@/lib/constants";

export type HomeLeadershipPreviewProps = {
  backgroundImageSrc?: string;
  backgroundImageAlt?: string;
  eyebrowLabel?: string;
  heading?: string;
  description?: string;
  applyLabel?: string;
  applyHref?: string;
  tourLabel?: string;
  tourHref?: string;
  limitedSeatsText?: string;
};

export default function HomeLeadershipPreview({
  backgroundImageSrc = "/images/allhandsin.jpeg",
  backgroundImageAlt = "LAB U community",
  eyebrowLabel = "Admissions",
  heading = "Ready to enroll at LAB University Christian Academy?",
  description =
    "We are now accepting applications for the 2026–27 school year for grades K–12. Take the next step toward a Christ-centered, college-prep education.",
  applyLabel = "Apply Now",
  applyHref = PLAYBOOK_REGISTER_URL,
  tourLabel = "Schedule a Tour",
  tourHref = SCHEDULE_TOUR_URL,
  limitedSeatsText = "Seats are limited. Early applications are strongly encouraged.",
}: HomeLeadershipPreviewProps) {
  return (
    <section
      id="admissions"
      className="relative border-b border-white/10 overflow-hidden py-20 md:py-28"
      aria-labelledby="admissions-heading"
    >
      {/* Full-width background: little kids.jpeg */}
      <div className="absolute inset-0">
        <img
          src={backgroundImageSrc}
          alt={backgroundImageAlt}
          className="h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Admissions content */}
      <div className="relative mx-auto max-w-2xl px-4 text-center md:px-6">
        <div className="rounded-2xl border border-white/15 bg-black/70 px-6 py-8 backdrop-blur-sm md:px-10 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
            {eyebrowLabel}
          </p>
          <h2
            id="admissions-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            {heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={applyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-400 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:bg-yellow-300"
            >
              {applyLabel}
            </a>
            <a
              href={tourHref}
              className="rounded-full border border-white/30 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10"
            >
              {tourLabel}
            </a>
          </div>
          <p className="mt-4 text-xs text-white/60">
            {limitedSeatsText}
          </p>
        </div>
      </div>
    </section>
  );
}
