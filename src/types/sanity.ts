import { Image } from 'sanity'

import { Link } from '@/sanity/types/schema'

export interface SanityType {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

export interface Asset {
  _ref: string
  _type: string
}

export interface SanityImage extends Image {
  asset: Asset
  quality: number
  contain: boolean
  _type?: 'image_data'
  alt: string
  maxHeight?: number
  maxWidth?: number
}

export interface LinkModel extends Omit<Link, '_type'> {
  _type: string
  slug?: Slug
}

export interface Slug {
  _type: string
  current: string
}

export interface Author {
  name: string
}

export interface Post extends SanityType {
  body: any[]
  title: string
  author: Author
  mainImage: SanityImage
  publishedAt: string
  slug: Slug
}
