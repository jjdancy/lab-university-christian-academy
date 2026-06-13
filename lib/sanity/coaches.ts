import {sanityClient} from "./client";
import {urlFor} from "./image";

export type ResolvedCoach = {
  id?: string;
  name: string;
  role: string;
  sortOrder?: number;
  showOnAthleticsPage?: boolean;
  coachUpBadgeText?: string;
  photoUrl: string;
  photoAlt: string;
  highlights: string[];
  fullBioParagraphs: string[];
};

const FALLBACK_COACH: ResolvedCoach = {
  id: "fallback-andre-speech",
  name: "Andre Speech",
  role: "National Head Coach",
  coachUpBadgeText:
    "CoachUp's #1 Basketball Trainer in NC · #8 in the US",
  photoUrl: "/images/coach%20speech%20headshot.png",
  photoAlt: "Andre Speech — National Head Coach",
  highlights: [
    "35+ years in the game · 4-year varsity at C.K. McClatchy (Sacramento) · school all-time leading scorer, rebounder & shot blocker",
    "2-time league MVP, 2-time ALL-CITY · ATHLETE OF THE DECADE · 2015 California High School Hall of Fame",
    "University of San Diego (Div. 1, West Coast Conference) on scholarship · Team Most Improved Player",
    "Head Coach/Director, Charlotte Dragons AAU (8U–17U) · JV Head & Varsity Asst. at 2016 4A State Champion Charlotte Catholic",
    "Head Coach, Boys National Varsity, LAB U Christian Academy · 30+ years developing athletes (age 6 to college & pro) · Certified USA Basketball Coach",
    "Coached over 100 college and pro athletes",
  ],
  fullBioParagraphs: [
    "I have been playing the game of basketball for 35+ years. As a California native, I played my prep ball in the Sacramento area at C.K. McClatchy High School and was a 4-year varsity standout. I finished my career as the school's all-time leading scorer, rebounder & shot blocker. I was 2-time league MVP and 2-time ALL-CITY selection. I finished my high school career by receiving the prestigious ATHLETE OF THE DECADE award and was inducted into the 2015 High School Hall of Fame in California. I went on to play at the University of San Diego (Div. 1 — West Coast Conference) on scholarship and grew into a complete player moving from the Center, which I played in high school, to the Guard/Forward spot. I was awarded Teams Most Improved Player award as a sophomore increasing my points, rebs, blocks, and 3pt shooting.",
    "Once my basketball playing career ended, I turned my attention to the development of student-athletes. I'm currently the Head Coach/Director of a very successful showcase AAU organization (Charlotte Dragons ages 8U–17U, www.CharlotteDragons.com). From 2012–2022 I was the JV Head Coach and Varsity Asst. Coach at the 2016 4A State Champion, Charlotte Catholic High School. I'm now the Head Coach of the Boys National Varsity team at LAB U Christian Academy (Charlotte, NC). I've worked with developing athletes, both girls and boys, for over 30 years. I have worked with athletes as young as age 6 up to college & pro prospects age 21+. I'm also a Certified USA Basketball Coach.",
  ],
};

const FALLBACK_CORNELIUSSEN: ResolvedCoach = {
  id: "fallback-shane-corneliussen",
  name: "Shane Corneliussen",
  role: "Head Men's Basketball Coach — Regional Team",
  photoUrl: "/images/coach%20Corneliussen.png",
  photoAlt: "Shane Corneliussen — Regional Head Coach",
  highlights: [
    "Former professional basketball player in Scotland's top league — helped Boroughmuir Blaze win the historic 2022-23 League, Cup & Playoff treble",
    "Head Assistant Coach (Men's & Women's Programs) — Pacific Union College: recruiting, player development plans, strength & conditioning, film analysis",
    "Coaching experience at St. Stephens High School and Charlotte Dragons Basketball Organization",
    "Emphasizes skill development, character building, accountability, and positive team culture",
    "Committed to servant leadership — helping student-athletes maximize potential through faith, discipline, and excellence",
  ],
  fullBioParagraphs: [
    "Shane Corneliussen enters his role as Head Men's Basketball Coach for the Regional Team at LAB University Christian Academy with a diverse background in coaching, player development, recruiting, and professional playing experience.",
    "A former professional basketball player in Scotland's top league, Corneliussen helped the Boroughmuir Blaze to a historic treble, capturing League, Cup, and Playoff Championships during the 2022-23 season. His experience competing at the professional level provides him with firsthand knowledge of the commitment, discipline, and leadership required to succeed on and off the court.",
    "Prior to joining LAB University Christian Academy, Corneliussen served as Head Assistant Coach for both the men's and women's basketball programs at Pacific Union College. In those roles, he coordinated recruiting efforts, developed individualized player development plans, designed strength and conditioning programs, managed film analysis, and assisted with game strategy and scouting. His recruiting efforts and player development focus played a key role in enhancing program competitiveness and student-athlete growth.",
    "Corneliussen has also coached at the youth and high school levels, including positions with St. Stephens High School and the Charlotte Dragons Basketball Organization. Throughout his coaching career, he has emphasized skill development, character building, accountability, and creating a positive team culture that prepares athletes for success both in basketball and in life.",
    "Known for his passion for player development, relationship-building, and servant leadership, Corneliussen is committed to helping student-athletes maximize their potential while building a championship culture rooted in faith, discipline, and excellence.",
  ],
};

