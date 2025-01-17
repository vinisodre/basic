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
      title: "Coluna 1",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
        },
      ],
      description: "Conteúdo curto do bloco",
    }),
    defineField({
      name: "column2",
      title: "Coluna 2",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
        },
      ],
      description: "Conteúdo curto do bloco",
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
    }),
  ],
});
