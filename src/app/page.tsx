import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { BMICalculator } from "@/components/sections/bmi-calculator"
import { ProgressChart } from "@/components/sections/progress-chart"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FooterCTA } from "@/components/sections/footer-cta"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <BMICalculator />
        <ProgressChart />
        <TestimonialsSection />
      </main>
      <FooterCTA />
    </div>
  )
}
