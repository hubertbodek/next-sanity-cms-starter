import { groq } from 'next-sanity'

import { clientFetch } from '@/sanity/lib/client'

import { LinkModel } from '@/types/sanity'

export const getHeader = async () => {
  const query = groq`*[_type=="navigation_setting"] {
    "header": header[] {
      title,
      link->{
        _type,
        slug
      },
      dropdown[] {
        title,
        link->{
          _type,
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
  link: LinkModel | null
  dropdown: Dropdown[] | null
}

export type Dropdown = {
  title: string
  link: LinkModel
}
