import { defineField, defineType } from "sanity";

export const twoColumnsText = defineType({
  name: "twoColumnsText",
  type: "object",
  title: "Texto em duas colunas",
  fields: [
    defineField({
      name: "title",
      description: "Título da seção",
      type: "string",
    }),
    defineField({
      name: "column1",
      description: "Coluna 1",
      type: "string",
    }),
    defineField({
      name: "column2",
      description: "Coluna 2",
      type: "string",
    }),
    defineField({
      name: "hasButton",
      title: "Tem botão?",
      type: "boolean",
      description: "Indica se o botão deve ser exibido.",
      options: {
        layout: "checkbox",
      },
    }),
    defineField({
        name: "link",
        title: "Link",
        type: "string",
    }),
    defineField({
      name: "buttonText",
      title: "Texto do botão",
      type: "string",
  })
  ],
});
