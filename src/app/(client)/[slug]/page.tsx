import { getGenericPage, getPagesSlugs } from '@/sanity/api/genericPage'

import BlockMapper from '@/components/blocks'

interface GenericPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const pages = await getPagesSlugs()

  return pages.map((page) => ({ slug: page.slug }))
}

export default async function GenericPage({ params }: GenericPageProps) {
  const { slug } = params
  const page = await getGenericPage(slug)

  return (
    <div className="container">
      <h1 className="text-h1 mb-16 mt-10">{page?.title}</h1>
      <BlockMapper blocks={page?.content} />
    </div>
  )
}
