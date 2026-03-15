export default function AcademicsSection() {
  return (
    <section
      id="academics"
      className="border-b border-white/10 bg-zinc-950 py-16 md:py-24"
      aria-labelledby="academics-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-start md:gap-16 md:px-6">
        <div className="max-w-md space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
            Academics
          </p>
          <h2
            id="academics-heading"
            className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl"
          >
            A modern, structured{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              college-prep model
            </span>{" "}
            for K–12.
          </h2>
          <p className="text-sm text-white/70 md:text-base">
            LAB University Christian Academy delivers a disciplined, college-prep
            academic experience powered by the Acellus Learning System—designed
            specifically to support serious student-athletes without sacrificing
            academic excellence.
          </p>
        </div>

        <div className="flex-1 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <h3 className="text-sm font-semibold text-white">
              Structured Daily Schedule
            </h3>
            <p className="mt-2 text-xs text-white/70">
              Students complete core coursework in a focused morning block
              before transitioning to electives and athletic development in the
              afternoon.
            </p>
            <dl className="mt-4 space-y-2 text-xs text-white/70">
              <div className="flex justify-between">
                <dt className="uppercase tracking-[0.25em] text-white/50">
                  Academic Block
                </dt>
                <dd>8:00 AM – 1:00 PM</dd>
              </div>
              <div className="flex justify-between">
                <dt className="uppercase tracking-[0.25em] text-white/50">
                  Electives & Training
                </dt>
                <dd>12:30 PM – 3:00 PM</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <h3 className="text-sm font-semibold text-white">
              Core College-Prep Courses
            </h3>
            <p className="mt-2 text-xs text-white/70">
              A rigorous K–12 curriculum aligned with college-prep expectations
              and monitored by on-site instructors, mentors, and tutors.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-xs text-white/70">
              <li className="rounded-full border border-white/10 px-3 py-1">
                Mathematics
              </li>
              <li className="rounded-full border border-white/10 px-3 py-1">
                Science
              </li>
              <li className="rounded-full border border-white/10 px-3 py-1">
                English
              </li>
              <li className="rounded-full border border-white/10 px-3 py-1">
                Social Studies
              </li>
              <li className="rounded-full border border-white/10 px-3 py-1">
                STEM & Innovation
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-yellow-500/40 bg-gradient-to-br from-yellow-500/10 via-black to-black p-5">
            <h3 className="text-sm font-semibold text-yellow-300">
              NC Opportunity Scholarship
            </h3>
            <p className="mt-2 text-xs text-white/80">
              LAB University Christian Academy participates in the North
              Carolina Opportunity Scholarship program, helping families access
              a premium Christian education with financial support where
              eligible.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <h3 className="text-sm font-semibold text-white">
              Acellus-Powered Learning
            </h3>
            <p className="mt-2 text-xs text-white/70">
              The Acellus Learning System provides accredited coursework,
              real-time progress tracking, and flexible pacing—while our faculty
              ensure accountability, study habits, and academic integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

