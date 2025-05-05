import { Metadata } from "next"
import { ServicesHeroSection } from "@/components/sections/services-hero-section"
// import { ServicesSection } from "@/components/sections/services-section"
// import { ServicesDetailsSection } from "@/components/sections/services-details-section"
import ServicesCaseStudies from "@/components/sections/services-case-studies"
import { ServicesCTASection } from "@/components/sections/services-cta-section"

export const metadata: Metadata = {
  title: "Services | KHEOPS Consulting",
  description: "Découvrez nos services de contrôle de projets: planning, coûts, risques et OPC (Ordonnancement, Pilotage et Coordination).",
}

export default function ServicesPage() {
  return (
    <main>
      <ServicesHeroSection />
      {/* <ServicesSection /> */}
      {/* <ServicesDetailsSection /> */}
      <ServicesCaseStudies />
      <ServicesCTASection />
    </main>
  )
} 