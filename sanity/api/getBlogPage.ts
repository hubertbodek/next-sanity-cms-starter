import { groq } from 'next-sanity'

import { clientFetch } from '@/sanity/lib/client'

import { BlockModel } from '@/components/blocks'

import { contentAttributes } from '../fragments/content'

export const getBlogPage = async () => {
  const query = groq`*[_type=="blog_page"] {
  content_before[] ${contentAttributes},
  content_after[] ${contentAttributes},
}`

  const response = await clientFetch(query)
  const blogPage = response[0] as GetBlogPageResult

  return blogPage
}

export type GetBlogPageResult = {
  content_before: BlockModel[]
  content_after: BlockModel[]
}
