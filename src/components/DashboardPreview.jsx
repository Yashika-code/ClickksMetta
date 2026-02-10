"use client"

import { TrendingUp, TrendingDown, Eye, DollarSign, BarChart3, Send, MousePointerClick, Target, Users } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const topStats = [
  { label: "Total Revenue", value: "$32,499.93", change: "+10.43%", up: true, icon: DollarSign },
  { label: "Profit", value: "$10,499.93", change: "-8.39%", up: false, icon: BarChart3 },
  { label: "Total Views", value: "5,211,832", change: "+16.29%", up: true, icon: Eye },
  { label: "Conversion Rate", value: "4.83%", change: "+2.5%", up: true, icon: Target },
]

const funnel = [
  { label: "SENT", value: "3,923", change: "+4%", icon: Send, gradient: "from-blue-500 to-blue-400" },
  { label: "OPENED", value: "2,182", change: "-4%", icon: Eye, gradient: "from-cyan-500 to-cyan-400" },
  { label: "CLICKED", value: "1,892", change: "+12%", icon: MousePointerClick, gradient: "from-teal-500 to-teal-400" },
  { label: "CONVERTED", value: "1,592", change: "+24%", icon: Users, gradient: "from-emerald-500 to-emerald-400" },
]

const countries = [
  { name: "United States", pct: 32 },
  { name: "United Kingdom", pct: 18 },
  { name: "Germany", pct: 14 },
  { name: "Australia", pct: 11 },
  { name: "Canada", pct: 9 },
]

const regions = [
  { name: "Europe", value: 2728 },
  { name: "Asia", value: 3008 },
  { name: "Africa", value: 2409 },
  { name: "Americas", value: 800 },
  { name: "Pacific", value: 1836 },
]

const campaigns = [
  { name: "Spring Sale 2024 - Final Hours!", tags: ["Urgent", "Sale"], leads: 2500 },
  { name: "Flash Deal: 40% Off Everything", tags: ["Discount"], leads: 2200 },
  { name: "New Collection Preview", tags: ["Product"], leads: 3100 },
  { name: "Thank You - Order Confirmed", tags: ["Thank You"], leads: 2800 },
]

