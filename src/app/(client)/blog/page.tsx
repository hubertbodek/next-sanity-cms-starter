import { getBlogPage } from '@/sanity/api/getBlogPage'
import { getPosts } from '@/sanity/api/getPosts'

import BlockMapper from '@/components/blocks'
import ArticleCard from '@/components/blocks/article-card'

export default async function BlogPage() {
  const page = await getBlogPage()
  const posts = await getPosts()

  return (
    <>
      <BlockMapper blocks={page.content_before} />
      <div className="container my-10 grid grid-cols-fluid gap-8">
        {posts.map((post) => (
          // Placeholder
          <>
            <ArticleCard key={post.slug.current} post={post} />
            <ArticleCard key={post.slug.current} post={post} />
            <ArticleCard key={post.slug.current} post={post} />
            <ArticleCard key={post.slug.current} post={post} />
          </>
        ))}
      </div>
      <BlockMapper blocks={page.content_after} />
    </>
  )
}
