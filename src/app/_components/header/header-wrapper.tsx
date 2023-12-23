'use client'

import { HEADER_TRESHOLD } from '@/constants/tresholds'
import useRange from '@/hooks/useRange'
import useScrollPosition from '@/hooks/useScrollPosition'
import { cn } from '@/lib/class-names'

export default function HeaderWrapper({ children }: { children: React.ReactNode }) {
  const scrollPosition = useScrollPosition()
  const headerHeight = useRange(scrollPosition, 0, HEADER_TRESHOLD, 6, 3)

  return (
    <header
      className={cn('fixed left-0 top-0 flex w-full items-center border-b bg-white')}
      style={{
        height: `${headerHeight}rem`,
      }}
    >
      <div className="container">{children}</div>
    </header>
  )
}
