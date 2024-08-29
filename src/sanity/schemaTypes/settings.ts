import {defineField, defineType} from 'sanity'

export const settings = defineType({
  name: 'Settings',
  title: 'Informações gerais',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      description: 'Nome do projeto',
      type: 'string',
    }),
    defineField({
        name: 'address',
        description: 'Endereço do projeto',
        type: 'string',
      }),
  ],
})