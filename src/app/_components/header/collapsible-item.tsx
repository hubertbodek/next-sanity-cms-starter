'use client'

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

interface CollapsibleItemProps {
  item: {
    title: string
    link?: string
    dropdown: Array<{ title: string; link?: string }>
  }
}

export default function CollapsibleItem({ item }: CollapsibleItemProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="!text-black">{item.title}</NavigationMenuTrigger>
      <NavigationMenuContent className="bg-primary px-1 py-2 !text-white shadow-lg">
        <ul className="flex min-w-[250px] flex-col">
          {item.dropdown.map((dropdownItem) => (
            <li key={dropdownItem.title} className="px-3 py-2 !text-white">
              <NavigationMenuLink>{dropdownItem.title}</NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
