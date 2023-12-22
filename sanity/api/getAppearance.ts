import { groq } from 'next-sanity'

import { clientFetch } from '@/sanity/lib/client'

import { SanityImage } from '@/types/sanity'

export const getAppearance = async () => {
  const query = groq`*[_type=="appearance_setting"] {
    logo
  }`

  const response = await clientFetch(query)
  const header = response[0] as GetAppearanceResult

  return header
}

export interface GetAppearanceResult {
  logo: SanityImage
}
