import accordion from './accordion'
import carousel from './carousel'
import grid from './grid'
import richtext from './richtext'
import separator from './separator'
import teaser from './teaser'
import testimonialCard from './testimonial-card'

export const blocks = [grid, teaser, separator, richtext, accordion, carousel, testimonialCard]

export const blockTypes = blocks.map((block) => ({ type: block.name }))
