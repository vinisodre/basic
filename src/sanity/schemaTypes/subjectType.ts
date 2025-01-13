import { defineField, defineType } from "sanity";

export const subjectType = defineType({
  name: "subject",
  type: "document",
  title: "Disciplina",
  fields: [
    defineField({
      name: "name",
      title: "Disciplina",
      type: "string",
      description: "Disciplina",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Endereço da categoria",
      type: "slug",
      description: "Gere um endereço para esta categoria",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name",
        maxLength: 100,
        slugify: (input) =>
          input
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/[^\w\s]/gi, "")
            .replace(/\s+/g, "-")
            .slice(0, 100),
      },
    }),
  ],
});
