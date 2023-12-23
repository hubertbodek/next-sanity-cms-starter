import { defineType } from 'sanity'

export default defineType({
  name: 'grid_block',
  title: 'Grid Block',
  type: 'object',
  fields: [
    {
      name: 'columns',
      title: 'Columns',
      type: 'number',
      description: 'Number of columns in the grid',
    },
    {
      name: 'content',
      title: 'Content',
      description: 'Add content to the grid cells',
      type: 'array',
      of: [{ type: 'teaser_block' }],
    },
  ],
})
