import type {
  ConfigStoryblok,
  FormInputTextareaStoryblok,
} from "@/types/storyblok-components"
import "./FormInputTextArea.css"

interface FormInputTextAreaProps {
  blok: FormInputTextareaStoryblok
  content: React.ReactNode
  config: ConfigStoryblok | null
}

export function FormInputTextArea({ blok }: FormInputTextAreaProps) {
  const id = `textarea-${blok._uid}`
  const label = blok.input_label ?? ""
  const placeholder = blok.input_placeholder ?? ""
  const required = !!blok.input_required

  return (
    <div className="form-builder form-input-textarea">
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

      <textarea
        id={id}
        name={blok._uid}
        className="form-input-textarea__field"
        placeholder={placeholder}
        required={required}
        aria-required={required}
      />
    </div>
  )
}