const FALLBACK_COACHES: ResolvedCoach[] = [FALLBACK_COACH, FALLBACK_CORNELIUSSEN];

function isStringArray(v: unknown): v is string[] {
  return Array.isArray(v) && v.every((x) => typeof x === "string");
}

function portableTextToParagraphs(fullBio: unknown): string[] {
  const fb = fullBio as any;
  if (!Array.isArray(fb)) return [];

  // Minimal Portable Text -> plain text conversion.
  // We avoid adding @portabletext/react/html dependencies to the Next app.
  const paragraphs: string[] = [];

  for (const node of fb) {
    if (!node || typeof node !== "object") continue;
    if (node._type !== "block") continue;

    const children = Array.isArray(node.children) ? node.children : [];
    const markDefs = Array.isArray(node.markDefs) ? node.markDefs : [];

    const spanText = children
      .map((ch: any) => {
        if (!ch || typeof ch !== "object") return "";
        if (ch._type !== "span") return "";
        const text = typeof ch.text === "string" ? ch.text : "";
        const marks = Array.isArray(ch.marks) ? ch.marks : [];
        if (!marks.length) return text;

        // If this span is a link, append the URL so editors can still convey it.
        const urls: string[] = [];
        for (const markKey of marks) {
          const md = markDefs.find((d: any) => d?._key === markKey);
          if (md?._type === "link" && typeof md.url === "string") {
            urls.push(md.url);
          }
        }

        return urls.length ? `${text} (${urls.join(", ")})` : text;
      })
      .join("");

    const clean = spanText.replace(/\s+/g, " ").trim();
    if (clean) paragraphs.push(clean);
  }

  return paragraphs;
}

export async function getCoaches(): Promise<ResolvedCoach[]> {
  const revalidate = process.env.NODE_ENV === "development" ? 0 : 60;

  const query = `
    *[_type == "coach" && coalesce(showOnAthleticsPage, true)] | order(coalesce(sortOrder, 9999) asc, _updatedAt desc){
      _id,
      name,
      role,
      sortOrder,
      showOnAthleticsPage,
      coachUpBadgeText,
      photo,
      photoAlt,
      highlights,
      fullBio
    }
  `;

  let raw: any[] = [];
  try {
    raw = await sanityClient.fetch(query, undefined, {
      next: {revalidate},
    } as {next: {revalidate: number}});
  } catch {
    // If Sanity fetch fails (auth/network/etc), fall back so the page doesn't break.
    return FALLBACK_COACHES;
  }

  // If the editor intentionally removed all coach profiles, don't show a fallback.
  if (!Array.isArray(raw) || raw.length === 0) return [];

  const resolved: ResolvedCoach[] = (raw ?? [])
    .map((c) => {
      if (
        !c ||
        typeof c.name !== "string" ||
        typeof c.role !== "string" ||
        !c.photo ||
        typeof c.photoAlt !== "string"
      ) {
        return null;
      }

      let photoUrl = "";
      try {
        photoUrl = urlFor(c.photo).width(440).quality(85).url();
      } catch {
        photoUrl = "";
      }
      if (!photoUrl) return null;

      return {
        id: typeof c._id === "string" ? c._id : undefined,
        name: c.name.trim(),
        role: c.role.trim(),
        sortOrder: typeof c.sortOrder === "number" ? c.sortOrder : undefined,
        showOnAthleticsPage:
          typeof c.showOnAthleticsPage === "boolean"
            ? c.showOnAthleticsPage
            : undefined,
        coachUpBadgeText:
          typeof c.coachUpBadgeText === "string"
            ? c.coachUpBadgeText.trim()
            : undefined,
        photoUrl,
        photoAlt: c.photoAlt.trim(),
        highlights: isStringArray(c.highlights)
          ? c.highlights.map((h: string) => h.trim()).filter(Boolean)
          : [],
        fullBioParagraphs: portableTextToParagraphs(c.fullBio),
      } satisfies ResolvedCoach;
    })
    .filter(Boolean) as ResolvedCoach[];

  // If documents exist but none resolve (e.g. missing required fields), hide the coaches list.
  if (!resolved.length) return [];

  // Local photo overrides — use these until Sanity photos are updated.
  const LOCAL_PHOTO_OVERRIDES: Record<string, { photoUrl: string; photoAlt: string }> = {
    "andre speech": {
      photoUrl: "/images/coach%20speech%20headshot.png",
      photoAlt: "Andre Speech — National Head Coach",
    },
  };

  const withOverrides = resolved.map((coach) => {
    const override = LOCAL_PHOTO_OVERRIDES[coach.name.toLowerCase()];
    return override ? { ...coach, ...override } : coach;
  });

  // Merge any hardcoded coaches that are not yet in Sanity (matched by fallback id).
  const hardcodedOnlyInFallback = [FALLBACK_CORNELIUSSEN].filter(
    (fb) => !withOverrides.some((r) => r.name.toLowerCase() === fb.name.toLowerCase())
  );

  return [...withOverrides, ...hardcodedOnlyInFallback];
}

