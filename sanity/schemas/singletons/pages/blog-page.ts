import { defineField, defineType } from 'sanity'

import { blockTypes } from '../../blocks'

export default defineType({
  name: 'blog_page',
  title: 'Blog Page',
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
      name: 'content_before',
      title: 'Content Before',
      description: 'Content before the posts',
      type: 'array',
      of: blockTypes,
    }),
    defineField({
      name: 'content_after',
      title: 'Content After',
      description: 'Content after the posts',
      type: 'array',
      of: blockTypes,
    }),
  ],
})
