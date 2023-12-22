import { groq } from 'next-sanity'

import { clientFetch } from '../lib/client'

export const getHeader = async () => {
  const query = groq`*[_type=="navigation_setting"] {
    "header": header[] {
      title,
      link->{
        slug
      },
      dropdown[] {
        title,
        link->{
          slug
        }
      }  
    }
  }`

  const response = await clientFetch(query)
  const header = response[0] as GetHeaderResult

  return header
}

export type GetHeaderResult = {
  header: Header[]
}

export type Header = {
  title: string
  link: Link | null
  dropdown: Dropdown[] | null
}

export type Link = {
  slug: Slug
}

export type Slug = {
  current: string
  _type: string
}

export type Dropdown = {
  title: string
  link: Link
}
