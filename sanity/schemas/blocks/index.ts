import accordion from './accordion'
import carousel from './carousel'
import grid from './grid'
import richtext from './richtext'
import separator from './separator'
import teaser from './teaser'

export const blocks = [grid, teaser, separator, richtext, accordion, carousel]

export const blockTypes = blocks.map((block) => ({ type: block.name }))
