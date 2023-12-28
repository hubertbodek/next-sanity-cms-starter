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

import ImageBlock from './image-block'

interface Item {
  content: SanityImage
  width: '1/4' | '1/3' | '1/2' | '2/3' | '3/4' | 'full'
}

// TODO: add support for custom carousel height and gaps

interface CarouselBlockProps {
  options?: {
    align?: 'start' | 'center' | 'end'
    loop?: boolean
    autoplay?: boolean
    arrows?: boolean
    bullets?: boolean
  }
  items?: Item[]
}

export default function CarouselBlock({ items, options }: CarouselBlockProps) {
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
    <div className="container py-20">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 1500,
          }),
        ]}
        opts={{
          align: carouselOptions.align,
          loop: carouselOptions.loop,
        }}
      >
        <CarouselContent className="-ml-12">
          {items?.map((item) => (
            <CarouselItem key={item.content.asset._ref} content={item.content} width={item.width} />
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

const CarouselItem = ({ content, width }: Item) => {
  const widthClass = {
    '1/4': 'basis-1/4',
    '1/3': 'basis-1/3',
    '1/2': 'basis-1/2',
    '2/3': 'basis-2/3',
    '3/4': 'basis-3/4',
    full: 'basis-full',
  }

  return (
    <CarouselItemUIComponent className={cn('pl-12', widthClass[width])}>
      <div className="text-h2 relative flex h-64 items-center justify-center overflow-hidden rounded">
        <ImageBlock {...content} fill />
      </div>
    </CarouselItemUIComponent>
  )
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
