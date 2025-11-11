"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Award, Zap, Target } from "lucide-react"

interface FooterProps {
  locale?: "en" | "vi"
}

const translations = {
  en: {
    company: "Thinking School Canada",
    tagline: "Excellence in Academic Innovation & Professional Development",
    address: "133 Broo Street, Toronto, Ontario, Canada",
    phone: "+1 (416) 555-0123",
    email: "info@thinkingschool.ca",
    programs: "Our Programs",
    king_b2c: "KING OF SKILL B2C",
    king_b2b: "KING OF SKILL B2B",
    future_me: "FUTURE ME",
    quickLinks: "Quick Links",
    courses: "Courses",
    about: "About Us",
    corporate: "Corporate Training",
    library: "Learning Library",
    activities: "Activities & Events",
    contact: "Contact",
    followUs: "Connect With Us",
    legal: "Legal",
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    rights: "© 2025 Thinking School Canada. All rights reserved. Transforming minds globally.",
    getInTouch: "Get in Touch",
    mission: "Mission",
    missionText:
      "Cultivating critical thinking and innovative problem-solving skills for academic and professional excellence.",
    vision: "Vision",
    visionText: "To be a global leader in innovative educational methodologies and professional development.",
  },
  vi: {
    company: "Thinking School Canada",
    tagline: "Sáng Tạo Học Thuật & Phát Triển Chuyên Nghiệp",
    address: "133 Đường Broo, Toronto, Ontario, Canada",
    phone: "+1 (416) 555-0123",
    email: "info@thinkingschool.ca",
    programs: "Các Chương Trình",
    king_b2c: "KING OF SKILL B2C",
    king_b2b: "KING OF SKILL B2B",
    future_me: "FUTURE ME",
    quickLinks: "Liên Kết Nhanh",
    courses: "Khóa Học",
    about: "Về Chúng Tôi",
    corporate: "Đào Tạo Doanh Nghiệp",
    library: "Thư Viện Học Tập",
    activities: "Hoạt Động & Sự Kiện",
    contact: "Liên Hệ",
    followUs: "Kết Nối Với Chúng Tôi",
    legal: "Pháp Lý",
    terms: "Điều Khoản Dịch Vụ",
    privacy: "Chính Sách Bảo Mật",
    rights: "© 2025 Thinking School Canada. Tất cả các quyền được bảo lưu. Chuyển đổi tư duy toàn cầu.",
    getInTouch: "Liên Hệ Với Chúng Tôi",
    mission: "Sứ Mệnh",
    missionText:
      "Phát triển kỹ năng tư duy phản biện và giải quyết vấn đề sáng tạo cho sự xuất sắc học thuật và chuyên nghiệp.",
    vision: "Tầm Nhìn",
    visionText: "Trở thành nhà lãnh đạo toàn cầu trong các phương pháp giáo dục sáng tạo và phát triển chuyên nghiệp.",
  },
}

export function Footer({ locale = "en" }: FooterProps) {
  const t = translations[locale]

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 pb-16 border-b border-border">
          <div className="space-y-3 animate-fadeInUp">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-primary" />
              <h3 className="font-serif font-bold text-lg text-foreground">{t.mission}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{t.missionText}</p>
          </div>
          <div className="space-y-3 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-primary" />
              <h3 className="font-serif font-bold text-lg text-foreground">{t.vision}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{t.visionText}</p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1 space-y-4 animate-fadeInUp">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-lg text-foreground">{t.company}</h2>
                <p className="text-xs text-muted-foreground mt-1">{t.tagline}</p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-muted-foreground hover:text-primary transition-colors">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{t.address}</span>
              </div>
              <Link
                href={`tel:${t.phone}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {t.phone}
              </Link>
              <Link
                href={`mailto:${t.email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                {t.email}
              </Link>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-serif font-bold text-lg text-foreground">{t.programs}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://drive.google.com/file/d/1e6Fypg8OtdhsSoCZtAnl9HoY2WZi8E7v/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {t.king_b2c}
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1GLfVYG34R9gZ-Lvc5h8FHE0WLrRDp5cW/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {t.king_b2b}
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1XbFpYmstbcNup2DlCmFbUHPMEzYqGb8V/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {t.future_me}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-serif font-bold text-lg text-foreground">{t.quickLinks}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/courses"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {t.courses}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {t.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/corporate"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {t.corporate}
                </Link>
              </li>
              <li>
                <Link
                  href="/library"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                >
                  {t.library}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-serif font-bold text-lg text-foreground">{t.contact}</h3>
            <Link
              href="/contact"
              className="inline-block px-4 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              {t.getInTouch}
            </Link>
            <div className="pt-4 border-t border-border space-y-3">
              <h4 className="text-sm font-medium text-foreground">{t.legal}</h4>
              <div className="space-y-2">
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs font-medium block"
                >
                  {t.terms}
                </Link>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs font-medium block"
                >
                  {t.privacy}
                </Link>
              </div>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            <h3 className="font-serif font-bold text-lg text-foreground">{t.followUs}</h3>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-11 h-11 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors hover:scale-110 transform"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-11 h-11 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors hover:scale-110 transform"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-11 h-11 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors hover:scale-110 transform"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-11 h-11 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors hover:scale-110 transform"
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center md:text-left text-muted-foreground text-xs md:text-sm">{t.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
