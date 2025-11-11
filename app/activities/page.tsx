"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { Calendar, MapPin, Users } from "lucide-react"

export default function ActivitiesPage() {
  const [locale, setLocale] = useState<"en" | "vi">("en")

  const events = [
    {
      title: "Thinking Summit 2025",
      date: "March 15, 2025",
      location: "Toronto Convention Centre",
      attendees: "500+",
      description: "Annual conference bringing together thought leaders and educators.",
    },
    {
      title: "Student Showcase",
      date: "April 20, 2025",
      location: "Online",
      attendees: "200+",
      description: "Celebrate student achievements and innovative projects.",
    },
    {
      title: "Workshop Series",
      date: "Every Saturday",
      location: "Multiple Locations",
      attendees: "50+ per session",
      description: "Interactive workshops on critical thinking and problem solving.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar locale={locale} onLocaleChange={setLocale} />

      {/* Hero */}
      <section className="min-h-[400px] flex items-center justify-center pt-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeInUp">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground">Activities & Events</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our community events and activities designed to inspire and engage.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all animate-fadeInUp space-y-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-serif text-2xl font-bold text-foreground">{event.title}</h3>
              <p className="text-muted-foreground">{event.description}</p>
              <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{event.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{event.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{event.attendees}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer locale={locale} />
      <BackToTop />
    </div>
  )
}
