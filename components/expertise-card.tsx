'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Types pour les propriétés du composant
interface ExpertiseCardProps {
  title: string
  description: string
  icon: LucideIcon | string
  color?: string
  index: number
  link?: string
}

export function ExpertiseCard({ 
  title, 
  description, 
  icon: Icon, 
  color = "#800000", 
  index,
  link
}: ExpertiseCardProps) {
  // Variants d'animation pour l'apparition de la carte
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.1
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group h-full"
    >
      <div className="h-full bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
        {/* En-tête avec dégradé et icône */}
        <div 
          className="p-6 flex items-center justify-between"
          style={{ 
            background: `linear-gradient(135deg, ${color} 0%, ${color}CC 100%)`,
            borderBottom: `1px solid ${color}33`
          }}
        >
          <div className="flex items-center">
            <div className="rounded-full bg-white p-3 shadow-md">
              {typeof Icon === 'string' ? (
                <span className="text-2xl">{Icon}</span>
              ) : (
                <Icon className="w-6 h-6" style={{ color }} />
              )}
            </div>
            <h3 className="text-xl font-bold text-white ml-4">{title}</h3>
          </div>
        </div>

        {/* Contenu de la carte */}
        <div className="p-6">
          <p className="text-[#5A5A5A] mb-6 leading-relaxed">
            {description}
          </p>

          {/* Lien "En savoir plus" avec animation */}
          {link && (
            <div className="flex justify-end">
              <Link href={link}>
                <motion.div 
                  className="flex items-center font-medium"
                  style={{ color }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">En savoir plus</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                </motion.div>
              </Link>
            </div>
          )}
        </div>
        
        {/* Effet de bordure au survol */}
        <div 
          className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ borderColor: `${color}33` }}
        />
      </div>
    </motion.div>
  )
} 