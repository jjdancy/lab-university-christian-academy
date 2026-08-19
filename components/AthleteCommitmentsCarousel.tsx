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
  { name: "Callie Genece", image: "/images/Callie%20commit.png", imageAlt: "Callie Genece — LAB U commit" },
  { name: "Antwan Corbin", image: "/images/IMG%201110%20commit.png", imageAlt: "Antwan Corbin — LAB U commit" },
  { name: "Braydon Ryles", image: "/images/Braydon%20commit.png", imageAlt: "Braydon Ryles — LAB U commit" },
  { name: "Myles Linton", image: "/images/Myles%20commit.png", imageAlt: "Myles Linton — LAB U commit" },
  { name: "James Wood", image: "/images/James%20Wood%20commit.png", imageAlt: "James Wood — LAB U commit" },
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

/** Fallback card metrics, used only until the rendered cards can be measured. */
const CARD_WIDTH = 280;
const CARD_WIDTH_SM = 320;
const GAP = 24;

/** Drift speed in pixels per second — ambient, not attention-grabbing. */
const SPEED = 46;
const SPEED_MOBILE = 34;
/** `prefers-reduced-motion` slows the drift rather than stopping it. */
const SPEED_REDUCED = 12;

/** How long the drift stays out of the way after a touch, drag or wheel. */
const INTERACTION_PAUSE_MS = 2500;

/** Longest frame gap still credited in full, so stalls do not fast-forward. */
const MAX_FRAME_SECONDS = 0.25;

/**
 * Width of one full set of athletes, trailing gap included.
 *
 * Measured off the rendered cards rather than the constants above so the wrap
 * point stays exact across the `sm` breakpoint and any later style change; the
 * constants are only a pre-layout fallback.
 */
function measureSetWidth(el: HTMLElement, count: number) {
  const cards = el.querySelectorAll<HTMLElement>("[data-carousel-card]");
  if (cards.length > count) {
    const width = cards[count].offsetLeft - cards[0].offsetLeft;
    if (width > 0) return width;
  }
  const cardW = window.innerWidth >= 640 ? CARD_WIDTH_SM : CARD_WIDTH;
  return count * (cardW + GAP);
}

export default function AthleteCommitmentsCarousel({
  title = "Where Preparation Meets Opportunity",
  subtitle = "Student-athletes who have committed to the next level. Built at LAB U.",
  athletes = DEFAULT_ATHLETES,
}: AthleteCommitmentsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Triple the list for seamless infinite scroll
  const infiniteList = [...athletes, ...athletes, ...athletes];

  /** Re-run scroll setup when names/images change, not only when count changes */
  const athletesSignature = athletes
    .map((a) => `${a.id ?? a.name}|${a.image}`)
    .join(";;");

  // Continuous auto-scroll, driven by rAF and wrapped at the middle set so the
  // strip never reaches either end.
  //
  // The position is tracked as a float and written to `scrollLeft` each frame
  // rather than incrementing `scrollLeft` in place: a frame's step is a
  // fraction of a pixel, and browsers that snap scroll offsets to whole device
  // pixels swallow those increments outright, leaving the strip standing still.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || athletes.length === 0) return;

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let setWidth = measureSetWidth(el, athletes.length);
    // Park on the middle copy so there is a whole set of runway either way.
    let offset = setWidth;
    el.scrollLeft = offset;

    // Cards can settle a frame or two after mount, which moves the wrap point
    // and can reset scrollLeft; re-measure once layout has landed.
    const settleId = window.setTimeout(() => {
      setWidth = measureSetWidth(el, athletes.length);
      offset = setWidth;
      el.scrollLeft = offset;
    }, 100);

    // Hover pause lets a visitor stop on a card and read the name overlay, but
    // only on devices that really hover: on a touch screen `:hover` can stick
    // after a tap and would strand the strip. Touch is covered by `hold`.
    const canHover =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(hover: hover)").matches;

    let onScreen = true;
    let resumeAt = 0;

    const hold = () => {
      resumeAt = performance.now() + INTERACTION_PAUSE_MS;
    };

    // Only a sideways wheel or trackpad gesture moves this strip; a vertical
    // one is the visitor scrolling the page past it, which should pause nothing.
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) hold();
    };

    el.addEventListener("pointerdown", hold, {passive: true});
    el.addEventListener("touchstart", hold, {passive: true});
    el.addEventListener("wheel", onWheel, {passive: true});

    const observer =
      typeof IntersectionObserver === "function"
        ? new IntersectionObserver(
            ([entry]) => {
              onScreen = entry.isIntersecting;
            },
            {threshold: 0},
          )
        : null;
    observer?.observe(el);

    const onResize = () => {
      const next = measureSetWidth(el, athletes.length);
      if (next <= 0 || next === setWidth) return;
      // Carry progress through the breakpoint instead of snapping to the start.
      const progress = (offset - setWidth) / setWidth;
      setWidth = next;
      offset = setWidth + progress * setWidth;
      el.scrollLeft = offset;
    };
    window.addEventListener("resize", onResize);

    let rafId = 0;
    let last = performance.now();

    const tick = (now: number) => {
      rafId = requestAnimationFrame(tick);

      // Clamp the step so returning to a backgrounded tab does not fast-forward
      // the strip by however long it sat idle. The ceiling is generous on
      // purpose: a stalled frame on a slow phone should still contribute its
      // full time, and even a maxed-out step moves the strip by ~11px.
      const dt = Math.min((now - last) / 1000, MAX_FRAME_SECONDS);
      last = now;

      // Hover is read from the element each frame rather than tracked through
      // mouseenter/mouseleave: those fire spuriously on a scrolling strip, and
      // a stray leave silently cancelled the pause while the cursor sat still.
      const hovered = canHover && el.matches(":hover");

      if (hovered || !onScreen || now < resumeAt) {
        // Track manual scrolling so the drift picks up where the visitor left off.
        offset = el.scrollLeft;
        return;
      }

      const speed = prefersReducedMotion
        ? SPEED_REDUCED
        : window.innerWidth <= 640
          ? SPEED_MOBILE
          : SPEED;

      offset += speed * dt;

      if (offset >= setWidth * 2) offset -= setWidth;
      else if (offset < setWidth) offset += setWidth;

      el.scrollLeft = offset;
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(settleId);
      window.removeEventListener("resize", onResize);
      observer?.disconnect();
      el.removeEventListener("pointerdown", hold);
      el.removeEventListener("touchstart", hold);
      el.removeEventListener("wheel", onWheel);
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
          {/* Auto-scrolling strip; no arrows — hover, drag or swipe pauses it */}
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
