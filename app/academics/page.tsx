import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MountStaggerReveal from "@/components/MountStaggerReveal";
import AdmissionsCTASection from "@/components/AdmissionsCTASection";
import {getAcademicsElectivesSection} from "@/lib/sanity/academicsElectives";

export const revalidate = 60;

export default async function AcademicsPage() {
  const electives = await getAcademicsElectivesSection();
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col">
        <MountStaggerReveal staggerMs={80}>
          {/* 1. Hero — field trip image visible + NC scholarship */}
          <section className="relative border-b border-white/10 overflow-hidden bg-black py-16 md:py-24">
            <div className="absolute inset-0">
              <img
                src="/images/little%20kids%20on%20field%20trip.jpeg"
                alt="LAB U students on a field trip"
                className="h-full w-full object-cover object-center opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35" />
            </div>
            <div className="relative mx-auto max-w-5xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Academics
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                A modern academic model for scholars and athletes.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
                LAB University Christian Academy combines the Acellus Learning
                System with in-person instruction to deliver a structured,
                college-prep experience that fits the rhythm of serious
                students—whether they’re focused on academics, athletics, or
                both.
              </p>
              <div className="mt-8 max-w-md rounded-2xl border-2 border-yellow-500/50 bg-black/75 px-6 py-5 backdrop-blur-sm md:px-8 md:py-6">
                <p className="text-sm font-semibold text-yellow-300 md:text-base">
                  NC Opportunity Scholarship
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/90 md:text-base">
                  Eligible families can access financial support for a premium
                  Christ-centered, college-prep education at LAB U.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Academic model overview — with field trip image */}
          <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <div className="grid gap-10 md:grid-cols-[1fr,1.1fr] md:items-center md:gap-14">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                    Our Approach
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Rigorous academics. Flexible delivery. Real accountability.
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    We deliver a disciplined, college-prep K–12 experience
                    through the Acellus Learning System plus in-person
                    instruction—for scholars, athletes, and every student in
                    between.
                  </p>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                  <img
                    src="/images/classroom.jpeg"
                    alt="LAB U classroom"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Structured Curriculum",
                    text: "A disciplined, college-prep K–12 curriculum delivered through Acellus—accredited coursework aligned with college expectations."
                  },
                  {
                    title: "In-Person Support",
                    text: "Daily teacher-led instruction, tutors, and mentors so students stay on track. Teachers lead discussions and track progress; no one falls through the cracks."
                  },
                  {
                    title: "Built for Balance",
                    text: "Morning academics, afternoon electives and training. A schedule that supports both scholars and athletes without compromise."
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-black/60 px-6 py-5"
                  >
                    <h3 className="text-sm font-semibold text-yellow-200/95">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. How the Day Works — with image */}
          <section id="schedule" className="border-b border-white/10 bg-black py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <div className="grid gap-10 md:grid-cols-[1fr,1.1fr] md:items-center md:gap-14">
                <div className="space-y-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                    Daily Structure
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    A predictable rhythm for learning and growth.
                  </h2>
                  <div className="space-y-2">
                    {[
                      { time: "8:00 – 8:50 AM", label: "Period 1", subject: "English" },
                      { time: "8:50 – 9:40 AM", label: "Period 2", subject: "Math" },
                      { time: "9:40 – 10:00 AM", label: "Break", subject: "" },
                      { time: "10:00 – 10:50 AM", label: "Period 3", subject: "Science" },
                      { time: "10:50 – 11:40 AM", label: "Period 4", subject: "Social Studies" },
                      { time: "11:40 AM – 12:30 PM", label: "Lunch", subject: "" },
                      { time: "12:30 – 1:20 PM", label: "Period 5", subject: "PE" },
                      { time: "1:30 – 3:00 PM", label: "Electives", subject: "" },
                    ].map((block) => (
                      <div
                        key={block.time}
                        className={`flex items-center justify-between gap-4 rounded-xl border px-4 py-3 ${
                          block.label === "Break" || block.label === "Lunch"
                            ? "border-white/10 bg-zinc-900/80"
                            : "border-yellow-500/30 bg-zinc-950/80"
                        }`}
                      >
                        <span className="text-sm font-medium text-white/90 tabular-nums">
                          {block.time}
                        </span>
                        <span className="text-sm font-semibold text-yellow-200/95">
                          {block.label}
                          {block.subject ? ` · ${block.subject}` : ""}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                  <img
                    src="/images/classroom%202.jpeg"
                    alt="Students in class at LAB U"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
            </div>
          </section>

          {/* 4. Acellus in depth — with Acellus image */}
          <section id="acellus" className="border-b border-white/10 bg-zinc-950 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <div className="grid gap-10 md:grid-cols-[1fr,1.1fr] md:items-center md:gap-14">
                <div className="flex flex-col items-center justify-center rounded-2xl border border-yellow-500/30 bg-black/60 p-8">
                  <img
                    src="/images/Acellus-Academy-High-School-S-1-300x294.png"
                    alt="Acellus Learning System"
                    className="w-48 object-contain md:w-56"
                  />
                  <p className="mt-4 text-center text-xs font-semibold uppercase tracking-wider text-yellow-200/90">
                    Acellus Learning System
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                    Learning Platform
                  </p>
                  <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    Accredited, flexible, accountable.
                  </h2>
                  <p className="text-sm leading-relaxed text-white/85">
                    Video-based instruction, assessments, and progress tracking
                    let students work through accredited coursework at a pace
                    that fits their schedule. LAB U teachers lead instruction, hold
                    discussions, and track performance, mastery, and pacing so every student remains accountable.
                  </p>
                  <ul className="space-y-2 text-sm text-white/75">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Rigorous academic standards
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Flexible learning schedules
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Personalized pace with oversight
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Teacher-led instruction and progress tracking
                    </li>
                  </ul>
                  <p className="pt-2 text-sm leading-relaxed text-white/80">
                    The platform gives students the ability to maintain demanding
                    training and competition schedules without sacrificing
                    academic progress. In-person teachers hold discussions and
                    lead instruction; tutors and mentors ensure lesson completion, study habits, and academic
                    integrity every day.
                  </p>
                  <a
                    href="https://www.acellusacademy.com/online-high-school/#hscourses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300 underline-offset-4 hover:text-yellow-200 hover:underline"
                  >
                    Learn more about Acellus courses
                    <span className="text-yellow-400/80" aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Curriculum & Academic Support — expanded */}
          <section className="border-b border-white/10 bg-black py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Curriculum & Support
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                College-prep coursework across every core subject.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80">
                A rigorous K–12 curriculum aligned with college-preparatory
                expectations. On-site teachers and tutors lead instruction, hold discussions, and track progress so
                    every student is ready for the next level.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    subject: "Mathematics",
                    desc: "From fundamentals through algebra, geometry, and calculus."
                  },
                  {
                    subject: "Science",
                    desc: "Life, physical, and earth sciences with lab and inquiry."
                  },
                  {
                    subject: "English",
                    desc: "Literature, composition, and critical reading K–12."
                  },
                  {
                    subject: "Social Studies",
                    desc: "History, civics, and geography for college and citizenship."
                  },
                  {
                    subject: "STEM & Innovation",
                    desc: "Coding, design, and real-world problem-solving."
                  }
                ].map((item) => (
                  <div
                    key={item.subject}
                    className="rounded-xl border border-white/10 bg-zinc-950/80 px-4 py-3"
                  >
                    <h3 className="text-sm font-semibold text-yellow-200/95">
                      {item.subject}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-white/70">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-yellow-500/30 bg-zinc-950/80 px-5 py-4 md:px-6 md:py-5">
                <p className="text-sm font-semibold text-yellow-300">
                  College-ready outcomes
                </p>
                <p className="mt-1 text-sm text-white/85">
                  Students graduate with a strong academic foundation—credits
                  and skills that transfer to college and career—while building
                  discipline and study habits that last.
                </p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-10">
                <h3 className="text-lg font-semibold text-white">
                  Teachers, tutors, and mentors every step of the way
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80">
                  Although the curriculum is delivered through Acellus, LAB U
                  provides in-person academic support and supervision. Students
                  receive help from teachers, tutors, mentors, and
                  learning advisors who lead instruction, hold discussions, support lesson completion, and
                  track performance and study habits—so students remain accountable and successful.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Electives & innovation (CMS — edit under Academics in Sanity) */}
          <section
            id="electives"
            className="border-b border-white/10 bg-zinc-950 py-16 md:py-20 scroll-mt-24"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-start md:gap-14">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                    {electives.eyebrow}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {electives.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    {electives.intro}
                  </p>
                  {electives.paragraph2 ? (
                    <p className="mt-3 text-sm text-white/75">
                      {electives.paragraph2}
                    </p>
                  ) : null}

                  <div className="mt-8 rounded-2xl border border-yellow-500/30 bg-black/50 px-5 py-4 md:px-6 md:py-5">
                    <p className="text-sm font-semibold text-yellow-300">
                      {electives.scheduleTitle}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">
                      {electives.scheduleBody}
                    </p>
                  </div>

                  {electives.ctaLabel && electives.ctaHref ? (
                    <a
                      href={electives.ctaHref}
                      className="mt-6 inline-block rounded-full border border-yellow-400/60 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300 transition-colors hover:bg-yellow-400/10"
                    >
                      {electives.ctaLabel}
                    </a>
                  ) : null}
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                  <img
                    src={electives.sideImageUrl}
                    alt={electives.sideImageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {electives.cards.map((card, i) => (
                  <div
                    key={`${card.title}-${i}`}
                    className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/60"
                  >
                    {card.imageUrl ? (
                      <div className="relative aspect-[16/10] w-full shrink-0">
                        <img
                          src={card.imageUrl}
                          alt={card.imageAlt ?? card.title}
                          className="h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      </div>
                    ) : null}
                    <div className="flex flex-1 flex-col gap-3 p-5">
                      <div className="flex items-start gap-3">
                        {card.iconUrl ? (
                          <img
                            src={card.iconUrl}
                            alt={card.iconAlt ?? ""}
                            className="h-10 w-10 shrink-0 rounded-lg border border-yellow-500/30 object-contain bg-zinc-900 p-1"
                          />
                        ) : (
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-yellow-400" />
                        )}
                        <div>
                          <h3 className="text-sm font-semibold text-yellow-200/95">
                            {card.title}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-white/70">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 7. Admissions CTA */}
          <AdmissionsCTASection />
        </MountStaggerReveal>
      </main>
      <Footer />
    </div>
  );
}
