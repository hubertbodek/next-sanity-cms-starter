import { Image } from 'sanity'

export interface SanityImage extends Image {
  asset: Asset
  quality: number
  contain: boolean
  _type: string
  alt: string
}
export interface Asset {
  _ref: string
  _type: string
}

export interface LinkModel {
  _type: string
  slug: Slug
}

export interface Slug {
  current: string
  _type: string
}
