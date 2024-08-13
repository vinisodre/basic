import { type SchemaTypeDefinition } from 'sanity'
import { basic } from './basic'
import { areasType } from './areasType'
import { hero } from './hero'
import { blogPost } from './blogPost'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    basic, areasType, hero, blogPost,
  ],
}
