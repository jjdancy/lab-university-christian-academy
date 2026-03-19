import {sanityClient} from "./client";
import {urlFor} from "./image";

export type ElectiveCardResolved = {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  iconUrl?: string;
  iconAlt?: string;
};

export type AcademicsElectivesSection = {
  eyebrow: string;
  title: string;
  intro: string;
  paragraph2: string;
  cards: ElectiveCardResolved[];
  scheduleTitle: string;
  scheduleBody: string;
  ctaLabel: string;
  ctaHref: string;
  sideImageUrl: string;
  sideImageAlt: string;
};

const FALLBACK_CARDS: ElectiveCardResolved[] = [
  {
    title: "Basketball elective",
    description:
      "Basketball-specific training and development within the afternoon block.",
  },
  {
    title: "Coding",
    description: "Foundational programming and computational thinking.",
  },
  {
    title: "Broadcasting",
    description: "Live production, announcing, and media storytelling.",
  },
  {
    title: "Photography",
    description: "Visual storytelling, composition, and digital imaging.",
  },
  {
    title: "Podcasting",
    description: "Audio production, scripting, and show development.",
  },
  {
    title: "Media production",
    description: "End-to-end creative projects across digital media.",
  },
];

export const ACADEMICS_ELECTIVES_FALLBACK: AcademicsElectivesSection = {
  eyebrow: "Beyond the Core",
  title: "STEM focus and afternoon electives.",
  intro:
    "Students engage with math, science, technology, and engineering content that prepares them for modern careers and college majors—while building problem-solving skills with creativity and discipline.",
  paragraph2:
    "Afternoon electives include coding, digital media, broadcasting, and basketball-specific modules. Innovation labs and hands-on projects round out the academic experience. Electives run 12:30 PM – 3:00 PM.",
  cards: FALLBACK_CARDS,
  scheduleTitle: "Afternoon electives",
  scheduleBody: "12:30 PM – 3:00 PM — Coding, broadcasting, photography, podcasting, media production, and basketball electives create a modern learning environment for student-athletes.",
  ctaLabel: "Explore admissions",
  ctaHref: "/admissions",
  sideImageUrl: "/images/little%20kids.jpeg",
  sideImageAlt: "LAB U students",
};

function orStr(v: string | null | undefined, fb: string) {
  const s = v?.trim();
  return s ? s : fb;
}

function imgUrl(asset: unknown, width: number): string | undefined {
  if (!asset) return undefined;
  try {
    return urlFor(asset).width(width).quality(85).url();
  } catch {
    return undefined;
  }
}

export async function getAcademicsElectivesSection(): Promise<AcademicsElectivesSection> {
  const fb = ACADEMICS_ELECTIVES_FALLBACK;
  const query = `
    *[_type == "page.academics"] | order(_updatedAt desc)[0]{
      electivesSection{
        eyebrow,
        title,
        intro,
        paragraph2,
        scheduleTitle,
        scheduleBody,
        ctaLabel,
        ctaHref,
        sideImage,
        sideImageAlt,
        cards[]{
          title,
          description,
          image,
          imageAlt,
          iconImage,
          iconAlt
        }
      }
    }
  `;
  const revalidate = process.env.NODE_ENV === "development" ? 0 : 60;
  let raw: {electivesSection?: Record<string, unknown>} | null = null;
  try {
    raw = await sanityClient.fetch(query, undefined, {
      next: {revalidate},
    } as {next: {revalidate: number}});
  } catch {
    return fb;
  }
  const s = raw?.electivesSection;
  if (!s || typeof s !== "object") return fb;

  const cardsRaw = Array.isArray(s.cards) ? s.cards : [];
  const cards: ElectiveCardResolved[] = cardsRaw
    .map((row: Record<string, unknown>) => {
      const title = typeof row.title === "string" ? row.title.trim() : "";
      const description =
        typeof row.description === "string" ? row.description.trim() : "";
      if (!title || !description) return null;
      const imageUrl = imgUrl(row.image, 640);
      const iconUrl = imgUrl(row.iconImage, 128);
      return {
        title,
        description,
        imageUrl,
        imageAlt:
          typeof row.imageAlt === "string" ? row.imageAlt : undefined,
        iconUrl,
        iconAlt: typeof row.iconAlt === "string" ? row.iconAlt : undefined,
      } satisfies ElectiveCardResolved;
    })
    .filter(Boolean) as ElectiveCardResolved[];

  return {
    eyebrow: orStr(s.eyebrow as string, fb.eyebrow),
    title: orStr(s.title as string, fb.title),
    intro: orStr(s.intro as string, fb.intro),
    paragraph2: orStr(s.paragraph2 as string, fb.paragraph2),
    scheduleTitle: orStr(s.scheduleTitle as string, fb.scheduleTitle),
    scheduleBody: orStr(s.scheduleBody as string, fb.scheduleBody),
    ctaLabel: orStr(s.ctaLabel as string, fb.ctaLabel),
    ctaHref: orStr(s.ctaHref as string, fb.ctaHref),
    cards: cards.length > 0 ? cards : fb.cards,
    sideImageUrl:
      imgUrl(s.sideImage, 1200) ?? fb.sideImageUrl,
    sideImageAlt: orStr(s.sideImageAlt as string, fb.sideImageAlt),
  };
}
