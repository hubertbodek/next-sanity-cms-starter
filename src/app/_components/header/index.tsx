import { getAppearance } from '@/sanity/api/getAppearance'
import { getHeader } from '@/sanity/api/getHeader'

import DesktopItems from './desktop-items'

export default async function Header() {
  const [{ header }, { logo }] = await Promise.all([getHeader(), getAppearance()])

  return (
    <header className="container bg-white">
      <DesktopItems header={header} logo={logo} />
    </header>
  )
}
