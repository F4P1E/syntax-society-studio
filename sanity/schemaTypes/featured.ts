import { defineField, defineType } from 'sanity'

export const featured = defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'reference', title: 'Reference', type: 'reference', to: [{ type: 'post' }, { type: 'event' }] }),
    defineField({ name: 'highlight', title: 'Highlight', type: 'boolean' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
})