import {defineField, defineType} from "sanity";

export const pageAcademics = defineType({
  name: "page.academics",
  title: "Academics Page Content",
  type: "document",
  description:
    "Edit the content that appears on the Academics page. Layout and design stay locked in code.",
  fieldsets: [
    {
      name: "hero",
      title: "Hero Section",
      options: {collapsible: true, collapsed: true},
    },
    {
      name: "approach",
      title: "Academics Section",
      options: {collapsible: true, collapsed: true},
    },
    {
      name: "schedule",
      title: "Daily Schedule",
      options: {collapsible: true, collapsed: true},
    },
    {
      name: "curriculum",
      title: "Curriculum & Academic Support",
      options: {collapsible: true, collapsed: true},
    },
    {
      name: "electives",
      title: "Electives & Innovation (Shown on Academics Page)",
      options: {collapsible: true, collapsed: false},
    },
  ],
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      fieldset: "hero",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Section label",
          description: "Small text above the main headline.",
          type: "string",
          validation: (Rule) => Rule.max(40),
        }),
        defineField({
          name: "title",
          title: "Main headline",
          description: "Large heading at the top of the page. Tip: keep it under ~10 words.",
          type: "string",
          validation: (Rule) => Rule.max(90),
        }),
        defineField({
          name: "lead",
          title: "Supporting introduction paragraph",
          description: "A short paragraph under the main headline.",
          type: "text",
          rows: 4,
          validation: (Rule) => Rule.max(600),
        }),
        defineField({
          name: "backgroundImage",
          title: "Hero background image",
          description: "Image shown behind the hero text.",
          type: "image",
          options: {hotspot: true},
        }),
        defineField({
          name: "backgroundImageAlt",
          title: "Alt text for the background image",
          description: "Required. Helps with accessibility and SEO.",
          type: "string",
          validation: (Rule) => Rule.max(140),
        }),
      ],
    }),
    defineField({
      name: "approach",
      title: "Academics Section",
      fieldset: "approach",
      type: "object",
      fields: [
        defineField({name: "title", title: "Section headline", type: "string", validation: (Rule) => Rule.max(90)}),
        defineField({name: "body", title: "Supporting text", type: "text", rows: 6}),
        defineField({
          name: "image",
          title: "Side image",
          description: "Image shown next to the Academics text.",
          type: "image",
          options: {hotspot: true},
        }),
        defineField({name: "imageAlt", title: "Alt text for the side image", type: "string", validation: (Rule) => Rule.max(140)}),
      ],
    }),
    defineField({
      name: "dailyStructure",
      title: "Daily schedule",
      fieldset: "schedule",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "time",
              title: "Time range",
              description: "Example: 8:00 – 8:50 AM",
              type: "string",
          validation: (Rule) => Rule.max(30),
            }),
            defineField({
              name: "label",
              title: "Row label (what shows on the left)",
              description:
                "Example: Period 1, Period 2, Break, Lunch, Electives. Tip: use the exact words `Break` and `Lunch` to get the grey styling.",
              type: "string",
          validation: (Rule) => Rule.max(40),
            }),
            defineField({
              name: "subject",
              title: "Subject (optional)",
              description: "Shown after a dot · If blank, only the row label shows.",
              type: "string",
              validation: (Rule) => Rule.max(40),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "curriculum",
      title: "Curriculum & academic support",
      fieldset: "curriculum",
      type: "object",
      fields: [
        defineField({name: "title", title: "Core courses headline", type: "string", validation: (Rule) => Rule.max(90)}),
        defineField({name: "body", title: "Intro paragraph", type: "text", rows: 6}),
      ],
    }),
    defineField({
      name: "electivesSection",
      title: "Electives & innovation (shown on Academics page)",
      fieldset: "electives",
      description: "This section appears inside /academics. No separate Electives page is required.",
      type: "object",
      options: {collapsible: true, collapsed: false},
      fields: [
        defineField({
          name: "eyebrow",
          title: "Electives label",
          type: "string",
          validation: (Rule) => Rule.max(40),
        }),
        defineField({
          name: "title",
          title: "Electives headline",
          type: "string",
          validation: (Rule) => Rule.max(90),
        }),
        defineField({
          name: "intro",
          title: "Intro paragraph",
          type: "text",
          rows: 4,
          validation: (Rule) => Rule.max(800),
        }),
        defineField({
          name: "paragraph2",
          title: "Second paragraph (optional)",
          type: "text",
          rows: 4,
        }),
        defineField({
          name: "cards",
          title: "Elective cards",
          description:
            "Add one card for each elective (basketball, coding, broadcasting, etc.).",
          type: "array",
          validation: (Rule) => Rule.min(0),
          of: [
            {
              type: "object",
              fields: [
                defineField({name: "title", title: "Elective title", type: "string", validation: (Rule) => Rule.max(60)}),
                defineField({
                  name: "description",
                  title: "Short description",
                  type: "text",
                  rows: 3,
                  validation: (Rule) => Rule.max(180),
                }),
                defineField({
                  name: "image",
                  title: "Elective image (optional)",
                  type: "image",
                  options: {hotspot: true},
                }),
                defineField({
                  name: "imageAlt",
                  title: "Alt text for the image",
                  type: "string",
                  validation: (Rule) => Rule.max(140),
                  description:
                    "Write a short description of the image (helps accessibility).",
                }),
                defineField({
                  name: "iconImage",
                  title: "Icon/badge image (optional)",
                  type: "image",
                  options: {hotspot: true},
                }),
                defineField({
                  name: "iconAlt",
                  title: "Alt text for the icon",
                  type: "string",
                  validation: (Rule) => Rule.max(140),
                  description:
                    "Write alt text for the icon image if you upload one.",
                }),
              ],
            },
          ],
        }),
        defineField({
          name: "scheduleTitle",
          title: "Schedule block title",
          type: "string",
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: "scheduleBody",
          title: "Schedule block text",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.max(250),
        }),
        defineField({name: "ctaLabel", title: "CTA button text", type: "string", validation: (Rule) => Rule.max(40)}),
        defineField({
          name: "ctaHref",
          title: "CTA link",
          type: "string",
          description:
            "Where the button takes visitors. Example: `/admissions#tour`",
        }),
        defineField({
          name: "sideImage",
          title: "Electives feature image",
          type: "image",
          options: {hotspot: true},
        }),
        defineField({
          name: "sideImageAlt",
          title: "Alt text for the feature image",
          type: "string",
          validation: (Rule) => Rule.max(140),
          description: "Required. Describe the image for accessibility.",
        }),
      ],
    }),
  ],
});

