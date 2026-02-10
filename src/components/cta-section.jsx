"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function CTASection() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-28 bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#0a1628] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-[#2563eb]/15 to-[#06b6d4]/15 rounded-full blur-[150px] animate-gradient-shift" />
        {/* Decorative dots */}
        <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-[#2563eb]/30 animate-dot-pulse" />
        <div className="absolute top-40 right-32 w-1.5 h-1.5 rounded-full bg-[#06b6d4]/30 animate-dot-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-32 left-1/3 w-2 h-2 rounded-full bg-[#2563eb]/20 animate-dot-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-20 right-1/4 w-1.5 h-1.5 rounded-full bg-[#06b6d4]/25 animate-dot-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div ref={ref} className={`relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 mb-8 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#06b6d4]" />
          <span className="text-sm text-white/50 font-medium">Get started today</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-7 text-balance leading-tight">
          Ready to Scale Your Campaign{" "}
          <span className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
            Performance?
          </span>
        </h2>
        <p className="text-lg lg:text-xl text-white/40 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join thousands of marketers already using ClicksMeta to track, optimize, and scale their affiliate campaigns.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-[#2563eb] to-[#06b6d4] hover:from-[#1d4ed8] hover:to-[#0891b2] text-white border-0 rounded-full px-10 py-7 text-base font-semibold shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5"
          >
            Start Free Trial
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-white/15 text-white hover:bg-white/10 rounded-full px-10 py-7 text-base font-semibold bg-transparent hover:border-white/25 transition-all duration-300"
          >
            Book Demo
          </Button>
        </div>

        <p className="mt-8 text-sm text-white/25">No credit card required. 15-day free trial.</p>
      </div>
    </section>
  )
}
