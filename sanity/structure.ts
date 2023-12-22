import type { StructureBuilder, ListItemBuilder } from 'sanity/desk'
import { singletonTypes, singleTypeNames } from './schemas/singletons'

const getSinglePages = (S: StructureBuilder, singletons: any) =>
  singletons.map((singleton: any) =>
    S.listItem()
      .title(singleton.title ?? 'Singleton Item')
      .child(S.document().schemaType(singleton.name).documentId(singleton.name))
  )

const filterDocuments = (listItem: ListItemBuilder) =>
  !singleTypeNames.includes(listItem.getId() as string)

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Typy stron')
    .items([
      ...Object.entries(singletonTypes).map(([key, value]) =>
        S.listItem()
          .title(value.title)
          .id(key)
          .icon(value?.icon ?? undefined)
          .child(S.list().title(value.title).items(getSinglePages(S, value.schemas)))
      ),
      ...S.documentTypeListItems().filter(filterDocuments),
    ])
