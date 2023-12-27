import { defineField, defineType } from 'sanity'

const content = ['richtext_block', 'image_data']

export default defineType({
  name: 'grid_block',
  title: 'Grid Block',
  type: 'object',
  fields: [
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'number',
      description: 'Number of columns in the grid',
    }),
    defineField({
      name: 'blocks',
      title: 'Content',
      type: 'array',
      of: content.map((type) => ({ type })),
    }),
  ],
})
