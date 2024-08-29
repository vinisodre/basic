import { defineType, defineField } from "sanity";

export const areasType = defineType({
  name: "areas",
  type: "object",
  title: "Áreas",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      description: "Título da área",
      validation: (Rule) => Rule.required().min(3).max(20),
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
      description: "Uma breve descrição da área",
      validation: (Rule) => Rule.min(10).max(100),
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
      description: "O link para a área específica.",
      hidden: ({ document }) => !document?.hasButton, // Hide link if hasButton is false
    }),
    defineField({
      name: "buttonText",
      title: "Texto do botão",
      type: "string",
      description: "Mostra o texto do botão.",
      hidden: ({ document }) => !document?.hasButton, // Hide buttonText if hasButton is false
      validation: (Rule) => Rule.required().max(10),
    }),
    defineField({
      name: "image",
      description: "Imagem da área",
      type: "image",
    }),
  ],
});
