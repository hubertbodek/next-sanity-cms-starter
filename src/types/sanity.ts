import { Image } from 'sanity'

import { Link } from '@/sanity/types/schema'

export interface SanityImage extends Image {
  asset: Asset
  quality: number
  contain: boolean
  _type?: 'image_data'
  alt: string
  maxHeight?: number
  maxWidth?: number
}
export interface Asset {
  _ref: string
  _type: string
}

export interface LinkModel extends Omit<Link, '_type'> {
  _type: string
  slug?: Slug
}

export interface Slug {
  current: string
  _type: string
}

export interface Author {
  name: string
}
