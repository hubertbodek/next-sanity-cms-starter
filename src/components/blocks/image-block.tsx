import Image from 'next/image'

import { cn } from '@/lib/class-names'
import { prepareImg } from '@/lib/prepare-img'
import { SanityImage } from '@/types/sanity'

export default function ImageBlock(props: SanityImage) {
  const img = prepareImg(props, props.alt)
  // TODO: add support for fill property

  return (
    <Image
      src={img.source.src}
      alt={img.source.alt}
      className={cn('h-[inherit]', props.contain ? 'object-contain' : 'object-cover')}
      width={img.dimensions.width}
      height={img.dimensions.height}
    />
  )
}
