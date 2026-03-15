import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HomePromoVideo from "@/components/HomePromoVideo";
import HomeAcademicsPreview from "@/components/HomeAcademicsPreview";
import HomeAthleticsPreview from "@/components/HomeAthleticsPreview";
import HomeFacilitiesPreview from "@/components/HomeFacilitiesPreview";
import HomeLeadershipPreview from "@/components/HomeLeadershipPreview";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col">
        {/* Hero: no scroll reveal so it's visible immediately */}
        <HeroSection />

        <ScrollReveal delay={0}>
          <HomePromoVideo />
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <HomeAcademicsPreview />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <HomeAthleticsPreview />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <HomeFacilitiesPreview />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <HomeLeadershipPreview />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}

