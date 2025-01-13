import { defineField, defineType } from "sanity";

export const menuType = defineType({
  name: "menu",
  type: "document",
  title: "Menu / Footer",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      description: "Título do menu ou footer",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
    defineField({
      name: "menuItems",
      title: "Seções do Menu",
      type: "array",
      of: [
        {
          type: "object",
          title: "Seção",
          fields: [
            {
              name: "sectionTitle",
              title: "Título da Seção",
              type: "string",
            },
            {
              name: "links",
              title: "Links",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      title: "Texto do Link",
                      type: "string",
                    },
                    {
                      name: "linkType",
                      title: "Tipo de Link",
                      type: "string",
                      options: {
                        list: [
                          { title: "URL", value: "url" },
                          { title: "Página", value: "page" },
                        ],
                        layout: "radio", // Seleção entre URL ou Página
                      },
                    },
                    {
                      name: "url",
                      title: "URL",
                      type: "url",
                      hidden: ({ parent }) => parent?.linkType !== "url",
                    },
                    {
                      name: "page",
                      title: "Página",
                      type: "reference",
                      to: [{ type: "page" }],
                      hidden: ({ parent }) => parent?.linkType !== "page",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "footerSections",
      title: "Seções do Footer",
      type: "array",
      of: [
        {
          type: "object",
          title: "Seção",
          fields: [
            {
              name: "sectionTitle",
              title: "Título da Seção",
              type: "string",
            },
            {
              name: "links",
              title: "Links",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      title: "Texto do Link",
                      type: "string",
                    },
                    {
                      name: "linkType",
                      title: "Tipo de Link",
                      type: "string",
                      options: {
                        list: [
                          { title: "URL", value: "url" },
                          { title: "Página", value: "page" },
                        ],
                        layout: "radio", // Seleção entre URL ou Página
                      },
                    },
                    {
                      name: "url",
                      title: "URL",
                      type: "url",
                      hidden: ({ parent }) => parent?.linkType !== "url",
                    },
                    {
                      name: "page",
                      title: "Página",
                      type: "reference",
                      to: [{ type: "page" }],
                      hidden: ({ parent }) => parent?.linkType !== "page",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
