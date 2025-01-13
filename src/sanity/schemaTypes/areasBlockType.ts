import { defineArrayMember, defineField, defineType } from "sanity";

export const areasBlockType = defineType({
  name: "areasBlock",
  type: "object",
  title: "Bloco de Áreas",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Título da Área",
    }),
    defineField({
      name: "areas",
      type: "array",
      title: "Áreas",
      description: "Liste as áreas para este bloco",
      of: [
        defineArrayMember({
          type: "areas",
        }),
      ],
    }),
  ],
});
