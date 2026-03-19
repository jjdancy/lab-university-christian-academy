import {sanityClient} from "./client";

export type SanityAthleteCommitment = {
  _id?: string;
  athleteName: string;
  classYear?: string;
  imageAlt: string;
  image: unknown;
};

export type SanityAthleteCommitmentsCarousel = {
  title?: string | null;
  subtitle?: string | null;
  items?: SanityAthleteCommitment[];
};

export async function getHomeAthleteCommitmentsCarousel(): Promise<
  SanityAthleteCommitmentsCarousel | null
> {
  // Prefer the most recently updated Homepage doc (avoids stale [0] if multiple exist).
  // items[]-> only returns data for **published** Athlete Commitment docs — drafts = null.
  const query = `
    *[_type == "page.home"] | order(_updatedAt desc)[0]{
      athleteCommitmentsCarousel{
        title,
        subtitle,
        items[]->{
          _id,
          athleteName,
          classYear,
          imageAlt,
          image
        }
      }
    }
  `;

  // Dev: no cache so carousel updates right after you publish in Studio
  const revalidate =
    process.env.NODE_ENV === "development" ? 0 : 60;
  const result = await sanityClient.fetch(query, undefined, {
    next: {revalidate},
  } as {next: {revalidate: number}});
  const carousel = result?.athleteCommitmentsCarousel;
  if (!carousel) return null;

  // Drop unresolved refs (unpublished athletes) and incomplete rows
  const rawItems = (carousel.items ?? []) as (SanityAthleteCommitment | null | undefined)[];
  const items = rawItems.filter(
    (row): row is SanityAthleteCommitment =>
      Boolean(
        row &&
          typeof row.athleteName === "string" &&
          row.athleteName.length > 0 &&
          row.image &&
          typeof row.imageAlt === "string",
      ),
  );

  return {...carousel, items};
}

export type SanityHomePageContent = {
  hero?: {
    heroEyebrow?: string;
    headlineHighlight?: string;
    heroSupportingText?: string;
    scholarshipTitle?: string;
    scholarshipBody?: string;
    scholarshipCtaLabel?: string;
    scholarshipCtaHref?: string;
    applyNowLabel?: string;
    scheduleTourLabel?: string;
    k12BadgeMain?: string;
    k12BadgeSub?: string;
    reviewsBadgeRating?: string;
    reviewsBadgeLabel?: string;
    enrollmentBadgeText?: string;
  };
  promoVideoSection?: {
    sectionLabel?: string;
    heading?: string;
    description?: string;
    ctaLabel?: string;
    ctaHref?: string;
    videoSrc?: string;
  };
  academicsPreview?: {
    eyebrow?: string;
    headline?: string;
    description?: string;
    ctaLabel?: string;
    ctaHref?: string;
    images?: {image: unknown; imageAlt: string; caption?: string}[];
  };
  athleticsPreview?: {
    eyebrow?: string;
    headline?: string;
    description?: string;
    ctaLabel?: string;
    ctaHref?: string;
    teams?: {label: string; image: unknown; imageAlt: string}[];
  };
  facilitiesPreview?: {
    eyebrow?: string;
    headline?: string;
    description?: string;
    ctaLabel?: string;
    ctaHref?: string;
    images?: {image: unknown; imageAlt: string; caption?: string}[];
  };
  leadershipPreview?: {
    eyebrow?: string;
    heading?: string;
    description?: string;
    limitedSeatsText?: string;
    applyLabel?: string;
    applyHref?: string;
    tourLabel?: string;
    tourHref?: string;
    backgroundImage?: unknown;
    backgroundImageAlt?: string;
  };
  athleteCommitmentsCarousel?: SanityAthleteCommitmentsCarousel;
};

export async function getHomePageContent(): Promise<
  SanityHomePageContent | null
> {
  const query = `
    *[_type == "page.home"] | order(_updatedAt desc)[0]{
      hero{
        heroEyebrow,
        headlineHighlight,
        heroSupportingText,
        scholarshipTitle,
        scholarshipBody,
        scholarshipCtaLabel,
        scholarshipCtaHref,
        applyNowLabel,
        scheduleTourLabel,
        k12BadgeMain,
        k12BadgeSub,
        reviewsBadgeRating,
        reviewsBadgeLabel,
        enrollmentBadgeText
      },
      promoVideoSection{
        sectionLabel,
        heading,
        description,
        ctaLabel,
        ctaHref,
        videoSrc
      },
      academicsPreview{
        eyebrow,
        headline,
        description,
        ctaLabel,
        ctaHref,
        images[]{
          image,
          imageAlt,
          caption
        }
      },
      athleticsPreview{
        eyebrow,
        headline,
        description,
        ctaLabel,
        ctaHref,
        teams[]{
          label,
          image,
          imageAlt
        }
      },
      facilitiesPreview{
        eyebrow,
        headline,
        description,
        ctaLabel,
        ctaHref,
        images[]{
          image,
          imageAlt,
          caption
        }
      },
      leadershipPreview{
        eyebrow,
        heading,
        description,
        limitedSeatsText,
        applyLabel,
        applyHref,
        tourLabel,
        tourHref,
        backgroundImage,
        backgroundImageAlt
      },
      athleteCommitmentsCarousel{
        title,
        subtitle,
        items[]->{
          _id,
          athleteName,
          classYear,
          imageAlt,
          image
        }
      }
    }
  `;

  const revalidate = process.env.NODE_ENV === "development" ? 0 : 60;
  const result = await sanityClient.fetch(query, undefined, {
    next: {revalidate},
  } as {next: {revalidate: number}});

  if (!result) return null;

  const carousel = result?.athleteCommitmentsCarousel as
    | SanityAthleteCommitmentsCarousel
    | undefined;

  if (carousel) {
    const rawItems = (carousel.items ?? []) as (
      | SanityAthleteCommitment
      | null
      | undefined
    )[];
    const items = rawItems.filter(
      (row): row is SanityAthleteCommitment =>
        Boolean(
          row &&
            typeof row.athleteName === "string" &&
            row.athleteName.length > 0 &&
            row.image &&
            typeof row.imageAlt === "string",
        ),
    );
    result.athleteCommitmentsCarousel = {...carousel, items};
  }

  return result as SanityHomePageContent;
}

