import { getAppearance } from '@/sanity/api/getAppearance'
import { getHeader } from '@/sanity/api/getHeader'

import DesktopItems from './desktop-items'
import HeaderWrapper from './header-wrapper'

export default async function Header() {
  const [{ header }, { logo }] = await Promise.all([getHeader(), getAppearance()])

  return (
    <HeaderWrapper>
      <DesktopItems header={header} logo={logo} />
    </HeaderWrapper>
  )
}
