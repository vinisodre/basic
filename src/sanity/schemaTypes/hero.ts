import {defineField, defineType} from 'sanity'

export const hero = defineType({
  name: 'Hero',
  title: 'Banner Principal',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      description: 'Título do banner',
      type: 'string',
    }),
    defineField({
        name: 'subtitle',
        description: 'Subtítulo do banner',
        type: 'string',
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
        description: "O link para a área específica.",
        hidden: ({ document }) => !document?.hasButton, // Hide link if hasButton is false
      }),
      defineField({
        name: "linkText",
        title: "Texto do botão",
        type: "string",
        description: "Mostra o texto do botão.",
        hidden: ({ document }) => !document?.hasButton, // Hide buttonText if hasButton is false
        validation: (Rule) => Rule.required().max(10),
      }),
      defineField({
        name: "image",
        description: "Imagem do banner principal",
        type: "image",
      }),
  ],
})

