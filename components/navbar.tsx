"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { LanguageSwitcher } from "./language-switcher"
import Image from "next/image"

interface NavbarProps {
  locale?: "en" | "vi"
  onLocaleChange?: (locale: "en" | "vi") => void
}

const translations = {
  en: {
    activities: "Activities",
    courses: "Courses",
    corporate: "Corporate",
    library: "Library",
    about: "About",
    login: "Login",
  },
  vi: {
    activities: "Hoạt động",
    courses: "Khóa học",
    corporate: "Doanh nghiệp",
    library: "Thư viện",
    about: "Giới thiệu",
    login: "Đăng nhập",
  },
}

export function Navbar({ locale = "en", onLocaleChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const t = translations[locale]

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
<Link href="/" className="flex items-center gap-2 animate-slideIn">
  {/* Logo hình cờ Canada (hoặc logo thật của trường anh) */}
  <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
    <Image
      src="/canada_flag.png"
      alt="Thinking School Canada Logo"
      width={32}
      height={32}
      className="object-cover"
      priority
    />
  </div>

  {/* Tên thương hiệu */}
  <span className="hidden sm:inline font-serif font-bold text-lg md:text-xl text-foreground">
    Thinking School <span className="text-red-600">Canada</span>
  </span>
</Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/activities"
              className="text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              {t.activities}
            </Link>
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors font-medium text-sm flex items-center gap-1">
                {t.courses}
                <svg
                  className="w-4 h-4 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <div className="absolute left-0 mt-0 w-64 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                <a
                  href="https://drive.google.com/file/d/1e6Fypg8OtdhsSoCZtAnl9HoY2WZi8E7v/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 hover:bg-primary/10 text-foreground hover:text-primary transition-colors text-sm border-b border-border/50"
                >
                  <div className="font-medium">KING OF SKILL B2C</div>
                  <div className="text-xs text-muted-foreground">For Individual Learners</div>
                </a>
                <a
                  href="https://drive.google.com/file/d/1GLfVYG34R9gZ-Lvc5h8FHE0WLrRDp5cW/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 hover:bg-primary/10 text-foreground hover:text-primary transition-colors text-sm border-b border-border/50"
                >
                  <div className="font-medium">KING OF SKILL B2B</div>
                  <div className="text-xs text-muted-foreground">For Corporate Clients</div>
                </a>
                <a
                  href="https://drive.google.com/file/d/1XbFpYmstbcNup2DlCmFbUHPMEzYqGb8V/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 hover:bg-primary/10 text-foreground hover:text-primary transition-colors text-sm"
                >
                  <div className="font-medium">FUTURE ME</div>
                  <div className="text-xs text-muted-foreground">Personal Development</div>
                </a>
              </div>
            </div>
            <Link
              href="/corporate"
              className="text-foreground hover:text-primary transition-colors font-medium text-sm"
            >
              {t.corporate}
            </Link>
            <Link href="/library" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              {t.library}
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium text-sm">
              {t.about}
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            <LanguageSwitcher locale={locale} onLocaleChange={onLocaleChange} />
            <Link
              href="/login"
              className="hidden sm:inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium text-sm"
            >
              {t.login}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border animate-fadeInUp">
            <Link
              href="/activities"
              className="block px-4 py-2 text-foreground hover:text-primary transition-colors text-sm"
            >
              {t.activities}
            </Link>
            <div className="px-4 py-2">
              <p className="text-foreground font-medium mb-2 text-sm">{t.courses}</p>
              <div className="pl-4 space-y-2">
                <a
                  href="https://drive.google.com/file/d/1e6Fypg8OtdhsSoCZtAnl9HoY2WZi8E7v/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs text-foreground hover:text-primary transition-colors"
                >
                  KING OF SKILL B2C
                </a>
                <a
                  href="https://drive.google.com/file/d/1GLfVYG34R9gZ-Lvc5h8FHE0WLrRDp5cW/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs text-foreground hover:text-primary transition-colors"
                >
                  KING OF SKILL B2B
                </a>
                <a
                  href="https://drive.google.com/file/d/1XbFpYmstbcNup2DlCmFbUHPMEzYqGb8V/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs text-foreground hover:text-primary transition-colors"
                >
                  FUTURE ME
                </a>
              </div>
            </div>
            <Link
              href="/corporate"
              className="block px-4 py-2 text-foreground hover:text-primary transition-colors text-sm"
            >
              {t.corporate}
            </Link>
            <Link
              href="/library"
              className="block px-4 py-2 text-foreground hover:text-primary transition-colors text-sm"
            >
              {t.library}
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-foreground hover:text-primary transition-colors text-sm"
            >
              {t.about}
            </Link>
            <Link
              href="/login"
              className="block px-4 py-2 m-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium text-center text-sm"
            >
              {t.login}
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
