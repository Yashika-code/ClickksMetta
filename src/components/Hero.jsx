"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, TrendingUp, Users, DollarSign, Target, Zap } from "lucide-react"
import { useCountUp } from "@/hooks/use-in-view"

const stats = [
  { icon: TrendingUp, label: "Referrals", value: "1,250", change: "+12%" },
  { icon: Target, label: "Campaigns", value: "340", change: "+8%" },
  { icon: DollarSign, label: "Revenue", value: "$312.5k", change: "+23%" },
  { icon: Users, label: "Leads", value: "399", change: "+15%" },
]

const rotatingWords = ["Affiliate", "Performance", "Marketing"]

export function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a1628]">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#2563eb]/15 rounded-full blur-[150px] animate-gradient-shift" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#06b6d4]/10 rounded-full blur-[130px] animate-gradient-shift" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-[#7c3aed]/8 rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a1628_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-dot-pulse" />
              <span className="text-sm text-white/60 font-medium">Performance Marketing Platform</span>
              <Zap className="w-3.5 h-3.5 text-[#06b6d4]" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              <span className="text-balance">
                Track. Optimize.{" "}
                <br className="hidden sm:block" />
                Scale Your{" "}
                <span className="relative inline-block">
                  <span
                    key={currentWord}
                    className="bg-gradient-to-r from-[#2563eb] via-[#06b6d4] to-[#2563eb] bg-clip-text text-transparent animate-fade-in-up inline-block"
                  >
                    {rotatingWords[currentWord]}
                  </span>
                </span>{" "}
                <br className="hidden sm:block" />
                Campaigns.
              </span>
            </h1>

            <p className="mt-7 text-lg lg:text-xl text-white/50 leading-relaxed max-w-lg">
              Powerful analytics & tracking platform for advertisers, affiliates, and agencies. One platform to manage, track, and optimize all your campaigns.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-10">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] hover:from-[#1d4ed8] hover:to-[#0891b2] text-white border-0 rounded-full px-8 py-6 text-base font-semibold shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/15 text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-semibold bg-transparent backdrop-blur-sm hover:border-white/25 transition-all duration-300"
              >
                <Play className="w-4 h-4 mr-2 fill-white" />
                Watch Demo
              </Button>
            </div>

            {/* Trust badge */}
            <div className="mt-14 flex items-center gap-4">
              <div className="flex -space-x-2.5">
                {[
                  "from-blue-400 to-cyan-400",
                  "from-cyan-400 to-teal-400",
                  "from-teal-400 to-emerald-400",
                  "from-emerald-400 to-blue-400",
                ].map((gradient, i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full border-2 border-[#0a1628] bg-gradient-to-br ${gradient} shadow-lg`}
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-white/40">
                  Trusted by <span className="text-white/70 font-semibold">10,000+</span> marketers
                </p>
              </div>
            </div>
          </div>

          {/* Right - Dashboard Preview */}
          <div className={`transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#2563eb]/20 to-[#06b6d4]/20 rounded-3xl blur-2xl opacity-50" />

              {/* Main dashboard card */}
              <div className="relative glass rounded-2xl p-6 shadow-2xl animate-pulse-glow">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <span className="text-xs text-white/30 font-mono">dashboard.clicksmeta.com</span>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat, i) => (
                    <div
                      key={stat.label}
                      className="bg-white/[0.04] rounded-xl p-4 border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-all duration-300 group cursor-default"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#2563eb]/20 to-[#06b6d4]/20 flex items-center justify-center group-hover:from-[#2563eb]/30 group-hover:to-[#06b6d4]/30 transition-colors">
                          <stat.icon className="w-3.5 h-3.5 text-[#06b6d4]" />
                        </div>
                        <span className="text-[11px] text-white/40 font-medium">{stat.label}</span>
                      </div>
                      <p className="text-xl font-bold text-white">{stat.value}</p>
                      <span className="text-xs text-emerald-400 font-medium">{stat.change}</span>
                    </div>
                  ))}
                </div>

                {/* Mini chart */}
                <div className="mt-4 bg-white/[0.04] rounded-xl p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-white/40 font-medium">Revenue Trend</span>
                    <span className="text-xs text-emerald-400 font-medium">+23.5%</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-20">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-[#2563eb] to-[#06b6d4] transition-all duration-300 hover:brightness-125 cursor-default"
                        style={{
                          height: mounted ? `${h}%` : "0%",
                          transition: `height 1s cubic-bezier(0.16, 1, 0.3, 1) ${i * 80}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Conversion rate */}
                <div className="mt-4 flex items-center justify-between bg-white/[0.04] rounded-xl p-4 border border-white/5">
                  <div>
                    <p className="text-[11px] text-white/40 font-medium">Conversion Rate</p>
                    <p className="text-2xl font-bold text-white mt-0.5">49.9%</p>
                  </div>
                  <div className="relative w-14 h-14">
                    <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
                      <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                      <circle
                        cx="28" cy="28" r="22" fill="none" stroke="url(#progressGrad)" strokeWidth="4"
                        strokeDasharray="138" strokeDashoffset="69" strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#2563eb" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-[#06b6d4]">A+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 glass rounded-xl p-3 animate-float shadow-lg shadow-black/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 font-medium">Revenue</p>
                    <p className="text-sm font-bold text-white">+23.5%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-3 -left-3 glass rounded-xl p-3 animate-float-delayed shadow-lg shadow-black/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 font-medium">New Leads</p>
                    <p className="text-sm font-bold text-white">+127</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
