import { PortableText } from '@portabletext/react'

import { cn } from '@/lib/class-names'

export interface TextContainerProps {
  title?: string
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  textAlign?: 'text-left' | 'text-center' | 'text-right'
  content?: any // TODO: type for portable text
}

export default function TextContainer({
  title,
  titleTag = 'h3',
  textAlign = 'text-center',
  content,
}: TextContainerProps) {
  const Title = titleTag

  return (
    <div
      className={cn('mb-20 max-w-2xl', {
        'ml-auto': textAlign === 'text-right',
        'mx-auto': textAlign === 'text-center',
        'mr-auto': textAlign === 'text-left',
      })}
    >
      <Title className={cn(`text-${titleTag}`, textAlign)}>{title}</Title>
      <div className={cn('text-paragraph mx-auto !mt-4 text-balance', textAlign)}>
        <PortableText value={content} />
      </div>
    </div>
  )
}
