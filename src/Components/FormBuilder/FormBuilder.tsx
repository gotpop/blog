"use server"

import type {
  ConfigStoryblok,
  FormBuilderStoryblok,
} from "@/types/storyblok-components"
import "./FormBuilder.css"
import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda"
import { z } from "zod"

interface FormBuilderProps {
  blok: FormBuilderStoryblok
  content: React.ReactNode
  config: ConfigStoryblok | null
}

export async function submitFormAction(formData: FormData) {
  const nameRaw = formData.get("contact-form-name")?.toString() ?? ""
  const emailRaw = formData.get("contact-form-email")?.toString() ?? ""
  const subjectRaw = formData.get("contact-form-subject")?.toString() ?? ""
  const messageRaw = formData.get("contact-form-message")?.toString() ?? ""

  const schema = z.object({
    name: z
      .string()
      .min(1, { error: "Name is required" })
      .max(100, { error: "Name too long" }),
    email: z
      .string()
      .email({ error: "Invalid email address" })
      .max(254, { error: "Email too long" }),
    subject: z
      .string()
      .min(1, { error: "Subject is required" })
      .max(200, { error: "Subject too long" }),
    message: z
      .string()
      .min(1, { error: "Message is required" })
      .max(1000, { error: "Message too long" })
      .transform((val: string) =>
        val.replace(/<[^>]*>/g, "").replace(/[\r\n]+/g, " ")
      ),
  })

  const result = schema.safeParse({
    name: nameRaw,
    email: emailRaw,
    subject: subjectRaw,
    message: messageRaw,
  })

  if (!result.success) {
    console.log("[FormBuilder] Validation error:", result.error.issues)
    return
  }

  const payload = JSON.stringify({
    body: JSON.stringify(result.data),
  })

  const lambda = new LambdaClient({ region: process.env.AWS_REGION })

  try {
    const command = new InvokeCommand({
      FunctionName: process.env.AWS_LAMBDA_CONTACT_FUNCTION,
      Payload: Buffer.from(payload),
    })
    const response = await lambda.send(command)
    const responsePayload = response.Payload
      ? JSON.parse(Buffer.from(response.Payload).toString())
      : null

    console.log("[FormBuilder] Lambda response:", responsePayload)
  } catch (error) {
    console.error("[FormBuilder] Lambda error:", error)
  }
}

export async function FormBuilder({ content }: FormBuilderProps) {
  return (
    <form className="form-builder" action={submitFormAction}>
      {content}
    </form>
  )
}
