import { defineField, defineType } from "sanity";

export const userRoleType = defineType({
  name: "userRole",
  type: "document",
  title: "Função do usuario",
  fields: [
    defineField({
      name: "name",
      title: "Função",
      type: "string",
      description: "Função do usuario",
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
