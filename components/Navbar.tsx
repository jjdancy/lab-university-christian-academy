import {SCHEDULE_TOUR_URL} from "@/lib/constants";
import MobileNavDropdown from "@/components/MobileNavDropdown";

const navLinks = [
  { label: "About", href: "/about" },
  {
    label: "Academics",
    href: "/academics",
    items: [
      { label: "Academic Model", href: "/academics" },
      { label: "Electives", href: "/academics#electives" },
      { label: "Acellus Learning", href: "/academics#acellus" },
      { label: "Daily Schedule", href: "/academics#schedule" }
    ]
  },
  {
    label: "Athletics",
    href: "/athletics",
    items: [
      { label: "Basketball Program", href: "/athletics" },
      { label: "Teams", href: "/athletics#teams" },
      { label: "Coaches", href: "/athletics#coaches" }
    ]
  },
  { label: "Facilities", href: "/facilities" },
  { label: "Student-Athlete Support", href: "/student-athlete-support" },
  {
    label: "Admissions",
    href: "/admissions",
    items: [
      { label: "Admissions Process", href: "/admissions#process" },
      { label: "Who It's For", href: "/admissions#who" },
      { label: "FAQs", href: "/admissions#faqs" },
      { label: "Schedule a Tour", href: SCHEDULE_TOUR_URL },
      {
        label: "Apply Now",
        href:
          "https://labuniversityprep.playbookapi.com/programs/register/",
      },
    ]
  }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 md:px-6 md:gap-8">
        {/* Logo + title — home link */}
        <a
          href="/"
          className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-90"
        >
          <img
            src="/images/logolab.png"
            alt="LAB University Christian Academy"
            className="h-11 w-11 object-contain md:h-12 md:w-12"
          />
          <div className="flex flex-col justify-center leading-tight">
            <span className="text-xs font-semibold tracking-[0.2em] text-yellow-400">
              LAB UNIVERSITY
            </span>
            <span className="text-sm font-medium text-white/80">
              Christian Academy
            </span>
          </div>
        </a>

        {/* Nav — centered, even spacing */}
        <nav className="hidden flex-1 items-center justify-center md:flex">
          <ul className="flex items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
            {navLinks.map((link) => {
              if (link.items) {
                return (
                  <li key={link.href} className="relative group">
                    <a
                      href={link.href}
                      className="flex items-center gap-1 transition-colors hover:text-yellow-400"
                    >
                      {link.label}
                      <span className="text-[0.6rem]">▾</span>
                    </a>
                    {/* Dropdown: pt-2 bridges gap so it stays open when moving mouse down */}
                    <div className="absolute left-1/2 top-full z-40 w-56 -translate-x-1/2 pt-2 opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 group-hover:pointer-events-auto">
                      <div className="rounded-2xl border border-white/10 bg-black/95 p-3 shadow-xl shadow-black/60">
                        <ul className="space-y-0.5">
                          {link.items.map((item) => (
                            <li key={item.href}>
                              <a
                                href={item.href}
                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                rel={
                                  item.href.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                className="block rounded-md px-3 py-2 text-[0.65rem] tracking-[0.18em] transition-colors hover:bg-white/10 hover:text-yellow-300"
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              }
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-yellow-400"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <MobileNavDropdown
          links={navLinks}
          tourHref={SCHEDULE_TOUR_URL}
          applyHref="https://labuniversityprep.playbookapi.com/programs/register/"
        />

        {/* CTAs — aligned right */}
        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <a
            href={SCHEDULE_TOUR_URL}
            className="rounded-full border border-yellow-400/65 bg-yellow-400/5 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300 shadow-sm shadow-yellow-500/10 transition-all hover:-translate-y-0.5 hover:border-yellow-400 hover:bg-yellow-400/10 hover:text-yellow-200"
          >
            Schedule a Tour
          </a>
          <a
            href="https://labuniversityprep.playbookapi.com/programs/register/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-yellow-400 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black shadow-lg shadow-yellow-500/30 transition-transform hover:-translate-y-0.5 hover:bg-yellow-300"
          >
            Apply Now
          </a>
        </div>
      </div>
    </header>
  );
}
