import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notre Expertise - KHEOPS Consulting",
  description: "Découvrez notre expertise en contrôle de projets : planification, gestion des coûts, analyse des risques et coordination OPC.",
}

export default function ExpertiseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 