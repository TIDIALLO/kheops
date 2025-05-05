'use client'

import { Check, Circle } from "lucide-react"
import { motion } from "framer-motion"
import { CalendarDays, Coins, AlertTriangle, Construction, Zap } from "lucide-react"
import Image from "next/image"

// Données de la timeline pour "Planification de projets"
const timelineSteps = [
  {
    title: "Phase d'initialisation",
    description: "Définition du périmètre et des objectifs du projet",
    duration: "Semaines 1-3"
  },
  {
    title: "Planification détaillée",
    description: "Création du WBS et séquençage des activités",
    duration: "Semaines 4-8"
  },
  {
    title: "Allocation des ressources",
    description: "Affectation des ressources et optimisation",
    duration: "Semaines 9-12"
  },
  {
    title: "Analyse et validation",
    description: "Vérification des chemins critiques et marges",
    duration: "Semaines 13-16"
  },
  {
    title: "Mise en place du suivi",
    description: "Déploiement des outils de monitoring et reporting",
    duration: "Semaines 17-20"
  }
]

const servicesInfo = [
  {
    id: "planning",
    title: "Planification de projets",
    icon: CalendarDays,
    color: "#8B0000",
    image: "/images/services/planning.jpg", // Image de planification
    description: "Optimisation des délais et contrôle rigoureux du planning pour assurer la réussite de votre projet dans les temps impartis.",
    points: [
      "Définition des activités et de leurs enchaînements logiques (WBS, OBS, CBS…)",
      "Suivi du planning et gestion des retards",
      "Estimation des durées et suivi de l'avancement physique",
      "Déploiement des outils de reporting et d'information",
      "Analyse des chemins critiques et des ressources (ex. : diagramme de Gantt)"
    ]
  },
  {
    id: "couts",
    title: "Contrôle des coûts",
    icon: Coins,
    color: "#8B0000",
    image: "/images/services/costs.jpg", // Image de finance/budget
    description: "Maîtrise des budgets et anticipation des dépenses pour une gestion transparente et efficace des ressources financières.",
    points: [
      "Élaboration du budget prévisionnel",
      "Mise en place de systèmes d'information pour le suivi budgétaire",
      "Suivi des dépenses, engagements, paiements et prévisions de clôture",
      "Création de tableaux de bord et reporting",
      "Alerte en cas de dépassement budgétaire"
    ]
  },
  {
    id: "risques",
    title: "Gestion des risques",
    icon: AlertTriangle,
    color: "#8B0000",
    image: "/images/services/risks.jpg", // Image d'analyse des risques
    description: "Identification et mitigation des risques pour sécuriser votre projet et anticiper les obstacles potentiels.",
    points: [
      "Identification des risques liés aux coûts et délais",
      "Analyse des causes et conséquences",
      "Gestion des risques tout au long du projet (études, consultations, réalisation)",
      "Utilisation de simulations de type Monte-Carlo pour modéliser les incertitudes"
    ]
  },
  {
    id: "opc",
    title: "Ordonnancement, Pilotage et Coordination (OPC)",
    icon: Construction,
    color: "#8B0000",
    image: "/images/services/coordination.jpg", // Image de coordination
    description: "Synchronisation des intervenants et planification des interventions pour une exécution fluide de votre projet.",
    points: [
      "Organisation préalable du chantier (ordonnancement)",
      "Suivi de l'exécution (pilotage)",
      "Supervision des différents acteurs du projet (coordination)"
    ]
  },
  {
    id: "simulation",
    title: "Simulation numérique",
    icon: Construction,
    color: "#8B0000",
    image: "/images/services/simulation.jpg", // Image de simulation
    description: "Modélisation avancée pour anticiper les scénarios et optimiser les décisions stratégiques.",
    points: [
      "Simulation pour l'optimisation des processus",
      "Analyse prédictive de l'évolution du projet",
      "Modèles d'aide à la décision basés sur des données réelles",
      "Visualisation des résultats de simulation pour une meilleure compréhension"
    ]
  },
  {
    id: "avantages",
    title: "Avantages stratégiques apportés",
    icon: Zap,
    color: "#5A5A5A",
    image: "/images/services/advantages.jpg", // Image stratégique
    description: "Des bénéfices concrets pour votre organisation grâce à une approche méthodique et éprouvée.",
    points: [
      "Clarification des rôles et responsabilités",
      "Meilleure gestion contractuelle et coordination des interfaces",
      "Réduction des coûts finaux (parallélisation, optimisation, changements stratégiques)",
      "Mise en place d'indicateurs de performance pour une gestion anticipée axée résultats"
    ]
  }
]

