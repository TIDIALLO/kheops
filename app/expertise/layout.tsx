import { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "Notre Expertise - KHEOPS Consulting",
  description: "Découvrez notre expertise en contrôle de projets : planification, gestion des coûts, analyse des risques et coordination OPC.",
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#8B0000'
}

export default function ExpertiseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="expertise-layout">
      {children}
    </div>
  )
} 