import blocksMapperFactory from '@/lib/block-factory'

import AccordionBlock from './accordion'
import CarouselBlock from './carousel'
import Grid from './grid'
import ImageBlock from './image-block'
import RichText from './richtext'
import Separator from './separator'
import Teaser from './teaser'

// TODO: Load blocks dynamically
const blocks = {
  grid_block: Grid,
  teaser_block: Teaser,
  separator_block: Separator,
  richtext_block: RichText,
  image_data: ImageBlock,
  accordion_block: AccordionBlock,
  carousel_block: CarouselBlock,
}

type TypeName = keyof typeof blocks

export type BlockModel = {
  _type: TypeName
} & Parameters<(typeof blocks)[TypeName]>[0]

const Block = blocksMapperFactory(blocks)

export default function BlockMapper({ blocks }: { blocks: BlockModel[] }) {
  return blocks?.map(({ _type: typeName, ...props }, index) => (
    <Block key={`${typeName as string}--${index}`} typeName={typeName} props={props} />
  ))
}
