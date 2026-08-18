import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MountStaggerReveal from "@/components/MountStaggerReveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact LAB University Christian Academy at 8016 Tower Point Dr, Charlotte, NC 28227 or (704) 315-1035 for admissions, academics, or athletics questions.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact LAB University Christian Academy",
    description:
      "Get in touch with LAB U in Charlotte, NC for admissions, academics, or athletics questions.",
    url: "/contact"
  }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col gap-16 md:gap-20">
        <MountStaggerReveal>
        <section className="border-b border-white/10 bg-gradient-to-b from-black via-black to-zinc-950 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
              Contact
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Get in touch with LAB University Christian Academy.
            </h1>
            <p className="mt-4 text-sm text-white/70 md:text-base">
              Have questions about admissions, academics, or athletics? Our team
              is here to help.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/80">
              <p>8016 Tower Point Dr • Charlotte, NC 28227</p>
              <p>(704) 315-1035</p>
            </div>
          </div>
        </section>
        {/* Future: contact form and map per PRD */}
        </MountStaggerReveal>
      </main>
      <Footer />
    </div>
  );
}

