import { getHeader } from '@/sanity/api/getHeader'
import DesktopItems from './desktop-items'

export default async function Header() {
  const data = await getHeader()

  return (
    <header className="bg-primary">
      <DesktopItems header={data.header} />
    </header>
  )
}
