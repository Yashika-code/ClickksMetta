"use client"

import { useEffect, useState } from "react"
import { useCountUp } from "@/hooks/use-in-view"

const bottomStats = [
  { label: "Active Users", end: 10000, suffix: "+" },
  { label: "Campaigns Tracked", end: 50000, suffix: "+" },
  { label: "Revenue Generated", end: 312, suffix: "M+" },
  { label: "Countries", end: 180, suffix: "+" },
]

export function HeroStatsBar() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const count0 = useCountUp(bottomStats[0].end, 2000, mounted)
  const count1 = useCountUp(bottomStats[1].end, 2200, mounted)
  const count2 = useCountUp(bottomStats[2].end, 1800, mounted)
  const count3 = useCountUp(bottomStats[3].end, 1600, mounted)
  const counts = [count0, count1, count2, count3]

  return (
    <section className="border-t border-white/5 bg-[#020617]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {bottomStats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-white">
                {stat.label === "Revenue Generated" ? "$" : ""}
                {counts[i].toLocaleString()}
                {stat.suffix}
              </p>
              <p className="text-sm text-white/40 mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

