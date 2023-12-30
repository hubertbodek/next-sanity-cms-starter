import { SanityImage } from '@/types/sanity'

interface LogoContainerProps {
  logos: SanityImage[]
}

export default function LogoContainer({ logos }: LogoContainerProps) {
  return <section className="container py-10 md:py-20"></section>
}
