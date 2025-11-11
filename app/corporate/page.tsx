"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { Briefcase, TrendingUp, Users } from "lucide-react"
import { ArrowRight } from "lucide-react"

export default function CorporatePage() {
  const [locale, setLocale] = useState<"en" | "vi">("en")

  return (
    <div className="min-h-screen bg-background">
      <Navbar locale={locale} onLocaleChange={setLocale} />

      {/* Hero */}
      <section className="min-h-[400px] flex items-center justify-center pt-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeInUp">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground">Corporate Training Solutions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enhance your team's capabilities with our customized thinking and leadership development programs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all w-fit mx-auto"
          >
            Request a Demo <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-16 text-center text-foreground">Our Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Team Building",
                description: "Foster collaboration and communication through thoughtful engagement activities.",
              },
              {
                icon: TrendingUp,
                title: "Leadership Development",
                description: "Prepare your leaders for complex business challenges with strategic thinking.",
              },
              {
                icon: Briefcase,
                title: "Executive Coaching",
                description: "One-on-one mentoring to accelerate professional growth and decision-making.",
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-8 space-y-4 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <solution.icon className="w-8 h-8 text-primary" />
                <h3 className="font-serif text-xl font-bold text-foreground">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer locale={locale} />
      <BackToTop />
    </div>
  )
}
