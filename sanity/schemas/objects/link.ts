import { defineType } from 'sanity'

const linkTo = ['contact_page', 'blog_page', 'post']

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'reference',
  to: linkTo.map((type) => ({ type })),
})
