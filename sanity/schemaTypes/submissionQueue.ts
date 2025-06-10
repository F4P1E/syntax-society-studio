import { defineField, defineType } from 'sanity'

export const submissionQueue = defineType({
  name: 'submission_queue',
  title: 'Submission Queue',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'submittedBy', title: 'Submitted By', type: 'string' }),
    defineField({ name: 'content', title: 'Content', type: 'text' }),
    defineField({ name: 'status', title: 'Status', type: 'string', options: { list: ['pending', 'approved', 'rejected'] } }),
    defineField({ name: 'submittedAt', title: 'Submitted At', type: 'datetime', initialValue: () => new Date().toISOString(), readOnly: true }),
  ],
})

import { event } from './event'
import { featured } from './featured'
import { post } from './post'
import { member } from './member'

export const schemaTypes = [post, member, event, featured, submissionQueue]