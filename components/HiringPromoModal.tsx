"use client";

import {useCallback, useEffect, useId, useRef, useState} from "react";
import HiringApplicationForm from "@/components/HiringApplicationForm";
import {
  HIRING_PROMO_DELAY_MS,
  HIRING_PROMO_IMAGE_SRC,
  HIRING_PROMO_SESSION_KEY,
} from "@/lib/constants";

function readDismissed(): boolean {
  try {
    return sessionStorage.getItem(HIRING_PROMO_SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function writeDismissed(): void {
  try {
    sessionStorage.setItem(HIRING_PROMO_SESSION_KEY, "1");
  } catch {
    // Storage unavailable — in-memory dismiss still applies for this page load.
  }
}

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const selector =
    'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
  return Array.from(container.querySelectorAll<HTMLElement>(selector)).filter(
    (el) => !el.hasAttribute("disabled") && el.offsetParent !== null
  );
}

export default function HiringPromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<"promo" | "apply">("promo");
  const [dontShowAgain, setDontShowAgain] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();

  const dismiss = useCallback(() => {
    setIsOpen(false);
    setView("promo");
    writeDismissed();
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPrefersReducedMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (readDismissed()) return;

    const timer = window.setTimeout(() => {
      if (readDismissed()) return;
      previouslyFocusedRef.current =
        document.activeElement as HTMLElement | null;
      setIsOpen(true);
    }, HIRING_PROMO_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dismiss();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = getFocusableElements(dialogRef.current);
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (active === first || !dialogRef.current.contains(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last || !dialogRef.current.contains(active)) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocusedRef.current?.focus?.();
    };
  }, [dismiss, isOpen]);

  const motionClass = prefersReducedMotion
    ? ""
    : "transition-all duration-300";

  const panelMotion = prefersReducedMotion
    ? isOpen
      ? "opacity-100"
      : "opacity-0"
    : isOpen
      ? "translate-y-0 scale-100 opacity-100 md:translate-y-0"
      : "translate-y-6 scale-[0.98] opacity-0 md:translate-y-4 md:scale-95";

  const isApplyView = view === "apply";

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[70] flex items-end justify-center p-0 md:items-center md:p-6 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm ${motionClass} ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={dismiss}
        aria-hidden
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className={`relative flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-2xl border border-yellow-500/30 bg-gradient-to-b from-zinc-950 to-black shadow-2xl shadow-black/80 md:rounded-2xl ${
          isApplyView ? "max-w-3xl" : "max-w-[880px]"
        } ${motionClass} ${panelMotion}`}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={dismiss}
          aria-label="Close hiring announcement"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white/80 backdrop-blur transition hover:border-yellow-400 hover:text-yellow-200 md:right-4 md:top-4"
        >
          <span aria-hidden className="text-lg leading-none">
            ×
          </span>
        </button>

        {isApplyView ? (
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
            <div className="sticky top-0 z-10 border-b border-white/10 bg-black/80 px-5 py-4 backdrop-blur md:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-yellow-300">
                Career Opportunity
              </p>
              <h2
                id={titleId}
                className="mt-1 pr-10 text-xl font-semibold tracking-tight text-white md:text-2xl"
              >
                Mentor Teacher Application
              </h2>
              <p
                id={descriptionId}
                className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70"
              >
                Tell us about your background. Our team will review your
                application and follow up by email or phone.
              </p>
            </div>

            <div className="p-5 md:p-8">
              <HiringApplicationForm onSubmitted={writeDismissed} />
              <button
                type="button"
                onClick={() => setView("promo")}
                className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/50 transition hover:text-yellow-300"
              >
                Back to announcement
              </button>
            </div>
          </div>
        ) : (
          <div className="grid min-h-0 flex-1 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)]">
            <div className="relative max-h-[42vh] overflow-hidden border-b border-yellow-500/20 md:max-h-none md:border-b-0 md:border-r md:border-yellow-500/20">
              <img
                src={HIRING_PROMO_IMAGE_SRC}
                alt="Now Hiring flyer for Digital Media, Coding, Computer Science and AI Mentor Teacher at LAB University Christian Academy"
                className="h-full w-full object-cover object-top"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent md:hidden"
                aria-hidden
              />
            </div>

            <div className="flex min-h-0 flex-col overflow-y-auto p-5 pt-6 md:p-8 md:pt-10">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-yellow-300">
                Career Opportunity
              </p>
              <h2
                id={titleId}
                className="mt-2 text-balance text-xl font-semibold tracking-tight text-white sm:text-2xl md:text-[1.65rem]"
              >
                Now Hiring Mentor Teachers
              </h2>
              <p
                id={descriptionId}
                className="mt-3 text-sm leading-relaxed text-white/75 md:text-[0.95rem]"
              >
                Join LAB University Christian Academy in Charlotte as a Digital
                Media, Coding, Computer Science &amp; AI Mentor Teacher.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={() => setView("apply")}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-yellow-400 px-7 py-3 text-center text-xs font-semibold uppercase tracking-[0.22em] text-black shadow-lg shadow-yellow-500/25 transition hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
                >
                  Apply Now
                </button>
                <button
                  type="button"
                  onClick={dismiss}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-7 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:border-yellow-400 hover:text-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
                >
                  Not Interested
                </button>
              </div>

              <label className="mt-5 flex cursor-pointer items-start gap-2.5 text-xs text-white/55">
                <input
                  type="checkbox"
                  checked={dontShowAgain}
                  onChange={(event) => {
                    const checked = event.target.checked;
                    setDontShowAgain(checked);
                    if (checked) writeDismissed();
                  }}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/30 bg-black accent-yellow-400"
                />
                <span>Don&apos;t show again this session</span>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
