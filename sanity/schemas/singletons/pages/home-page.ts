import { defineField, defineType } from 'sanity'

import { blockTypes } from '../../blocks'

export default defineType({
  name: 'home_page',
  title: 'Home Page',
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
      name: 'content',
      title: 'Content',
      type: 'array',
      of: blockTypes,
    }),
  ],
})
