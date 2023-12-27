import { getGenericPage, getPagesSlugs } from '@/sanity/api/genericPage'

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

  return <main className="mt-32 min-h-screen">{page?.title}</main>
}
