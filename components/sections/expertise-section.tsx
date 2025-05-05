'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { expertises, colors } from '@/data/expertises'

// Chargement dynamique des composants UI
const Card = dynamic(() => import('@/components/ui/card').then(mod => mod.Card))
const CardContent = dynamic(() => import('@/components/ui/card').then(mod => mod.CardContent))
const CardHeader = dynamic(() => import('@/components/ui/card').then(mod => mod.CardHeader))
const CardTitle = dynamic(() => import('@/components/ui/card').then(mod => mod.CardTitle))

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const cardHoverVariants = {
  initial: { scale: 1, y: 0 },
  hover: { 
    scale: 1.03,
    y: -8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
}

interface ExpertiseSectionProps {
  isStandalone?: boolean
}

export function ExpertiseSection({ isStandalone = false }: ExpertiseSectionProps) {
  return (
    <section id="expertises" className={`py-20 ${isStandalone ? 'bg-gradient-to-b from-[#8B0000]/5 to-white' : 'bg-gradient-to-b from-white to-gray-50'}`}>
      <div className="container mx-auto px-4">
        {isStandalone ? (
          <div className="relative mb-20">
            {/* Hero banner pour la page standalone */}
            <div className="relative h-[300px] w-full rounded-2xl overflow-hidden mb-12">
              <Image
                src="/images/expertise-banner.jpg"
                alt="KHEOPS Consulting Expertise"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                priority={isStandalone}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000]/90 to-[#8B0000]/70" />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                  >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      Notre Expertise
                    </h1>
                    <p className="text-xl text-white/90">
                      Une approche complète et éprouvée du contrôle de projets
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[#8B0000] font-semibold mb-2 inline-block">Notre savoir-faire</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
                Une expertise reconnue en contrôle de projets
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#8B0000] to-[#8B0000]/30 mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-[#5A5A5A] max-w-3xl mx-auto">
                KHEOPS Consulting vous accompagne dans la maîtrise complète de vos projets complexes grâce à une méthodologie éprouvée et des outils performants
              </p>
            </motion.div>
          </div>
        ) : (
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              Notre expertise en contrôle de projets
            </h2>
            <p className="text-lg text-[#5A5A5A] max-w-3xl mx-auto">
              KHEOPS Consulting vous accompagne dans la maîtrise complète de vos projets complexes
            </p>
          </motion.div>
        )}

        <Suspense fallback={<div className="w-full h-96 bg-gray-100 animate-pulse rounded-xl" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {expertises.map((expertise, index) => {
              const ExpertiseIcon = expertise.icon
              return (
                <Link 
                  href={expertise.serviceLink}
                  key={index}
                  className="block h-full"
                >
                  <motion.div
                    className="h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: expertise.delay }}
                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  >
                    {/* Icône en haut */}
                    <div className="relative pb-5">
                      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#8B0000]/5 rounded-full blur-3xl"></div>
                      <div className="p-6 flex justify-between items-start">
                        <div 
                          className="p-3 rounded-lg shadow-sm"
                          style={{ backgroundColor: expertise.bgColor }}
                        >
                          <ExpertiseIcon className="h-8 w-8 text-[#8B0000]" />
                        </div>
                        <motion.div 
                          className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#8B0000]/10 to-[#8B0000]/5"
                          animate={{ 
                            scale: [1, 1.1, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                        />
                      </div>
                      
                      {/* Titre et description */}
                      <div className="px-6">
                        <h3 className="text-xl font-bold text-[#1C1C1C] mb-3">{expertise.title}</h3>
                        <p className="text-[#5A5A5A]">{expertise.description}</p>
                      </div>
                    </div>
                    
                    {/* Bouton en bas de carte */}
                    <div className="px-6 pb-6 mt-4">
                      <div className="flex items-center text-[#8B0000] font-medium">
                        En savoir plus
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 ml-1 transition-transform transform group-hover:translate-x-1" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              )
            })}
          </div>
        </Suspense>
      </div>
    </section>
  )
} 