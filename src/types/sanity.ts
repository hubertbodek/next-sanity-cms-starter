export type Result = {
  header: Header[]
}

export type Header = {
  title: string
  link: Link | null
  dropdown: Dropdown[] | null
}

export type Link = {
  slug: Slug
}

export type Slug = {
  current: string
  _type: string
}

export type Dropdown = {
  title: string
  link: Link
}
