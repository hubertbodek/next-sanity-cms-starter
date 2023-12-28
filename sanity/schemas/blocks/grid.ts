import { defineField, defineType } from 'sanity'

const content = ['richtext_block', 'image_data', 'accordion_block']

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
      name: 'height',
      title: 'Height',
      type: 'number',
      description: 'Height of the section in pixels',
    }),
    defineField({
      name: 'align',
      title: 'Alignment',
      description: 'Horizontal alignment of the grid',
      type: 'string',
      initialValue: 'start',
      options: {
        list: [
          { title: 'Start', value: 'start' },
          { title: 'Center', value: 'center' },
          { title: 'End', value: 'end' },
        ],
      },
    }),
    defineField({
      name: 'blocks',
      title: 'Content',
      type: 'array',
      of: content.map((type) => ({ type })),
    }),
  ],
})
