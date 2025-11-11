"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const translations = {
  en: {
    title: "Get in Touch",
    subtitle: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    form: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      subject: "Subject",
      message: "Message",
      submit: "Send Message",
      success: "Thank you! Your message has been sent successfully.",
    },
    contact: {
      email: "Email",
      phone: "Phone",
      address: "Location",
    },
    info: {
      email: "info@thinkingschoolcanada.com",
      phone: "+1 (647) 555-0100",
      address: "Toronto, Ontario, Canada",
    },
  },
  vi: {
    title: "Liên Hệ Với Chúng Tôi",
    subtitle:
      "Có câu hỏi? Chúng tôi rất muốn nghe từ bạn. Gửi tin nhắn cho chúng tôi và chúng tôi sẽ phản hồi sớm nhất.",
    form: {
      name: "Họ Và Tên",
      email: "Địa Chỉ Email",
      phone: "Số Điện Thoại",
      subject: "Tiêu Đề",
      message: "Tin Nhắn",
      submit: "Gửi Tin Nhắn",
      success: "Cảm ơn! Tin nhắn của bạn đã được gửi thành công.",
    },
    contact: {
      email: "Email",
      phone: "Điện Thoại",
      address: "Địa Điểm",
    },
    info: {
      email: "info@thinkingschoolcanada.com",
      phone: "+1 (647) 555-0100",
      address: "Toronto, Ontario, Canada",
    },
  },
}

export default function ContactPage() {
  const [locale, setLocale] = useState<"en" | "vi">("en")
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const t = translations[locale]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar locale={locale} onLocaleChange={setLocale} />

      {/* Hero Section */}
      <section className="min-h-[300px] flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeInUp">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground">{t.title}</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
      </section>

      {/* Contact Info & Form - Improved mobile layout with stacked columns */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 md:space-y-8 animate-fadeInUp">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">Contact Information</h2>

              {[
                {
                  icon: Mail,
                  label: t.contact.email,
                  value: t.info.email,
                  href: `mailto:${t.info.email}`,
                },
                {
                  icon: Phone,
                  label: t.contact.phone,
                  value: t.info.phone,
                  href: `tel:${t.info.phone}`,
                },
                {
                  icon: MapPin,
                  label: t.contact.address,
                  value: t.info.address,
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href || "#"}
                  className="flex items-start gap-4 p-4 md:p-6 rounded-lg bg-card border border-border hover:border-primary transition-all group"
                >
                  <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="min-w-0">
                    <p className="font-medium text-foreground">{item.label}</p>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors break-all">
                      {item.value}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Contact Form */}
            <div className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6 bg-card p-6 md:p-8 rounded-lg border border-border"
              >
                {submitted && (
                  <div className="p-4 bg-primary/10 border border-primary rounded-lg text-primary font-medium text-center text-sm md:text-base">
                    {t.form.success}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.form.name}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.form.email}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.form.phone}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.form.subject}</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.form.message}</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  {t.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
      <BackToTop />
    </div>
  )
}
