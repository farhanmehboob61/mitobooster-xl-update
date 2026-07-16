"use server"

import { Resend } from "resend"

export type QuoteState = {
  status: "idle" | "success" | "error"
  message?: string
}

// Where quote requests are delivered.
// NOTE: Until you verify a domain at resend.com/domains, Resend only allows the
// test sender (onboarding@resend.dev) to deliver to your Resend account's own
// email. Once your domain is verified, switch FROM_EMAIL to an address on that
// domain and set TO_EMAIL to whatever inbox should receive leads (e.g. sales@).
const TO_EMAIL = "oxygenhealthsystems@gmail.com"
const FROM_EMAIL = "VitalSphere Quotes <onboarding@resend.dev>"

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function submitQuote(_prev: QuoteState, formData: FormData): Promise<QuoteState> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const phone = String(formData.get("phone") ?? "").trim()
  const model = String(formData.get("model") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()

  if (!name || !email || !phone) {
    return { status: "error", message: "Please fill in your name, email, and phone number." }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("[v0] RESEND_API_KEY is not set")
    return { status: "error", message: "Email service is not configured. Please try again later." }
  }

  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: "New Lead VitalSphere Chamber from Oxygen Health Systems",
      html: `
        <h2>New quote request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Model of interest:</strong> ${model ? escapeHtml(model) : "(not specified)"}</p>
        <p><strong>Message:</strong></p>
        <p>${message ? escapeHtml(message).replace(/\n/g, "<br />") : "(none)"}</p>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return { status: "error", message: "We couldn't send your request. Please try again." }
    }

    return {
      status: "success",
      message: "Your request has been received.",
    }
  } catch (err) {
    console.error("[v0] Failed to send quote email:", err)
    return { status: "error", message: "We couldn't send your request. Please try again." }
  }
}
