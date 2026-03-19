import Footer from "@/components/Footer";
import MountStaggerReveal from "@/components/MountStaggerReveal";
import Navbar from "@/components/Navbar";
import ScheduleTourForm from "@/components/ScheduleTourForm";

export default function ScheduleTourPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col">
        <MountStaggerReveal staggerMs={70}>
          <section className="border-b border-white/10 bg-gradient-to-b from-black via-black to-zinc-950 py-16 md:py-24">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1fr_1.1fr] md:items-start md:px-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                  Admissions
                </p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                  Schedule a campus tour.
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
                  See LAB University Christian Academy in person and learn more
                  about our Christ-centered academics, structured environment,
                  and elite student-athlete development.
                </p>
                <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-300">
                    Campus
                  </p>
                  <p className="mt-2 text-sm text-white/85">
                    8016 Tower Point Dr, Charlotte, NC 28227
                  </p>
                  <p className="mt-1 text-sm text-white/85">(704) 315-1035</p>
                </div>
              </div>

              <ScheduleTourForm />
            </div>
          </section>
        </MountStaggerReveal>
      </main>
      <Footer />
    </div>
  );
}
