import Image from 'next/image';
import Link from 'next/link';



import { getAppearance } from '@/sanity/api/getAppearance';
import { FooterColumn, getFooter } from '@/sanity/api/getFooter';
import { urlForImage } from '@/sanity/lib/image';



import Separator from '@/components/blocks/separator';
import SanityLink from '@/components/sanity-link';


export default async function Footer() {
  const { logo } = await getAppearance()
  const { footer } = await getFooter()

  return (
    <footer className="container mx-auto pb-6 pt-12">
      <div className="my-10 gap-x-4 gap-y-8 flex flex-col md:flex-row justify-between">
        <div>
          <div className="inline-flex items-center justify-center gap-4 self-start">
            <Link href="/">
              <Image
                src={urlForImage(logo)}
                alt={logo.alt}
                width={100}
                height={100}
                className="max-w-[2rem]"
              />
            </Link>
            <div className="text-xl font-bold">Lorem</div>
          </div>
          <p className="mt-4 max-w-80 xl:max-w-md text-sm text-gray-500">{footer.description}</p>
        </div>
        <div className="md:flex gap-12 flex-row grid grid-cols-2">
          {footer.columns.map((column) => (
            <FooterColumn key={column._key} {...column} />
          ))}
        </div>
      </div>
      <Separator />
      <div className="mt-4 text-center text-xs text-gray-700">
        All rights reserved. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </div>
    </footer>
  )
}

const FooterColumn = ({ title, links }: FooterColumn) => (
  <div>
    {Boolean(title) && <div className="font-bold mb-4">{title}</div>}
    <div className="flex flex-col gap-2">
      {links.map(({link, _key, title}) => (
        <SanityLink key={_key} href={link}>
          {title}
        </SanityLink>
      ))}
    </div>
  </div>
)