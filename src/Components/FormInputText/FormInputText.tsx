import type {
  ConfigStoryblok,
  FormInputTextStoryblok,
} from "@/types/storyblok-components"
import "./FormInputText.css"

interface FormInputTextProps {
  blok: FormInputTextStoryblok
  content: React.ReactNode
  config: ConfigStoryblok | null
}

export function FormInputText({ blok }: FormInputTextProps) {
  const id = `input-${blok._uid}`
  const label = blok.input_label ?? ""
  const placeholder = blok.input_placeholder ?? ""
  const required = !!blok.input_required

  return (
    <div className="form-builder form-input-text">
      {label ? (
        <label htmlFor={id} className="form-input-label">
          {label}
          {required ? (
            <span aria-hidden className="required-indicator">
              *
            </span>
          ) : null}
        </label>
      ) : null}

      <input
        id={id}
        name={blok._uid}
        type="text"
        className="form-input-text__field"
        placeholder={placeholder}
        required={required}
        aria-required={required}
      />
    </div>
  )
}
