import BlockMapper from '@/components/blocks'
import { cn } from '@/lib/class-names'

import TextContainer, { TextContainerProps } from '../text-container'

interface GridBlockProps {
  text_container?: TextContainerProps
  columns: number
  columns_tablet?: number
  columns_mobile?: number
  one_line_mobile?: boolean
  blocks: any
  height: number
  align: 'start' | 'center' | 'end'
}

const Grid = ({
  text_container,
  columns = 2,
  columns_tablet = 2,
  columns_mobile = 1,
  one_line_mobile = false,
  blocks,
  height,
  align = 'start',
}: GridBlockProps) => {
  // TODO: Add support for responsive columns
  const cssVars = {
    '--grid-columns-desktop': columns,
    '--grid-columns-tablet': columns_tablet,
    '--grid-columns-mobile': one_line_mobile ? 1 : columns_mobile,
  } as React.CSSProperties

  return (
    <section className="container py-10 md:py-20" style={cssVars}>
      {Boolean(text_container) && <TextContainer {...text_container} />}
      <div
        style={{
          height: height ? `${height}px` : 'auto',
          alignItems: align,
        }}
        className={cn('grid-block grid gap-20 max-md:!h-auto [&>*]:px-0', {
          'max-md:-mx-8 max-md:flex max-md:!h-20 max-md:overflow-x-scroll max-md:py-2 max-md:pl-8 [&>*]:max-md:w-1/4 [&>*]:max-md:shrink-0 [&>*]:max-md:grow-0':
            one_line_mobile,
        })}
      >
        <BlockMapper blocks={blocks} />
      </div>
    </section>
  )
}

export default Grid