export function DashboardPreview() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-28 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617]">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#0b1b33] text-[#6ea8ff] text-sm font-medium mb-5 border border-white/10">
            Your command center
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
            Real-time metrics, beautiful visualizations
          </h2>
          <p className="mt-4 text-white/40 text-lg max-w-xl mx-auto">and actionable insights at your fingertips</p>
        </div>

        <div className={`relative transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <div className="absolute -inset-4 bg-gradient-to-r from-[#2563eb]/10 via-[#06b6d4]/10 to-[#2563eb]/10 rounded-[2rem] blur-2xl opacity-50" />

          <div className="relative bg-[#0a1628] rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/5 overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white font-semibold text-lg">Campaign Dashboard</h3>
                    <p className="text-white/30 text-xs">Last updated 2 mins ago</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-start md:justify-end">
                  <button type="button" className="px-4 py-2 rounded-lg bg-white/5 text-white/50 text-xs border border-white/5 hover:bg-white/10 hover:text-white/70 transition-all font-medium">
                    Export
                  </button>
                  <button type="button" className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white text-xs font-medium shadow-lg shadow-blue-500/20">
                    Refresh
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {topStats.map((stat) => (
                  <div key={stat.label} className="bg-white/[0.03] rounded-xl p-5 border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] text-white/35 font-medium uppercase tracking-wider">{stat.label}</span>
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563eb]/10 to-[#06b6d4]/10 flex items-center justify-center group-hover:from-[#2563eb]/20 group-hover:to-[#06b6d4]/20 transition-colors">
                        <stat.icon className="w-4 h-4 text-[#06b6d4]" />
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                    <div className="flex items-center gap-1.5">
                      {stat.up ? <TrendingUp className="w-3 h-3 text-emerald-400" /> : <TrendingDown className="w-3 h-3 text-red-400" />}
                      <span className={`text-[11px] font-medium ${stat.up ? "text-emerald-400" : "text-red-400"}`}>{stat.change}</span>
                      <span className="text-[10px] text-white/20">vs last month</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {funnel.map((item) => (
                  <div key={item.label} className="bg-white/[0.02] rounded-xl p-5 border border-white/5 hover:bg-white/[0.05] transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] text-white/30 font-semibold tracking-widest">{item.label}</span>
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.gradient} bg-opacity-20 flex items-center justify-center`} style={{ background: `linear-gradient(135deg, rgba(37,99,235,0.15), rgba(6,182,212,0.15))` }}>
                        <item.icon className="w-4 h-4 text-[#06b6d4]" />
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-white">{item.value}</p>
                    <span className="text-[11px] text-white/25 font-medium">{item.change} from last day</span>
                  </div>
                ))}
              </div>

              <div className="grid gap-6 lg:grid-cols-2 mb-6">
                <div className="bg-white/[0.02] rounded-xl p-6 border border-white/5">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-white font-medium text-sm">Revenue Over Time</h4>
                    <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-400/10 px-2 py-1 rounded-full">+18.2%</span>
                  </div>
                  <div className="flex items-end gap-2 h-36">
                    {[35, 55, 45, 70, 50, 80, 65, 75, 55, 90, 70, 85].map((h, i) => (
                      <div key={i} className="flex-1 group cursor-default">
                        <div className="w-full rounded-sm bg-gradient-to-t from-[#2563eb] to-[#06b6d4] transition-all duration-300 group-hover:brightness-125 group-hover:shadow-lg group-hover:shadow-blue-500/20 relative" style={{ height: `${h}%` }}>
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white/10 text-white text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm">
                            ${(h * 3.6).toFixed(0)}k
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-3 px-1">
                    {[
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ].map((m) => (
                      <span key={m} className="text-[9px] text-white/15 font-medium">{m}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white/[0.02] rounded-xl p-6 border border-white/5">
                  <h4 className="text-white font-medium text-sm mb-6">Sessions by Country</h4>
                  <div className="flex flex-col gap-4">
                    {countries.map((c) => (
                      <div key={c.name} className="flex items-center gap-3 group">
                        <span className="text-sm text-white/50 w-24 sm:w-32 truncate group-hover:text-white/70 transition-colors">{c.name}</span>
                        <div className="flex-1 h-2 bg-white/[0.04] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#2563eb] to-[#06b6d4] rounded-full transition-all duration-500 group-hover:brightness-125" style={{ width: `${c.pct}%` }} />
                        </div>
                        <span className="text-xs text-white/35 w-10 text-right font-medium">{c.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/[0.02] rounded-xl p-6 border border-white/5">
                  <h4 className="text-white font-medium text-sm mb-5">Sales by Region</h4>
                  <div className="flex flex-col gap-4">
                    {regions.map((r) => (
                      <div key={r.name} className="flex items-center justify-between group">
                        <div className="flex items-center gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] group-hover:scale-150 transition-transform" />
                          <span className="text-sm text-white/50 group-hover:text-white/70 transition-colors">{r.name}</span>
                        </div>
                        <span className="text-sm font-medium text-white">{r.value.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/[0.02] rounded-xl p-6 border border-white/5">
                  <h4 className="text-white font-medium text-sm mb-5">Traffic by Platform</h4>
                  <div className="flex items-center justify-center mb-5">
                    <div className="relative w-28 h-28">
                      <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="10" />
                        <circle cx="50" cy="50" r="38" fill="none" stroke="#2563eb" strokeWidth="10" strokeDasharray="108 131" strokeLinecap="round" />
                        <circle cx="50" cy="50" r="38" fill="none" stroke="#06b6d4" strokeWidth="10" strokeDasharray="72 167" strokeDashoffset="-108" strokeLinecap="round" />
                        <circle cx="50" cy="50" r="38" fill="none" stroke="#14b8a6" strokeWidth="10" strokeDasharray="60 179" strokeDashoffset="-180" strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <p className="text-lg font-bold text-white">2,324</p>
                        <p className="text-[9px] text-white/30 font-medium">Total</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {[
                      { name: "Meta Ads", pct: "45%", color: "bg-[#2563eb]" },
                      { name: "Google", pct: "30%", color: "bg-[#06b6d4]" },
                      { name: "TikTok", pct: "25%", color: "bg-[#14b8a6]" },
                    ].map((p) => (
                      <div key={p.name} className="flex items-center gap-2.5">
                        <div className={`w-2.5 h-2.5 rounded-full ${p.color}`} />
                        <span className="text-xs text-white/45 flex-1">{p.name}</span>
                        <span className="text-xs text-white font-medium">{p.pct}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/[0.02] rounded-xl p-6 border border-white/5">
                  <h4 className="text-white font-medium text-sm mb-5">Latest Campaigns</h4>
                  <div className="flex flex-col gap-3.5">
                    {campaigns.map((c) => (
                      <div key={c.name} className="flex items-start gap-3 pb-3.5 border-b border-white/[0.03] last:border-0 last:pb-0 group hover:bg-white/[0.02] -mx-2 px-2 py-1 rounded-lg transition-colors">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-white/80 truncate group-hover:text-white transition-colors">{c.name}</p>
                          <div className="flex items-center gap-1.5 mt-1.5">
                            {c.tags.map((t) => (
                              <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] text-white/35 border border-white/5 font-medium">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-white/35 whitespace-nowrap font-medium">{c.leads.toLocaleString()} Leads</span>
                      </div>
                    ))}
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
