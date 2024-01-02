import { groq } from 'next-sanity'

import { clientFetch } from '@/sanity/lib/client'

import { LinkModel } from '@/types/sanity'

export const getFooter = async () => {
  const query = groq`*[_type=="navigation_setting"] {
    footer {
      ...,
      columns[] {
        _key,
          title,
          links[] {
            _key,
            title,
            link->{
              _type,
              slug
            }
          }
      }
    }
  }
`

  const response = await clientFetch(query)
  const footer = response[0] as GetFooterResult

  return footer
}

export interface GetFooterResult {
  footer: Footer
}

export interface Footer {
  columns: FooterColumn[]
  description: string
}

export interface FooterColumn {
  _key: string
  title: string
  links: FooterLink[]
}

export interface FooterLink {
  _key: string
  title: string
  link: LinkModel
}
