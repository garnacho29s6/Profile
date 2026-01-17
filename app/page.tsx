import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { HobbiesSection } from "@/components/hobbies-section"
import { ExperienceSection } from "@/components/experience-section"
import { GallerySection } from "@/components/gallery-section"
import { GoalsSection } from "@/components/goals-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">
      <Header />
      <HeroSection />
      <AboutSection />
      <HobbiesSection />
      <ExperienceSection />
      <GallerySection />
      <GoalsSection />
      <Footer />
    </main>
  )
}
