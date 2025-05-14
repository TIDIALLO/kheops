import { Clock, Coins, TriangleAlert, Construction } from 'lucide-react'
import { IconType } from 'react-icons'

export interface Expertise {
  title: string
  description: string
  icon: IconType
  delay: number
  bgColor: string
  serviceLink: string
}

export const expertises: Expertise[] = [
  {
    title: "Planning",
    description: "Planification, analyse de délais, ordonnancement et optimisation des chemins critiques.",
    icon: Clock,
    delay: 0,
    bgColor: "#fcf0f0",
    serviceLink: "/services/planning-strategique"
  },
  {
    title: "Coûts",
    description: "Contrôle des coûts, prévisions budgétaires, analyse de la valeur acquise (EVM).",
    icon: Coins,
    delay: 0.1,
    bgColor: "#fff5f5",
    serviceLink: "/services/controle-couts"
  },
  {
    title: "Risques",
    description: "Identification, analyse qualitative et quantitative des risques et opportunités.",
    icon: TriangleAlert,
    delay: 0.2,
    bgColor: "#fcf0f0",
    serviceLink: "/services/gestion-risques"
  },
  {
    title: "OPC",
    description: "Ordonnancement, Pilotage et Coordination des projets de construction et d'ingénierie.",
    icon: Construction,
    delay: 0.3,
    bgColor: "#fff5f5",
    serviceLink: "/services/opc"
  }
]

export const colors = {
  primary: "#800000",
  secondary: "#b30000",
  pastel: "#fff5f5",
  text: {
    dark: "#333333",
    muted: "#666666"
  },
  categories: {
    "Contrôle de projets": {
      bg: "#fff8f8",
      text: "#800000",
      badge: "linear-gradient(135deg, #800000 0%, #b30000 100%)"
    },
    "Gestion des Ressources": {
      bg: "#fffdfa",
      text: "#9c6644",
      badge: "linear-gradient(135deg, #9c6644 0%, #bd8f6d 100%)"
    },
    "Reporting": {
      bg: "#f9fdff",
      text: "#0066a2",
      badge: "linear-gradient(135deg, #0066a2 0%, #0088cc 100%)"
    }
  }
} 