import { defineField, defineType } from 'sanity'

export const member = defineType({
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'avatar', title: 'Avatar', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', title: 'Bio', type: 'text' }),
    defineField({ name: 'links', title: 'Links', type: 'array', of: [{ type: 'url' }] }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
  ],
})
