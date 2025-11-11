"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { Award, Users, BookOpen, MapPin, Zap, CheckCircle2, Wifi, Coffee } from "lucide-react"
import { facultyData, facultyLevels } from "@/lib/faculty-data"
import { facilityConfigurations, facilityInfo } from "@/lib/facilities-data"

export default function AboutPage() {
  const [locale, setLocale] = useState<"en" | "vi">("en")

  const boardMembers = [
    {
      name: "Dr. Vũ Thế Dũng",
      title: "Board Member – Thinking School Canada",
      company: "CEO – Thinking School Vietnam",
      image: "/dr-vu-the-dung-ceo-vietnam.jpg",
    },
    {
      name: "Jon Neuhold",
      title: "Board Member – Thinking School Canada",
      company: "Co-Founder of The Great Canadian Training & Consulting Company",
      image: "/jon-neuhold-co-founder-canada.jpg",
    },
  ]

  const getFacultyByLevel = (level: string) => {
    return facultyData.filter((member) => member.level === level)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar locale={locale} onLocaleChange={setLocale} />

      {/* Hero */}
      <section className="min-h-[400px] flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeInUp">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground">About Thinking School</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering students and professionals to think critically and innovatively since 2010.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fadeInUp">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                At Thinking School Canada, we believe that critical thinking is the foundation of personal and
                professional success. Our mission is to inspire, educate, and empower individuals to become innovative
                thinkers who can navigate complex challenges with clarity and creativity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are committed to providing world-class education that transforms how people think, learn, and grow.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg h-64 flex items-center justify-center">
              <Award className="w-32 h-32 text-primary/30" />
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            {[
              { label: "Students Helped", value: "15,000+" },
              { label: "Expert Instructors", value: "50+" },
              { label: "Countries Reached", value: "25+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-2 animate-fadeInUp p-6 bg-card rounded-lg border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-4xl font-serif font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="space-y-8 pt-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Student-Centered",
                  description: "Every decision we make is focused on student success and growth.",
                },
                {
                  icon: BookOpen,
                  title: "Excellence",
                  description: "We maintain the highest standards in curriculum design and instruction.",
                },
                {
                  icon: Award,
                  title: "Innovation",
                  description: "We continuously evolve our methods to meet modern educational needs.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-8 space-y-4 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <value.icon className="w-8 h-8 text-primary" />
                  <h3 className="font-serif text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Board of Directors */}
          <div className="space-y-8 pt-12 border-t border-border">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Board of Directors</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {boardMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl font-bold text-foreground">{member.name}</h3>
                    <p className="text-primary font-medium">{member.title}</p>
                    <p className="text-muted-foreground">{member.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12 pt-12 border-t border-border">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Faculty Members</h2>
              <p className="text-lg text-muted-foreground">
                World-class experts with advanced degrees and international experience
              </p>
            </div>

            {/* Faculty Levels Overview */}
            <div className="grid md:grid-cols-3 gap-6">
              {facultyLevels.map((level, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 space-y-4 hover:border-primary transition-all animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-1 rounded-full bg-gradient-to-r ${level.color}`} />
                  <h3 className="font-serif text-lg font-bold text-foreground">{level.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{level.description}</p>
                </div>
              ))}
            </div>

            {/* Faculty Members by Level */}
            {["Grand Master", "Master", "Senior Trainer"].map((level) => {
              const members = getFacultyByLevel(level)
              if (members.length === 0) return null

              return (
                <div key={level} className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-foreground border-l-4 border-primary pl-4">
                    {level}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {members.map((member, index) => (
                      <div
                        key={member.id}
                        className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all hover:shadow-lg animate-fadeInUp"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
                          {member.image ? (
                            <img
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Users className="w-12 h-12 text-primary/30" />
                          )}
                        </div>
                        <div className="p-5 space-y-3">
                          <div>
                            <h4 className="font-serif font-bold text-lg text-foreground">{member.name}</h4>
                            {member.degree && <p className="text-sm text-primary font-medium">{member.degree}</p>}
                          </div>
                          <div className="space-y-1 text-sm">
                            <p className="font-medium text-foreground">{member.title}</p>
                            {member.company && <p className="text-muted-foreground">{member.company}</p>}
                          </div>
                          {member.bio && (
                            <p className="text-xs text-muted-foreground leading-relaxed italic">{member.bio}</p>
                          )}
                          {member.expertise && member.expertise.length > 0 && (
                            <div className="flex flex-wrap gap-1 pt-2">
                              {member.expertise.slice(0, 2).map((exp, idx) => (
                                <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                  {exp}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="space-y-12 pt-12 border-t border-border">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Facilities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">{facilityInfo.description}</p>
            </div>

            {/* Facility Highlights */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-foreground">{facilityInfo.name}</h3>
                  <p className="text-muted-foreground">{facilityInfo.tagline}</p>
                  <p className="font-semibold text-primary">{facilityInfo.address}</p>
                </div>
              </div>
            </div>

            {/* Main Facility Info */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 space-y-2 animate-fadeInUp">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">Size & Capacity</span>
                </div>
                <p className="text-2xl font-serif font-bold text-foreground">{facilityInfo.mainRoom.size}</p>
                <p className="text-muted-foreground">{facilityInfo.mainRoom.capacity}</p>
              </div>
              <div
                className="bg-card border border-border rounded-lg p-6 space-y-2 animate-fadeInUp"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">Features</span>
                </div>
                <p className="font-semibold text-foreground">{facilityInfo.mainRoom.features}</p>
                <p className="text-sm text-muted-foreground">Multiple configurations available</p>
              </div>
              <div
                className="bg-card border border-border rounded-lg p-6 space-y-2 animate-fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">Amenities</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Coffee, tea, filtered water, catering options, tech support
                </p>
              </div>
            </div>

            {/* Facility Configurations */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-foreground">Room Configurations</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {facilityConfigurations.map((config, index) => (
                  <div
                    key={config.id}
                    className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <Wifi className="w-16 h-16 text-primary/20" />
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <h4 className="font-serif text-lg font-bold text-foreground">{config.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">Capacity: {config.capacity} participants</p>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{config.description}</p>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">Features</p>
                          <div className="flex flex-wrap gap-2">
                            {config.features.map((feature, idx) => (
                              <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-2">
                            Perfect For
                          </p>
                          <ul className="space-y-1">
                            {config.perfectFor.map((item, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                                <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Amenities */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Amenities & Support</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {facilityInfo.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{amenity}</span>
                  </div>
                ))}
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
