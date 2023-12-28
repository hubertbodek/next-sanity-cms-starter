import Image from 'next/image'
import Link from 'next/link'

import { getAppearance } from '@/sanity/api/getAppearance'
import { urlForImage } from '@/sanity/lib/image'

export default async function Footer() {
  const { logo } = await getAppearance()

  return (
    <footer className="container mx-auto pb-6 pt-12">
      <div className="flex justify-between">
        <div className="inline-flex items-center justify-center gap-4 self-start">
          <Link href="/">
            <Image
              src={urlForImage(logo)}
              alt={logo.alt}
              width={100}
              height={100}
              className="max-w-[3rem]"
            />
          </Link>
          <div className="text-xl font-bold">Lorem</div>
        </div>
        <div className="flex h-60 gap-8">
          <div>Footer Column</div>
          <div>Footer Column</div>
          <div>Footer Column</div>
          <div>Footer Column</div>
        </div>
      </div>
      <div className="mt-4 text-center text-xs text-gray-700">
        All rights reserved. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </div>
    </footer>
  )
}
