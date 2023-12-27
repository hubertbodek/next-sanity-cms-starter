import Image from 'next/image'

import { Button } from '@/components/ui/button'

import { cn } from '@/lib/class-names'
import { prepareImg } from '@/lib/prepare-img'
import { LinkModel, SanityImage } from '@/types/sanity'

import SanityLink from '../sanity-link'
import ImageBlock from './image-block'

interface TeaserProps {
  title: string
  description: string
  className?: string
  button?: {
    title: string
    link?: LinkModel
  }
  image?: SanityImage
}

export default function Teaser({ title, description, className, button, image }: TeaserProps) {
  return (
    <section
      className={cn(
        'container my-20 flex flex-col items-center gap-x-24 gap-y-16 pt-20 md:flex-row',
        className
      )}
    >
      <div className="flex-1 lg:max-w-xl">
        <h1 className="text-h1 leading-10">{title}</h1>
        <p className="text-paragraph md:!mt-12">{description}</p>
        {button && (
          <Button className="mt-3" size="lg">
            <SanityLink href={button?.link}>{button?.title}</SanityLink>
          </Button>
        )}
      </div>
      <div className="h-60 w-full md:h-96 md:flex-1">{image && <ImageBlock {...image} />}</div>
    </section>
  )
}
