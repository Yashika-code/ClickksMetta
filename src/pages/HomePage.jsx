import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Hero } from "@/components/Hero"
import { HeroStatsBar } from "@/components/HeroStatsBar"
import { FeaturesTabs } from "@/components/Features-tabs"
import { DashboardPreview } from "@/components/DashboardPreview"
import { Testimonials } from "@/components/Testimonials"
import { Pricing } from "@/components/Pricing"

export function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [location])

  return (
    <div className="space-y-24 md:space-y-32">
      <Hero />
      <HeroStatsBar />
      <FeaturesTabs />
      <DashboardPreview />
      <Testimonials />
      <Pricing />
    </div>
  )
}
