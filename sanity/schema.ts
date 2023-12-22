import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import { singletons } from './schemas/singletons'
import { documents } from './schemas/documents'
import { objects } from './schemas/objects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...documents, ...objects, blockContent, ...singletons],
}
