import { Rule } from '@sanity/types'
import { defineType } from 'sanity'

export default defineType({
  title: 'Testimonial Card',
  name: 'testimonial_card_block',
  type: 'object',
  fields: [
    {
      name: 'review',
      title: 'Review',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: "Reviewer's Name",
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: "Reviewer's Title",
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
})
