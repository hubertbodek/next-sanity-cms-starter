import { groq } from 'next-sanity'

import { clientFetch } from '@/sanity/lib/client'

import { Post } from '@/types/sanity'

export const getArticle = async (slug: string) => {
  const query = groq`*[_type=="post" && slug.current=="${slug}"] {
  ...,
  author->{name}
}`

  const response = await clientFetch(query)
  const article = response[0] as Post

  return article
}
