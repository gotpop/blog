import { ConfigStoryblok, FormInputButtonSubmitStoryblok } from "@/types/storyblok-components"
import "./FormInputButtonSubmit.css"

interface FormInputButtonSubmitProps {
  blok: FormInputButtonSubmitStoryblok
  content: React.ReactNode
  config: ConfigStoryblok | null
}

export function FormInputButtonSubmit({ blok, content, config }: FormInputButtonSubmitProps) {
  console.log("Rendering FormInputButtonSubmit Component !!!!!!!!!!!!!", blok)

  return (
    <div className="div-builder">
      <h1>FormInputButtonSubmit Component</h1>
      {content}
    </div>
  )
}

