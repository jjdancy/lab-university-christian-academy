const navLinks = [
  { label: "About", href: "/about" },
  {
    label: "Academics",
    href: "/academics",
    items: [
      { label: "Academic Model", href: "/academics" },
      { label: "Electives", href: "/electives" },
      { label: "STEM Focus", href: "/academics#stem" },
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
      { label: "Training System", href: "/athletics#training" },
      { label: "Facilities", href: "/facilities" }
    ]
  },
  { label: "Facilities", href: "/facilities" },
  { label: "Student-Athlete Support", href: "/student-athlete-support" },
  {
    label: "Admissions",
    href: "/admissions",
    items: [
      { label: "Admissions Process", href: "/admissions#process" },
      { label: "Tuition / Enrollment", href: "/admissions#tuition" },
      { label: "Schedule a Tour", href: "/admissions#tour" },
      { label: "Apply Now", href: "/admissions#apply" }
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

        {/* CTAs — aligned right */}
        <div className="hidden shrink-0 items-center gap-4 md:flex">
          <a
            href="/admissions#tour"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
          >
            Schedule a Tour
          </a>
          <a
            href="/admissions#apply"
            className="rounded-full bg-yellow-400 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black shadow-lg shadow-yellow-500/30 transition-transform hover:-translate-y-0.5 hover:bg-yellow-300"
          >
            Apply Now
          </a>
        </div>
      </div>
    </header>
  );
}
