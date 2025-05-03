import { HeroSection } from '@/components/sections/hero-section'
import { ExpertiseSection } from '@/components/sections/expertise-section'
import { ExpertiseDetailsSection } from '@/components/sections/expertise-details-section'
import { ServicesSection } from '@/components/sections/services-section'
import { DomainesSection } from '@/components/sections/domaines-section'
import { StatsSection } from '@/components/sections/stats-section'
import { ReferencesSection } from '@/components/sections/references-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ExpertiseSection />
      <ExpertiseDetailsSection />
      <ServicesSection />
      <DomainesSection />
      <StatsSection />
      <ReferencesSection />
      <ContactSection />
    </main>
  )
}
