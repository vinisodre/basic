import { type SchemaTypeDefinition } from 'sanity'
import { settings } from './settings'
import { areasType } from './areasType'
import { heroType } from './heroType'
import { blogPost } from './blogPost'
import { topbar } from './topbar'
import { twoColumnsText } from './twoColumnsText'
import { imageText } from './imageText'
import { pageType } from './pageType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageType, settings, areasType, heroType, blogPost, topbar, twoColumnsText, imageText ],
}

