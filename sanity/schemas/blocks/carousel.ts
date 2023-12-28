import { defineType } from 'sanity'

export default defineType({
  name: 'carousel_block',
  title: 'Carousel',
  type: 'object',
  fields: [
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
})
