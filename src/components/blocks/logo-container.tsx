import { SanityImage } from '@/types/sanity'

interface LogoContainerProps {
  logos: SanityImage[]
}

export default function LogoContainer({ logos }: LogoContainerProps) {
  return <section className="container py-20"></section>
}
