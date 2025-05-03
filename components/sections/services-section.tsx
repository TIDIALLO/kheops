'use client'

import { Check } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    title: "Accompagnement stratégique",
    points: [
      "Audit et diagnostic de vos processus de gestion de projet",
      "Définition et mise en place d'indicateurs de performance",
      "Optimisation des méthodes de travail",
      "Formation des équipes aux meilleures pratiques"
    ]
  },
  {
    title: "Solutions opérationnelles",
    points: [
      "Mise en place d'outils de planification adaptés",
      "Suivi et contrôle des coûts en temps réel",
      "Analyse et mitigation des risques",
      "Reporting personnalisé et tableaux de bord"
    ]
  }
]

// Variantes d'animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  }
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
            Nos services
          </h2>
          <p className="text-lg text-[#5A5A5A] max-w-2xl mx-auto">
            Une approche complète pour la réussite de vos projets
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-lg"
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                transition: { type: "spring", stiffness: 300, damping: 15 }
              }}
            >
              <motion.h3 
                className="text-2xl font-bold text-[#8B0000] mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {service.title}
              </motion.h3>
              
              <motion.ul className="space-y-4" variants={containerVariants}>
                {service.points.map((point, pointIndex) => (
                  <motion.li 
                    key={pointIndex} 
                    className="flex items-start gap-3"
                    variants={itemVariants}
                  >
                    <motion.div 
                      className="mt-1"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Check className="w-5 h-5 text-[#8B0000]" />
                    </motion.div>
                    <span className="text-[#5A5A5A]">{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 