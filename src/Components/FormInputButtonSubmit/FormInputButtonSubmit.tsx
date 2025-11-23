import type {
  ConfigStoryblok,
  FormInputButtonSubmitStoryblok,
} from "@/types/storyblok-components"
import "./FormInputButtonSubmit.css"

interface FormInputButtonSubmitProps {
  blok: FormInputButtonSubmitStoryblok
  content: React.ReactNode
  config: ConfigStoryblok | null
}

export function FormInputButtonSubmit({ blok }: FormInputButtonSubmitProps) {
  const label = blok.button_text ?? "Send"

  return (
    <div className="div-builder form-input-button-submit">
      <button type="submit" className="form-submit-button" aria-label={label}>
        {blok.icon_button && blok.icon_button.length > 0 ? (
          <span className="form-submit-button__icon" aria-hidden="true">
            {/* Storyblok icon component(s) are rendered elsewhere — placeholder */}
          </span>
        ) : null}

        <span className="form-submit-button__text">{label}</span>
      </button>
    </div>
  )
}
