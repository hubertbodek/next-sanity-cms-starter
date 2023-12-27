import { Button } from '@/components/ui/button'

import { TeaserBlock } from '@/sanity/types/schema'

import { cn } from '@/lib/class-names'
import { LinkModel } from '@/types/sanity'

import SanityLink from '../sanity-link'

interface TeaserProps {
  title: string
  description: string
  className?: string
  button?: {
    title: string
    link?: LinkModel
  }
}

export default function Teaser({ title, description, className, button }: TeaserProps) {
  return (
    <section
      className={cn(
        'container mt-20 flex flex-col items-center gap-10 py-20 md:flex-row',
        className
      )}
    >
      <div className="flex-1 lg:max-w-xl">
        <h1 className="text-h1">{title}</h1>
        <p className="text-paragraph mt-32">{description}</p>
        {button && (
          <Button className="mt-3" size="lg">
            <SanityLink href={button?.link}>{button?.title}</SanityLink>
          </Button>
        )}
      </div>
      <div className="h-60 w-full bg-gray-100 md:h-96 md:flex-1"></div>
    </section>
  )
}
