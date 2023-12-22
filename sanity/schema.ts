import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import { documents } from './schemas/documents'
import { objects } from './schemas/objects'
import { singletons } from './schemas/singletons'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...documents, ...objects, blockContent, ...singletons],
}
