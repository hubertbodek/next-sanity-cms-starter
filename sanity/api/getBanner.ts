import { groq } from 'next-sanity'

import { clientFetch } from '@/sanity/lib/client'

export const getBanner = async () => {
  const query = groq`*[_type=="banner_setting"]`

  const response = await clientFetch(query)
  const header = response[0] as GetBannerResult

  return header
}

export interface GetBannerResult {
  text: any // TODO: type PortableText
  show: boolean
}
