import { defineField, defineType } from 'sanity'

import { blockTypes } from '../blocks'

export default defineType({
  name: 'generic_page',
  title: 'Generic Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: blockTypes,
    }),
  ],
})
