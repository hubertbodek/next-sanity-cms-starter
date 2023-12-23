import grid from './grid'
import teaser from './teaser'

export const blocks = [grid, teaser]

export const blockTypes = blocks.map((block) => ({ type: block.name }))
