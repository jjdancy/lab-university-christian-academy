import {defineField, defineType} from "sanity";

export const athleteCommitment = defineType({
  name: "athleteCommitment",
  title: "Athlete Commitments",
  type: "document",
  description:
    "Upload each athlete’s commitment graphic/photo here. These appear in the Athlete Commitments carousel.",
  fields: [
    defineField({
      name: "athleteName",
      title: "Athlete name",
      description: "Shows on the carousel card when someone hovers.",
      type: "string",
      validation: (Rule) => Rule.required().max(60),
    }),
    defineField({
      name: "classYear",
      title: "Class year (optional)",
      description: "Example: Class of 2027",
      type: "string",
      validation: (Rule) => Rule.max(20),
    }),
    defineField({
      name: "imageAlt",
      title: "Alt text for the image",
      description: "Required. Helps with accessibility and SEO.",
      type: "string",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "image",
      title: "Commitment graphic / photo",
      description: "Upload the image used in the carousel card.",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "athleteName",
      subtitle: "classYear",
      media: "image",
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.subtitle,
      };
    },
  },
});

