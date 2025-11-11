import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AIChatbot } from "@/components/ai-chatbot"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Thinking School Canada | Transform Your Mind, Master Critical Thinking",
  description:
    "Thinking School Canada is a premier educational institution offering innovative programs including KING OF SKILL B2C, KING OF SKILL B2B for corporate training, and FUTURE ME personal development. Master critical thinking, problem-solving, and executive leadership through our comprehensive academic curriculum.",
  keywords:
    "critical thinking, educational programs, professional development, corporate training, KING OF SKILL, FUTURE ME",
  authors: [{ name: "Thinking School Canada" }],
  creator: "Thinking School Canada",
  publisher: "Thinking School Canada",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://thinkingschool.ca",
    title: "Thinking School Canada | Academic Excellence & Professional Development",
    description:
      "Transform your thinking and master critical skills with Thinking School Canada. Offering KING OF SKILL and FUTURE ME programs.",
    images: [
      {
        url: "/logo.png",
        width: 200,
        height: 200,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thinking School Canada",
    description: "Master Critical Thinking & Professional Skills",
    images: ["/logo.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#E30022" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <AIChatbot />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
