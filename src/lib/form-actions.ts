"use server"

import { InvokeCommand, LambdaClient } from "@aws-sdk/client-lambda"
import { z } from "zod"

export async function submitFormAction(formData: FormData) {
  const nameRaw = formData.get("contact-form-name")?.toString() ?? ""
  const emailRaw = formData.get("contact-form-email")?.toString() ?? ""
  const subjectRaw = formData.get("contact-form-subject")?.toString() ?? ""
  const messageRaw = formData.get("contact-form-message")?.toString() ?? ""

  const schema = z.object({
    name: z
      .string()
      .min(1, { message: "Name is required" })
      .max(100, { message: "Name too long" }),
    email: z
      .email({ message: "Invalid email address" })
      .max(254, { message: "Email too long" }),
    subject: z
      .string()
      .min(1, { message: "Subject is required" })
      .max(200, { message: "Subject too long" }),
    message: z
      .string()
      .trim()
      .min(1, { message: "Message is required" })
      .max(1000, { message: "Message too long" })
      .transform((val) => val.replace(/<[^>]*>/g, ""))
      .transform((val) => val.replace(/\s+/g, " ")),
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
