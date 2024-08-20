import { type SchemaTypeDefinition } from 'sanity'
import { basic } from './basic'
import { areasType } from './areasType'
import { hero } from './hero'
import { blogPost } from './blogPost'
import { topbar } from './topbar'
import { twoColumnsText } from './twoColumnsText'
import { imageText } from './imageText'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    basic, areasType, hero, blogPost, topbar, twoColumnsText, imageText ],
}
