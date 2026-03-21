import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MountStaggerReveal from "@/components/MountStaggerReveal";
import AdmissionsCTASection from "@/components/AdmissionsCTASection";
import AthleteCommitmentsCarousel from "@/components/AthleteCommitmentsCarousel";
import HeroBackgroundVideo from "@/components/HeroBackgroundVideo";
import {getHomeAthleteCommitmentsCarousel} from "@/lib/sanity/queries";
import {urlFor} from "@/lib/sanity/image";
import {getCoaches} from "@/lib/sanity/coaches";

export const revalidate = 60;

export default async function AthleticsPage() {
  const carouselFallbackTitle = "Where Preparation Meets Opportunity";
  const carouselFallbackSubtitle =
    "Student-athletes who have committed to the next level. Built at LAB U.";

  const homeCarousel = await getHomeAthleteCommitmentsCarousel();
  const cmsTitle = homeCarousel?.title || carouselFallbackTitle;
  const cmsSubtitle = homeCarousel?.subtitle || carouselFallbackSubtitle;

  const cmsAthletes =
    homeCarousel?.items?.length
      ? homeCarousel.items.map((athlete) => ({
          id: athlete._id ?? athlete.athleteName,
          name: athlete.athleteName,
          image: urlFor(athlete.image).width(800).quality(85).url(),
          imageAlt: athlete.imageAlt,
          classYear: athlete.classYear,
        }))
      : undefined;

  const carouselKey =
    cmsAthletes?.map((a) => `${a.id ?? a.name}:${a.image}`).join("|") ??
    "defaults";

  const coaches = await getCoaches();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col">
        <MountStaggerReveal staggerMs={80}>
          {/* 1. Hero */}
          <section className="relative border-b border-white/10 overflow-hidden bg-black py-16 md:py-24">
            <div className="absolute inset-0">
              <img
                src="/images/championship.png"
                alt="LAB U Basketball"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
            </div>
            <div className="relative mx-auto max-w-5xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Athletics
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                LAB U Basketball — elite development modeled after D-1 programs.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
                Intense practices, film, performance training, and a culture of
                accountability. We train student-athletes in a professional
                environment that mirrors college programs—so players are ready
                for the next level. Our program also earned the Big Shots
                National Championship, reflecting the standard we bring to every
                season.
              </p>
            </div>
          </section>

          {/* 2. Championship highlight */}
          <section className="border-b border-white/10 bg-black py-12 md:py-16">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <div className="rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 via-black to-black p-5 md:p-7">
                <div className="grid gap-6 md:grid-cols-[1.1fr,1fr] md:items-center">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                      Championship
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      Big Shots National Champions
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/80">
                      LAB U captured the Big Shots National Championship, a
                      major milestone that reflects our standard of discipline,
                      preparation, and elite competitive execution.
                    </p>
                    <p className="mt-2 text-sm text-white/75">
                      This championship run highlights what families can expect
                      from our program: high-level development, accountability,
                      and a winning culture built the right way.
                    </p>
                  </div>
                  <div className="mx-auto w-full max-w-[560px]">
                    <div className="overflow-hidden rounded-xl border border-yellow-500/30 bg-black/70 p-0.5 shadow-[0_16px_42px_-24px_rgba(0,0,0,0.95)]">
                      <img
                        src="/images/Lab%20U%20holding%20champtionship.jpeg"
                        alt="LAB U players holding the championship trophy"
                        className="block h-auto w-full rounded-[10px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Program overview */}
          <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center md:gap-14">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                    LAB U Basketball Program
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Division-1 style development in a Christ-centered
                    environment.
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    LAB U Basketball trains student-athletes in an arena-style
                    environment with national-level competition, structured
                    skill development, and an emphasis on character,
                    discipline, and leadership. The program is built to both
                    support and challenge players—giving them a platform to
                    achieve their goals on and off the court.
                  </p>
                  <p className="mt-3 text-sm text-white/75">
                    The atmosphere closely mirrors the intensity and schedule of
                    top D-1 collegiate programs. Each student-athlete is
                    surrounded by experienced coaches, academic support, and
                    college advisors.
                  </p>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                  <img
                    src="/images/all%20teams.jpeg"
                    alt="LAB U teams"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
            </div>
          </section>

          {/* 4. Team structure — image cards + post-grad placeholder */}
          <section
            id="teams"
            className="border-b border-white/10 bg-black py-16 md:py-20"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Our Teams
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                National. Regional. Varsity. Post-Grad.
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-white/75">
                Five teams—each with a challenging schedule and clear path to
                growth and next-level development.
              </p>
              <div className="mt-10 grid grid-cols-1 items-start justify-items-center gap-7 md:grid-cols-2 xl:grid-cols-6">
                {[
                  {
                    title: "National Team",
                    image: "/images/national%20team%202.jpeg",
                    alt: "LAB U National Team",
                    desc: "Competes against some of the nation's top programs with exposure during showcases and live-streamed games. For student-athletes aspiring to top D-1 programs. Training mirrors an elite collegiate environment.",
                    label: "National"
                  },
                  {
                    title: "Regional Team",
                    image: "/images/regonial%20team.jpeg",
                    alt: "LAB U Regional Team",
                    desc: "Competes against regional and national programs with a challenging seasonal schedule. Opportunities for collegiate exposure at showcases and tournaments.",
                    label: "Regional"
                  },
                  {
                    title: "Boys Varsity",
                    image: "/images/varsity%20team.jpeg",
                    alt: "LAB U Boys Varsity",
                    desc: "Competes against top local and regional talent in the Charlotte area. Builds fundamentals, habits, and leadership while earning exposure at showcases.",
                    label: "Boys Varsity"
                  },
                  {
                    title: "Girls Varsity",
                    image: "/images/Girls%20varsity.jpeg",
                    alt: "LAB U Girls Varsity",
                    desc: "Competes against top local and regional talent. Builds fundamentals, habits, and leadership while earning exposure at showcases.",
                    label: "Girls Varsity"
                  },
                  {
                    title: "Post-Grad Team",
                    image: "/images/postgrad.jpeg",
                    alt: "LAB U Post-Grad Team",
                    desc: "Our Post-Grad Team is built for athletes seeking an additional year of development before college.",
                    points: [
                      "Season: October to March",
                      "High-level competition",
                      "Daily training + recruiting support for college placement",
                      "For serious players only",
                      "Domestic & international players accepted",
                      "Only 12 roster spots available",
                      "Players must be under 20 at enrollment",
                      "Contact: admin@labuniversityprep.com"
                    ],
                    label: "Post-Grad"
                  }
                ].map((team, index) => (
                  <div
                    key={team.label}
                    className={`w-full max-w-[28rem] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 xl:col-span-2 ${
                      index === 3
                        ? "xl:col-start-2"
                        : index === 4
                          ? "xl:col-start-4"
                          : ""
                    }`}
                  >
                    {team.image ? (
                      <div className="relative aspect-[4/3]">
                        <img
                          src={team.image}
                          alt={team.alt}
                          className="h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                        <span className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-wider text-yellow-300">
                          {team.label}
                        </span>
                      </div>
                    ) : (
                      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-950">
                        <img
                          src="/images/coming-soon-sticker-yellow-background_1017-39369.avif"
                          alt="Post-Grad Team coming soon"
                          className="h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <span className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-wider text-yellow-300">
                          {team.label}
                        </span>
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="text-base font-semibold text-white">
                        {team.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-white/80">
                        {team.desc}
                      </p>
                      {team.points ? (
                        <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-white/80">
                          {team.points.map((point) => (
                            <li key={point} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. Athlete Commitments Carousel */}
          <AthleteCommitmentsCarousel
            key={carouselKey}
            title={cmsTitle}
            subtitle={cmsSubtitle}
            athletes={cmsAthletes}
          />

          {/* 6. Expect to see this — game footage (moved up) */}
          <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                LAB U in action
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Expect to see this.
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-white/75">
                Real moments from our games—the speed, the intensity, and the
                level of play you can expect when LAB U takes the court.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="overflow-hidden rounded-xl bg-black">
                  <HeroBackgroundVideo
                    className="aspect-[9/16] w-full object-cover"
                    src="/videos/highlight.mp4"
                    ariaLabel="LAB U highlight 1"
                  />
                </div>
                <div className="overflow-hidden rounded-xl bg-black">
                  <HeroBackgroundVideo
                    className="aspect-[9/16] w-full object-cover"
                    src="/videos/highlight%202.mp4"
                    ariaLabel="LAB U highlight 2"
                  />
                </div>
                <div className="hidden overflow-hidden rounded-xl bg-black sm:block">
                  <HeroBackgroundVideo
                    className="aspect-[9/16] w-full object-cover"
                    src="/videos/highlight2.mp4"
                    ariaLabel="LAB U highlight 3"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 7. D-1 style training philosophy */}
          <section className="border-b border-white/10 bg-black py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                  <img
                    src="/images/action%20shot%202.jpeg"
                    alt="D-1 intensity training at LAB U"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                    Training Philosophy
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    D-1 intensity. Daily.
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    Training blocks mirror the structure and expectations of
                    collegiate programs—film, skill work, performance training,
                    and team culture all aligned around excellence. We develop
                    complete student-athletes, not just scorers.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-white/75">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Position-specific instruction and competitive schedule
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Year-round training with frequent evaluations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Leadership, discipline, and faith integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 8. Skill development + Performance training (with 3 training videos) */}
          <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Development
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Skill development and performance training.
              </h2>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/60 p-6">
                  <h3 className="text-lg font-semibold text-yellow-300">
                    Skill Development
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Individual skill work, position-specific instruction, and
                    small-group training allow athletes to refine their game in
                    a focused environment. Dr. Dish shooting lab, skill
                    sessions, and consistent feedback build the mechanics
                    required at higher levels of competition.
                  </p>
                </div>
                <div className="rounded-2xl border border-yellow-500/30 bg-black/60 p-6">
                  <h3 className="text-lg font-semibold text-yellow-300">
                    Performance Training
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Athletes have access to a performance training environment
                    focused on building strength, explosiveness, and injury
                    prevention. Strength training, speed work, and conditioning
                    are built into the weekly schedule so players are prepared
                    for the demands of college basketball.
                  </p>
                </div>
              </div>
              <p className="mt-8 text-sm font-medium text-white/80">
                Arena-style court, performance center, and shooting lab at
                LABCITY.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="overflow-hidden rounded-xl bg-black">
                  <HeroBackgroundVideo
                    className="aspect-square w-full object-cover object-top"
                    src="/videos/training.mp4"
                    ariaLabel="LAB U training"
                  />
                </div>
                <div className="overflow-hidden rounded-xl bg-black">
                  <HeroBackgroundVideo
                    className="aspect-square w-full object-cover"
                    src="/videos/training3.mp4"
                    ariaLabel="LAB U training at LABCITY"
                  />
                </div>
                <div className="hidden overflow-hidden rounded-xl bg-black sm:block">
                  <HeroBackgroundVideo
                    className="aspect-square w-full object-cover"
                    src="/videos/little%20kids%20training.mov"
                    ariaLabel="LAB U kids training"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 9. Daily training structure */}
          <section className="border-b border-white/10 bg-black py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Daily Structure
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                How we train.
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-white/75">
                Afternoon blocks (12:30–3:00) are dedicated to basketball and
                development. Coaches emphasize individual skill development,
                small-group training, team workouts, film sessions, and
                strength and conditioning.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Skill & position work",
                    text: "Individual and small-group development, fundamentals, and basketball IQ."
                  },
                  {
                    title: "Team practice",
                    text: "Tactical and system work, team concepts, and game preparation."
                  },
                  {
                    title: "Strength & conditioning",
                    text: "Performance training for strength, speed, explosiveness, and injury prevention."
                  },
                  {
                    title: "Film & scouting",
                    text: "Game film, opponent prep, and basketball IQ development."
                  },
                  {
                    title: "NBA-style combine",
                    text: "Pre-season testing and evaluation to assess level and areas for growth."
                  },
                  {
                    title: "Leadership & culture",
                    text: "Standards, accountability, and character development."
                  }
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-zinc-950/80 px-4 py-3"
                  >
                    <h3 className="text-sm font-semibold text-yellow-200/95">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-white/70">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 10. Competition and preparation */}
          <section className="border-b border-white/10 bg-black py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <div className="grid gap-10 md:grid-cols-[1fr,1.1fr] md:items-center md:gap-14">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                    Competition
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Prepared for the next level.
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    In-season games (conference and tournament), showcases, and
                    travel competition prepare athletes for the intensity of
                    college-level play. Post-season, returning student-athletes
                    can access summer camps, team camps, exposure events, and
                    AAU affiliate programs to keep developing.
                  </p>
                  <p className="mt-3 text-sm text-white/75">
                    The goal is to prepare players not only for high school
                    competition but for opportunities at the college level and
                    beyond—with the academic and character foundation to match.
                  </p>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                  <img
                    src="/images/action%20shot%20horents.jpeg"
                    alt="LAB U competition"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
            </div>
          </section>

          {/* 11. Coaches — Coach Andre + speech video */}
          <section
            id="coaches"
            className="border-b border-white/10 bg-zinc-950 py-16 md:py-20"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Our Coaches
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Leadership that builds champions.
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-white/75">
                Experienced coaches who develop skill, character, and readiness for the next level.
              </p>

              <div className="mt-10 space-y-8">
                {coaches.map((coach) => (
                  <div
                    key={coach.id ?? coach.name}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-black/40"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-8 p-6 md:p-10">
                      {/* Profile photo */}
                      <div className="flex shrink-0 justify-center sm:justify-start">
                        <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-yellow-500/40 ring-2 ring-black/50 sm:h-52 sm:w-52">
                          <img
                            src={coach.photoUrl}
                            alt={coach.photoAlt}
                            className="h-full w-full object-cover object-top scale-150"
                          />
                        </div>
                      </div>

                      {/* Name, title, CoachUp badge, key highlights, expandable full bio */}
                      <div className="min-w-0 flex-1 space-y-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400/90">
                            {coach.role}
                          </p>
                          <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">
                            {coach.name}
                          </h3>
                          {coach.coachUpBadgeText ? (
                            <p className="mt-2 inline-block rounded-lg border border-yellow-500/50 bg-yellow-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-300">
                              {coach.coachUpBadgeText}
                            </p>
                          ) : null}
                        </div>

                        {coach.highlights.length ? (
                          <ul className="space-y-2 text-sm text-white/85">
                            {coach.highlights.map((hl, i) => (
                              <li key={`${coach.id ?? coach.name}-${i}`} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                                {hl}
                              </li>
                            ))}
                          </ul>
                        ) : null}

                        {coach.fullBioParagraphs.length ? (
                          <details className="group rounded-xl border border-white/10 bg-black/30">
                            <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-yellow-300 transition-colors hover:text-yellow-200 [&::-webkit-details-marker]:hidden">
                              Read full bio
                              <span className="ml-2 inline-block transition-transform group-open:rotate-180" aria-hidden>▾</span>
                            </summary>
                            <div className="space-y-4 border-t border-white/10 px-4 py-4 text-sm leading-relaxed text-white/85">
                              {coach.fullBioParagraphs.map((p, i) => (
                                <p key={`${coach.id ?? coach.name}-bio-${i}`}>{p}</p>
                              ))}
                            </div>
                          </details>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 12. Admissions CTA */}
          <AdmissionsCTASection />
        </MountStaggerReveal>
      </main>
      <Footer />
    </div>
  );
}
