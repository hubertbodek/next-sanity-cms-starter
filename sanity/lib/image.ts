import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

interface SanityImage extends Image {
  alt: string
  quality: number
  contain: boolean
}

export const urlForImage = (source: SanityImage) => {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}

export const getImageData = (source: SanityImage) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
