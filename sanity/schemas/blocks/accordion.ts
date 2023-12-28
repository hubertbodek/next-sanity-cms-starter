import { defineField } from 'sanity'

export default defineField({
  name: 'accordion_block',
  title: 'Accordion Block',
  type: 'object',
  fields: [
    {
      name: 'text_container',
      title: 'Text Container',
      type: 'text_container',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Single', value: 'single' },
          { title: 'Multiple', value: 'multiple' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'accordion_item' }],
    },
  ],
})
