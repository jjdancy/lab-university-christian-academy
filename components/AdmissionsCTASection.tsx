export default function AdmissionsCTASection() {
  return (
    <section
      id="admissions"
      className="border-y border-yellow-500/40 bg-gradient-to-b from-yellow-500/10 via-black to-black py-16 md:py-24"
      aria-labelledby="admissions-heading"
    >
      <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-300">
          Admissions
        </p>
        <h2
          id="admissions-heading"
          className="mt-3 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl"
        >
          Ready to enroll at{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
            LAB University Christian Academy
          </span>
          ?
        </h2>
        <p className="mt-4 text-sm text-white/70 md:text-base">
          We are now accepting applications for the 2026–27 school year for
          grades K–12. Take the
          next step toward a Christ-centered, college-prep education.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            id="apply"
            href="/admissions"
            className="rounded-full bg-yellow-400 px-8 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black shadow-lg shadow-yellow-500/30 transition-transform hover:-translate-y-0.5 hover:bg-yellow-300"
          >
            Apply Now
          </a>
          <a
            id="tour"
            href="/admissions#tour"
            className="rounded-full border border-white/20 px-8 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 transition-colors hover:border-yellow-400 hover:text-yellow-300"
          >
            Schedule a Tour
          </a>
        </div>

        <p className="mt-4 text-xs text-white/60">
          Seats are limited. Early applications are strongly encouraged.
        </p>
      </div>
    </section>
  );
}

