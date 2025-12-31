"use client"

import type { ISbStoryData } from "@storyblok/react"
import { StoryblokServerComponent } from "@storyblok/react/rsc"
import { ViewTransition } from "react"

interface PageClientProps {
  story: ISbStoryData
}

export function PageClient({ story }: PageClientProps) {
  return (
    <ViewTransition>
      <StoryblokServerComponent blok={story.content} story={story} />
    </ViewTransition>
  )
}
