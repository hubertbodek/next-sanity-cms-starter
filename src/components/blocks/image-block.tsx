import Image from 'next/image'

import { cn } from '@/lib/class-names'
import { prepareImg } from '@/lib/prepare-img'
import { SanityImage } from '@/types/sanity'

interface ImageBlockProps extends SanityImage {
  className?: string
  fill?: boolean
}

export default function ImageBlock(props: ImageBlockProps) {
  const img = prepareImg(props, props.alt)
  // TODO: add support for fill property

  return (
    <Image
      src={img.source.src}
      alt={img.source.alt}
      className={cn(
        !props.maxHeight ? 'h-[inherit] max-h-[inherit]' : '',
        props.contain ? 'object-contain' : 'object-cover',
        props.className
      )}
      style={{
        maxWidth: props.maxWidth ?? undefined,
        maxHeight: props.maxHeight ?? undefined,
      }}
      width={!props.fill ? img.dimensions.width : undefined}
      height={!props.fill ? img.dimensions.height : undefined}
      fill={props.fill}
    />
  )
}
