"use client";

import {
  createContext,
  MouseEvent as ReactMouseEvent,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {SCHEDULE_TOUR_URL} from "@/lib/constants";
import ScheduleTourForm from "@/components/ScheduleTourForm";

type ScheduleTourModalContextValue = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const ScheduleTourModalContext = createContext<ScheduleTourModalContextValue | null>(
  null
);

export function ScheduleTourModalProvider({children}: {children: ReactNode}) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeModal, isOpen]);

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;
      if (anchor.hasAttribute("download")) return;

      const targetAttr = anchor.getAttribute("target");
      if (targetAttr && targetAttr !== "_self") return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const parsed = new URL(href, window.location.origin);
      if (parsed.origin !== window.location.origin) return;
      const normalizedPath = parsed.pathname.replace(/\/+$/, "") || "/";
      if (normalizedPath !== SCHEDULE_TOUR_URL) return;

      event.preventDefault();
      openModal();
    };

    document.addEventListener("click", onDocumentClick);
    return () => document.removeEventListener("click", onDocumentClick);
  }, [openModal]);

  const value = useMemo(
    () => ({isOpen, openModal, closeModal}),
    [isOpen, openModal, closeModal]
  );

  return (
    <ScheduleTourModalContext.Provider value={value}>
      {children}
      <ScheduleTourModal isOpen={isOpen} onClose={closeModal} />
    </ScheduleTourModalContext.Provider>
  );
}

export function useScheduleTourModal() {
  const context = useContext(ScheduleTourModalContext);
  if (!context) {
    throw new Error(
      "useScheduleTourModal must be used within ScheduleTourModalProvider."
    );
  }
  return context;
}

function ScheduleTourModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const onBackdropClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[80] p-4 transition-all duration-300 md:p-6 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      onClick={onBackdropClick}
    >
      <div
        className={`absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Schedule a Tour"
        className={`relative mx-auto max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-yellow-500/30 bg-gradient-to-b from-zinc-950 to-black shadow-2xl shadow-black/80 transition-all duration-300 ${
          isOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"
        }`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-black/80 px-5 py-4 backdrop-blur md:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-yellow-300">
              Admissions
            </p>
            <h2 className="mt-1 text-xl font-semibold tracking-tight text-white md:text-2xl">
              Schedule a Tour
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:border-yellow-400 hover:text-yellow-200"
          >
            Close
          </button>
        </div>

        <div className="p-5 md:p-8">
          <p className="mb-5 max-w-2xl text-sm leading-relaxed text-white/75">
            Tell us about your family and preferred date. Our admissions team
            will follow up to confirm your visit to LAB University Christian
            Academy.
          </p>
          <ScheduleTourForm variant="modal" />
        </div>
      </div>
    </div>
  );
}
