import "@/lib/storyblok-init"
import "@gotpop/system/styles"
import { getConfig } from "@gotpop/storyblok"
import { inter, monaspace } from "@gotpop/system/fonts"
import "./theme.css"

import type { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const config = await getConfig()
  const { description, app_name: title } = config || {}

  return {
    title,
    description,
    icons: {
      icon: "/logo.svg",
    },
    other: {
      "theme-color": "#1a4a5c", // Equivalent to oklab(0.3 -0.21 -0.03)
      "apple-mobile-web-app-status-bar-style": "default",
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${monaspace.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
