"use client"

import type {
  ConfigStoryblok,
  FormInputTextStoryblok,
} from "@/types/storyblok-components"
import "./FormInputText.css"
import { CustomElement } from "@gotpop/system"
import { useId } from "react"
import { useFieldError } from "../FormBuilder/FormContext"

interface FormInputTextProps {
  blok: FormInputTextStoryblok
  content: React.ReactNode
  config: ConfigStoryblok | null
}

export function FormInputTextClient({ blok }: FormInputTextProps) {
  const id = useId()
  const label = blok.input_label ?? ""
  const placeholder = blok.input_placeholder ?? ""
  const required = !!blok.input_required
  const error = useFieldError(blok.input_name || "")

  return (
    <CustomElement tag="form-input-text">
      <label htmlFor={id} className="form-input-label">
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
        className={`form-input-text__field ${error ? "form-input-text__field--error" : ""}`}
        placeholder={placeholder}
        required={required}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />

      {error && (
        <div id={`${id}-error`} className="form-input-error">
          {error}
        </div>
      )}
    </CustomElement>
  )
}
