"use client"

import { BarChart3, Globe, Settings, Layers, Lock, Repeat } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Campaign Analytics",
    description: "Track every click, conversion, and revenue in real time. Get instant insights to optimize your campaigns while they run.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Globe,
    title: "Multi-Platform Tracking",
    description: "Unify data from Facebook, Google, TikTok, and 50+ platforms. One dashboard for all your affiliate and performance marketing.",
    gradient: "from-cyan-400 to-teal-500",
  },
  {
    icon: Settings,
    title: "Automation & Reporting",
    description: "Automate reports, alerts, and optimization rules. Focus on strategy while the platform handles the heavy lifting.",
    gradient: "from-teal-500 to-emerald-400",
  },
  {
    icon: Layers,
    title: "Smart Attribution",
    description: "Multi-touch attribution models reveal the true value of every channel. Make data-driven decisions with confidence.",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    icon: Lock,
    title: "Fraud Prevention",
    description: "AI-powered fraud detection protects your budget. Automatically block suspicious traffic and invalid clicks.",
    gradient: "from-sky-500 to-cyan-400",
  },
  {
    icon: Repeat,
    title: "Seamless Integrations",
    description: "700+ integrations with media networks, traffic sources, and partner platforms. Connect everything in minutes.",
    gradient: "from-cyan-500 to-teal-400",
  },
]

export function PowerfulFeatures() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-28 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2563eb]/[0.12] rounded-full blur-[170px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        <div className={`text-center mb-20 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#0b1b33] text-[#6ea8ff] text-sm font-medium mb-5 border border-white/10">
            Why ClicksMeta
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
            Powerful{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="mt-5 text-white/40 text-lg max-w-2xl mx-auto">
            Everything you need to track, optimize, and scale your marketing campaigns
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group relative bg-[#050b16] rounded-2xl p-8 border border-white/5 transition-all duration-700 card-glow gradient-border overflow-hidden ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Decorative gradient blob on hover */}
              <div className={`absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-[0.12] rounded-full blur-3xl transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  <f.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-white transition-colors">{f.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
