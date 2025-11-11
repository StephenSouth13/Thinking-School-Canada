"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronLeft, Book, Scale } from "lucide-react"

export default function TermsPage() {
  const [locale, setLocale] = useState<"en" | "vi">("en")

  useEffect(() => {
    const saved = localStorage.getItem("locale") as "en" | "vi"
    if (saved) setLocale(saved)
  }, [])

  const content = {
    en: {
      title: "Terms of Service",
      subtitle: "Thinking School Canada - Terms and Conditions",
      lastUpdated: "Last Updated: November 2025",
      backHome: "Back to Home",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content:
            "By accessing and using this website and enrolling in any program offered by Thinking School Canada, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
        },
        {
          title: "2. Use License",
          content:
            "Permission is granted to temporarily download one copy of the materials (information or software) on Thinking School Canada's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: Modify or copy the materials; Use the materials for any commercial purpose or for any public display; Attempt to decompile or reverse engineer any software contained on the website; Remove any copyright or other proprietary notations from the materials; Or transfer the materials to another person or 'mirror' the materials on any other server.",
        },
        {
          title: "3. Disclaimer",
          content:
            "The materials on Thinking School Canada's website are provided on an 'as is' basis. Thinking School Canada makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
        },
        {
          title: "4. Limitations",
          content:
            "In no event shall Thinking School Canada or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Thinking School Canada's website, even if Thinking School Canada or an authorized representative has been notified orally or in writing of the possibility of such damage.",
        },
        {
          title: "5. Accuracy of Materials",
          content:
            "The materials appearing on Thinking School Canada's website could include technical, typographical, or photographic errors. Thinking School Canada does not warrant that any of the materials on the website are accurate, complete, or current. Thinking School Canada may make changes to the materials contained on the website at any time without notice.",
        },
        {
          title: "6. Limitations of Liability",
          content:
            "The materials on Thinking School Canada's website and its products are provided on an 'as is' basis. To the full extent permissible by applicable law, Thinking School Canada disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose.",
        },
        {
          title: "7. Modifications to Terms",
          content:
            "Thinking School Canada may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.",
        },
        {
          title: "8. Governing Law",
          content:
            "These terms and conditions are governed by and construed in accordance with the laws of the Province of Ontario, Canada, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.",
        },
        {
          title: "9. Contact Information",
          content:
            "If you have any questions about these Terms of Service, please contact us at info@thinkingschool.ca or call +1 (416) 555-0123.",
        },
      ],
    },
    vi: {
      title: "Điều Khoản Dịch Vụ",
      subtitle: "Thinking School Canada - Điều Khoản và Điều Kiện",
      lastUpdated: "Cập Nhật Lần Cuối: Tháng 11 2025",
      backHome: "Quay Lại Trang Chủ",
      sections: [
        {
          title: "1. Chấp Nhận Điều Khoản",
          content:
            "Bằng cách truy cập và sử dụng trang web này cũng như đăng ký bất kỳ chương trình nào do Thinking School Canada cung cấp, bạn chấp nhận và đồng ý bị ràng buộc bởi các điều khoản và quy định của thỏa thuận này.",
        },
        {
          title: "2. Giấy Phép Sử Dụng",
          content:
            "Được phép tạm thời tải xuống một bản sao của các tài liệu trên trang web Thinking School Canada chỉ để xem cá nhân, không thương mại. Bạn không được phép sửa đổi, sao chép, phân phối hoặc sử dụng cho bất kỳ mục đích thương mại nào.",
        },
        {
          title: "3. Tuyên Bố Từ Chối Trách Nhiệm",
          content:
            "Các tài liệu trên trang web Thinking School Canada được cung cấp dưới dạng 'nguyên trạng'. Thinking School Canada không đưa ra bất kỳ bảo đảm nào, dù là rõ ràng hay ngụ ý.",
        },
        {
          title: "4. Hạn Chế Trách Nhiệm",
          content:
            "Trong mọi trường hợp, Thinking School Canada không chịu trách nhiệm về các thiệt hại phát sinh từ việc sử dụng hoặc không thể sử dụng các tài liệu trên trang web.",
        },
        {
          title: "5. Độ Chính Xác của Tài Liệu",
          content: "Các tài liệu trên trang web Thinking School Canada có thể chứa các lỗi kỹ thuật hoặc như.",
        },
        {
          title: "6. Pháp Luật Điều Chỉnh",
          content:
            "Các điều khoản này được quản lý bởi luật pháp của Tỉnh Ontario, Canada. Bạn chấp nhận thẩm quyền độc quyền của các tòa án tại địa điểm đó.",
        },
        {
          title: "7. Thông Tin Liên Hệ",
          content:
            "Nếu bạn có bất kỳ câu hỏi nào về Điều Khoản Dịch Vụ này, vui lòng liên hệ với chúng tôi tại info@thinkingschool.ca hoặc gọi +1 (416) 555-0123.",
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
            <Scale className="w-10 h-10 text-white" />
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
            <Book className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-2">
                {locale === "en" ? "Questions?" : "Có câu hỏi?"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {locale === "en"
                  ? "If you have questions about these terms, please don't hesitate to reach out to our team."
                  : "Nếu bạn có bất kỳ câu hỏi nào về các điều khoản này, vui lòng liên hệ với đội ngũ của chúng tôi."}
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
