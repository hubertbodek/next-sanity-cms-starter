import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import RichText from './richtext'

interface AccordionBlockProps {
  type: 'single' | 'multiple'
  items: Array<{
    title: string
    content: string
  }>
}

export default function AccordionBlock({ type, items }: AccordionBlockProps) {
  return (
    <Accordion type={type} collapsible className="container">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-h4">{item.title}</AccordionTrigger>
          <AccordionContent className="text-paragraph">
            <RichText content={item.content} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
