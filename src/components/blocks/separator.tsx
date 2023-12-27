import { cn } from '@/lib/class-names'

import { Separator as ShadSeparator } from '../ui/separator'

export default function Separator({ narrow = false }) {
  return <ShadSeparator className={cn({ 'container mx-auto my-20': narrow })} />
}
