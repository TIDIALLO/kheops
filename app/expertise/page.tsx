import { Metadata } from "next"
import { ExpertiseSection } from "@/components/sections/expertise-section"

export const metadata: Metadata = {
  title: "Notre Expertise | KHEOPS Consulting",
  description: "Découvrez notre expertise en contrôle de projets : planification, gestion des coûts, analyse des risques et coordination OPC.",
}

export default function ExpertisePage() {
  return (
    <main>
      <ExpertiseSection isStandalone={true} />
    </main>
  )
} 