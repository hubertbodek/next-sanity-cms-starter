import { cn } from '@/lib/class-names'

interface TeaserProps {
  title: string
  description: string
  className?: string
}

export default function Teaser({ title, description, className }: TeaserProps) {
  return (
    <section
      className={cn(
        'container mt-20 flex flex-col items-center gap-10 py-20 md:flex-row',
        className
      )}
    >
      <div className="flex-1 lg:max-w-xl">
        <h1 className="text-h1 text-primary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h1>
        <p className="text-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat asperiores hic, officiis
          reiciendis tempora facere.
        </p>
      </div>
      <div className="h-60 w-full bg-gray-100 md:h-96 md:flex-1"></div>
    </section>
  )
}
