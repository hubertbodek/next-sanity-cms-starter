interface GridBlockProps {
  columns: number
  content: any
}

const GridBlock = ({ columns = 2, content }: GridBlockProps) => {
  const gridTemplateColumns = `repeat(${columns}, 1fr)`

  return (
    <div className="grid gap-4" style={{ gridTemplateColumns }}>
      {content.map((block: any, index: number) => (
        <div key={index} className="col-span-1">
          x
        </div>
      ))}
    </div>
  )
}

export default GridBlock
