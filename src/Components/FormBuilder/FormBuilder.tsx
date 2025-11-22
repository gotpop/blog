import { FormBuilderStoryblok, ConfigStoryblok } from "@/types/storyblok-components"
import "./FormBuilder.css"

interface FormBuilderProps {
  blok: FormBuilderStoryblok
  content: React.ReactNode
  config: ConfigStoryblok | null
}

export function FormBuilder({ blok, content, config }: FormBuilderProps) {
  console.log("Rendering FormBuilder Component !!!!!!!!!!!!!", blok)

  return (
    <form className="form-builder">
      <h1>FormBuilder Component</h1>
      {content}
    </form>
  )
}

