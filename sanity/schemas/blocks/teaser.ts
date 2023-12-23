import { Rule } from '@sanity/types'
import { defineField } from 'sanity'

export default defineField({
  title: 'Teaser',
  name: 'teaser_block',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
})
