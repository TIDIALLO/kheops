'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Plus, Minus } from 'lucide-react'

// Questions et réponses pour la FAQ
const faqItems = [
  {
    question: "Qu'est-ce que le contrôle de projets?",
    answer: "Le contrôle de projets est l'ensemble des processus et techniques visant à surveiller, mesurer et piloter les performances d'un projet en termes de délais, coûts et qualité. C'est une discipline qui assure que le projet reste sur la bonne voie et atteigne ses objectifs définis, tout en permettant d'identifier et de résoudre rapidement les problèmes potentiels."
  },
  {
    question: "Comment KHEOPS optimise-t-il la gestion des délais d'un projet?",
    answer: "KHEOPS Consulting optimise la gestion des délais en utilisant des méthodologies avancées de planification combinées à des outils spécialisés. Nous mettons en place des plannings détaillés avec chemins critiques, jalons clés et structure de découpage du travail (WBS). Notre approche inclut également un suivi rigoureux de l'avancement, des analyses de tendances et un système d'alerte précoce pour anticiper et gérer les retards potentiels."
  },
  {
    question: "Quels outils utilisez-vous pour le suivi des coûts?",
    answer: "Nous utilisons une gamme d'outils spécialisés pour le suivi des coûts, notamment Primavera P6, Microsoft Project, ainsi que des solutions personnalisées développées en interne. Ces outils nous permettent de réaliser un suivi budgétaire précis, des analyses de la valeur acquise (EVM), des projections de coûts à terminaison et des tableaux de bord de performance financière adaptés aux besoins spécifiques de chaque client."
  },
  {
    question: "Comment intégrez-vous la gestion des risques dans vos projets?",
    answer: "Notre approche de gestion des risques est méthodique et proactive. Nous commençons par identifier les risques potentiels à travers des ateliers collaboratifs, puis nous les évaluons en termes de probabilité et d'impact. Ensuite, nous développons des stratégies de mitigation et des plans de contingence. Tout au long du projet, nous maintenons un registre des risques constamment mis à jour et nous suivons l'efficacité des mesures mises en place."
  },
  {
    question: "Quels sont les secteurs d'activité où KHEOPS intervient principalement?",
    answer: "KHEOPS Consulting intervient dans plusieurs secteurs stratégiques nécessitant une expertise pointue en gestion de projets complexes. Nos principaux domaines d'intervention incluent l'énergie (nucléaire, renouvelable, oil & gas), les infrastructures, la construction, l'industrie manufacturière et les technologies de l'information. Notre équipe possède également une expertise spécifique dans les projets multinationaux et les environnements réglementés."
  },
  {
    question: "Comment se déroule une mission type avec KHEOPS Consulting?",
    answer: "Une mission type avec KHEOPS commence par une phase d'évaluation où nous analysons vos besoins spécifiques et l'état actuel de votre projet. Nous élaborons ensuite une proposition sur mesure détaillant notre approche méthodologique, les livrables attendus et le calendrier d'intervention. Après validation, notre équipe déploie les processus et outils nécessaires, tout en assurant un transfert de compétences continu. Nous fournissons des rapports réguliers et restons à disposition pour des ajustements selon l'évolution du projet."
  },
]

export function FAQSection() {
  // État pour suivre la question active
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Fonction pour basculer l'état d'une question
  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Variants d'animation pour les conteneurs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Variants d'animation pour les éléments individuels
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Variants pour l'animation de l'accordéon
  const contentVariants = {
    hidden: { 
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1]
      }
    },
    visible: { 
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-[#5A5A5A] max-w-3xl mx-auto">
            Retrouvez les réponses aux questions les plus fréquentes concernant nos services et notre approche
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <motion.button
                className={`w-full text-left p-6 flex justify-between items-center transition-colors ${
                  activeIndex === index ? 'bg-gray-50' : 'hover:bg-gray-50'
                }`}
                onClick={() => toggleQuestion(index)}
                whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}
                whileTap={{ scale: 0.995 }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#1C1C1C] pr-8">
                  {item.question}
                </h3>
                {/* Icône animée */}
                <motion.div
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 rounded-full p-1 ${
                    activeIndex === index
                      ? 'bg-[#8B0000] text-white'
                      : 'bg-gray-100 text-[#5A5A5A]'
                  }`}
                >
                  {activeIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <div className="px-6 pb-6 text-[#5A5A5A] border-t border-gray-100 pt-4">
                      <p className="text-base md:text-lg leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bouton pour un devis ou contact */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-[#5A5A5A] mb-4">
            Vous avez d'autres questions ou besoin d'une solution personnalisée ?
          </p>
          <motion.a
            href="#contact"
            className="inline-block bg-[#8B0000] text-white py-3 px-8 rounded-lg font-medium shadow-md hover:bg-[#700000] transition-colors"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(139, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.98 }}
          >
            Contactez-nous
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 