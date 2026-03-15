import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AcademicsSection from "@/components/AcademicsSection";
import AthleticsSection from "@/components/AthleticsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import LeadershipFaithSection from "@/components/LeadershipFaithSection";
import AdmissionsCTASection from "@/components/AdmissionsCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col gap-24 md:gap-32">
        <HeroSection />
        <AcademicsSection />
        <AthleticsSection />
        <FacilitiesSection />
        <LeadershipFaithSection />
        <AdmissionsCTASection />
      </main>
      <Footer />
    </div>
  );
}

