import { PortableText } from '@portabletext/react'

interface RichTextProps {
  content: any
}

export default function RichText({ content }: RichTextProps) {
  return (
    <div className="prose-h2:text-h1 prose-h3:text-h2 !container prose mb-4 prose-headings:mt-0 prose-h4:text-sm prose-h4:text-primary">
      <PortableText value={content} />
    </div>
  )
}
