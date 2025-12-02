"use client"

import { createContext, type ReactNode, useContext } from "react"

interface FormState {
  errors: Record<string, string[]>
  message: string
  success: boolean
}

interface FormContextValue {
  state: FormState
}

const FormContext = createContext<FormContextValue | null>(null)

interface FormProviderProps {
  children: ReactNode
  state: FormState
}

export function FormProvider({ children, state }: FormProviderProps) {
  return (
    <FormContext.Provider value={{ state }}>{children}</FormContext.Provider>
  )
}

export function useFormContext() {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error("useFormContext must be used within FormProvider")
  }
  return context
}

export function useFieldError(fieldName: string): string | undefined {
  const { state } = useFormContext()
  const errors = state.errors[fieldName]
  return errors && errors.length > 0 ? errors[0] : undefined
}
