import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import { blocks } from './schemas/blocks'
import { documents } from './schemas/documents'
import { objects } from './schemas/objects'
import { singletons } from './schemas/singletons'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...documents, ...objects, ...blocks, ...singletons, blockContent],
}
