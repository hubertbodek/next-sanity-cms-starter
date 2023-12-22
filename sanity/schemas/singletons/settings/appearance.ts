import { defineField, defineType, defineArrayMember } from 'sanity'

export default defineType({
  name: 'appearance_setting',
  title: 'Appearance',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'imageData',
    }),
  ],
})
