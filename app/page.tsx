import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HomePromoVideo from "@/components/HomePromoVideo";
import HomeAcademicsPreview from "@/components/HomeAcademicsPreview";
import HomeAthleticsPreview from "@/components/HomeAthleticsPreview";
import AthleteCommitmentsCarousel from "@/components/AthleteCommitmentsCarousel";
import HomeFacilitiesPreview from "@/components/HomeFacilitiesPreview";
import HomeLeadershipPreview from "@/components/HomeLeadershipPreview";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import {getHomePageContent} from "@/lib/sanity/queries";
import {urlFor} from "@/lib/sanity/image";
import {PLAYBOOK_REGISTER_URL} from "@/lib/constants";

/** Re-fetch homepage from Sanity so carousel updates without a full redeploy */
export const revalidate = 60;

export const metadata: Metadata = {
  alternates: { canonical: "/" }
};

export default async function Home() {
  const carouselFallbackTitle = "Where Preparation Meets Opportunity";
  const carouselFallbackSubtitle =
    "Student-athletes who have committed to the next level. Built at LAB U.";

  const home = await getHomePageContent();

  const cmsTitle =
    home?.athleteCommitmentsCarousel?.title || carouselFallbackTitle;
  const cmsSubtitle =
    home?.athleteCommitmentsCarousel?.subtitle || carouselFallbackSubtitle;

  const cmsAthletes =
    home?.athleteCommitmentsCarousel?.items?.length
      ? home.athleteCommitmentsCarousel.items.map((athlete) => ({
          id: athlete._id ?? athlete.athleteName,
          name: athlete.athleteName,
          image: urlFor(athlete.image).width(800).quality(85).url(),
          imageAlt: athlete.imageAlt,
          classYear: athlete.classYear,
        }))
      : undefined;

  /** Remount carousel when athlete list or images change (not just count) */
  const carouselKey =
    cmsAthletes?.map((a) => `${a.id}:${a.image}`).join("|") ?? "defaults";

  const heroProps = home?.hero
    ? {
        heroEyebrow: home.hero.heroEyebrow,
        headlineHighlight: home.hero.headlineHighlight,
        heroSupportingText: home.hero.heroSupportingText,
        scholarshipTitle: home.hero.scholarshipTitle,
        scholarshipBody: home.hero.scholarshipBody,
        scholarshipCtaLabel: home.hero.scholarshipCtaLabel,
        scholarshipCtaHref: home.hero.scholarshipCtaHref,
        applyNowLabel: home.hero.applyNowLabel,
        scheduleTourLabel: home.hero.scheduleTourLabel,
        k12BadgeMain: home.hero.k12BadgeMain,
        k12BadgeSub: home.hero.k12BadgeSub,
        reviewsBadgeRating: home.hero.reviewsBadgeRating,
        reviewsBadgeLabel: home.hero.reviewsBadgeLabel,
        enrollmentBadgeText: home.hero.enrollmentBadgeText,
      }
    : undefined;

  const promoVideoProps = home?.promoVideoSection
    ? {
        sectionLabel: home.promoVideoSection.sectionLabel,
        heading: home.promoVideoSection.heading,
        description: home.promoVideoSection.description,
        videoSrc: home.promoVideoSection.videoSrc,
        ctaLabel: home.promoVideoSection.ctaLabel,
        ctaHref: home.promoVideoSection.ctaHref,
      }
    : undefined;

  const academicsPreviewProps =
    home?.academicsPreview?.images && home.academicsPreview.images.length >= 2
      ? {
          eyebrow: home.academicsPreview.eyebrow,
          headline: home.academicsPreview.headline,
          description: home.academicsPreview.description,
          ctaLabel: home.academicsPreview.ctaLabel,
          ctaHref: home.academicsPreview.ctaHref,
          images: home.academicsPreview.images
            .map((img) => {
              if (!img.image || !img.imageAlt) return null;
              return {
                imageUrl: urlFor(img.image).width(1200).quality(85).url(),
                imageAlt: img.imageAlt,
                caption: img.caption ?? undefined,
              };
            })
            .filter(Boolean) as any,
        }
      : undefined;

  const athleticsPreviewProps =
    home?.athleticsPreview?.teams && home.athleticsPreview.teams.length >= 4
      ? {
          eyebrow: home.athleticsPreview.eyebrow,
          headline: home.athleticsPreview.headline,
          description: home.athleticsPreview.description,
          ctaLabel: home.athleticsPreview.ctaLabel,
          ctaHref: home.athleticsPreview.ctaHref,
          teams: home.athleticsPreview.teams
            .map((t) => {
              if (!t.image || !t.imageAlt || !t.label) return null;
              return {
                label: t.label,
                imageUrl: urlFor(t.image).width(1200).quality(85).url(),
                imageAlt: t.imageAlt,
              };
            })
            .filter(Boolean) as any,
        }
      : undefined;

  const facilitiesPreviewProps =
    home?.facilitiesPreview?.images && home.facilitiesPreview.images.length >= 3
      ? {
          eyebrow: home.facilitiesPreview.eyebrow,
          headline: home.facilitiesPreview.headline,
          description: home.facilitiesPreview.description,
          ctaLabel: home.facilitiesPreview.ctaLabel,
          ctaHref: home.facilitiesPreview.ctaHref,
          images: home.facilitiesPreview.images
            .map((img) => {
              if (!img.image || !img.imageAlt) return null;
              return {
                imageUrl: urlFor(img.image).width(1200).quality(85).url(),
                imageAlt: img.imageAlt,
                caption: img.caption ?? undefined,
              };
            })
            .filter(Boolean) as any,
        }
      : undefined;

  const leadershipPreviewProps = home?.leadershipPreview
    ? {
        eyebrowLabel: home.leadershipPreview.eyebrow,
        heading: home.leadershipPreview.heading,
        description: home.leadershipPreview.description,
        limitedSeatsText: home.leadershipPreview.limitedSeatsText,
        applyLabel: home.leadershipPreview.applyLabel,
        applyHref: PLAYBOOK_REGISTER_URL,
        tourLabel: home.leadershipPreview.tourLabel,
        tourHref: home.leadershipPreview.tourHref,
        backgroundImageSrc:
          home.leadershipPreview.backgroundImage
            ? urlFor(home.leadershipPreview.backgroundImage).width(1400).quality(85).url()
            : undefined,
        backgroundImageAlt: home.leadershipPreview.backgroundImageAlt,
      }
    : undefined;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col">
        {/* Hero: no scroll reveal so it's visible immediately */}
        <HeroSection {...heroProps} />

        <ScrollReveal delay={0}>
          <HomePromoVideo {...promoVideoProps} />
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <HomeAcademicsPreview {...academicsPreviewProps} />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <HomeAthleticsPreview {...athleticsPreviewProps} />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <HomeFacilitiesPreview {...facilitiesPreviewProps} />
        </ScrollReveal>

        <ScrollReveal delay={175}>
          <AthleteCommitmentsCarousel
            key={carouselKey}
            title={cmsTitle}
            subtitle={cmsSubtitle}
            athletes={cmsAthletes}
          />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <HomeLeadershipPreview {...leadershipPreviewProps} />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}

