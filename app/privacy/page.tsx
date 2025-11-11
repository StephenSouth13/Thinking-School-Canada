"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronLeft, Lock, Shield } from "lucide-react"

export default function PrivacyPage() {
  const [locale, setLocale] = useState<"en" | "vi">("en")

  useEffect(() => {
    const saved = localStorage.getItem("locale") as "en" | "vi"
    if (saved) setLocale(saved)
  }, [])

  const content = {
    en: {
      title: "Privacy Policy",
      subtitle: "Thinking School Canada - Data Protection and Privacy",
      lastUpdated: "Effective Date: 1 January 2026",
      backHome: "Back to Home",
      sections: [
        {
          title: "Information We Collect",
          content:
            "We collect personal information such as name and email for course registration, newsletters, or account management. We also collect non-personal information (browser type, language, visit time) to improve our services.",
        },
        {
          title: "Use of Information",
          content:
            "We use your information to provide services, communicate updates, and improve the website. We do not sell or lease your personal information.",
        },
        {
          title: "Sharing & Protection",
          content:
            "Information is shared only with authorized personnel or as required by law. We implement reasonable measures to protect personal information.",
        },
        {
          title: "User Rights",
          content:
            "You may request access, correction, or deletion of your personal information by contacting us at privacy@thinkingschool.ca.",
        },
        {
          title: "Cookies & Third-Party Links",
          content:
            "We use cookies to enhance your experience. Our website may include third-party content; we are not responsible for their policies.",
        },
        {
          title: "Changes to This Policy",
          content: "We may update this policy. Continued use of the website indicates acceptance of changes.",
        },
        {
          title: "Contact Us",
          content:
            "Email: privacy@thinkingschool.ca. For any privacy-related questions, please reach out to our data protection team.",
        },
      ],
    },
    vi: {
      title: "Chính Sách Bảo Mật",
      subtitle: "Thinking School Canada - Bảo Vệ Dữ Liệu và Quyền Riêng Tư",
      lastUpdated: "Ngày Có Hiệu Lực: 1 Tháng 1 2026",
      backHome: "Quay Lại Trang Chủ",
      sections: [
        {
          title: "Thông Tin Chúng Tôi Thu Thập",
          content:
            "Chúng tôi thu thập thông tin cá nhân như tên và email để đăng ký khóa học, nhận bản tin hoặc quản lý tài khoản. Chúng tôi cũng thu thập thông tin không phải cá nhân (loại trình duyệt, ngôn ngữ, thời gian truy cập) để cải thiện dịch vụ.",
        },
        {
          title: "Sử Dụng Thông Tin",
          content:
            "Chúng tôi sử dụng thông tin của bạn để cung cấp dịch vụ, giao tiếp các bản cập nhật và cải thiện trang web. Chúng tôi không bán hoặc cho thuê thông tin cá nhân của bạn.",
        },
        {
          title: "Chia Sẻ & Bảo Vệ",
          content:
            "Thông tin chỉ được chia sẻ với nhân viên được phép hoặc theo yêu cầu của pháp luật. Chúng tôi thực hiện các biện pháp hợp lý để bảo vệ thông tin cá nhân.",
        },
        {
          title: "Quyền Của Người Dùng",
          content:
            "Bạn có thể yêu cầu truy cập, sửa chữa hoặc xóa thông tin cá nhân của mình bằng cách liên hệ với chúng tôi tại privacy@thinkingschool.ca.",
        },
        {
          title: "Cookie & Liên Kết Bên Thứ Ba",
          content:
            "Chúng tôi sử dụng cookie để nâng cao trải nghiệm của bạn. Trang web của chúng tôi có thể bao gồm nội dung của bên thứ ba; chúng tôi không chịu trách nhiệm về chính sách của họ.",
        },
        {
          title: "Thay Đổi Chính Sách Này",
          content:
            "Chúng tôi có thể cập nhật chính sách này. Việc tiếp tục sử dụng trang web cho thấy sự chấp nhận các thay đổi.",
        },
        {
          title: "Liên Hệ Với Chúng Tôi",
          content:
            "Email: privacy@thinkingschool.ca. Để có bất kỳ câu hỏi nào liên quan đến bảo mật, vui lòng liên hệ với đội bảo vệ dữ liệu của chúng tôi.",
        },
      ],
    },
  }

  const t = content[locale]

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            {t.backHome}
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-10 h-10 text-white" />
            <h1 className="font-serif text-4xl md:text-5xl font-bold">{t.title}</h1>
          </div>
          <p className="text-white/90 text-lg">{t.subtitle}</p>
          <p className="text-white/70 text-sm mt-4">{t.lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-12">
          {t.sections.map((section, index) => (
            <div key={index} className="animate-fadeInUp" style={{ animationDelay: `${index * 0.05}s` }}>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-20 p-8 bg-card border border-border rounded-lg">
          <div className="flex items-start gap-3 mb-4">
            <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-2">
                {locale === "en" ? "Your Privacy Matters" : "Quyền Riêng Tư Của Bạn Quan Trọng"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {locale === "en"
                  ? "We are committed to protecting your privacy and ensuring transparency in how we handle your data."
                  : "Chúng tôi cam kết bảo vệ quyền riêng tư của bạn và đảm bảo tính minh bạch trong cách chúng tôi xử lý dữ liệu của bạn."}
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                {locale === "en" ? "Contact Us" : "Liên Hệ"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
