import { defineField, defineType } from "sanity";

export const blogCategoryType = defineType({
  name: "blogCategory",
  type: "document",
  title: "Categoria de blog",
  fields: [
    defineField({
      name: "name",
      title: "Categoria",
      type: "string",
      description: "Adicione uma categoria ao blog",
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
