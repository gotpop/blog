import { PopoverStoryblok, ConfigStoryblok } from "@/types/storyblok-components"
import "./Popover.css"

interface PopoverProps {
    blok: PopoverStoryblok
    content: React.ReactNode
    config: ConfigStoryblok | null
  }

export function Popover({ blok, content, config }: PopoverProps) {
    console.log("Rendering Popover Component >>>>>>", blok)
    console.log("content >>>>>>", content)
    console.log("config >>>>>>", config)

    return <article popover="auto" id="popover-contact-form" className="popover">
        {/* {blok.content?.map((content) => (
            <StoryblokServerComponent blok={content} key={content._uid} />
        ))} */}
        <h1>Popover Component</h1>
    </article>
}