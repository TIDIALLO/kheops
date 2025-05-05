import { Metadata } from "next"
import { SecteursHeroSection } from "@/components/sections/secteurs-hero-section"
import { SecteursSection } from "@/components/sections/secteurs-section"
import { SecteursReferencesSection } from "@/components/sections/secteurs-references-section"
import { SecteursCTASection } from "@/components/sections/secteurs-cta-section"

export const metadata: Metadata = {
  title: "Secteurs d'activité | KHEOPS Consulting",
  description: "Découvrez les différents secteurs d'activité dans lesquels KHEOPS Consulting intervient: logistique, transport, infrastructure, énergie, construction et industrie.",
}

export default function SecteursPage() {
  return (
    <main>
      <SecteursHeroSection />
      <SecteursSection />
      <SecteursReferencesSection />
      <SecteursCTASection />
    </main>
  )
} 