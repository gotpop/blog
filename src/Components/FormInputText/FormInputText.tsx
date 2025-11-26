import type {
  ConfigStoryblok,
  FormInputTextStoryblok,
} from "@/types/storyblok-components"
import "./FormInputText.css"
import { CustomElement } from "@gotpop/system"
import { useId } from "react"

interface FormInputTextProps {
  blok: FormInputTextStoryblok
  content: React.ReactNode
  config: ConfigStoryblok | null
}

export function FormInputText({ blok }: FormInputTextProps) {
  const id = useId()
  const label = blok.input_label ?? ""
  const placeholder = blok.input_placeholder ?? ""
  const required = !!blok.input_required

  return (
    <CustomElement tag="form-input-text">
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

      <input
        id={id}
        name={blok.input_name}
        type={blok.type || "text"}
        className="form-input-text__field"
        placeholder={placeholder}
        required={required}
        aria-required={required}
      />
    </CustomElement>
  )
}
