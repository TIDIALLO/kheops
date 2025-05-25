'use client'

import { motion } from 'framer-motion'
import { Target, Zap, BarChart3 } from 'lucide-react'
import { ExpertiseCard } from '../expertise-card'
import Link from 'next/link'

// Données des expertises
const expertiseData = [
  {
    id: "structuration",
    title: "Structuration",
    description: "Définition des phases et jalons clés du projet pour établir une feuille de route claire et structurée. Cette étape fondamentale permet d'organiser efficacement les ressources et de séquencer les activités.",
    icon: Target,
    color: "#800000",
    link: "/services/planning-strategique"
  },
  {
    id: "optimisation",
    title: "Optimisation",
    description: "Allocation optimale des ressources et définition du chemin critique pour maximiser l'efficience du projet. Nous identifions les leviers d'amélioration et optimisons les processus pour garantir la meilleure performance.",
    icon: Zap,
    color: "#800000",
    link: "/services/pmo-services"
  },
  {
    id: "suivi-controle",
    title: "Suivi & Contrôle",
    description: "Monitoring continu et ajustements proactifs pour garantir l'atteinte des objectifs. Notre approche rigoureuse permet d'identifier rapidement les écarts et d'implémenter les actions correctives nécessaires.",
    icon: BarChart3,
    color: "#800000",
    link: "/services/reporting-performance"
  }
]

// Variants d'animation pour le conteneur
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#800000] to-[#950000] text-transparent bg-clip-text">
            Notre Cycle d'Intervention:
          </h2>
          <p className="text-[#5A5A5A] max-w-3xl mx-auto text-lg">
            Une approche méthodologique en trois phases qui structure nos interventions et garantit des résultats concrets à chaque étape de votre projet.
          </p>
        </motion.div>

        {/* Grille des cartes d'expertise */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {expertiseData.map((expertise, index) => (
            <ExpertiseCard
              key={expertise.id}
              title={expertise.title}
              description={expertise.description}
              icon={expertise.icon}
              color={expertise.color}
              index={index}
              link={expertise.link}
            />
          ))}
        </motion.div>

        {/* Appel à l'action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">
              Prêt à optimiser votre gestion de projet ?
            </h3>
            <p className="text-[#5A5A5A] mb-6">
              Découvrez comment notre méthodologie peut transformer votre approche du contrôle de projets et maximiser vos chances de succès.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gradient-to-r from-[#800000] to-[#950000] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Contactez-nous
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 