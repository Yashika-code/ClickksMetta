"use client"

import { useState } from "react"
import {
  BarChart3,
  LineChart,
  CreditCard,
  Zap,
  Shield,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const tabs = [
  {
    id: "campaign",
    icon: BarChart3,
    label: "Campaign Management",
    description:
      "Effortlessly manage, analyze, and optimize your campaigns in a centralized platform. Quickly create and launch campaigns with pre-built templates and customizable options.",
    features: [
      { title: "Campaign Wizards", desc: "Streamline campaign setup with easy-to-use wizards and pre-built templates.", pct: 92 },
      { title: "Allowed Traffic Channels", desc: "Control traffic sources, ensuring targeted reach at minimal spend.", pct: 85 },
      { title: "Bulk Targeting", desc: "Apply changes to multiple campaigns simultaneously, saving time and resources.", pct: 78 },
    ],
  },
  {
    id: "analytics",
    icon: LineChart,
    label: "Marketing Analytics",
    description:
      "Get real-time insights to assess partner performance, evaluate traffic quality, and adjust investments for maximum returns. Define specific KPIs and analyze historical data.",
    features: [
      { title: "Real-Time Tracking", desc: "Create tailored dashboards with key parameters such as segments, location, device.", pct: 95 },
      { title: "Flexible Reporting", desc: "Customizable reports such as cohort analysis, global goal tracking, and CAP.", pct: 88 },
      { title: "QR & Coupon Tracking", desc: "Generate unique coupons and smart link powered QR codes for secure campaigns.", pct: 72 },
    ],
  },
  {
    id: "payout",
    icon: CreditCard,
    label: "Automated Payout",
    description:
      "Streamline your payout process with automated invoicing. Set up custom payout rules, seamlessly integrate with payment providers, and incentivize desired behaviors.",
    features: [
      { title: "Cost ETL", desc: "Identify touchpoints that drain maximum resources and tweak them for better outcomes.", pct: 90 },
      { title: "Scaling Payouts", desc: "Incentivize publisher campaigns with customized payout models that reward top performers.", pct: 82 },
      { title: "Delegated Processing", desc: "Ensure compliance with tax regulations, mitigate delays and delegate payments seamlessly.", pct: 76 },
    ],
  },
  {
    id: "automation",
    icon: Zap,
    label: "Easy Automation",
    description:
      "Streamline your marketing operations with seamless integrations that connect all your essential tools in one place. Optimize traffic distribution with intelligent link management.",
    features: [
      { title: "Automated Workflows", desc: "Create complex workflows for targeted automation and schedule actions for optimal delivery.", pct: 94 },
      { title: "Smart Links & Deep Links", desc: "Create dynamic links that personalize user experience and drive enhanced engagement.", pct: 87 },
      { title: "Offer Checker Tools", desc: "Ensure campaigns run smoothly with tools that validate offers and test links for performance.", pct: 80 },
    ],
  },
  {
    id: "fraud",
    icon: Shield,
    label: "Fraud Detection",
    description:
      "End-to-end protection across your marketing funnel with cutting-edge anti-fraud tools. AI-powered algorithms detect and prevent click fraud, geo-fraud, and invalid traffic.",
    features: [
      { title: "Protect Your Budget", desc: "Detect and filter out invalid clicks, bot traffic, and fraudulent sources in real-time.", pct: 96 },
      { title: "Validate Your Traffic", desc: "Set up multiple fraud rules customized for each campaign and partner.", pct: 89 },
      { title: "Industry Leading Protection", desc: "State-of-the-art fraud detection technology trusted by top brands worldwide.", pct: 93 },
    ],
  },
]

export function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState("campaign")
  const current = tabs.find((t) => t.id === activeTab) ?? tabs[0]
  const { ref, isInView } = useInView()

  return (
    <section className="py-28 bg-gradient-to-b from-[#050b16] via-[#050b16] to-[#020617] relative" id="features">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#0b1b33] text-[#6ea8ff] text-sm font-medium mb-5 border border-white/10">
            Product Suite
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
            Elevate Partnerships,{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
              Amplify Performance
            </span>
          </h2>
        </div>

        {/* Tab buttons (click to switch, responsive layout) */}
        <div className={`flex flex-wrap justify-center gap-3 mb-14 transition-all duration-700 delay-100 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              onMouseEnter={() => setActiveTab(tab.id)}
              onFocus={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
              className={`flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer w-full sm:w-auto sm:min-w-[200px] ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white shadow-lg shadow-blue-500/20 scale-105 ring-2 ring-offset-2 ring-offset-[#020617] ring-[#2563eb]"
                  : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20 hover:shadow-md hover:-translate-y-0.5"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="truncate">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className={`grid lg:grid-cols-2 gap-10 xl:gap-14 items-start transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div key={activeTab} className="animate-fade-in-up w-full flex justify-center lg:justify-start">
            <div className="w-full max-w-xl">
              <h3 className="text-2xl font-bold text-white mb-4">{current.label}</h3>
              <p className="text-white/50 text-lg leading-relaxed mb-10">{current.description}</p>
              <div className="flex flex-col gap-7">
                {current.features.map((f) => (
                  <div key={f.title} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#2563eb] to-[#06b6d4] flex items-center justify-center mt-0.5 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1.5">{f.title}</h4>
                      <p className="text-sm text-white/45 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 mt-8 px-6 py-3 rounded-full bg-[#0a1628] text-white text-sm font-medium hover:bg-[#0a1628]/90 transition-colors group w-full sm:w-auto"
              >
                Explore {current.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Visual preview card */}
          <div key={`preview-${activeTab}`} className="animate-slide-in-right w-full flex justify-center lg:justify-end">
            <div className="bg-gradient-to-br from-[#0a1628] to-[#0f2847] rounded-2xl p-5 sm:p-8 shadow-2xl shadow-[#0a1628]/20 border border-white/5 relative overflow-hidden w-full max-w-xl">
              {/* Subtle glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#2563eb]/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  <span className="ml-auto text-[11px] text-white/20 font-mono">{current.label}</span>
                </div>

                <div className="flex flex-col gap-5">
                  {current.features.map((f, i) => (
                    <div key={f.title} className="flex items-center gap-4 bg-white/[0.04] rounded-xl p-5 border border-white/5 hover:bg-white/[0.07] hover:border-white/10 transition-all duration-300 group">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${
                        i === 0 ? "from-blue-500 to-cyan-400" : i === 1 ? "from-cyan-400 to-teal-500" : "from-teal-500 to-emerald-400"
                      } flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                        <current.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2.5">
                          <p className="text-white text-sm font-medium truncate">{f.title}</p>
                          <span className="text-[11px] text-[#06b6d4] font-semibold">{f.pct}%</span>
                        </div>
                        <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#2563eb] to-[#06b6d4] rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${f.pct}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary stat */}
                <div className="mt-6 flex items-center justify-between bg-gradient-to-r from-[#2563eb]/10 to-[#06b6d4]/10 rounded-xl p-4 border border-white/5">
                  <span className="text-sm text-white/50">Overall Score</span>
                  <span className="text-lg font-bold text-white">{Math.round(current.features.reduce((sum, f) => sum + f.pct, 0) / current.features.length)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

