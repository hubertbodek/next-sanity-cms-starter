import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'appearance_setting',
  title: 'Appearance',
  type: 'document',
  preview: {
    prepare: () => ({
      title: 'Appearance',
    }),
  },
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image_data',
    }),
  ],
})
