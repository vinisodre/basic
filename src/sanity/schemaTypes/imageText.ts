import { defineField, defineType } from "sanity";

export const imageText = defineType({
  name: "imageText",
  type: "object",
  title: "Imagem e Texto",
  fields: [
    defineField({
      name: "title",
      description: "Título da seção",
      type: "string",
    }),
    defineField({
        name: "content",
        title: "Conteúdo",
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
      name: "hasOneButton",
      title: "Primeiro botão",
      type: "boolean",
      description: "Indica se este botão deve ser exibido. Se tiver apenas 1 botão, o segundo botão ficará oculto.",
    }),
    defineField({
        name: "linkButtonOne",
        title: "Link Botão 1",
        type: "string",
    }),
    defineField({
      name: "textButtonOne",
      title: "Texto Botão 1",
      type: "string",
  }),
    defineField({
        name: "hasTwoButtons",
        title: "Segundo botão",
        type: "boolean",
        description: "Só ative este se já tiver inserido o primeiro botão.",
      }),
      defineField({
        name: "textButtonTwo",
        title: "Texto Botão 2",
        type: "string",
    }),
      defineField({
          name: "linkButtonTwo",
          title: "Link Botão 2",
          type: "string",
      }),
      defineField({
        name: "image",
        description: "Imagem do banner principal",
        type: "image",
      }),
      defineField({
        name: "alt",
        description: "Descrição da imagem",
        type: "string",
      }),
  ],
});
