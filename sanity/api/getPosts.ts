import { groq } from 'next-sanity'

import { clientFetch } from '@/sanity/lib/client'

import { Author, SanityImage, Slug } from '@/types/sanity'

export const getPosts = async () => {
  const query = groq`*[_type=="post"] {
    title,
    mainImage,
    author->{name},
    slug
  }
`

  const response = await clientFetch(query)
  const posts = response as Post[]

  return posts
}

interface Post {
  title: string
  mainImage: SanityImage
  author: Author
  slug: Slug
}
