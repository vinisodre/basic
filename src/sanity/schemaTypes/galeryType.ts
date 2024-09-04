import { defineField, defineType } from "sanity";

export const galeryType = defineType({
  name: "galery",
  type: "object",
  title: "Galery",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Título da Galeria",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Descrição",
      description: "Uma breve descrição da Galeria",
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Images",
      of: [
        defineField({
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alternative text",
            }),
          ],
        }),
      ],
      options: {
        layout: "grid",
      },
    }),
    // defineField({
    //   name: "display",
    //   type: "string",
    //   title: "Display as",
    //   description: "How should we display these images?",
    //   options: {
    //     list: [
    //       { title: "Stacked on top of eachother", value: "stacked" },
    //       { title: "In-line", value: "inline" },
    //       { title: "Carousel", value: "carousel" },
    //     ],
    //     layout: "radio", // <-- defaults to 'dropdown'
    //   },
    // }),
    // defineField({
    //   name: "zoom",
    //   type: "boolean",
    //   title: "Zoom enabled",
    //   description: "Should we enable zooming of images?",
    // }),
  ],
  // preview: {
  //   select: {
  //     images: "images",
  //     image: "images.0",
  //   },
  //   prepare(selection) {
  //     const { images, image } = selection;

  //     return {
  //       title: `Gallery block of ${Object.keys(images).length} images`,
  //       subtitle: `Alt text: ${image.alt}`,
  //       media: image,
  //     };
  //   },
  // },
});
