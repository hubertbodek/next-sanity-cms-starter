import { Rule } from '@sanity/types'
import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Teaser',
  name: 'teaser_block',
  type: 'object',
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
    defineField({
      title: 'Button',
      name: 'button',
      type: 'button',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image_data',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({ title }) => ({
      title: title ?? 'Teaser',
    }),
  },
})
