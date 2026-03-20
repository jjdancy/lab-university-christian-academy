"use client";

import {useEffect, useId, useMemo, useRef, useState} from "react";

export type MobileNavLink = {
  label: string;
  href: string;
  items?: {label: string; href: string}[];
};

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export default function MobileNavDropdown({
  links,
  applyHref,
  tourHref,
}: {
  links: MobileNavLink[];
  applyHref: string;
  tourHref: string;
}) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const overlayId = useId();
  const panelRef = useRef<HTMLDivElement | null>(null);

  const sections = useMemo(() => links, [links]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    // Focus the panel so screen readers land in menu content.
    panelRef.current?.focus();
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden flex items-center justify-end">
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={overlayId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/80 transition-colors hover:bg-white/5"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span aria-hidden className="relative block h-5 w-6">
          <span
            className={`absolute left-0 right-0 top-0 h-[2px] rounded bg-white/80 transition-transform duration-200 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 right-0 top-2 h-[2px] rounded bg-white/80 transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 right-0 top-4 h-[2px] rounded bg-white/80 transition-transform duration-200 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {/* Overlay + dropdown panel */}
      <div
        id={overlayId}
        className={`fixed inset-0 z-50 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          onClick={close}
          className={`absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity duration-200 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          className={`absolute left-0 right-0 top-[72px] mx-auto w-full max-w-6xl px-4 transition-all duration-200 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          }`}
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/95 shadow-2xl shadow-black/70">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="text-left leading-tight">
                <div className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-yellow-400/90">
                  Navigation
                </div>
                <div className="text-sm font-semibold text-white/90">
                  LAB University
                </div>
              </div>
              <button
                type="button"
                onClick={close}
                className="rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 hover:bg-white/5"
              >
                Close
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto px-5 py-4">
              <div className="grid gap-2">
                <a
                  href={tourHref}
                  onClick={close}
                  className="rounded-full border border-yellow-400/65 bg-yellow-400/5 px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300 shadow-sm shadow-yellow-500/10 transition-all hover:border-yellow-400 hover:bg-yellow-400/10 hover:text-yellow-200"
                >
                  Schedule a Tour
                </a>
                <a
                  href={applyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="rounded-full bg-yellow-400 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-black shadow-lg shadow-yellow-500/30 transition-colors hover:bg-yellow-300"
                >
                  Apply Now
                </a>
              </div>

              <div className="mt-5 space-y-2">
                {sections.map((link) => {
                  const hasItems = Boolean(link.items?.length);
                  const key = link.href;

                  if (!hasItems) {
                    return (
                      <a
                        key={key}
                        href={link.href}
                        onClick={close}
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/85 hover:bg-white/10"
                      >
                        <span>{link.label}</span>
                        <span className="text-white/40">→</span>
                      </a>
                    );
                  }

                  const isOpen = expanded === key;
                  return (
                    <div key={key} className="rounded-xl border border-white/10 bg-white/5">
                      <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? null : key)}
                        className="flex w-full items-center justify-between px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.2em] text-white/85"
                      >
                        <span>{link.label}</span>
                        <span
                          className={`text-white/50 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden
                        >
                          ▾
                        </span>
                      </button>
                      <div
                        className={`grid overflow-hidden border-t border-white/10 transition-[grid-template-rows] duration-200 ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="min-h-0">
                          <div className="flex flex-col px-2 py-2">
                            <a
                              href={link.href}
                              onClick={close}
                              className="rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-yellow-300/90 hover:bg-white/5"
                            >
                              Overview
                            </a>
                            {link.items!.map((item) => (
                              <a
                                key={item.href}
                                href={item.href}
                                onClick={close}
                                target={isExternal(item.href) ? "_blank" : undefined}
                                rel={
                                  isExternal(item.href)
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                className="rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 hover:bg-white/5 hover:text-yellow-300"
                              >
                                {item.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

