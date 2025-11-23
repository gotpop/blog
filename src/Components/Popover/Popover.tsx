import { ConfigStoryblok, PopoverStoryblok } from "@/types/storyblok-components"
import "./Popover.css"

interface PopoverProps {
    blok: PopoverStoryblok
    content: React.ReactNode
    config: ConfigStoryblok | null
  }

export function Popover({ blok, content, config }: PopoverProps) {
    return (
        <article popover="auto" id="popover-contact-form" className="popover">
            <h1>Get in touch!</h1>
            {content}
        </article>
    )
}