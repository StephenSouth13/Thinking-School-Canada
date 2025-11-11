"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [locale, setLocale] = useState<"en" | "vi">("en")
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navbar locale={locale} onLocaleChange={setLocale} />

      <section className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="w-full max-w-md animate-fadeInUp">
          <div className="bg-card border border-border rounded-lg p-8 space-y-8">
            <div className="text-center space-y-2">
              <h1 className="font-serif text-3xl font-bold text-foreground">Welcome Back</h1>
              <p className="text-muted-foreground">Sign in to your account</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground pr-10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all"
              >
                Sign In
              </button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="#" className="text-primary hover:underline font-medium">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </div>
  )
}
