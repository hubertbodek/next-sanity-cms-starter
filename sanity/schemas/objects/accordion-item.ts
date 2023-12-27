export default {
  name: 'accordion_item',
  title: 'Accordion Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}
