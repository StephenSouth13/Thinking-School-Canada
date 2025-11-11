"use client"

import { useState } from "react"
import { Globe } from "lucide-react"

interface LanguageSwitcherProps {
  locale?: "en" | "vi"
  onLocaleChange?: (locale: "en" | "vi") => void
}

export function LanguageSwitcher({ locale = "en", onLocaleChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (newLocale: "en" | "vi") => {
    onLocaleChange?.(newLocale)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-primary/10 rounded-lg transition-colors flex items-center gap-1"
        aria-label="Switch language"
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium">{locale.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-background border border-border rounded-lg shadow-lg py-2 animate-fadeInUp">
          <button
            onClick={() => handleChange("en")}
            className={`block w-full text-left px-4 py-2 transition-colors ${
              locale === "en" ? "bg-primary/10 text-primary" : "hover:bg-primary/5"
            }`}
          >
            English
          </button>
          <button
            onClick={() => handleChange("vi")}
            className={`block w-full text-left px-4 py-2 transition-colors ${
              locale === "vi" ? "bg-primary/10 text-primary" : "hover:bg-primary/5"
            }`}
          >
            Tiếng Việt
          </button>
        </div>
      )}
    </div>
  )
}
