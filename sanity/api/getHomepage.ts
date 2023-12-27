import { groq } from 'next-sanity'

import { clientFetch } from '@/sanity/lib/client'

import { BlockModel } from '@/components/blocks'

import { content } from '../fragments/content'

export const getHomepage = async () => {
  const query = groq`*[_type=="home_page"] {
  ...,
  ${content}
}`

  const response = await clientFetch(query)
  const homepage = response[0] as GetHomepageResult

  return homepage
}

export type GetHomepageResult = {
  content: BlockModel[]
}
