import { groq } from 'next-sanity'
import { clientFetch } from '../lib/client'
import { Result } from '@/types/sanity'

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
  const header = response[0] as Result

  return header
}
