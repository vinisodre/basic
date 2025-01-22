import { defineField, defineType } from "sanity";

// Tipo customizado para o URL do iframe
export const iframeType = defineType({
  name: "iframeUrl",
  title: "URL do Iframe",
  type: "url", // Tipo adequado para URLs
});

// Schema para o iframe com configurações personalizadas
export const iframeSchema = defineType({
  name: "iframe",
  title: "Iframe",
  type: "object", // Um objeto, já que você quer configurações personalizadas
  fields: [
    defineField({
      name: "url",
      title: "URL do Iframe",
      type: "url", // Tipo de campo para a URL do iframe
      validation: (Rule) => Rule.uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "height",
      title: "Altura do Iframe",
      type: "number",
      initialValue: 500, // Valor padrão para altura
      validation: (Rule) => Rule.min(100).max(2000), // Limites para a altura
    }),
    defineField({
      name: "width",
      title: "Largura do Iframe",
      type: "number",
      initialValue: 800, // Valor padrão para largura
      validation: (Rule) => Rule.min(100).max(2000), // Limites para a largura
    }),
  ],
});
