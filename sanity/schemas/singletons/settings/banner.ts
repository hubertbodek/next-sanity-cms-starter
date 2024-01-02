import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'banner_setting',
  title: 'Banner',
  type: 'document',
  preview: {
    prepare: () => ({
      title: 'Banner',
    }),
  },
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'show',
      title: 'Show',
      type: 'boolean',
    }),
  ],
})
