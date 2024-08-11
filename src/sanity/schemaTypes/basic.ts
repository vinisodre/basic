import {defineField, defineType} from 'sanity'

export const basic = defineType({
  name: 'Basic',
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