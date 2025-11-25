import type {
  ConfigStoryblok,
  FormInputTextareaStoryblok,
} from "@/types/storyblok-components"
import "./FormInputTextArea.css"
import { CustomElement } from "@gotpop/system"
import { useId } from "react"

interface FormInputTextAreaProps {
  blok: FormInputTextareaStoryblok
  content: React.ReactNode
  config: ConfigStoryblok | null
}

export function FormInputTextArea({ blok }: FormInputTextAreaProps) {
  const id = useId()
  const label = blok.input_label ?? ""
  const placeholder = blok.input_placeholder ?? ""
  const required = !!blok.input_required

  return (
    <CustomElement tag="form-input-textarea">
      <label htmlFor={id} className="form-input-label">
        {/* Text box trim hack */}
        <p role="presentation">
          {label}{" "}
          {required ? (
            <span aria-hidden className="required-asterisk">
              *
            </span>
          ) : null}
        </p>
      </label>

      <textarea
        id={id}
        name={blok.input_name}
        className="form-input-textarea__field"
        placeholder={placeholder}
        required={required}
        aria-required={required}
      />
    </CustomElement>
  )
}
