export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-xs text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <a
            href="/"
            className="inline-flex items-center gap-2 transition-opacity hover:opacity-90"
          >
            <img
              src="/images/logolab.png"
              alt="LAB University Christian Academy"
              className="h-7 w-7 object-contain"
            />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-yellow-400">
              LAB University Christian Academy
            </span>
          </a>
          <p className="mt-2 text-white/70">
            8016 Tower Point Dr • Charlotte, NC 28227
          </p>
          <p className="mt-1 text-white/70">(704) 315-1035</p>
        </div>
        <div className="space-y-1 text-right md:text-left">
          <p className="text-[0.7rem] uppercase tracking-[0.25em]">
            Christ-Centered • College-Prep • Elite Development
          </p>
          <p className="text-[0.7rem] text-white/50">
            © {new Date().getFullYear()} LAB University Christian Academy. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

