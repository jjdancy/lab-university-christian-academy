import {defineField, defineType} from "sanity";

export const pageFacilities = defineType({
  name: "page.facilities",
  title: "Facilities Page Content",
  type: "document",
  description:
    "Edit the content shown on the Facilities page. Layout and design stay locked in code.",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({name: "eyebrow", title: "Hero label", type: "string", validation: (Rule) => Rule.max(40)}),
        defineField({name: "title", title: "Main headline", type: "string", validation: (Rule) => Rule.required().max(90)}),
        defineField({name: "lead", title: "Intro paragraph", type: "text", rows: 4, validation: (Rule) => Rule.required()}),
        defineField({name: "backgroundImage", title: "Background image", type: "image", options: {hotspot: true}, validation: (Rule) => Rule.required()}),
        defineField({name: "backgroundImageAlt", title: "Alt text for background image", type: "string", validation: (Rule) => Rule.required().max(140)}),
      ],
    }),
    defineField({
      name: "facilityOverview",
      title: "Facility overview",
      type: "object",
      fields: [
        defineField({name: "title", title: "Overview headline", type: "string", validation: (Rule) => Rule.required().max(90)}),
        defineField({name: "body", title: "Overview text", type: "text", rows: 6, validation: (Rule) => Rule.required()}),
        defineField({name: "bullets", title: "Bullets", type: "array", of: [{type: "string"}]}),
      ],
    }),
    defineField({
      name: "facilityAreas",
      title: "Key facilities",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({name: "title", title: "Facility name", type: "string", validation: (Rule) => Rule.required().max(90)}),
            defineField({name: "description", title: "Facility description", type: "text", rows: 4, validation: (Rule) => Rule.required()}),
            defineField({name: "bullets", title: "Bullets", type: "array", of: [{type: "string"}]}),
            defineField({
              name: "image",
              title: "Facility image",
              type: "image",
              options: {hotspot: true},
              validation: (Rule) => Rule.required(),
            }),
            defineField({name: "imageAlt", title: "Alt text for facility image", type: "string", validation: (Rule) => Rule.required().max(140)}),
          ],
        },
      ],
    }),
  ],
});

