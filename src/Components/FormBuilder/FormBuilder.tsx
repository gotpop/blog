"use client"

import type {
  ConfigStoryblok,
  FormBuilderStoryblok,
} from "@/types/storyblok-components"
import "./FormBuilder.css"
import { useActionState } from "react"
import { FormProvider } from "./FormContext"

interface FormState {
  errors: Record<string, string[]>
  message: string
  success: boolean
}

interface FormBuilderProps {
  blok: FormBuilderStoryblok
  content: React.ReactNode
  config: ConfigStoryblok | null
  onSubmit?: (
    prevState: FormState | null,
    formData: FormData
  ) => Promise<FormState>
}

export function FormBuilder({ content, onSubmit }: FormBuilderProps) {
  const initialState = { errors: {}, message: "", success: false }
  const actionFunction = onSubmit || (() => Promise.resolve(initialState))
  const [state, formAction] = useActionState(actionFunction, initialState)

  return (
    <FormProvider state={state}>
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
    </FormProvider>
  )
}
