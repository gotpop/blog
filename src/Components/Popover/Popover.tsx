import "./Popover.css"

import { CustomElement, Typography } from "@gotpop/system"
import type {
  ConfigStoryblok,
  PopoverStoryblok,
} from "@/types/storyblok-components"

interface PopoverProps {
  blok: PopoverStoryblok
  content: React.ReactNode
  config: ConfigStoryblok | null
}

export function Popover({ blok, content }: PopoverProps) {
  const { heading, subheading } = blok
  return (
    // biome-ignore lint/correctness/useUniqueElementIds: Popover requires a specific ID for accessibility
    <article popover="auto" id="popover-contact-form" className="popover">
      <CustomElement tag="box-grid">
        <Typography tag="h3" variant="text-xl" shade="dark">
          {heading}
        </Typography>
        <Typography tag="p" variant="text-base" shade="charcoal">
          {subheading}
        </Typography>
        {content}
      </CustomElement>
    </article>
  )
}
