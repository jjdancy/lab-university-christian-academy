import {defineField, defineType} from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  description:
    "Add parent/student testimonials used as social proof throughout the site.",
  fields: [
    defineField({
      name: "quote",
      title: "Testimonial quote",
      description:
        "The exact quote shown on the website. Tip: keep it short and specific.",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: "personName",
      title: "Who said it",
      description: "Example: Jane Smith",
      type: "string",
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "personRole",
      title: "Role (optional)",
      description: "Example: Parent, Student, or Athlete",
      type: "string",
    }),
    defineField({
      name: "avatar",
      title: "Photo (optional)",
      description: "Upload a headshot to personalize the testimonial.",
      type: "image",
      options: {hotspot: true},
    }),
    defineField({
      name: "avatarAlt",
      title: "Alt text for the photo",
      description: "Required if you upload a photo.",
      type: "string",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as {avatar?: unknown} | undefined;
          const avatarProvided = Boolean(parent?.avatar);
          if (avatarProvided && (!value || String(value).trim().length === 0)) {
            return "Alt text is required when a photo is uploaded.";
          }
          return true;
        }),
    }),
    defineField({
      name: "source",
      title: "Where this came from",
      description: "Helps you track what type of testimonial this is.",
      type: "string",
      options: {
        list: [
          {title: "Google", value: "google"},
          {title: "Parent", value: "parent"},
          {title: "Student", value: "student"},
          {title: "Other", value: "other"},
        ],
      },
    }),
    defineField({
      name: "approved",
      title: "Show on website",
      description: "Turn on to display publicly.",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {title: "personName", subtitle: "quote", media: "avatar"},
    prepare(selection) {
      const raw = typeof selection.subtitle === "string" ? selection.subtitle : "";
      const short = raw.replace(/\s+/g, " ").trim().slice(0, 80);
      return {
        title: selection.title,
        subtitle: short ? short : selection.subtitle,
      };
    },
  },
});

