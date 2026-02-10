"use client"

import { AlertTriangle, Database, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const challenges = [
  {
    icon: AlertTriangle,
    problem: "Poor Tracking",
    solution: "Real-Time Analytics",
    description: "Get precise, real-time tracking across all channels with zero data loss.",
    color: "from-red-500 to-orange-400",
    solColor: "from-blue-500 to-cyan-400",
  },
  {
    icon: Database,
    problem: "Scattered Data",
    solution: "Unified Dashboard",
    description: "Consolidate all your marketing data into one powerful, actionable dashboard.",
    color: "from-orange-500 to-yellow-400",
    solColor: "from-cyan-400 to-teal-500",
  },
  {
    icon: TrendingUp,
    problem: "Hard to Measure ROI",
    solution: "Advanced Attribution",
    description: "Multi-touch attribution models that reveal the true value of every campaign.",
    color: "from-yellow-500 to-amber-400",
    solColor: "from-teal-500 to-emerald-400",
  },
]

export function Challenges() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-28 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] relative overflow-hidden">
      {/* Subtle decorative bg */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563eb]/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#06b6d4]/15 rounded-full blur-[140px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`text-center mb-20 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#0b1b33] text-[#6ea8ff] text-sm font-medium mb-5 border border-white/10">
            Problem Solved
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
            Solve Your Marketing{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
              Challenges
            </span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((c, i) => (
            <div
              key={c.problem}
              className={`group relative transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="bg-[#050b16] rounded-2xl p-8 shadow-md shadow-black/40 border border-white/5 hover:border-white/15 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 card-glow overflow-hidden relative">
                {/* Decorative gradient blob */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${c.solColor} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Problem - crossed out */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center shadow-lg opacity-40 group-hover:opacity-60 transition-opacity`}>
                      <c.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-white/30 line-through decoration-2">{c.problem}</span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <ArrowRight className="w-4 h-4 text-[#0a1628]/15 group-hover:text-[#2563eb]/50 transition-colors" />
                  </div>

                  {/* Solution */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.solColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${c.solColor} text-white text-sm font-semibold shadow-md`}>
                      {c.solution}
                    </span>
                  </div>

                  <p className="text-sm text-white/50 leading-relaxed mt-4">{c.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
