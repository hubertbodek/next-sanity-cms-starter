import { CogIcon, DocumentTextIcon } from '@sanity/icons'

import contactPage from './pages/contact-page'
import navigation from './settings/navigation'
import appearance from './settings/appearance'

export const singletonTypes = {
  pages: {
    title: 'Pages',
    icon: DocumentTextIcon,
    schemas: [contactPage],
  },
  settings: {
    title: 'Settings',
    icon: CogIcon,
    schemas: [navigation, appearance],
  },
}

export const singleTypeNames: string[] = Object.entries(singletonTypes).flatMap(([key, value]) =>
  value.schemas.map((schema) => schema.name)
)

export const singletons = Object.entries(singletonTypes).flatMap(([key, value]) =>
  value.schemas.map((schema) => schema)
)