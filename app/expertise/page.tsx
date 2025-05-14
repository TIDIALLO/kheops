import { Metadata } from "next"
import { ExpertiseSection } from "@/components/sections/expertise-section"

export const metadata: Metadata = {
  title: "Méthodologie",
  description: "Découvrez notre expertise en contrôle de projets : planification, gestion des coûts, analyse des risques et coordination OPC.",
}

export default function ExpertisePage() {
  return (
    <main>
      {/* Note: Cette section présente une redondance avec la page Services.
          Une fusion ou distinction plus claire sera effectuée selon les directives du directeur. */}
      <ExpertiseSection isStandalone={true} />
    </main>
  )
} 