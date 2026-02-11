"use server"

import { headers } from "next/headers"
import { getSupabaseAdminClient } from "@/lib/supabase/admin"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const HANDLE_REGEX = /^[a-z0-9_]+$/

// Simple in-memory rate limit (resets on server restart, but good enough for basic protection)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute

type WaitlistResult = {
  success: boolean
  error?: string
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false
  }

  record.count++
  return true
}

export async function submitWaitlist(formData: FormData): Promise<WaitlistResult> {
  // Get IP for rate limiting
  const headersList = await headers()
  const ip = headersList.get("x-forwarded-for")?.split(",")[0] || 
             headersList.get("x-real-ip") || 
             "unknown"

  // Rate limit check
  if (!checkRateLimit(ip)) {
    return { success: false, error: "Demasiados intentos. Esperá un minuto." }
  }

  // Honeypot check - if this field is filled, it's a bot
  const honeypot = formData.get("website") as string
  if (honeypot) {
    // Silently "succeed" to not tip off the bot
    return { success: true }
  }

  // Get form data
  const email = (formData.get("email") as string)?.trim().toLowerCase()
  const handle = (formData.get("handle") as string)?.trim().toLowerCase()
  const productTypesRaw = formData.get("productTypes") as string
  const productTypes = productTypesRaw ? JSON.parse(productTypesRaw) : []

  // Server-side validation
  if (!email || !EMAIL_REGEX.test(email)) {
    return { success: false, error: "Ingresá un email válido" }
  }

  if (!handle || handle.length < 3 || handle.length > 30) {
    return { success: false, error: "El handle debe tener entre 3 y 30 caracteres" }
  }

  if (!HANDLE_REGEX.test(handle)) {
    return { success: false, error: "El handle solo puede contener letras, números y guiones bajos" }
  }

  // Reserved handles
  const reservedHandles = ["admin", "api", "app", "auth", "blog", "dashboard", "demo", "help", "login", "logout", "pricing", "settings", "signup", "support", "www"]
  if (reservedHandles.includes(handle)) {
    return { success: false, error: "Este handle está reservado" }
  }

  try {
    const supabase = getSupabaseAdminClient()

    const { error } = await supabase.from("waitlist").insert([
      {
        email,
        handle,
        product_types: productTypes,
      },
    ])

    if (error) {
      if (error.code === "23505") {
        if (error.message.includes("email")) {
          return { success: false, error: "Este email ya está registrado" }
        } else if (error.message.includes("handle")) {
          return { success: false, error: "Este handle ya está tomado" }
        }
        return { success: false, error: "Este email o handle ya está registrado" }
      }
      console.error("Waitlist insert error:", error)
      return { success: false, error: "Hubo un error. Intentá de nuevo." }
    }

    return { success: true }
  } catch (err) {
    console.error("Waitlist error:", err)
    return { success: false, error: "Hubo un error. Intentá de nuevo." }
  }
}
