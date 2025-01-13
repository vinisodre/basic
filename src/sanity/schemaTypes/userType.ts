import { defineField, defineType } from "sanity";

export const userType = defineType({
  name: "user",
  type: "document",
  title: "Usuário",
  fields: [
    defineField({
      name: "name",
      title: "Nome",
      type: "string",
      description: "Nome do professor",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subject",
      title: "Disciplina",
      type: "string",
      description: "Disciplina do professor",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Endereço da página",
      type: "slug",
      description: "Qual será o endereço da página?",
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
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "profileImage",
      title: "Foto de perfil",
      type: "image",
      options: {
        hotspot: true, // Permite a seleção de foco na imagem
      },
    }),
    defineField({
      name: "bio",
      title: "Biografia",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "roles", // Referência ao schema "userRole"
      title: "Funções",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "userRole" }], // Faz referência ao schema userRole
        },
      ],
      options: {
        layout: "tags", // Permite a seleção múltipla
      },
    }),
    defineField({
      name: "subjects", // Referência ao schema "userRole"
      title: "Disciplinas",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "subject" }], // Faz referência ao schema userRole
        },
      ],
      options: {
        layout: "tags", // Permite a seleção múltipla
      },
    }),
    defineField({
      name: "socialLinks",
      title: "Links para Redes Sociais",
      type: "array", // Permite adicionar múltiplos links de redes sociais
      of: [
        {
          type: "object",
          title: "Rede Social",
          fields: [
            defineField({
              name: "platform",
              title: "Plataforma",
              type: "string",
              options: {
                list: [
                  { title: "Instagram", value: "instagram" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "Twitter", value: "twitter" },
                  { title: "Facebook", value: "facebook" },
                  { title: "Outra", value: "other" },
                ],
                layout: "dropdown", // Dropdown para escolher a rede social
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL do Perfil",
              type: "url",
              validation: (Rule) =>
                Rule.uri({
                  allowRelative: false, // Só permite URLs absolutas
                  scheme: ["http", "https"], // URLs válidas devem começar com http ou https
                }).required(),
            }),
          ],
        },
      ],
    }),
  ],
});
