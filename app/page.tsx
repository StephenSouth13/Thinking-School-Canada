"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { ArrowRight, BookOpen, Users, Lightbulb } from "lucide-react"

const translations = {
  en: {
    hero: {
      title: "Transform Education Through Innovative Thinking",
      subtitle:
        "Discover personalized learning experiences that inspire critical thinking and academic excellence at Thinking School Canada.",
      cta: "Start Learning Today",
    },
    features: {
      title: "Why Choose Thinking School?",
      items: [
        {
          icon: "Lightbulb",
          title: "Critical Thinking Development",
          description: "Develop strong analytical and problem-solving skills grounded in philosophical inquiry.",
        },
        {
          icon: "Users",
          title: "Expert Academic Mentorship",
          description: "Learn from distinguished educators with extensive expertise in their disciplines.",
        },
        {
          icon: "BookOpen",
          title: "Comprehensive Curriculum",
          description: "Access meticulously designed courses grounded in academic rigor and innovation.",
        },
      ],
    },
    programs: {
      title: "Our Flagship Programs",
      subtitle: "Explore our comprehensive collection of transformative learning experiences",
    },
  },
  vi: {
    hero: {
      title: "Chuyển Đổi Giáo Dục Thông Qua Tư Duy Sáng Tạo",
      subtitle:
        "Khám phá những trải nghiệm học tập được cá nhân hóa giúp phát triển tư duy phản biện và sự xuất sắc học tập.",
      cta: "Bắt Đầu Học Hôm Nay",
    },
    features: {
      title: "Tại Sao Chọn Thinking School?",
      items: [
        {
          icon: "Lightbulb",
          title: "Phát Triển Tư Duy Phản Biện",
          description: "Phát triển kỹ năng phân tích và giải quyết vấn đề mạnh mẽ.",
        },
        {
          icon: "Users",
          title: "Hướng Dẫn Học Thuật Chuyên Gia",
          description: "Học từ những nhà giáo dục có kinh nghiệm.",
        },
        {
          icon: "BookOpen",
          title: "Chương Trình Toàn Diện",
          description: "Truy cập các khóa học được thiết kế cho mọi trình độ.",
        },
      ],
    },
    programs: {
      title: "Các Chương Trình Nổi Bật",
      subtitle: "Khám phá bộ sưu tập khóa học toàn diện được thiết kế cho mọi trình độ học tập.",
    },
  },
}

export default function Home() {
  const [locale, setLocale] = useState<"en" | "vi">("en")
  const t = translations[locale]

  return (
    <div className="min-h-screen bg-background">
      <Navbar locale={locale} onLocaleChange={setLocale} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fadeInUp">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">{t.hero.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg"
            >
              {t.hero.cta}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            {t.features.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {t.features.items.map((item, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-8 hover:shadow-lg transition-all animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {item.icon === "Lightbulb" && <Lightbulb className="w-6 h-6 text-primary" />}
                  {item.icon === "Users" && <Users className="w-6 h-6 text-primary" />}
                  {item.icon === "BookOpen" && <BookOpen className="w-6 h-6 text-primary" />}
                </div>
                <h3 className="font-serif font-bold text-xl mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            {t.programs.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance mb-12">
            {t.programs.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {["Beginner", "Intermediate", "Advanced"].map((level, index) => (
              <Link
                key={index}
                href={`/courses/${level.toLowerCase()}`}
                className="group bg-background border border-border rounded-lg overflow-hidden hover:border-primary transition-all hover:shadow-xl animate-fadeInUp"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                  <BookOpen className="w-12 h-12 text-primary/50 group-hover:text-primary transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                    {level} Programs
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Discover our comprehensive {level.toLowerCase()} level courses.
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm">
                    Explore <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer locale={locale} />
      <BackToTop />
    </div>
  )
}
