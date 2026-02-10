"use client"

import { useState } from "react"
import { ChevronDown, MessageCircle } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const faqs = [
  {
    question: "What is a performance marketing platform?",
    answer:
      "Compared to traditional advertising, performance marketing facilitates the measuring of results efficiently. This enables advertisers to know the real value they get from their ad spend. With a performance marketing platform, advertisers have the flexibility of targeting particular segments, monitoring achievement of campaigns, which enhances efficient usage of resources.",
  },
  {
    question: "What are some examples of performance marketing?",
    answer:
      "Performance marketing is where users pay based on the performance of a campaign. For instance, users might get charged each time a consumer clicks on a particular ad (pay per click) or each time they make a sale. Performance marketing is the complete reverse of conventional marketing and much more cost effective.",
  },
  {
    question: "How does ClicksMeta help improve campaign performance?",
    answer:
      "ClicksMeta offers a sophisticated attribution model to provide users with the real picture on the effectiveness of their marketing channels. The platform enables users to identify which touchpoints are the major ones and helps them effectively decide how to allocate available funds and achieve the highest possible ROI.",
  },
  {
    question: "How does ClicksMeta help manage affiliate marketing programs?",
    answer:
      "ClicksMeta offers advanced affiliate management solutions such as real-time tracking, automated payout, and top-of-the-line anti-fraud software. Our platform assists users in managing their affiliate programs and optimizing their sales revenue.",
  },
  {
    question: "Can ClicksMeta help with cross-device tracking?",
    answer:
      "ClicksMeta uses sophisticated tracking methods that enable you to track user behaviors across multiple devices and geos. This enables you to gain a comprehensive view of the overall customer journey.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { ref, isInView } = useInView()

  return (
    <section className="py-28 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563eb]/20 rounded-full blur-[140px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#0b1b33] text-[#6ea8ff] text-sm font-medium mb-5 border border-white/10">
            <MessageCircle className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
            Frequently Asked,{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
              Clearly Answered
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } ${
                openIndex === i
                  ? "bg-[#050b16] shadow-lg shadow-black/40 border border-[#2563eb]/40"
                  : "bg-[#050b16]/80 border border-white/5 hover:border-white/15 hover:bg-[#050b16]"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 sm:px-7 py-6 text-left group"
              >
                <span className={`font-medium pr-4 transition-colors duration-300 ${openIndex === i ? "text-[#6ea8ff]" : "text-white group-hover:text-white/80"}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openIndex === i ? "bg-[#2563eb]/20 rotate-180" : "bg-white/5 group-hover:bg-white/10"
                }`}>
                  <ChevronDown
                    className={`w-4 h-4 transition-colors duration-300 ${
                      openIndex === i ? "text-[#6ea8ff]" : "text-white/40"
                    }`}
                  />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  openIndex === i ? "max-h-96 pb-7" : "max-h-0"
                }`}
              >
                <p className="px-5 sm:px-7 text-white/50 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
