'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

import { GetHeaderResult } from '@/sanity/api/getHeader'

import CollapsibleItem from './collapsible-item'

interface DesktopItemProps {
  header: GetHeaderResult['header']
}

export default function DesktopItems({ header }: DesktopItemProps) {
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
