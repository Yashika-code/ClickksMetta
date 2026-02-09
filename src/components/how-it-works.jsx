"use client"

import { Link2, BarChart3, Rocket } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect Traffic Sources",
    description: "Integrate Google, Meta, TikTok, and affiliate networks in minutes. Our setup wizard guides you through every step.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Track & Analyze Campaigns",
    description: "Monitor clicks, conversions, and revenue in real time from one dashboard. Identify winning patterns instantly.",
    gradient: "from-cyan-400 to-teal-500",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Optimize & Scale Performance",
    description: "Scale winning campaigns and eliminate what doesn't perform. AI-powered suggestions maximize your ROI.",
    gradient: "from-teal-500 to-emerald-400",
  },
]

export function HowItWorks() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-28 bg-[#0a1628] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#2563eb]/8 rounded-full blur-[180px]" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        <div className={`text-center mb-20 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[#06b6d4] text-sm font-medium mb-5">
            Getting Started
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
            How It{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="mt-5 text-white/40 text-lg max-w-xl mx-auto">
            A simple workflow designed to help you scale with confidence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line with pulse */}
          <div className="hidden md:block absolute top-[68px] left-[16.66%] right-[16.66%] h-[2px]">
            <div className="h-full bg-gradient-to-r from-[#2563eb]/40 via-[#06b6d4]/40 to-[#14b8a6]/40 rounded-full" />
            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-2 h-2 rounded-full bg-[#06b6d4] animate-dot-pulse" />
            <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-2 h-2 rounded-full bg-[#06b6d4] animate-dot-pulse" style={{ animationDelay: "1s" }} />
          </div>

          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative flex flex-col items-center text-center group transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Step icon with ring */}
              <div className="relative mb-10">
                <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-500`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Number badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#0a1628] border-2 border-[#06b6d4] flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <span className="text-sm font-bold text-[#06b6d4]">{step.number}</span>
                </div>

                {/* Pulse ring */}
                <div className={`absolute -inset-3 rounded-2xl border border-white/5 group-hover:border-white/10 transition-colors`} />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
