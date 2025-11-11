"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { BookOpen, FileText, Video } from "lucide-react"

export default function LibraryPage() {
  const [locale, setLocale] = useState<"en" | "vi">("en")

  const resources = [
    { icon: BookOpen, title: "Articles", count: "120+", description: "Insightful articles on thinking and learning" },
    { icon: Video, title: "Video Tutorials", count: "85+", description: "Engaging video content for all levels" },
    { icon: FileText, title: "Case Studies", count: "45+", description: "Real-world examples and applications" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar locale={locale} onLocaleChange={setLocale} />

      {/* Hero */}
      <section className="min-h-[400px] flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeInUp">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground">Learning Library</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access our comprehensive collection of resources to deepen your understanding of critical thinking.
          </p>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 text-center space-y-4 hover:border-primary transition-all animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <resource.icon className="w-12 h-12 text-primary mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-foreground">{resource.count}</h3>
                <p className="font-medium text-foreground">{resource.title}</p>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </div>
            ))}
          </div>

          {/* Featured Resources */}
          <div className="space-y-8">
            <h2 className="font-serif text-3xl font-bold text-foreground">Featured Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all animate-fadeInUp"
                  style={{ animationDelay: `${item * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif font-bold text-lg text-foreground">Resource Title {item}</h3>
                      <p className="text-sm text-muted-foreground">
                        Learn essential concepts and practical applications.
                      </p>
                      <button className="text-primary hover:text-primary/80 text-sm font-medium">Read More →</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
      <BackToTop />
    </div>
  )
}
