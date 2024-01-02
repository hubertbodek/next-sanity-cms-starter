import { type SanityImageObject } from '@sanity/image-url/lib/types/types'
import { defineType } from 'sanity'

export interface ImageData extends SanityImageObject {
  _type: 'imageData'
  alt?: string
  quality?: number
  contain?: boolean
}

export default defineType({
  name: 'image_data',
  title: 'Image Data',
  type: 'image',
  fields: [
    {
      name: 'alt',
      title: 'Alternative text',
      description: 'Wymagany przez SEO - opisuje obrazek dla osób niewidomych',
      type: 'string',
    },
    {
      name: 'quality',
      title: 'Quality (0-100)',
      description:
        'Domyślnie 75, stosować rozważnie - zmienia rozmiar zdjęcia co może wpłynąć na wydajność strony',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100),
      initialValue: 75,
    },
    {
      name: 'contain',
      title: 'Contain',
      description:
        'Zdjęcie zostanie przeskalowane tak, aby całe było widoczne (użwyać w ostateczności)',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'maxWidth',
      title: 'Max Width',
      description:
        'Max image width in pixels. If not set, the image will be displayed in its original size.',
      type: 'number',
    },
    {
      name: 'maxHeight',
      title: 'Max Height',
      description:
        'Max image height in pixels. If not set, the image will be displayed in its original size.',
      type: 'number',
    },
  ],
  options: {
    hotspot: true,
  },
})
