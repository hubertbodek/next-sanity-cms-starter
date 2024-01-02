import { defineType } from 'sanity'

export default defineType({
  name: 'carousel_block',
  title: 'Carousel',
  type: 'object',
  fields: [
    {
      name: 'text_container',
      title: 'Text Container',
      type: 'text_container',
    },
    {
      name: 'options',
      title: 'Options',
      type: 'object',
      fields: [
        {
          name: 'align',
          title: 'Alignment',
          type: 'string',
          initialValue: 'start',
          options: {
            list: [
              { title: 'Start', value: 'start' },
              { title: 'Center', value: 'center' },
              { title: 'End', value: 'end' },
            ],
          },
        },
        {
          name: 'loop',
          title: 'Loop',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'autoplay',
          title: 'Autoplay',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'arrows',
          title: 'Arrows',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'bullets',
          title: 'Bullets',
          type: 'boolean',
          initialValue: true,
        },
      ],
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'carousel_item' }],
    },
  ],
  preview: {
    select: {
      title: 'text_container.title',
    },
    prepare: ({ title }) => ({
      title: title ?? 'Carousel',
    }),
  },
})
