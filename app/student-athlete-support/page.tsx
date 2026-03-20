import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MountStaggerReveal from "@/components/MountStaggerReveal";
import { SCHEDULE_TOUR_URL } from "@/lib/constants";

export default function StudentAthleteSupportPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col">
        <MountStaggerReveal staggerMs={80}>
          <section className="border-b border-white/10 bg-gradient-to-b from-black via-black to-zinc-950 py-16 md:py-24">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <div className="grid gap-10 md:grid-cols-[1.05fr,0.95fr] md:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                    Student-Athlete Support
                  </p>
                  <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                    Built to develop the whole student-athlete.
                  </h1>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
                    At LAB U Christian Academy, support goes beyond the court. We
                    develop each athlete mentally, physically, academically, and
                    spiritually through a structured system designed for long-term
                    growth and high-level outcomes.
                  </p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {[
                      "Mental health and wellness support",
                      "Recovery and physical care services",
                      "College recruitment guidance",
                      "Academic accountability and NCAA readiness",
                    ].map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/90"
                      >
                        <span className="inline-flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-yellow-500/30 bg-zinc-900">
                  <img
                    src="/images/students%20getting%20talked%20too.jpeg"
                    alt="LAB U staff speaking with student-athletes"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Wellness and Recovery
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                A healthy athlete performs at a higher level.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80">
                We prioritize well-being as part of performance. Student-athletes
                receive consistent support that helps them manage stress, recover
                correctly, and stay prepared for the demands of elite training.
              </p>
              <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-stretch">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
                  <img
                    src="/images/Yoga.jpeg"
                    alt="Student-athlete wellness and recovery session"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="grid gap-5">
                  <article className="rounded-xl border border-white/10 bg-black/40 p-6">
                    <h3 className="text-lg font-semibold text-white">
                      Mental Health & Wellness
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/75">
                      Regular check-ins and access to trusted adults help students
                      build confidence, manage pressure, and maintain a healthy
                      mindset throughout academics and athletics.
                    </p>
                  </article>
                  <article className="rounded-xl border border-yellow-500/25 bg-black/40 p-6">
                    <h3 className="text-lg font-semibold text-white">
                      Recovery & Physical Care
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/75">
                      Proper recovery is treated as a core part of development. Our
                      athletes benefit from on-site support focused on durability
                      and long-term performance.
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-white/80">
                      {[
                        "Licensed Massage Therapy for soreness reduction and injury prevention",
                        "Physiotherapy support for rehabilitation, mobility, and prevention",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-white/10 bg-black py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                    College Recruitment Support
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Strategic guidance toward the right collegiate fit.
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80">
                    Our coaching staff actively helps families navigate the college
                    recruiting process with clear planning, direct communication,
                    and exposure opportunities designed to support both academic
                    and athletic alignment.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {[
                      "Player evaluations and development plans",
                      "Highlight video guidance and creation support",
                      "Direct communication with college coaches",
                      "FieldLevel recruiting account setup and profile optimization support",
                      "Exposure through games, showcases, and networking",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/90"
                      >
                        <span className="inline-flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-400" />
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
                  <img
                    src="/images/talking%20to%20college%20coach.jpeg"
                    alt="LAB U student-athlete in a college recruiting conversation"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Academic and Performance Standards
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Accountability in the classroom and in training.
              </h2>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <article className="rounded-xl border border-white/10 bg-black/35 p-6">
                  <h3 className="text-lg font-semibold text-white">
                    Academic Accountability
                  </h3>
                  <p className="mt-3 text-sm text-white/75">
                    Classroom success remains a top priority for every athlete.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-white/80">
                    {[
                      "Academic monitoring and progress tracking",
                      "Structured study time and support",
                      "Time management and organization guidance",
                      "NCAA eligibility standard support",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
                <article className="rounded-xl border border-yellow-500/25 bg-black/35 p-6">
                  <h3 className="text-lg font-semibold text-white">
                    Strength & Performance Training
                  </h3>
                  <p className="mt-3 text-sm text-white/75">
                    Structured strength and conditioning programs are built for
                    measurable athletic development.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-white/80">
                    {[
                      "Improve athletic performance",
                      "Build strength, speed, and agility",
                      "Reduce injury risk",
                      "Promote long-term athlete development",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </section>

          <section className="border-b border-white/10 bg-black py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <div className="grid gap-10 md:grid-cols-[1fr,1fr] md:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                    Beyond the Game
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Life skills, character, and nutrition for long-term success.
                  </h2>
                  <div className="mt-6 grid gap-4">
                    <article className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-4">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-300/90">
                        Life Skills & Character Development
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm text-white/80">
                        {[
                          "Leadership development",
                          "Discipline and accountability",
                          "Communication skills",
                          "Faith-based character building",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                    <article className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-4">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-300/90">
                        Nutrition Guidance
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/80">
                        Student-athletes learn how to fuel performance, recovery,
                        and overall health through practical nutrition habits that
                        support sustained success.
                      </p>
                    </article>
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-zinc-900">
                  <img
                    src="/images/classroom%20public%20speaking.png"
                    alt="Student-athletes in a classroom session covering nutrition, performance, and leadership topics"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-zinc-950 py-16 md:py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
              <div className="rounded-2xl border border-yellow-500/25 bg-gradient-to-r from-yellow-400/10 via-zinc-900 to-zinc-900 px-6 py-10 md:px-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-300/90">
                  Take the Next Step
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  See the support system in person.
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80">
                  Visit LAB U to experience how our academic, athletic, and
                  character development model supports student-athletes at every
                  stage of growth.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={SCHEDULE_TOUR_URL}
                    className="rounded-full bg-yellow-400 px-7 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-black transition-transform hover:-translate-y-0.5 hover:bg-yellow-300"
                  >
                    Schedule a Tour
                  </a>
                  <a
                    href="/admissions"
                    className="rounded-full border border-white/30 px-7 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white transition-colors hover:border-yellow-400 hover:text-yellow-300"
                  >
                    Learn More About Admissions
                  </a>
                </div>
              </div>
            </div>
          </section>
        </MountStaggerReveal>
      </main>
      <Footer />
    </div>
  );
}

