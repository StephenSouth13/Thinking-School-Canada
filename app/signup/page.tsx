"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { Eye, EyeOff, ArrowRight, Check } from "lucide-react"

const translations = {
  en: {
    title: "Join Thinking School",
    subtitle: "Create your account and start your transformative learning journey.",
    form: {
      name: "Full Name",
      email: "Email Address",
      password: "Password",
      confirmPassword: "Confirm Password",
      signup: "Create Account",
      login: "Already have an account? Log in",
      terms: "I agree to the Terms of Service and Privacy Policy",
      features: [
        "Access to all premium courses",
        "Personalized learning paths",
        "Professional certificates",
        "24/7 academic support",
        "Lifetime access to course materials",
      ],
    },
  },
  vi: {
    title: "Tham Gia Thinking School",
    subtitle: "Tạo tài khoản của bạn và bắt đầu hành trình học tập biến đổi ngay hôm nay.",
    form: {
      name: "Họ Và Tên",
      email: "Địa Chỉ Email",
      password: "Mật Khẩu",
      confirmPassword: "Xác Nhận Mật Khẩu",
      signup: "Tạo Tài Khoản",
      login: "Đã có tài khoản? Đăng nhập",
      terms: "Tôi đồng ý với Điều Khoản Dịch Vụ và Chính Sách Bảo Mật",
      features: [
        "Truy cập tất cả các khóa học cao cấp",
        "Đường dẫn học tập được cá nhân hóa",
        "Chứng chỉ chuyên nghiệp",
        "Hỗ trợ học tập 24/7",
        "Truy cập suốt đời vào tài liệu khóa học",
      ],
    },
  },
}

export default function SignUpPage() {
  const [locale, setLocale] = useState<"en" | "vi">("en")
  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)

  const t = translations[locale]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      return
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar locale={locale} onLocaleChange={setLocale} />

      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center pt-12 md:pt-20 px-4 pb-8">
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
            {/* Left - Form */}
            <div className="animate-fadeInUp">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-2 md:mb-3">{t.title}</h1>
                  <p className="text-base md:text-lg text-muted-foreground">{t.subtitle}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t.form.name}</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 md:py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t.form.email}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 md:py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t.form.password}</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full px-4 py-2 md:py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t.form.confirmPassword}</label>
                    <div className="relative">
                      <input
                        type={showConfirm ? "text" : "password"}
                        required
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="w-full px-4 py-2 md:py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirm(!showConfirm)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      className="w-4 h-4 rounded border-border cursor-pointer mt-1"
                    />
                    <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
                      {t.form.terms}
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!termsAccepted}
                    className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2 group text-sm md:text-base"
                  >
                    {t.form.signup}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                <div className="text-center">
                  <Link href="/login" className="text-primary hover:underline text-sm font-medium">
                    {t.form.login}
                  </Link>
                </div>
              </div>
            </div>

            {/* Right - Features */}
            <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
              <div className="bg-card p-6 md:p-8 rounded-lg border border-border">
                <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                  What You Receive
                </h2>
                <div className="space-y-3 md:space-y-4">
                  {t.form.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground text-sm md:text-base">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 md:p-8 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Join 15,000+ students</strong> who are transforming their thinking
                  and achieving excellence at Thinking School.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
      <BackToTop />
    </div>
  )
}
