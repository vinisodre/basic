import {defineField, defineType} from 'sanity'

export const topbar = defineType({
  name: 'Topbar',
  title: 'Barra do topo',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      description: 'Texto do topo',
      type: 'string',
    }),
  ],
})