import { getHomepage } from '@/sanity/api/getHomepage'

import BlockMapper from '@/components/blocks'
import CarouselBlock from '@/components/blocks/carousel'

export default async function Home() {
  const data = await getHomepage()

  return (
    <main className="min-h-screen">
      <BlockMapper blocks={data.content} />
    </main>
  )
}
