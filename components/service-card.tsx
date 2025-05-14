'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Service } from '@/data/services-data'
import { secteurs } from '@/data/services-data'

// Définition des couleurs par catégorie
const categoryStyles = {
  "Contrôle de projets": {
    bg: "bg-[#fff8f8]",
    text: "text-[#800000]",
    border: "border-[#800000]",
    hover: "hover:bg-[#fff8f8]",
    shadow: "shadow-[#800000]/5"
  },
  "Gestion des Ressources": {
    bg: "bg-[#fffdfa]",
    text: "text-[#9c6644]",
    border: "border-[#9c6644]",
    hover: "hover:bg-[#fffdfa]",
    shadow: "shadow-[#9c6644]/5"
  },
  "Reporting": {
    bg: "bg-[#f9fdff]",
    text: "text-[#0066a2]",
    border: "border-[#0066a2]",
    hover: "hover:bg-[#f9fdff]",
    shadow: "shadow-[#0066a2]/5"
  },
  "Conseil stratégique": {
    bg: "bg-[#f8f8ff]",
    text: "text-[#4b0082]",
    border: "border-[#4b0082]",
    hover: "hover:bg-[#f8f8ff]",
    shadow: "shadow-[#4b0082]/5"
  }
}

// Style par défaut
const defaultStyle = {
  bg: "bg-gray-50",
  text: "text-gray-600",
  border: "border-gray-200",
  hover: "hover:bg-gray-50",
  shadow: "shadow-gray-200/50"
}

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  // Récupération du style en fonction de la catégorie
  const style = categoryStyles[service.category as keyof typeof categoryStyles] || defaultStyle

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`group relative bg-white rounded-xl ${style.shadow} hover:shadow-xl transition-all duration-300 overflow-hidden`}
    >
      {/* Bordure supérieure animée */}
      <div className={`absolute inset-x-0 top-0 h-1 ${style.bg} transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-0`} />
      
      <div className="p-6">
        {/* En-tête avec icône et catégorie */}
        <div className="flex items-start justify-between mb-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={`p-3 rounded-lg ${style.bg}`}
          >
            <service.icon size={24} className={style.text} />
          </motion.div>
          <span className={`text-xs font-medium px-3 py-1.5 rounded-full ${style.bg} ${style.text}`}>
            {service.category}
          </span>
        </div>

        {/* Titre et description */}
        <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3 group-hover:text-[#800000] transition-colors">
          {service.title}
        </h3>
        <p className="text-[#5A5A5A] mb-6 line-clamp-3">
          {service.description}
        </p>

        {/* Tags des secteurs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.secteurs.slice(0, 3).map(secteurId => {
            const secteur = secteurs.find(s => s.id === secteurId)
            return secteur ? (
              <span 
                key={secteurId}
                className={`text-xs px-2.5 py-1 rounded-full bg-gray-50 text-[#5A5A5A] border border-gray-100 group-hover:${style.bg} group-hover:${style.text} transition-colors`}
              >
                {secteur.name}
              </span>
            ) : null
          })}
          {service.secteurs.length > 3 && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-gray-50 text-[#5A5A5A] border border-gray-100">
              +{service.secteurs.length - 3}
            </span>
          )}
        </div>

        {/* Lien "En savoir plus" */}
        <Link 
          href={`/services/${service.id}`}
          className={`inline-flex items-center text-sm font-medium ${style.text} group-hover:translate-x-1 transition-transform`}
        >
          En savoir plus
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Effet de survol sur les coins */}
      <div className={`absolute inset-0 border border-transparent group-hover:${style.border}/20 transition-colors rounded-xl pointer-events-none`} />
    </motion.div>
  )
} 