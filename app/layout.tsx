import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

const inter = dmSans;
const baseUrl = "https://pulgy.app"; // Declare the baseUrl variable

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Pulgy - Convertí tu Instagram en ingresos reales",
    template: "%s | Pulgy",
  },
  description:
    "Pulgy te da una tienda profesional lista para vender productos digitales y sesiones. Cobrá con MercadoPago. Sin código. Hecho en Argentina.",
  generator: "Pulgy",
  applicationName: "Pulgy",
  keywords: ["creadores", "argentina", "mercadopago", "productos digitales", "tienda online", "instagram", "vender ebooks", "vender presets", "monetizar instagram", "creadores de contenido", "vender cursos online"],
  authors: [{ name: "Pulgy", url: "https://pulgy.app" }],
  creator: "Pulgy",
  publisher: "Pulgy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://pulgy.app",
    siteName: "Pulgy",
    title: "Pulgy - Convertí tu Instagram en ingresos reales",
    description:
      "Pulgy te da una tienda profesional lista para vender productos digitales y sesiones. Cobrá con MercadoPago. Sin código.",
    images: [
      {
        url: "https://pulgy.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pulgy - Vendé tus contenidos digitales y mentorías online desde un solo link",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pulgyapp",
    creator: "@pulgyapp",
    title: "Pulgy - Convertí tu Instagram en ingresos reales",
    description:
      "Pulgy te da una tienda profesional lista para vender productos digitales y sesiones. Cobrá con MercadoPago. Sin código.",
    images: [
      {
        url: "https://pulgy.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pulgy - Vendé tus contenidos digitales y mentorías online desde un solo link",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.png",
  },
}

export const viewport = {
  themeColor: "#faf7f2",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
