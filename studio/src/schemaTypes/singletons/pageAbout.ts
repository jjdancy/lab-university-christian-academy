import {defineField, defineType} from "sanity";

export const pageAbout = defineType({
  name: "page.about",
  title: "About Page Content",
  type: "document",
  description:
    "Edit the content shown on the About page. Layout and styling stay locked in code.",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Hero label",
          description: "Small text above the headline.",
          type: "string",
          validation: (Rule) => Rule.max(40),
        }),
        defineField({
          name: "title",
          title: "Page headline",
          description: "The main headline at the top of the page.",
          type: "string",
          validation: (Rule) => Rule.max(90),
        }),
        defineField({
          name: "lead",
          title: "Opening paragraph",
          description: "Short paragraph describing LAB U.",
          type: "text",
          rows: 4,
          validation: (Rule) => Rule.max(1200),
        }),
        defineField({
          name: "backgroundImage",
          title: "Background image",
          description: "Image shown behind the hero text.",
          type: "image",
          options: {hotspot: true},
        }),
        defineField({
          name: "backgroundImageAlt",
          title: "Alt text for background image",
          description: "Required for accessibility.",
          type: "string",
          validation: (Rule) => Rule.max(140),
        }),
      ],
    }),
    defineField({
      name: "missionVision",
      title: "Mission & Vision",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Card heading",
              type: "string",
              validation: (Rule) => Rule.max(90),
            }),
            defineField({
              name: "body",
              title: "Card text",
              description: "Text inside the mission/vision card.",
              type: "array",
              of: [{type: "block"}],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "whatMakesUsDifferent",
      title: "What makes LAB U different",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Reason title",
              type: "string",
              validation: (Rule) => Rule.max(90),
            }),
            defineField({
              name: "text",
              title: "Reason text",
              type: "text",
              rows: 3,
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "partnership",
      title: "Partnership with LABCITY",
      type: "object",
      fields: [
        defineField({
          name: "title",
          title: "Partnership headline",
          type: "string",
              validation: (Rule) => Rule.max(90),
        }),
        defineField({
          name: "description",
          title: "Partnership text",
          description: "Explains the LABCITY partnership in plain language.",
          type: "text",
          rows: 5,
        }),
        defineField({
          name: "images",
          title: "Partnership images",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: {hotspot: true},
                }),
                defineField({
                  name: "imageAlt",
                  title: "Alt text for this image",
                  type: "string",
                  validation: (Rule) => Rule.max(140),
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {title: "hero.title"},
  },
});

