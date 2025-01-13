import { defineField, defineType } from "sanity";

export const iframeType = defineType({
  name: "iframeUrl",
  title: "URL do Iframe",
  type: "text",
}),
defineField({
  name: "iframe",
  title: "Iframe",
  type: "iframe",
  options: {
    url: (options) => options.iframeUrl, // Usa o valor do campo iframeUrl como URL do iframe
    height: 500, // Altura do iframe
    width: 800, // Largura do iframe
  },
});
