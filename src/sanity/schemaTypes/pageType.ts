import { defineArrayMember, defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "Nome da página",
    }),
    defineField({
      name: "slug",
      title: "Endereço da página",
      type: "slug",
      description: "Qual será o endereço da página?",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      description: "Coloque os blocos que irão aparecer na página",
      of: [
        defineArrayMember({
          name: "hero",
          type: "hero",
        }),
        defineArrayMember({
          name: "twoColumnsText",
          type: "twoColumnsText",
        }),
        defineArrayMember({
          name: "imageText",
          type: "imageText",
        }),
        defineArrayMember({
          name: "areasBlock",
          type: "areasBlock",
        }),
      ],
    }),
  ],
});
