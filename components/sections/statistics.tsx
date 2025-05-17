'use client'

import { motion } from 'framer-motion'

// Type pour les statistiques
interface Statistic {
  value: string
  label: string
}

// Animation variants pour les nombres
const numberVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export function Statistics() {
  const stats: Statistic[] = [
    { value: "150+", label: "Projets réalisés" },
    { value: "50+", label: "Clients satisfaits" },
    { value: "15+", label: "Pays d'intervention" },
    { value: "10+", label: "Années d'expérience" }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#8B0000] mb-12">
          Nos chiffres clés
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                variants={numberVariants}
                className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 