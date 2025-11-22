import { ConfigStoryblok, FormInputTextareaStoryblok } from "@/types/storyblok-components"
import "./FormInputTextArea.css"

interface FormInputTextAreaProps {
  blok: FormInputTextareaStoryblok
  content: React.ReactNode
  config: ConfigStoryblok | null
}

export function FormInputTextArea({ blok, content, config }: FormInputTextAreaProps) {
  console.log("Rendering FormInputTextArea Component !!!!!!!!!!!!!", blok)

  return (
    <div className="form-builder">
      <h1>FormInputTextArea Component</h1>
      {content}
    </div>
  )
}

