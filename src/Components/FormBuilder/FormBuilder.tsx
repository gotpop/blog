"use client"

import type {
  ConfigStoryblok,
  FormBuilderStoryblok,
} from "@/types/storyblok-components"
import "./FormBuilder.css"
// import { useActionState } from "react"

import { useFormState } from "react-dom"

interface FormState {
  errors: Record<string, string[]>
  message: string
  success: boolean
}

interface FormBuilderProps {
  blok: FormBuilderStoryblok
  content: React.ReactNode
  config: ConfigStoryblok | null
  onSubmit?: (formData: FormData) => Promise<FormState>
}

export function FormBuilder({ content, onSubmit }: FormBuilderProps) {
  const initialState = { errors: {}, message: "", success: false }

  const handleSubmit = async (_: FormState | null, formData: FormData) => {
    if (!onSubmit) return initialState

    return await onSubmit(formData)
  }

  const [state, formAction] = useFormState(handleSubmit, initialState)

  return (
    <form className="form-builder" action={formAction}>
      {state.message && (
        <div
          className={`form-message ${state.success ? "form-message--success" : "form-message--error"}`}
        >
          {state.message}
        </div>
      )}
      {content}
    </form>
  )
}
