import {defineField, defineType} from "sanity";

export const pageContact = defineType({
  name: "page.contact",
  title: "Contact Information",
  type: "document",
  description:
    "Edit the contact details shown on the Contact page.",
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        defineField({name: "eyebrow", title: "Hero label", type: "string", validation: (Rule) => Rule.max(40)}),
        defineField({name: "title", title: "Page headline", type: "string", validation: (Rule) => Rule.required().max(90)}),
        defineField({name: "lead", title: "Intro paragraph", type: "text", rows: 4, validation: (Rule) => Rule.required()}),
      ],
    }),
    defineField({
      name: "details",
      title: "School contact details",
      type: "object",
      fields: [
        defineField({name: "address", title: "Address", type: "string", validation: (Rule) => Rule.required().max(120)}),
        defineField({name: "phone", title: "Phone number", type: "string", validation: (Rule) => Rule.required().max(40)}),
        defineField({name: "hours", title: "Operating hours", type: "string", validation: (Rule) => Rule.required().max(120)}),
        defineField({name: "email", title: "Email (optional)", type: "string", validation: (Rule) => Rule.max(120)}),
        defineField({name: "mapEmbedUrl", title: "Map embed link (optional)", type: "url"}),
      ],
    }),
  ],
});

