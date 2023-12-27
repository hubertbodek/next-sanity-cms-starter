import { groq } from 'next-sanity'

import { clientFetch } from '@/sanity/lib/client'

import { BlockModel } from '@/components/blocks'
import { Slug } from '@/types/sanity'

import { content } from '../fragments/content'

export const getPagesSlugs = async () => {
  const query = groq`*[_type=="generic_page"] {
    "slug": slug.current
  }`

  const response = await clientFetch(query)
  const slugs = response as Array<{ slug: string }>

  return slugs
}

export const getGenericPage = async (slug: string) => {
  const query = groq`*[_type=="generic_page" && slug.current=="${slug}"] {
  ...,
  ${content}
}`

  const response = await clientFetch(query)
  const genericPage = response[0] as GetGenericPageResult

  return genericPage
}

export type GetGenericPageResult = {
  title: string
  description: string
  slug: Slug
  content: BlockModel[]
}
