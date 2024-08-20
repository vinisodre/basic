import { defineField, defineType } from "sanity";

export const twoColumnsText = defineType({
  name: "TwoColumnsText",
  title: "Texto em duas colunas",
  type: "document",
  fields: [
    defineField({
      name: "title",
      description: "Título da seção",
      type: "string",
    }),
    defineField({
      name: "text1",
      description: "Coluna 1",
      type: "string",
    }),
    defineField({
      name: "text2",
      description: "Coluna 2",
      type: "string",
    }),
    defineField({
      name: "hasButton",
      title: "Tem botão?",
      type: "boolean",
      description: "Indica se o botão deve ser exibido.",
    }),
    defineField({
        name: "link",
        title: "Link",
        type: "string",
    })
  ],
});
