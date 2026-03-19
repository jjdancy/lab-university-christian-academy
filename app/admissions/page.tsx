import Navbar from "@/components/Navbar";
import AdmissionsCTASection from "@/components/AdmissionsCTASection";
import Footer from "@/components/Footer";
import MountStaggerReveal from "@/components/MountStaggerReveal";
import {PLAYBOOK_REGISTER_URL, SCHEDULE_TOUR_URL} from "@/lib/constants";

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col">
        <MountStaggerReveal staggerMs={80}>
          {/* 1. Hero — 2026–27 messaging + CTAs */}
          <section className="relative border-b border-white/10 overflow-hidden bg-black py-16 md:py-24">
            <div className="absolute inset-0">
              <img
                src="/images/allhandsin.jpeg"
                alt="LAB U community"
                className="h-full w-full object-cover object-center opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60" />
            </div>
            <div className="relative mx-auto max-w-5xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Admissions
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                Begin your LAB U journey.
              </h1>
              <p className="mt-4 max-w-2xl text-sm text-white/90 md:text-base">
                Enrollment for the 2026–27 school year is open. K–12,
                Christ-centered education with optional elite basketball—in
                Charlotte, NC.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={PLAYBOOK_REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-yellow-400 px-7 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-black shadow-lg shadow-yellow-500/30 transition-transform hover:-translate-y-0.5 hover:bg-yellow-300"
                >
                  Apply Now
                </a>
                <a
                  href={SCHEDULE_TOUR_URL}
                  className="rounded-full border border-white/30 px-7 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white transition-colors hover:border-yellow-400 hover:text-yellow-300"
                >
                  Schedule a Tour
                </a>
              </div>
            </div>
          </section>

          {/* 2. Enrollment overview */}
          <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Enrollment
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                What enrollment at LAB U looks like
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80">
                LAB University Christian Academy offers K–12 education through the
                Acellus learning system with in-person teacher support, discussions,
                and accountability. Optional Division-1 style basketball is available
                at LABCITY. Enrollment is limited—we keep class sizes focused so
                every student is known and supported.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Accredited, college-prep curriculum",
                  "Teacher-led instruction and discussions",
                  "Optional elite basketball (National, Regional, Varsity)",
                  "2026–27 school year enrollment open",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/85">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 3. Who the school is for */}
          <section id="who" className="border-b border-white/10 bg-black py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Fit
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Who LAB U is for
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80">
                Families who want a Christ-centered, college-prep education with the
                option of serious athletic development. Student-athletes who are
                committed to discipline, growth, and the next level—whether that&apos;s
                college basketball or life beyond the court.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Families seeking Christian K–12 education in Charlotte",
                  "Student-athletes focused on basketball and college readiness",
                  "Parents who value structure, accountability, and leadership",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-yellow-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 4. Admissions process steps */}
          <section id="process" className="border-b border-white/10 bg-zinc-950 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Process
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                How to apply
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80">
                We keep the process clear so you can focus on the decision, not the
                paperwork. Reach out, visit, and apply when you&apos;re ready.
              </p>
              <ol className="mt-10 space-y-6 sm:space-y-8">
                {[
                  { step: 1, title: "Inquire or schedule a tour", body: "Contact us or book a campus visit to see LAB U and LABCITY in person." },
                  { step: 2, title: "Submit your application", body: "Complete the application form. We review each application individually." },
                  { step: 3, title: "Interview & decision", body: "Selected families are invited for a conversation. We then communicate our decision and next steps." },
                ].map(({ step, title, body }) => (
                  <li key={step} className="flex gap-6">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-yellow-400/50 bg-yellow-400/10 text-sm font-semibold text-yellow-400">
                      {step}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white">{title}</h3>
                      <p className="mt-1 text-sm text-white/75">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={PLAYBOOK_REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-yellow-400 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-black transition-transform hover:-translate-y-0.5 hover:bg-yellow-300"
                >
                  Apply Now
                </a>
                <a
                  href={SCHEDULE_TOUR_URL}
                  className="rounded-full border border-white/30 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-white transition-colors hover:border-yellow-400 hover:text-yellow-300"
                >
                  Schedule a Tour
                </a>
              </div>
            </div>
          </section>

          {/* 5. Trust + FAQs */}
          <section id="faqs" className="border-b border-white/10 bg-black py-16 md:py-20">
            <div className="mx-auto max-w-3xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Questions
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                We&apos;re here to help. If you don&apos;t see your question below, reach out
                at (704) 315-1035 or visit us at 8016 Tower Point Dr, Charlotte, NC 28227.
              </p>
              <dl className="mt-10 space-y-6">
                {[
                  {
                    q: "What grades does LAB U offer?",
                    a: "LAB University Christian Academy serves students in grades K–12 with a college-prep curriculum and optional elite basketball programming.",
                  },
                  {
                    q: "Is basketball required?",
                    a: "No. Basketball is optional. Students can enroll for academics only or add our National, Regional, or Varsity basketball programs at LABCITY.",
                  },
                  {
                    q: "How do I schedule a tour?",
                    a: "Call (704) 315-1035 or use the Schedule a Tour link on this page. We welcome families to visit campus and see our facilities.",
                  },
                  {
                    q: "Is financial aid or the NC Opportunity Scholarship available?",
                    a: "The NC Opportunity Scholarship can help eligible North Carolina families with tuition. See the scholarship link on our homepage for how to apply.",
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="rounded-lg border border-white/10 bg-white/5 px-4 py-4">
                    <dt className="text-sm font-semibold text-white">{q}</dt>
                    <dd className="mt-2 text-sm text-white/75">{a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <AdmissionsCTASection />
        </MountStaggerReveal>
      </main>
      <Footer />
    </div>
  );
}

