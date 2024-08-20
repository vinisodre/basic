import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the blog post",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "A brief description of the blog post",
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      description: "The text for the button link",
    }),
    defineField({
      name: "image",
      description: "Imagem de destaque do post",
      type: "image",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
        },
      ],
      description: "The main content of the blog post",
    }),
  ],
});
