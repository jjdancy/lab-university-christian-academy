import {createClient} from "@sanity/client";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION || "2024-06-01";

if (!projectId) {
  throw new Error("Missing SANITY_PROJECT_ID in .env.local");
}
if (!dataset) {
  throw new Error("Missing SANITY_DATASET in .env.local");
}

/** In dev, skip CDN so CMS edits show up immediately after publish */
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
});

