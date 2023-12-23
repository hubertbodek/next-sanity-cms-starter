'use client'

import Link from 'next/link'

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import SanityLink from '@/components/sanity-link'
import { LinkModel } from '@/types/sanity'

interface CollapsibleItemProps {
  item: {
    title: string
    link?: string
    dropdown: Array<{ title: string; link: LinkModel }>
  }
}

export default function CollapsibleItem({ item }: CollapsibleItemProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
      <NavigationMenuContent className="px-1 py-2 shadow-lg">
        <ul className="flex min-w-[250px] flex-col">
          {item.dropdown.map((dropdownItem) => (
            <li key={dropdownItem.title} className="px-3 py-2">
              <SanityLink href={dropdownItem.link} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {dropdownItem.title}
                </NavigationMenuLink>
              </SanityLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
