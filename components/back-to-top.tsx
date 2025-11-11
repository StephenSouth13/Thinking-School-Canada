"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-30 right-4 md:right-6 p-3 md:p-3.5 bg-primary/90 hover:bg-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all z-30 animate-fadeInUp hover:scale-110"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6 md:w-7 md:h-7" />
        </button>
      )}
    </>
  )
}
