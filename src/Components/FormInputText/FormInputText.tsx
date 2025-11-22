import { ConfigStoryblok, FormInputTextStoryblok } from "@/types/storyblok-components"
import "./FormInputText.css"

interface FormInputTextProps {
  blok: FormInputTextStoryblok
  content: React.ReactNode
  config: ConfigStoryblok | null
}

export function FormInputText({ blok, content, config }: FormInputTextProps) {
  console.log("Rendering FormInputText Component !!!!!!!!!!!!!", blok)

  return (
    <div className="form-builder">
      <h1>FormInputText Component</h1>
      {content}
    </div>
  )
}

