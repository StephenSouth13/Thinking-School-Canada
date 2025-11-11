"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { Star, Users, Clock, ArrowRight } from "lucide-react"

const translations = {
  en: {
    title: "Our Featured Programs",
    subtitle: "Discover our comprehensive collection of courses designed for every learning level.",
    courses: [
      {
        id: 1,
        title: "KING OF SKILL B2C",
        level: "For Individual Learners",
        duration: "12 weeks",
        students: 1245,
        rating: 4.9,
        description: "Master critical thinking and problem-solving skills designed for professionals and students.",
        link: "https://drive.google.com/file/d/1e6Fypg8OtdhsSoCZtAnl9HoY2WZi8E7v/view",
      },
      {
        id: 2,
        title: "KING OF SKILL B2B",
        level: "For Corporate Clients",
        duration: "Flexible",
        students: 450,
        rating: 4.95,
        description: "Tailored training programs to enhance team performance and organizational thinking.",
        link: "https://drive.google.com/file/d/1GLfVYG34R9gZ-Lvc5h8FHE0WLrRDp5cW/view?usp=sharing",
      },
      {
        id: 3,
        title: "FUTURE ME",
        level: "Personal Development",
        duration: "8 weeks",
        students: 892,
        rating: 4.85,
        description: "Transform your future through innovative thinking and personal growth strategies.",
        link: "https://drive.google.com/file/d/1XbFpYmstbcNup2DlCmFbUHPMEzYqGb8V/view",
      },
    ],
  },
  vi: {
    title: "Các Chương Trình Nổi Bật Của Chúng Tôi",
    subtitle: "Khám phá bộ sưu tập khóa học toàn diện được thiết kế cho mọi trình độ học tập.",
    courses: [
      {
        id: 1,
        title: "KING OF SKILL B2C",
        level: "Cho Những Người Học Tập Cá Nhân",
        duration: "12 tuần",
        students: 1245,
        rating: 4.9,
        description: "Thành thạo kỹ năng tư duy phản biện và giải quyết vấn đề được thiết kế cho chuyên gia.",
        link: "https://drive.google.com/file/d/1e6Fypg8OtdhsSoCZtAnl9HoY2WZi8E7v/view",
      },
      {
        id: 2,
        title: "KING OF SKILL B2B",
        level: "Cho Các Khách Hàng Doanh Nghiệp",
        duration: "Linh Hoạt",
        students: 450,
        rating: 4.95,
        description: "Các chương trình đào tạo được điều chỉnh để cải thiện hiệu suất của nhóm.",
        link: "https://drive.google.com/file/d/1GLfVYG34R9gZ-Lvc5h8FHE0WLrRDp5cW/view?usp=sharing",
      },
      {
        id: 3,
        title: "FUTURE ME",
        level: "Phát Triển Cá Nhân",
        duration: "8 tuần",
        students: 892,
        rating: 4.85,
        description: "Chuyển đổi tương lai của bạn thông qua tư duy sáng tạo và chiến lược phát triển.",
        link: "https://drive.google.com/file/d/1XbFpYmstbcNup2DlCmFbUHPMEzYqGb8V/view",
      },
    ],
  },
}

export default function CoursesPage() {
  const [locale, setLocale] = useState<"en" | "vi">("en")
  const t = translations[locale]

  return (
    <div className="min-h-screen bg-background">
      <Navbar locale={locale} onLocaleChange={setLocale} />

      {/* Page Header */}
      <section className="min-h-[400px] flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeInUp">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground">{t.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {t.courses.map((course, index) => (
              <a
                key={course.id}
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary hover:shadow-xl transition-all animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:from-primary/40 group-hover:to-primary/20 transition-all p-6">
                  <div className="text-center space-y-2">
                    <p className="text-sm font-medium text-primary/80">{course.level}</p>
                    <h3 className="font-serif font-bold text-xl text-foreground leading-tight">{course.title}</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm font-medium text-foreground">{course.rating}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer locale={locale} />
      <BackToTop />
    </div>
  )
}
