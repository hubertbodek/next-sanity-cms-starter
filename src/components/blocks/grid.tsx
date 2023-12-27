import BlockMapper from '@/components/blocks'
import { cn } from '@/lib/class-names'

interface GridBlockProps {
  columns: number
  blocks: any
}

const Grid = ({ columns = 2, blocks }: GridBlockProps) => {
  const gridTemplateColumns = `repeat(${columns}, 1fr)`

  // TODO: Add support for responsive columns
  return (
    <div
      className={cn('container my-20 grid gap-20 [&>*]:px-0', {
        'grid-cols-1': columns === 1,
        'grid-cols-1 lg:grid-cols-2': columns === 2,
        'grid-cols-1 lg:grid-cols-3': columns === 3,
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-4': columns === 4,
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-5': columns === 5,
        'grid-cols-1 md:grid-cols-2 lg:grid-cols-6': columns === 6,
        'grid-cols-1 md:grid-cols-3 lg:grid-cols-7': columns === 7,
        'grid-cols-1 md:grid-cols-4 lg:grid-cols-8': columns === 8,
        'grid-cols-1 md:grid-cols-4 lg:grid-cols-9': columns === 9,
        'grid-cols-1 md:grid-cols-5 lg:grid-cols-10': columns === 10,
        'grid-cols-1 md:grid-cols-5 lg:grid-cols-11': columns === 11,
        'grid-cols-1 md:grid-cols-6 lg:grid-cols-12': columns === 12,
      })}
    >
      <BlockMapper blocks={blocks} />
    </div>
  )
}

export default Grid
