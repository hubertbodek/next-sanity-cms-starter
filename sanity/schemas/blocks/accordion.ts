export default {
  name: 'accordion_block',
  title: 'Accordion Block',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Single', value: 'single' },
          { title: 'Multiple', value: 'multiple' },
        ],
        layout: 'radio', // or 'dropdown'
      },
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'accordion_item' }],
    },
  ],
}
