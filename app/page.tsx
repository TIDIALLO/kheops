import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/sections/hero-section'
import Loading from '@/components/ui/loading'
import { ProfessionalBackground } from '@/components/ui/professional-background'

// Chargement dynamique des composants
const ExpertisePreviewSection = dynamic(() => import('@/components/sections/expertise-preview-section'))
// const ServicesSection = dynamic(() => import('@/components/sections/services-section').then(mod => ({ default: mod.ServicesSection })))
// const DomainesSection = dynamic(() => import('@/components/sections/domaines-section').then(mod => ({ default: mod.DomainesSection })))
const TeamCollaborationSection = dynamic(() => import('@/components/sections/team-collaboration-section').then(mod => ({ default: mod.TeamCollaborationSection })))
const MethodologiesSection = dynamic(() => import('@/components/sections/methodologies-section').then(mod => ({ default: mod.MethodologiesSection })))
const ProcessSection = dynamic(() => import('@/components/sections/process-section').then(mod => ({ default: mod.ProcessSection })))
const ReferencesSection = dynamic(() => import('@/components/sections/references-section').then(mod => ({ default: mod.ReferencesSection })))
const TestimonialsSection = dynamic(() => import('@/components/sections/testimonials-section').then(mod => ({ default: mod.TestimonialsSection })))
const StatsSection = dynamic(() => import('@/components/sections/stats-section').then(mod => ({ default: mod.StatsSection })))
const FAQSection = dynamic(() => import('@/components/sections/faq-section').then(mod => ({ default: mod.FAQSection })))
const ContactSection = dynamic(() => import('@/components/sections/contact-section').then(mod => ({ default: mod.ContactSection })))

export default function Home() {
  return (
    <main>
      {/* Arrière-plan professionnel */}
      <ProfessionalBackground />
      
      <HeroSection />
      <Suspense fallback={<Loading />}>
        <ExpertisePreviewSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <TeamCollaborationSection />
      </Suspense>
      {/* <Suspense fallback={<Loading />}>
        <ServicesSection />
      </Suspense> */}
      {/* <Suspense fallback={<Loading />}>
        <DomainesSection />
      </Suspense> */}
      <Suspense fallback={<Loading />}>
        <MethodologiesSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ProcessSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ReferencesSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <StatsSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ContactSection />
      </Suspense>
    </main>
  )
}
