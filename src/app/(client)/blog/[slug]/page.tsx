import { PortableText } from '@portabletext/react'

import { getArticle } from '@/sanity/api/getArticle'

import ImageBlock from '@/components/blocks/image-block'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticle(params.slug)

  return (
    <section className="prose prose-lg mx-auto mb-20 mt-8">
      <div className="relative mb-5 aspect-video overflow-hidden rounded-lg">
        <ImageBlock {...article.mainImage} className="my-0" fill />
      </div>
      <h1>{article.title}</h1>
      <PortableText value={article.body} />
    </section>
  )
}
