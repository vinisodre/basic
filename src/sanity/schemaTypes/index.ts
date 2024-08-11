import { type SchemaTypeDefinition } from 'sanity'
import { basic } from './basic'
import { areasType } from './areasType'
import { hero } from './hero'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    basic, areasType, hero,
  ],
}
