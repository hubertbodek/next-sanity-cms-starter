import { PortableText } from '@portabletext/react'

interface RichTextProps {
  content: any
}

export default function RichText({ content }: RichTextProps) {
  return (
    <div className="prose">
      <PortableText value={content} />
    </div>
  )
}
