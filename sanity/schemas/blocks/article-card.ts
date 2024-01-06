import { defineField } from 'sanity'

export default defineField({
  title: 'Article Card',
  name: 'article_card_block',
  type: 'object',
  fields: [
    defineField({
      title: 'Article',
      name: 'post',
      type: 'reference',
      to: [{ type: 'post' }],
    }),
  ],
  preview: {
    select: {
      title: 'post.title',
      media: 'post.main_image',
    },
  },
})
