import { defineType } from 'sanity'

export default defineType({
  name: 'carousel_item',
  title: 'Carousel Item',
  type: 'object',
  fields: [
    {
      name: 'width',
      title: 'Width',
      type: 'string',
      options: {
        list: [
          { title: '1/4', value: '1/4' },
          { title: '1/3', value: '1/3' },
          { title: '1/2', value: '1/2' },
          { title: '2/3', value: '2/3' },
          { title: '3/4', value: '3/4' },
          { title: 'Full', value: 'full' },
        ],
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'image_data',
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'testimonial_card_block',
    },
  ],
})
