"use client"

import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

const plans = [
  {
    name: "Free Trial",
    price: "Free",
    period: "15 Days",
    description: "Full access. No credit card required.",
    features: [
      "All core features unlocked",
      "Real-time analytics",
      "Unlimited campaigns",
      "Upgrade anytime",
    ],
    cta: "Start Free Trial",
    popular: false,
    gradient: false,
  },
  {
    name: "Starter Plan",
    price: "$29",
    period: "/ month",
    description: "For small teams getting started.",
    features: [
      "Complex Tracking",
      "4 Seats Included",
      "Priority Processing",
      "Email Support",
    ],
    cta: "Get Started",
    popular: false,
    gradient: false,
  },
  {
    name: "Professional Plan",
    price: "$79",
    period: "/ month",
    description: "For growing marketing teams.",
    features: [
      "Everything in Starter",
      "Unlimited Seats",
      "Advanced Analytics",
      "API Access",
      "Priority Support",
    ],
    cta: "Get Started",
    popular: true,
    gradient: true,
  },
  {
    name: "Enterprise Plan",
    price: "$149",
    period: "/ month",
    description: "For large organizations.",
    features: [
      "Everything in Professional",
      "Dedicated Account Manager",
      "Custom Integrations",
      "SLA Guarantee",
    ],
    cta: "Get Started",
    popular: false,
    gradient: false,
  },
]

export function Pricing() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-28 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] relative overflow-hidden" id="pricing">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2563eb]/[0.15] rounded-full blur-[160px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`text-center mb-20 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#0b1b33] text-[#6ea8ff] text-sm font-medium mb-5 border border-white/10">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance leading-tight">
            Simple, transparent{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          <p className="mt-5 text-white/40 text-lg max-w-xl mx-auto">
            Start free, upgrade when you{"'"}re ready. No hidden charges.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${
                plan.gradient
                  ? "bg-gradient-to-br from-[#0a1628] to-[#0f2847] text-white shadow-2xl shadow-blue-500/15 border border-white/10 lg:scale-105 z-10"
                  : "bg-[#050b16] text-white shadow-md shadow-black/40 border border-white/5 hover:shadow-xl hover:border-white/15"
              } card-glow`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white text-xs font-semibold shadow-lg shadow-blue-500/30 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className={`text-lg font-semibold mb-2 ${plan.gradient ? "text-white" : "text-white"}`}>
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-1">
                <span className={`text-4xl font-bold ${plan.gradient ? "text-white" : "text-white"}`}>
                  {plan.price}
                </span>
                {plan.period !== "15 Days" && (
                  <span className={`text-sm ${plan.gradient ? "text-white/40" : "text-white/40"}`}>
                    {plan.period}
                  </span>
                )}
              </div>

              {plan.period === "15 Days" && (
                <span className={`text-sm mb-4 ${plan.gradient ? "text-white/40" : "text-white/40"}`}>
                  {plan.period}
                </span>
              )}

              <p className={`text-sm mb-8 ${plan.gradient ? "text-white/40" : "text-white/40"}`}>
                {plan.description}
              </p>

              <ul className="flex flex-col gap-3.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.gradient ? "bg-[#06b6d4]/15" : "bg-[#2563eb]/8"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.gradient ? "text-[#06b6d4]" : "text-[#6ea8ff]"}`} />
                    </div>
                    <span className={`text-sm ${plan.gradient ? "text-white/60" : "text-white/60"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-full py-5 font-semibold transition-all duration-300 ${
                  plan.gradient
                    ? "bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white hover:from-[#1d4ed8] hover:to-[#0891b2] border-0 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                    : "bg-[#0a1628] text-white hover:bg-[#0a1628]/90 border-0 hover:shadow-lg"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

