import { PortableText } from '@portabletext/react'

import { getBanner } from '@/sanity/api/getBanner'

import Footer from '../_components/footer'
import Header from '../_components/header'

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  const banner = await getBanner()

  return (
    <>
      {banner?.show && (
        <div className="prose-a:underline prose-a:hover:text-primary-200 relative z-10 bg-primary-800 px-4 py-1.5 text-center text-sm text-primary-foreground">
          <PortableText value={banner.text} />
        </div>
      )}
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
