'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import CollapsibleItem from './collapsible-item'
import { Result } from '@/types/sanity'

interface DesktopItemProps {
  header: Result['header']
}

export default function DesktopItems({ header }: DesktopItemProps) {
  console.log(header)

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {header.map((item) => {
          if (item.dropdown) {
            const dropdown = item.dropdown.map((dropdownItem) => ({
              title: dropdownItem.title,
              link: dropdownItem.link?.slug.current,
            }))

            return (
              <CollapsibleItem
                key={item.title}
                item={{
                  title: item.title,
                  link: item.link?.slug.current,
                  dropdown: dropdown,
                }}
              />
            )
          }

          return (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuLink className="text-white">{item.title}</NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
