import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import TextContainer, { TextContainerProps } from '../text-container'
import RichText from './richtext'

interface AccordionBlockProps {
  text_container?: TextContainerProps
  type: 'single' | 'multiple'
  items: Array<{
    title: string
    content: string
  }>
}

export default function AccordionBlock({ text_container, type, items }: AccordionBlockProps) {
  return (
    <>
      {Boolean(text_container) && <TextContainer {...text_container} />}
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
    </>
  )
}
