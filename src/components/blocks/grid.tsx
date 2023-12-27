import BlockMapper from '@/components/blocks'

interface GridBlockProps {
  columns: number
  blocks: any
}

const Grid = ({ columns = 2, blocks }: GridBlockProps) => {
  const gridTemplateColumns = `repeat(${columns}, 1fr)`

  return (
    <div className="container my-20 grid gap-20 [&>*]:px-0" style={{ gridTemplateColumns }}>
      <BlockMapper blocks={blocks} />
    </div>
  )
}

export default Grid
