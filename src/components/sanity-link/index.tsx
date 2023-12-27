import Link from 'next/link'

import { sanitySitemap } from '@/constants/sitemap'
import { LinkModel } from '@/types/sanity'

interface SanityLinkProps extends Omit<React.ComponentProps<typeof Link>, 'href'> {
  href?: string | LinkModel | null
}

const getSegment = (link: LinkModel) => {
  if (!link.slug?.current) return '/'

  const segment = sanitySitemap[link._type] ?? null

  if (!segment) {
    return `/${link.slug.current}`
  }

  return `/${segment}/${link.slug.current}`
}

export default function SanityLink({ children, href, ...props }: SanityLinkProps) {
  const getHref = () => {
    if (typeof href === 'string') {
      return `/${href}`
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
