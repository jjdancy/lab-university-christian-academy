import {defineField, defineType} from "sanity";

export const pageAthletics = defineType({
  name: "page.athletics",
  title: "Athletics Page Content",
  type: "document",
  description:
    "Edit the content shown on the Athletics page. Layout and design stay locked in code.",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({name: "eyebrow", title: "Hero label", type: "string", validation: (Rule) => Rule.max(40)}),
        defineField({name: "title", title: "Main headline", type: "string", validation: (Rule) => Rule.max(90)}),
        defineField({name: "lead", title: "Supporting intro paragraph", type: "text", rows: 4}),
        defineField({
          name: "backgroundImage",
          title: "Hero background image",
          type: "image",
          options: {hotspot: true},
        }),
        defineField({name: "backgroundImageAlt", title: "Alt text for background image", type: "string", validation: (Rule) => Rule.max(140)}),
      ],
    }),
    defineField({
      name: "programOverview",
      title: "Athletics overview",
      type: "object",
      fields: [
        defineField({name: "title", title: "Section headline", type: "string", validation: (Rule) => Rule.max(90)}),
        defineField({name: "body", title: "Supporting text", type: "text", rows: 6}),
        defineField({
          name: "image",
          title: "Overview image",
          type: "image",
          options: {hotspot: true},
        }),
        defineField({name: "imageAlt", title: "Alt text for image", type: "string", validation: (Rule) => Rule.max(140)}),
      ],
    }),
    defineField({
      name: "teams",
      title: "Teams",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({name: "label", title: "Team label", type: "string", validation: (Rule) => Rule.max(40)}),
            defineField({name: "title", title: "Team name", type: "string", validation: (Rule) => Rule.max(80)}),
            defineField({
              name: "image",
              title: "Team image",
              type: "image",
              options: {hotspot: true},
            }),
            defineField({name: "imageAlt", title: "Alt text for team image", type: "string", validation: (Rule) => Rule.max(140)}),
            defineField({name: "description", title: "Team description", type: "text", rows: 4}),
          ],
        },
      ],
    }),
    defineField({
      name: "coaches",
      title: "Coach bios",
      type: "array",
      of: [{type: "reference", to: [{type: "coach"}]}],
    }),
  ],
});

