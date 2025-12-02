"use server"

import type {
  ConfigStoryblok,
  FormBuilderStoryblok,
} from "@/types/storyblok-components"
import "./FormBuilder.css"

interface FormBuilderProps {
  blok: FormBuilderStoryblok
  content: React.ReactNode
  config: ConfigStoryblok | null
  onSubmit?: (formData: FormData) => Promise<void>
}

export async function FormBuilder({ content, onSubmit }: FormBuilderProps) {
  return (
    <form className="form-builder" action={onSubmit}>
      {content}
    </form>
  )
}
