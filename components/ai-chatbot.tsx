"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Loader } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  id: string
  type: "user" | "bot"
  text: string
}

const sampleQuestions = [
  "What programs does Thinking School offer?",
  "How can I enroll?",
  "What certificates do you provide?",
  "Tell me about KING OF SKILL",
  "What is FUTURE ME program?",
]

const botResponses: Record<string, string> = {
  "What programs does Thinking School offer?":
    "We offer three flagship programs: KING OF SKILL B2C for individual learners, KING OF SKILL B2B for corporate clients, and FUTURE ME for personal development. Each program is meticulously designed to enhance critical thinking, problem-solving, and intellectual excellence.",
  "How can I enroll?":
    "Simply navigate to our Courses page, select your desired program, and click on the course card to access detailed information and enrollment options. Our support team is available 24/7 to assist you.",
  "What certificates do you provide?":
    "Upon successful completion of any program, you will receive a recognized Certificate of Completion from Thinking School Canada, verifiable and shareable on professional profiles.",
  "Tell me about KING OF SKILL":
    "KING OF SKILL is our comprehensive mastery program available in B2C (individual learners) and B2B (corporate clients) formats. It focuses on developing advanced critical thinking, analytical reasoning, and executive-level problem-solving capabilities.",
  "What is FUTURE ME program?":
    "FUTURE ME is a transformative personal development program designed to unlock your full potential through innovative thinking methodologies, strategic planning, and personalized growth coaching.",
  default:
    "Thank you for your inquiry. For detailed information, please visit our contact page or email us at info@thinkingschool.ca. We're here to help!",
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Welcome to Thinking School Academy. How can I assist you in your academic journey today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (text: string = input) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    setTimeout(() => {
      const response = botResponses[text as keyof typeof botResponses] || botResponses.default

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: response,
      }

      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 800)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 md:right-6 w-14 h-14 md:w-16 md:h-16 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all flex items-center justify-center z-40 hover:scale-110"
        aria-label="Chat with us"
      >
        {isOpen ? <X className="w-6 h-6 md:w-7 md:h-7" /> : <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-2 left-2 md:bottom-28 md:right-6 md:left-auto w-auto md:w-96 max-w-sm md:max-w-none h-[500px] md:h-[600px] bg-background border border-border rounded-lg shadow-2xl flex flex-col z-40 animate-fadeInUp">
          {/* Header */}
          <div className="bg-primary text-white p-4 md:p-5 rounded-t-lg flex-shrink-0">
            <h3 className="font-serif font-bold text-lg md:text-xl">Academic Assistant</h3>
            <p className="text-sm md:text-base text-white/80">Response within minutes</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg text-sm md:text-base ${
                    message.type === "user"
                      ? "bg-primary text-white rounded-br-none break-words"
                      : "bg-card border border-border text-foreground rounded-bl-none break-words"
                  }`}
                >
                  <p className="leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-card border border-border text-foreground px-4 py-3 rounded-lg rounded-bl-none flex items-center gap-2">
                  <Loader className="w-4 h-4 md:w-5 md:h-5 animate-spin flex-shrink-0" />
                  <span className="text-sm md:text-base">Typing...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Sample Questions */}
          {messages.length === 1 && (
            <div className="px-4 md:px-5 py-3 bg-card/50 border-t border-border max-h-28 overflow-y-auto flex-shrink-0">
              <p className="text-xs md:text-sm font-medium text-muted-foreground mb-2">Popular inquiries:</p>
              <div className="space-y-2">
                {sampleQuestions.slice(0, 3).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question)}
                    className="w-full text-left text-xs md:text-sm bg-background border border-border p-2 md:p-2.5 rounded hover:border-primary transition-colors text-foreground hover:bg-primary/5 break-words"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-border p-4 md:p-5 flex-shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type message..."
                className="flex-1 px-3 md:px-4 py-2 md:py-2.5 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-xs md:text-sm"
                disabled={isLoading}
              />
              <Button
                onClick={() => handleSendMessage()}
                disabled={!input.trim() || isLoading}
                size="sm"
                className="bg-primary hover:bg-primary/90 flex-shrink-0 px-3 md:px-4"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
