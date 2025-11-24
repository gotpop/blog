"use server"

import type {
  ConfigStoryblok,
  FormBuilderStoryblok,
} from "@/types/storyblok-components"
import "./FormBuilder.css"
import { z } from "zod"

interface FormBuilderProps {
  blok: FormBuilderStoryblok
  content: React.ReactNode
  config: ConfigStoryblok | null
}

export async function submitFormAction(formData: FormData) {
  const emailRaw = formData.get("contact-form-email")?.toString() ?? ""
  const messageRaw = formData.get("contact-form-message")?.toString() ?? ""

  const schema = z.object({
    "contact-form-email": z
      .email({ error: "Invalid email address" })
      .max(254, { error: "Email too long" }),
    "contact-form-message": z
      .string()
      .min(1, { error: "Message is required" })
      .max(1000, { error: "Message too long" })
      .transform((val: string) =>
        val.replace(/<[^>]*>/g, "").replace(/[\r\n]+/g, " ")
      ),
  })

  const result = schema.safeParse({
    "contact-form-email": emailRaw,
    "contact-form-message": messageRaw,
  })

  if (!result.success) {
    console.log("[FormBuilder] Validation error:", result.error.issues)
    return
  }

  console.log(
    "[FormBuilder] Sanitized data:",
    JSON.stringify(result.data, null, 2)
  )
}

export async function FormBuilder({ content }: FormBuilderProps) {
  return (
    <form className="form-builder" action={submitFormAction}>
      {content}
    </form>
  )
}
