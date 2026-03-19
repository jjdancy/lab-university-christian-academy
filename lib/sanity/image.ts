import {createImageUrlBuilder} from "@sanity/image-url";

import {sanityClient} from "./client";

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: unknown) {
  return builder.image(source as any);
}

