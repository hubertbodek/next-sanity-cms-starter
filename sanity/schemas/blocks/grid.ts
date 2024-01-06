import { defineField, defineType } from 'sanity'

const content = ['richtext_block', 'image_data', 'accordion_block', 'article_card_block']

export default defineType({
  name: 'grid_block',
  title: 'Grid Block',
  type: 'object',
  fields: [
    defineField({
      name: 'text_container',
      title: 'Text Container',
      type: 'text_container',
    }),
    defineField({
      name: 'columns',
      title: 'Columns on Desktop',
      type: 'number',
      description: 'Number of columns in the grid on desktop (1024px and up)',
    }),
    defineField({
      name: 'columns_tablet',
      title: 'Columns on Tablet',
      type: 'number',
      description: 'Number of columns in the grid on tablet (between 768px and 1024px)',
    }),
    defineField({
      name: 'columns_mobile',
      title: 'Columns on Mobile',
      type: 'number',
      description: 'Number of columns in the grid on mobile (up to 768px)',
    }),
    defineField({
      name: 'one_line_mobile',
      title: 'One Line on Mobile',
      type: 'boolean',
      initialValue: false,
      description:
        'If true, the grid will only have one line on mobile and will scroll/swipe horizontally',
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
  preview: {
    select: {
      title: 'text_container.title',
    },
    prepare: ({ title }) => ({
      title: title ?? 'Grid',
    }),
  },
})
