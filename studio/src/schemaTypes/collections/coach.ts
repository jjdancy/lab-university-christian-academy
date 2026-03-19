import {defineField, defineType} from "sanity";

export const coach = defineType({
  name: "coach",
  title: "Coach Profiles",
  type: "document",
  description:
    "Add coach bios and photos. These are used on the Athletics page.",
  fields: [
    defineField({
      name: "name",
      title: "Coach name",
      description: "Displayed as the coach’s name.",
      type: "string",
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "sortOrder",
      title: "Coach display order",
      description:
        "Lower numbers appear first. Example: 1 for the top coach, 2 for the next.",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.min(0).max(999),
    }),
    defineField({
      name: "showOnAthleticsPage",
      title: "Show on Athletics page",
      description:
        "Turn this off to hide the coach from `Athletics` without deleting the profile.",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "role",
      title: "Coach role",
      description: "Example: National Head Coach, Director, etc.",
      type: "string",
      validation: (Rule) => Rule.required().max(80),
    }),
    defineField({
      name: "coachUpBadgeText",
      title: "CoachUp badge text (optional)",
      description:
        "Optional short badge line shown under the coach’s name.",
      type: "string",
    }),
    defineField({
      name: "photo",
      title: "Coach headshot",
      description: "Upload the coach’s photo used in the profile card.",
      type: "image",
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "photoAlt",
      title: "Alt text for the headshot",
      description: "Required. Helps with accessibility and SEO.",
      type: "string",
      validation: (Rule) => Rule.required().max(140),
    }),
    defineField({
      name: "highlights",
      title: "Key highlights",
      description:
        "Short bullet points shown above the full bio (keep each bullet concise).",
      type: "array",
      of: [{type: "string"}],
    }),
    defineField({
      name: "fullBio",
      title: "Full bio",
      description:
        "Long-form biography shown when someone clicks “Read full bio”.",
      type: "array",
      of: [{type: "block"}],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "photo",
      subtitle: "role",
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.subtitle,
      };
    },
  },
});

