"use client"

import { useState } from "react"
import { ShoppingCart, Landmark, Building2, Plane, Radio, CloudCog, ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const industries = [
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Expand your affiliate reach and efficiency with 700+ seamless integrations with media networks, traffic sources, and partner platforms.",
    color: "from-blue-500 to-cyan-400",
    bgGlow: "bg-blue-500/10",
  },
  {
    icon: Landmark,
    title: "Fintech",
    description: "Secure your affiliate marketing campaigns from fraud. Identify channels, publishers, geos, and more to optimize user acquisition with click-level fraud reports.",
    color: "from-cyan-400 to-teal-500",
    bgGlow: "bg-cyan-500/10",
  },
  {
    icon: Building2,
    title: "Banking",
    description: "With real-time reporting, customize your dashboards per priorities. Promote your banking services to audiences that show the highest conversion rates.",
    color: "from-teal-500 to-emerald-400",
    bgGlow: "bg-teal-500/10",
  },
  {
    icon: Plane,
    title: "Travel",
    description: "Increase bookings with easy campaign creation, prevent fraud, manage payouts, create coupon codes with ClicksMeta's Affiliate Management Software.",
    color: "from-blue-600 to-blue-400",
    bgGlow: "bg-blue-600/10",
  },
  {
    icon: Radio,
    title: "Media & Network",
    description: "Create and manage campaigns, and onboard affiliates, partners, and publishers easily. Simplify your affiliate marketing with our Performance Marketing Software.",
    color: "from-sky-500 to-cyan-400",
    bgGlow: "bg-sky-500/10",
  },
  {
    icon: CloudCog,
    title: "SaaS",
    description: "Streamline subscription acquisition with efficient campaign tracking, flexible commission structures, and detailed performance reporting.",
    color: "from-cyan-500 to-teal-400",
    bgGlow: "bg-cyan-500/10",
  },
]

export function Industries() {
  const [active, setActive] = useState(0)
  const { ref, isInView } = useInView()

  return (
    <section className="py-28 bg-[#0a1628] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#2563eb]/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#06b6d4]/6 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`text-center mb-20 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[#06b6d4] text-sm font-medium mb-5">
            Industry Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
            Endless Opportunities to Scale, Manage &{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
              Optimize
            </span>
          </h2>
          <p className="mt-5 text-white/40 text-lg max-w-2xl mx-auto">
            Your Performance Marketing across industries
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item, i) => (
            <div
              key={item.title}
              className={`group relative rounded-2xl p-7 transition-all duration-500 cursor-pointer border overflow-hidden ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${
                active === i
                  ? "bg-white/[0.08] border-white/15 shadow-lg shadow-blue-500/5"
                  : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
              onMouseEnter={() => setActive(i)}
            >
              {/* Glow on hover */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 ${item.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-5">{item.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#06b6d4] hover:text-white transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
