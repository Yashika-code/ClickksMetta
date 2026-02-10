import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroStatsBar } from './components/HeroStatsBar';
import { FeaturesTabs } from './components/Features-tabs';
import { DashboardPreview } from './components/DashboardPreview';
import { ThemeProvider } from './components/theme-provider';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen  w-full overflow-x-hidden bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] text-white">
        <Navbar />

        {/* Give space below fixed navbar so content isn't hidden */}
        <div className="pt-24 md:pt-28 space-y-24 md:space-y-32">
          <Hero />
          <HeroStatsBar />
          <FeaturesTabs />
          <DashboardPreview />
          <Testimonials />
          <Pricing />
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App;
