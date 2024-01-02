import Link from 'next/link'

import { replaceParams, sanitySitemap } from '@/constants/sitemap'
import { LinkModel } from '@/types/sanity'

interface SanityLinkProps extends Omit<React.ComponentProps<typeof Link>, 'href'> {
  href?: string | LinkModel | null
}

// TODO: Refactor this to be more readable
const getSegment = (link: LinkModel) => {
  const segment = sanitySitemap[link._type] ?? null

  if (segment && !link.slug?.current) {
    return `/${segment}`
  }

  if (segment && link.slug?.current) {
    const path = replaceParams(segment, {
      slug: link.slug.current,
    })

    return `/${path}`
  }

  if (!link.slug?.current) {
    return '/'
  }

  if (!segment) {
    return `/${link.slug.current}`
  }

  return `/${segment}/${link.slug.current}`
}

export default function SanityLink({ children, href, ...props }: SanityLinkProps) {
  const getHref = () => {
    if (typeof href === 'string') {
      return href
    }

    if (href?._type) {
      return getSegment(href)
    }

    return '/'
  }

  return (
    <Link href={getHref()} {...props}>
      {children}
    </Link>
  )
}
