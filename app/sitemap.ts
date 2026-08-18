import type { MetadataRoute } from "next";

const SITE_URL = "https://labuniversityprep.com";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/academics", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/admissions", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/athletics", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/facilities", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/student-athlete-support", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/schedule-tour", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
