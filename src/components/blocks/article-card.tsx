import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { cn } from '@/lib/class-names'
import { formatDate } from '@/lib/intl'
import { Author, SanityImage, Slug } from '@/types/sanity'

import SanityLink from '../sanity-link'
import ImageBlock from './image-block'

interface ArticleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  post: {
    title: string
    mainImage: SanityImage
    author: Author
    slug: Slug
    publishedAt: string
  }
}

export default function ArticleCard({ post, ...props }: ArticleCardProps) {
  return (
    <Card className={cn('max-w-3xl overflow-hidden', props.className)} {...props}>
      <div className="relative h-44">
        <ImageBlock {...post.mainImage} fill />
      </div>
      <CardHeader>
        <span className="text-xs uppercase text-primary">Category</span>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>

      <CardFooter className="justify-between">
        <CardDescription>{formatDate(post.publishedAt)}</CardDescription>
        <Button variant="link" asChild>
          <SanityLink className="px-0" href={`/blog/${post.slug?.current}`}>
            Read More
          </SanityLink>
        </Button>
      </CardFooter>
    </Card>
  )
}
