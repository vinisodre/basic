// ./schemas/heroType.ts

import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  type: "object",
  title: "Banner",
  fields: [
    defineField({
      name: "title",
      description: "Título do banner",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      description: "Subtítulo do banner",
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
      description: "Se tiver botão, qual é o link para a área específica?",
      options: {
        if: ({ parent }) => parent?.hasButton,
      },
    }),
    defineField({
      name: "linkText",
      title: "Texto do botão",
      type: "string",
      description: "Se tiver botão, qual é o texto do botão?",
      options: {
        if: ({ parent }) => parent?.hasButton,
      },
    }),
    defineField({
      name: "image",
      type: "image",
      description: "Imagem do banner principal",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
  ],
});
