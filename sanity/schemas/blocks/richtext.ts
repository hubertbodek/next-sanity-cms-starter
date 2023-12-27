import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'richtext_block',
  title: 'Rich Text',
  type: 'object',
  fields: [
    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})
