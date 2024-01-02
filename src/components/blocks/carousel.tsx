'use client'

import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from 'react'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem as CarouselItemUIComponent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { cn } from '@/lib/class-names'
import { SanityImage } from '@/types/sanity'

import TextContainer, { TextContainerProps } from '../text-container'
import ImageBlock from './image-block'
import { TestimonialCard, TestimonialCardProps } from './testimonial-card'

interface Item {
  content?: SanityImage
  testimonial?: TestimonialCardProps
  width: '1/4' | '1/3' | '1/2' | '2/3' | '3/4' | 'full'
}

interface CarouselBlockProps {
  text_container?: TextContainerProps
  options?: {
    align?: 'start' | 'center' | 'end'
    loop?: boolean
    autoplay?: boolean
    arrows?: boolean
    bullets?: boolean
  }
  items?: Item[]
}

// TODO: add support for custom carousel height and gaps
export default function CarouselBlock({ text_container, items, options }: CarouselBlockProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const carouselOptions = {
    align: options?.align ?? 'start',
    loop: options?.loop ?? false,
    autoplay: options?.autoplay ?? false,
    arrows: options?.arrows ?? false,
    bullets: options?.bullets ?? true,
  }

  useEffect(() => {
    if (!api || !carouselOptions.bullets) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="container py-10 md:py-20">
      {Boolean(text_container) && <TextContainer {...text_container} />}
      <Carousel
        setApi={setApi}
        plugins={
          carouselOptions.autoplay
            ? [
                Autoplay({
                  delay: 1500,
                }),
              ]
            : undefined
        }
        opts={{
          align: carouselOptions.align,
          loop: carouselOptions.loop,
        }}
      >
        <CarouselContent className="-ml-12">
          {items?.map((item, idx) => (
            <CarouselItem
              key={`carousel-item-${idx}`}
              content={item.content}
              testimonial={item.testimonial}
              width={item.width}
            />
          ))}
        </CarouselContent>
        {carouselOptions.arrows && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
      {carouselOptions.bullets && <CarouselBullets current={current} count={count} />}
    </div>
  )
}

const isImageBlock = (content: any): content is SanityImage => {
  return content._type === 'image_data'
}

const CarouselItem = ({ content, testimonial, width }: Item) => {
  const widthClasses = {
    '1/4': 'md:basis-1/4',
    '1/3': 'md:basis-1/3',
    '1/2': 'md:basis-1/2',
    '2/3': 'md:basis-2/3',
    '3/4': 'md:basis-3/4',
    full: 'basis-full',
  }

  if (isImageBlock(content) && !testimonial) {
    return (
      <CarouselItemUIComponent className={cn('pl-12', widthClasses[width])}>
        <div className="text-h2 relative flex h-64 items-center justify-center overflow-hidden rounded">
          <ImageBlock {...content} fill />
        </div>
      </CarouselItemUIComponent>
    )
  }

  if (testimonial) {
    return (
      <CarouselItemUIComponent className={cn('pl-12', widthClasses[width])}>
        <TestimonialCard
          review={testimonial.review}
          name={testimonial.name}
          title={testimonial.title}
        />
      </CarouselItemUIComponent>
    )
  }

  return null
}

interface CarouselBulletsProps {
  current: number
  count: number
}

const CarouselBullets = ({ current, count }: CarouselBulletsProps) => {
  return (
    <div className="my-8 flex items-center justify-center gap-3">
      {Array.from({ length: count }).map((_, i) => {
        return (
          <div
            className={cn('size-2 rounded-full bg-primary-400/30', {
              'bg-primary/80': current === i + 1,
            })}
            key={i}
          />
        )
      })}
    </div>
  )
}
