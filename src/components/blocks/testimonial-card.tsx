import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { cn } from '@/lib/class-names'

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  review: string
  name: string
  title: string
}

// TODO: Add image
export function TestimonialCard({ review, name, title, ...props }: TestimonialCardProps) {
  return (
    <Card className={cn('relative overflow-hidden p-6', props.className)} {...props}>
      <svg
        className="absolute left-1 top-2 z-10 size-24 text-primary-300/10"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
      </svg>
      <CardContent className="text-h4 mb-2">{review}</CardContent>
      <CardHeader className="relative z-20 pt-0">
        <div className="flex items-center">
          <div>
            <CardTitle className="text-base">{name}</CardTitle>
            <CardDescription>{title}</CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}