// Variantes d'animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const serviceVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
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

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const timelineItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4
    }
  }
}

// Composant pour la timeline
function PlanningTimeline() {
  return (
    <motion.div
      className="mt-10 relative"
      variants={timelineVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Ligne verticale */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8B0000] to-[#8B0000]/30 mx-auto"></div>
      
      {/* Étapes de la timeline */}
      <div className="space-y-8">
        {timelineSteps.map((step, index) => (
          <motion.div 
            key={index}
            className="flex gap-4"
            variants={timelineItemVariants}
          >
            {/* Indicateur (cercle) */}
            <div className="relative flex items-center justify-center mt-1.5">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-[#8B0000] z-10 flex items-center justify-center">
                <CalendarDays className="w-4 h-4 text-[#8B0000]" />
              </div>
            </div>
            
            {/* Contenu de l'étape */}
            <div className="flex-1">
              <div className="bg-white p-4 rounded-lg shadow-md border border-[#8B0000]/10 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1 gap-2">
                  <h4 className="font-bold text-[#1C1C1C]">{step.title}</h4>
                  <span className="text-sm text-white bg-[#8B0000] px-3 py-1 rounded-full">{step.duration}</span>
                </div>
                <p className="text-[#5A5A5A]">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#8B0000]/5">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
            Nos services spécialisés
          </h2>
          <p className="text-lg text-[#5A5A5A] max-w-3xl mx-auto">
            KHEOPS Consulting propose une gamme complète de services dans le cadre du contrôle de projets.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesInfo.map((service, serviceIndex) => (
            <motion.div 
              key={service.id}
              id={service.id}
              className="scroll-mt-24"
              variants={serviceVariants}
            >
              {/* Layout alterné pour chaque service */}
              <div className={`flex flex-col ${serviceIndex % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                {/* Image du service - grande sur desktop, plus petite sur mobile */}
                <motion.div 
                  className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-64 md:h-96 w-full">
                    {/* Fallback si l'image n'est pas disponible */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000]/80 to-[#8B0000]/40 z-10 flex items-center justify-center">
                      <service.icon className="w-20 h-20 text-white/80" />
                    </div>
                    {/* Image de fond (nous utilisons un div avec background pour l'exemple) */}
                    <div 
                      className="absolute inset-0 bg-gray-200" 
                      style={{ 
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    ></div>
                  </div>
                </motion.div>

                {/* Contenu du service */}
                <div className="w-full lg:w-1/2">
                  {/* En-tête de service */}
                  <div className="flex items-center mb-4 gap-4">
                    <div className={`p-3 rounded-full bg-[${service.color}]/10 shrink-0`} style={{ backgroundColor: `${service.color}10` }}>
                      <service.icon className="w-6 h-6" style={{ color: service.color }} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1C1C1C]">{service.title}</h3>
                  </div>

                  {/* Description du service */}
                  <p className="text-[#5A5A5A] text-lg mb-8">{service.description}</p>

                  {/* Afficher la timeline uniquement pour la planification, sinon afficher les points */}
                  {service.id === "planning" ? (
                    <PlanningTimeline />
                  ) : (
                    <motion.div 
                      className="grid md:grid-cols-2 gap-4"
                      variants={containerVariants}
                    >
                      {service.points.map((point, pointIndex) => (
                        <motion.div 
                          key={pointIndex} 
                          className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-[#8B0000]/10"
                          variants={itemVariants}
                          whileHover={{ y: -2, transition: { duration: 0.2 } }}
                        >
                          <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#8B0000] mt-0.5 shrink-0" />
                            <p className="text-[#1C1C1C]">{point}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 