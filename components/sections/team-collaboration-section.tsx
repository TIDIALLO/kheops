'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Check, Clock, Target, Users } from 'lucide-react'

// Palette de couleurs
const colors = {
  primary: "#8B0000", // Rouge bordeaux principal
  secondary: "#A52A2A", // Rouge bordeaux secondaire
  dark: "#600000", // Rouge foncé
  light: "#f9f5f5", // Fond très légèrement teinté
  accent: "#f5f5f5", // Blanc cassé pour les détails
}

export function TeamCollaborationSection() {
  // Variants d'animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 }
    }
  }

  const benefitVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-[#f7f2f2] z-0"></div>
      
      {/* Motif de points */}
      <div className="absolute inset-0 opacity-10 z-0" 
        style={{ 
          backgroundImage: `radial-gradient(${colors.primary} 0.5px, transparent 0.5px)`, 
          backgroundSize: '18px 18px'
        }}>
      </div>
      
      {/* Forme décorative */}
      <div className="absolute -right-40 -bottom-40 w-96 h-96 rounded-full bg-gradient-to-br from-[#8B0000]/5 to-[#A52A2A]/5 blur-3xl z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Partie image */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Image principale - Groupe autour d'une table */}
              <div className="relative h-[450px]">
                <div 
                  className="absolute inset-0 bg-gray-200" 
                  style={{ 
                    backgroundImage: `url('/images/services/cdc.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Badge flottant */}
              <motion.div 
                className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Users size={16} className="text-[#8B0000]" />
                <span className="text-sm font-semibold">Équipe dédiée</span>
              </motion.div>
              
              {/* Bulle d'information */}
              <motion.div 
                className="absolute -left-6 top-1/4 bg-white p-4 rounded-lg shadow-lg max-w-[180px]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Clock size={16} className="text-[#8B0000]" />
                  <span className="text-sm font-semibold text-[#1C1C1C]">Réactivité</span>
                </div>
                <p className="text-xs text-[#5A5A5A]">Des équipes dédiées pour répondre rapidement à vos besoins</p>
              </motion.div>
              
              {/* Bulle d'information 2 */}
              <motion.div 
                className="absolute -right-6 bottom-1/4 bg-white p-4 rounded-lg shadow-lg max-w-[180px]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Target size={16} className="text-[#8B0000]" />
                  <span className="text-sm font-semibold text-[#1C1C1C]">Précision</span>
                </div>
                <p className="text-xs text-[#5A5A5A]">Des méthodologies éprouvées pour des résultats précis</p>
              </motion.div>
              
              {/* Overlay texte en bas */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Collaboration experte</h3>
                <p className="text-sm opacity-90">Des équipes pluridisciplinaires au service de votre succès</p>
              </div>
            </div>
          </motion.div>
          
          {/* Partie texte */}
          <motion.div 
            className="order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Section header */}
            <motion.span 
              className="inline-block px-4 py-1 rounded-full bg-[#8B0000]/10 text-[#8B0000] text-sm font-medium mb-4"
              variants={itemVariants}
            >
              Notre approche collaborative
            </motion.span>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-6"
              variants={itemVariants}
            >
              Une équipe <span className="text-[#8B0000]">d'experts</span> à votre écoute
            </motion.h2>
            
            <motion.p 
              className="text-[#5A5A5A] text-lg mb-8"
              variants={itemVariants}
            >
              Chez KHEOPS Consulting, nous privilégions une approche collaborative pour répondre précisément à vos besoins. Nos équipes pluridisciplinaires mettent leur expertise à votre service pour garantir le succès de vos projets les plus complexes.
            </motion.p>
            
            {/* Bénéfices */}
            <motion.div 
              className="space-y-4 mb-8"
              variants={containerVariants}
            >
              {[
                "Des équipes expérimentées et adaptées à vos enjeux spécifiques",
                "Une méthodologie rigoureuse et éprouvée sur des projets complexes",
                "Un accompagnement personnalisé tout au long de votre projet",
                "Un transfert de compétences pour une autonomie durable"
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3"
                  variants={benefitVariants}
                >
                  <div className="mt-1 bg-[#8B0000]/10 p-1 rounded-full">
                    <Check size={16} className="text-[#8B0000]" />
                  </div>
                  <p className="text-[#5A5A5A]">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>
            
            {/* CTA */}
            <motion.div variants={itemVariants}>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
              >
                <span>Rencontrer notre équipe</span>
                <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Exportation par défaut pour l'import dynamique
export default { TeamCollaborationSection }; 