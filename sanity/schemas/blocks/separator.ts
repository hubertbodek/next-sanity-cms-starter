import { defineField } from 'sanity'

export default defineField({
  title: 'Separator',
  name: 'separator_block',
  type: 'object',
  fields: [
    defineField({
      title: 'Narrow',
      name: 'narrow',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Separator',
    }),
  },
})
