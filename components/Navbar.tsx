const navLinks = [
  { label: "Academics", href: "#academics" },
  { label: "Athletics", href: "#athletics" },
  { label: "Facilities", href: "#facilities" },
  { label: "Leadership & Faith", href: "#leadership-faith" },
  { label: "Admissions", href: "#admissions" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600" />
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold tracking-[0.2em] text-yellow-400">
              LAB UNIVERSITY
            </span>
            <span className="text-sm font-medium text-white/80">
              Christian Academy
            </span>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-white/70 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-yellow-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#tour"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
          >
            Schedule a Tour
          </a>
          <a
            href="#apply"
            className="rounded-full bg-yellow-400 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black shadow-lg shadow-yellow-500/30 transition-transform hover:-translate-y-0.5 hover:bg-yellow-300"
          >
            Apply Now
          </a>
        </div>
      </div>
    </header>
  );
}

