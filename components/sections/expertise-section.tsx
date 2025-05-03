'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, TrendingUp, AlertTriangle, LayoutList, BarChart3, Layers } from "lucide-react"

// Expertise basées exactement sur l'image fournie
const expertises = [
  {
    title: "Planning",
    description: "Optimisez vos délais grâce à une planification détaillée et un suivi rigoureux de l'avancement de vos projets.",
    icon: CalendarDays,
    category: "Contrôle de projets"
  },
  {
    title: "Coûts",
    description: "Contrôlez et optimisez vos budgets avec des outils de suivi performants et une analyse précise des coûts.",
    icon: TrendingUp,
    category: "Contrôle de projets"
  },
  {
    title: "Risques",
    description: "Identifiez, évaluez et maîtrisez les risques de vos projets pour sécuriser leur réussite.",
    icon: AlertTriangle,
    category: "Contrôle de projets"
  },
  {
    title: "Ordonnancement",
    description: "Structurez et coordonnez efficacement les différentes phases de vos projets pour une exécution optimale.",
    icon: LayoutList,
    category: "Gestion des Ressources"
  },
  {
    title: "RBS & Nivellement",
    description: "Optimisez l'allocation de vos ressources et équilibrez la charge de travail pour une utilisation efficiente.",
    icon: Layers,
    category: "Gestion des Ressources"
  },
  {
    title: "Reporting",
    description: "Générez des indicateurs pertinents et des plans de recouvrement pour un pilotage efficace de vos projets.",
    icon: BarChart3,
    category: "Reporting"
  }
]

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
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    borderColor: "#8B0000",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15
    }
  }
}

export function ExpertiseSection() {
  return (
    <section id="expertises" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4"
          >
            Notre expertise à votre service
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-[#5A5A5A] max-w-2xl mx-auto"
          >
            Des solutions sur mesure pour sécuriser et optimiser vos projets les plus complexes
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {expertises.map((expertise, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                variants={cardHoverVariants}
                initial="initial"
                whileHover="hover"
              >
                <Card className="border-2 hover:border-[#8B0000] transition-all duration-300 h-full overflow-hidden relative">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-transparent to-[#8B0000]/5 opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  />
                  <div className="absolute top-4 right-4 px-2 py-1 bg-[#8B0000]/10 rounded-md text-xs font-medium text-[#8B0000]">
                    {expertise.category}
                  </div>
                  <CardHeader className="text-center relative z-10 pt-10">
                    <motion.div 
                      className="w-16 h-16 mx-auto mb-4 bg-[#8B0000] rounded-full flex items-center justify-center"
                      whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
                    >
                      <expertise.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-[#1C1C1C]">
                      {expertise.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-[#5A5A5A] text-center">
                      {expertise.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 