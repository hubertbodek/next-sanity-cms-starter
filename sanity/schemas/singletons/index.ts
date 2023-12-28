import { CogIcon, DocumentTextIcon } from '@sanity/icons'

import contactPage from './pages/contact-page'
import homePage from './pages/home-page'
import appearance from './settings/appearance'
import banner from './settings/banner'
import navigation from './settings/navigation'

export const singletonTypes = {
  pages: {
    title: 'Pages',
    icon: DocumentTextIcon,
    schemas: [contactPage, homePage],
  },
  settings: {
    title: 'Settings',
    icon: CogIcon,
    schemas: [navigation, appearance, banner],
  },
}

export const singleTypeNames: string[] = Object.entries(singletonTypes).flatMap(([key, value]) =>
  value.schemas.map((schema) => schema.name)
)

export const singletons = Object.entries(singletonTypes).flatMap(([key, value]) =>
  value.schemas.map((schema) => schema)
)
