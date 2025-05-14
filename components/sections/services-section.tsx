'use client'

import { Check, Circle } from "lucide-react"
import { motion } from "framer-motion"
import { CalendarDays, Coins, AlertTriangle, Construction, Zap, CheckCircle, ArrowRight, Target } from "lucide-react"
import Image from "next/image"

// Données du processus de planification
const planningProcessSteps = [
  {
    id: "1",
    title: "Analyse des besoins",
    description: "Identification précise des objectifs du projet, des contraintes et des exigences spécifiques",
    icon: Target,
    color: "#8B0000",
    deliverables: ["Rapport d'évaluation", "Matrice d'exigences", "Liste des contraintes"]
  },
  {
    id: "2",
    title: "Structuration du projet",
    description: "Décomposition des livrables en WBS (Work Breakdown Structure) et définition des activités",
    icon: Construction,
    color: "#8B0000",
    deliverables: ["WBS détaillé", "OBS (Organisation Breakdown Structure)", "Dictionnaire WBS"]
  },
  {
    id: "3",
    title: "Estimation et séquençage",
    description: "Estimation des durées et établissement des dépendances entre les activités",
    icon: CalendarDays,
    color: "#8B0000",
    deliverables: ["Calendrier détaillé", "Diagramme de Gantt", "Réseau PERT"]
  },
  {
    id: "4",
    title: "Allocation des ressources",
    description: "Distribution optimisée des ressources matérielles et humaines aux différentes activités",
    icon: Coins,
    color: "#8B0000",
    deliverables: ["Plan de ressources", "Histogrammes de charge", "Matrice RACI"]
  },
  {
    id: "5",
    title: "Analyse des risques",
    description: "Identification, évaluation et préparation des réponses aux risques potentiels",
    icon: AlertTriangle,
    color: "#8B0000",
    deliverables: ["Registre des risques", "Simulation Monte-Carlo", "Plans de mitigation"]
  }
]

const servicesInfo = [
  {
    id: "planning",
    title: "Planification de projets",
    icon: CalendarDays,
    color: "#8B0000",
    image: "/images/services/planification.png", // Utiliser l'image existante
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
    image: "/images/services/cdc.png", // Utiliser l'image existante
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
    image: "/images/services/risk.png", // Utiliser l'image existante
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
    image: "/images/services/service.png", // Utiliser l'image existante
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
    image: "/images/services/service.png", // Utiliser l'image existante
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
    image: "/images/services/service.png", // Utiliser l'image existante
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

const processStepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

// Composant pour le processus de planification
function PlanningProcess() {
  return (
    <div className="mt-8">
      <div className="bg-white rounded-xl shadow-md p-6 mb-4">
        <h3 className="text-2xl font-bold text-[#1C1C1C] mb-3">Notre Processus de Planification</h3>
        <p className="text-[#5A5A5A] mb-6">
          Notre méthodologie structurée en 5 étapes clés garantit une planification rigoureuse et adaptée à vos besoins spécifiques.
        </p>
        
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Ligne de progression */}
          <div className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#8B0000] to-[#8B0000]/30 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {planningProcessSteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={processStepVariants}
                className={`bg-gray-50 rounded-lg p-4 border border-gray-100 hover:shadow-md transition-shadow relative ${
                  index === 0 ? "lg:col-start-1" : 
                  index === 1 ? "lg:col-start-3" : 
                  index === 2 ? "lg:col-start-2 lg:row-start-2" : 
                  index === 3 ? "lg:col-start-1 lg:row-start-3" : 
                  "lg:col-start-3 lg:row-start-3"
                }`}
              >
                {/* Indicateur de position sur la ligne (visible uniquement en desktop) */}
                <div className={`hidden lg:block absolute top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-[#8B0000] z-10 ${
                  index % 2 === 0 ? 'right-0 translate-x-[calc(100%+10px)]' : 'left-0 -translate-x-[calc(100%+10px)]'
                }`}></div>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-full bg-[#8B0000]/10 text-[#8B0000] flex-shrink-0">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#5A5A5A]">ÉTAPE {step.id}</div>
                    <h4 className="font-bold text-[#1C1C1C] text-base">{step.title}</h4>
                  </div>
                </div>
                
                <p className="text-[#5A5A5A] mb-3 text-sm">{step.description}</p>
                
                <div>
                  <div className="text-xs font-semibold text-[#8B0000] mb-1 flex items-center">
                    <ArrowRight className="w-3 h-3 mr-1" />
                    LIVRABLES
                  </div>
                  <ul className="space-y-1">
                    {step.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-center text-xs text-[#5A5A5A]">
                        <CheckCircle className="w-2.5 h-2.5 text-[#8B0000] mr-1.5 flex-shrink-0" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
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

                  {/* Afficher le processus de planification uniquement pour la planification, sinon afficher les points */}
                  {service.id === "planning" ? (
                    <PlanningProcess />
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