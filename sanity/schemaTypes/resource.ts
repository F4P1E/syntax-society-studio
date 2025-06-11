import type { Rule } from 'sanity';

const resource = {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string'
    },
    {
      name: 'downloadUrl',
      title: 'Download URL',
      type: 'url'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'uploadDate',
      title: 'Upload Date',
      type: 'datetime'
    },
    {
      name: 'uploadedBy',
      title: 'Uploaded By',
      type: 'reference',
      to: [{ type: 'user' }] // Optional: if you track users in Sanity
    }
  ]
}

export default resource;
