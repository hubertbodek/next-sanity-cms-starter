'use client'

import { HEADER_TRESHOLD } from '@/constants/tresholds'
import useRange from '@/hooks/useRange'
import useScrollPosition from '@/hooks/useScrollPosition'
import { cn } from '@/lib/class-names'

export default function HeaderWrapper({ children }: { children: React.ReactNode }) {
  const scrollPosition = useScrollPosition()
  const headerHeight = useRange(scrollPosition, 0, HEADER_TRESHOLD, 6, 3)
  const boxShadowY = useRange(scrollPosition, 0, HEADER_TRESHOLD, 0, 10)
  const boxShadowBlur = useRange(scrollPosition, 0, HEADER_TRESHOLD, 0, 15)

  return (
    <header
      className={cn('sticky left-0 top-0 z-50 flex w-full items-center bg-white')}
      style={{
        height: `${headerHeight}rem`,
        boxShadow: `0 ${boxShadowY}px ${boxShadowBlur}px rgba(0, 0, 0, 0.1)`,
      }}
    >
      <div className="container">{children}</div>
    </header>
  )
}
