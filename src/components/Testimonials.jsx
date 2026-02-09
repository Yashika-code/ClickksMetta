"use client"

import { Star, Quote } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

const accolades = [
  { platform: "G2", rating: "4.7/5" },
  { platform: "Capterra", rating: "4.3/5" },
  { platform: "Trustradius", rating: "8/10" },
]

const testimonials = [
  {
    quote: "I am very much satisfied. The CSM goes above and beyond. The support we receive is exceptional. I would give ClicksMeta a 10 on 10.",
    name: "Rachit Chugh",
    title: "Senior Operations Manager, Cuelinks",
    initials: "RC",
  },
  {
    quote: "I would rate ClicksMeta a solid 10. The primary reasons include its robust features, excellent support, and the measurable impact on our marketing efforts.",
    name: "Vijay Tiwari",
    title: "Business Head, JioCoupons",
    initials: "VT",
  },
  {
    quote: "The only constant about our industry is that it changes every day. You expect your tech stack to be ready for changes, and ClicksMeta never fails to amaze.",
    name: "Rohit Arora",
    title: "VP - Mobile, Xapads Media",
    initials: "RA",
  },
]

const gradients = [
  "from-blue-400 to-cyan-400",
  "from-cyan-400 to-teal-400",
  "from-teal-400 to-emerald-400",
  "from-blue-500 to-blue-400",
  "from-sky-400 to-cyan-400",
  "from-cyan-500 to-teal-400",
  "from-blue-400 to-sky-400",
  "from-teal-400 to-cyan-400",
]

export function Testimonials() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-28 bg-[#0a1628] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#2563eb]/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#06b6d4]/6 rounded-full blur-[120px]" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Accolades */}
        <div className={`text-center mb-20 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[#06b6d4] text-sm font-medium mb-5">
            Customer Love
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-14 text-balance leading-tight">
            Accolades &{" "}
            <span className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
              Appreciations
            </span>
          </h2>

          <div className="flex items-center justify-center gap-10 flex-wrap">
            {accolades.map((a) => (
              <div key={a.platform} className="flex flex-col items-center gap-2.5 group">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400 group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <span className="text-2xl font-bold text-white">{a.rating}</span>
                <span className="text-sm text-white/30 font-medium">{a.platform}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials grid - small wrapped comment boxes */}
        <div className={`transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={t.name} className="glass rounded-2xl p-6 h-full flex flex-col hover:bg-white/[0.08] transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-7 h-7 text-[#2563eb]/30 group-hover:text-[#2563eb]/50 transition-colors" />
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed flex-1 mb-5 line-clamp-5 group-hover:text-white/70 transition-colors">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center shadow-lg`}>
                    <span className="text-white text-xs font-bold">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{t.name}</p>
                    <p className="text-white/35 text-xs">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
