import type {
  ConfigStoryblok,
  FormBuilderStoryblok,
} from "@/types/storyblok-components"
import "./FormBuilder.css"

interface FormBuilderProps {
  blok: FormBuilderStoryblok
  content: React.ReactNode
  config: ConfigStoryblok | null
}

export function FormBuilder({ blok, content }: FormBuilderProps) {
  return <form className="form-builder">{content}</form>
}
