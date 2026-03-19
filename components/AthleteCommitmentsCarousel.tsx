"use client";

import { useRef, useEffect } from "react";

export type AthleteCommitment = {
  /** Stable id for React keys when CMS swaps athletes */
  id?: string;
  name: string;
  image: string;
  imageAlt: string;
  classYear?: string;
};

const DEFAULT_ATHLETES: AthleteCommitment[] = [
  { name: "Joel Torres", image: "/images/Joel%20commit.jpeg", imageAlt: "Joel Torres — LAB U commit" },
  { name: "Christian Aukuso", image: "/images/chris%20commit.jpeg", imageAlt: "Christian Aukuso — LAB U commit" },
  { name: "Esmond Thomas", image: "/images/et%20commit.png", imageAlt: "Esmond Thomas — LAB U commit" },
  { name: "JJ Dancy", image: "/images/Goat%20commit.jpeg", imageAlt: "JJ Dancy — LAB U commit" },
  { name: "Jalen Clagget", image: "/images/JalenC%20commit.jpeg", imageAlt: "Jalen Clagget — LAB U commit" },
  { name: "Jalen Dancy", image: "/images/jalenD%20commit.jpeg", imageAlt: "Jalen Dancy — LAB U commit" },
  { name: "Kevin Crockett", image: "/images/Kevin%20commit.jpeg", imageAlt: "Kevin Crockett — LAB U commit" },
  { name: "Makayla Minshall", image: "/images/makayla%20commit.jpeg", imageAlt: "Makayla Minshall — LAB U commit" },
  { name: "Sophie Sharp", image: "/images/sophie%20commit.jpeg", imageAlt: "Sophie Sharp — LAB U commit" },
  { name: "TJ Campbell", image: "/images/TJ%20commit.jpeg", imageAlt: "TJ Campbell — LAB U commit" },
];

type AthleteCommitmentsCarouselProps = {
  title?: string;
  subtitle?: string;
  athletes?: AthleteCommitment[];
};

const CARD_WIDTH = 280;
const CARD_WIDTH_SM = 320;
const GAP = 24;

export default function AthleteCommitmentsCarousel({
  title = "Where Preparation Meets Opportunity",
  subtitle = "Student-athletes who have committed to the next level. Built at LAB U.",
  athletes = DEFAULT_ATHLETES,
}: AthleteCommitmentsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const setWidthRef = useRef(0);

  // Triple the list for seamless infinite scroll
  const infiniteList = [...athletes, ...athletes, ...athletes];

  /** Re-run scroll setup when names/images change, not only when count changes */
  const athletesSignature = athletes
    .map((a) => `${a.id ?? a.name}|${a.image}`)
    .join(";;");

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || athletes.length === 0) return;
    const cardW = typeof window !== "undefined" && window.innerWidth >= 640 ? CARD_WIDTH_SM : CARD_WIDTH;
    const setWidth = athletes.length * (cardW + GAP);
    setWidthRef.current = setWidth;
    const setInitial = () => {
      if (!el) return;
      el.scrollLeft = setWidth;
    };
    setInitial();
    const t = setTimeout(setInitial, 100);
    return () => clearTimeout(t);
  }, [athletes.length, athletesSignature]);

  // Auto side-scroll: continuous rAF updates for smooth movement.
  // We also wrap at the “middle set” boundary to keep the carousel seamless.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || athletes.length === 0) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Even if the OS requests reduced motion, we still scroll (just slower),
    // since this carousel is meant to be continuously visible on the homepage.

    const pauseUntilRef = {current: 0} as {current: number};
    const pause = () => {
      pauseUntilRef.current = Date.now() + 2000;
    };

    // Pause auto-scroll briefly while the user interacts.
    el.addEventListener("pointerdown", pause, {passive: true});
    el.addEventListener("touchstart", pause, {passive: true});

    let rafId = 0;
    let lastTs = performance.now();

    const tick = (ts: number) => {
      const now = Date.now();
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      if (now < pauseUntilRef.current) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      const isMobile =
        typeof window !== "undefined" && window.innerWidth <= 640;

      // Much slower than before; continuous movement feels smoother.
      const speedPxPerSec = prefersReducedMotion
        ? isMobile
          ? 1.4
          : 2.0
        : isMobile
          ? 2.0
          : 3.0;

      // Prefer cached width, but fall back if it hasn't been set yet.
      const cardW =
        typeof window !== "undefined" && window.innerWidth >= 640
          ? CARD_WIDTH_SM
          : CARD_WIDTH;
      const setWidth =
        setWidthRef.current || athletes.length * (cardW + GAP);

      el.scrollLeft += speedPxPerSec * dt;

      // Keep scroll position centered to avoid hitting the edges.
      if (el.scrollLeft >= setWidth * 2) {
        el.scrollLeft -= setWidth;
      } else if (el.scrollLeft < setWidth) {
        el.scrollLeft += setWidth;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("touchstart", pause);
    };
  }, [athletes.length, athletesSignature]);

  return (
    <section className="border-b border-white/10 bg-black py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
          Athlete Commitments
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 max-w-2xl text-sm text-white/75">
            {subtitle}
          </p>
        )}

        <div className="relative mt-10">
          {/* Auto-scroll only; no arrows, no user scroll */}
          <div
            ref={scrollRef}
            className="scrollbar-hide flex gap-6 overflow-x-auto overflow-y-hidden pb-2 px-1 md:gap-6 touch-pan-x select-none"
            style={{ overscrollBehavior: "none" }}
          >
            {infiniteList.map((athlete, index) => (
              <div
                key={`${athlete.id ?? athlete.name}-${athlete.image}-${index}`}
                data-carousel-card
                className="group relative w-[280px] flex-shrink-0 sm:w-[320px]"
              >
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950 transition-transform duration-300 ease-out group-hover:scale-[1.02]">
                  <div className="relative aspect-[3/4]">
                    <img
                      src={athlete.image}
                      alt={athlete.imageAlt}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Hover overlay: gradient + name */}
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="translate-y-2 p-4 transition-transform duration-300 group-hover:translate-y-0">
                        <p className="text-lg font-semibold tracking-tight text-white">
                          {athlete.name}
                        </p>
                        {athlete.classYear && (
                          <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-yellow-400/90">
                            {athlete.classYear}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
