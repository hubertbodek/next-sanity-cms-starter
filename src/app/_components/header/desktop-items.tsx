'use client'

import Image from 'next/image'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { GetAppearanceResult } from '@/sanity/api/getAppearance'
import { GetHeaderResult } from '@/sanity/api/getHeader'
import { urlForImage } from '@/sanity/lib/image'

import SanityLink from '@/components/shared/sanity-link'

import CollapsibleItem from './collapsible-item'

interface DesktopItemProps {
  header: GetHeaderResult['header']
  logo: GetAppearanceResult['logo']
}

export default function DesktopItems({ header, logo }: DesktopItemProps) {
  return (
    <div className="flex h-20 w-full items-center justify-between">
      <Link href="/">
        <Image
          src={urlForImage(logo)}
          alt={logo.alt}
          width={100}
          height={100}
          className="max-w-12"
        />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {header.map((item) => {
            if (item.dropdown) {
              const dropdown = item.dropdown.map((dropdownItem) => ({
                title: dropdownItem.title,
                link: dropdownItem.link,
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
                <SanityLink href={item.link} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </SanityLink>
              </NavigationMenuItem>
            )
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
