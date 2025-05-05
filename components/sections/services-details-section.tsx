'use client'

import { motion } from 'framer-motion'
import { 
  Clock, 
  Coins, 
  TriangleAlert, 
  Construction, 
  Calendar, 
  BarChart3, 
  Activity, 
  Shield, 
  BarChart, 
  FileText, 
  Users, 
  PieChart
} from 'lucide-react'

const servicesDetails = [
  {
    id: 'planning',
    title: 'Planning',
    icon: Clock,
    color: '#8B0000',
    description: 'Optimisez vos délais grâce à une planification détaillée et un suivi rigoureux de l\'avancement de vos projets.',
    features: [
      { icon: Calendar, title: 'Planification', text: 'Création et optimisation de plannings détaillés' },
      { icon: Activity, title: 'Chemins critiques', text: 'Identification et surveillance des activités critiques' },
      { icon: BarChart, title: 'Avancement', text: 'Mesure et reporting de l\'avancement du projet' },
      { icon: Users, title: 'Coordination', text: 'Synchronisation des activités des différentes parties prenantes' }
    ]
  },
  {
    id: 'couts',
    title: 'Coûts',
    icon: Coins,
    color: '#8B0000',
    description: 'Contrôlez et optimisez vos budgets avec des outils de suivi performants et une analyse précise des coûts.',
    features: [
      { icon: FileText, title: 'Budgétisation', text: 'Élaboration et suivi de budgets précis' },
      { icon: BarChart3, title: 'EVM', text: 'Analyse de la valeur acquise (Earned Value Management)' },
      { icon: PieChart, title: 'Répartition', text: 'Analyse détaillée de la répartition des coûts' },
      { icon: BarChart, title: 'Prévisions', text: 'Projection et contrôle des dépenses futures' }
    ]
  },
  {
    id: 'risques',
    title: 'Risques',
    icon: TriangleAlert,
    color: '#8B0000',
    description: 'Identifiez, évaluez et maîtrisez les risques de vos projets pour sécuriser leur réussite.',
    features: [
      { icon: Shield, title: 'Identification', text: 'Repérage méthodique des risques potentiels' },
      { icon: BarChart, title: 'Analyse', text: 'Évaluation qualitative et quantitative des menaces' },
      { icon: Activity, title: 'Mitigation', text: 'Stratégies et actions de réduction des risques' },
      { icon: FileText, title: 'Monitoring', text: 'Suivi continu et mise à jour des registres de risques' }
    ]
  },
  {
    id: 'opc',
    title: 'OPC',
    icon: Construction,
    color: '#8B0000',
    description: 'Structurez et coordonnez efficacement les différentes phases de vos projets pour une exécution optimale.',
    features: [
      { icon: Calendar, title: 'Ordonnancement', text: 'Organisation chronologique optimale des tâches' },
      { icon: Users, title: 'Pilotage', text: 'Direction et ajustement stratégique du projet' },
      { icon: Shield, title: 'Coordination', text: 'Harmonisation des interventions des différents acteurs' },
      { icon: FileText, title: 'Synthèse', text: 'Consolidation des informations et résolution des interfaces' }
    ]
  }
]

export function ServicesDetailsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
            Nos domaines d'expertise
          </h2>
          <p className="text-lg text-[#5A5A5A] max-w-3xl mx-auto">
            Des solutions sur mesure pour répondre à vos besoins spécifiques en contrôle de projets
          </p>
        </motion.div>

        <div className="space-y-20">
          {servicesDetails.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}
              >
                {/* Partie icône et titre */}
                <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="p-5 rounded-full bg-[#8B0000]/10 mb-6"
                  >
                    <service.icon className="w-12 h-12 text-[#8B0000]" />
                  </motion.div>
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-3xl font-bold text-[#1C1C1C] mb-4"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-[#5A5A5A]"
                  >
                    {service.description}
                  </motion.p>
                </div>

                {/* Partie caractéristiques */}
                <div className="w-full md:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + (featureIndex * 0.1) }}
                        className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                      >
                        <div className="flex gap-4 items-start">
                          <div className="p-2 rounded-md bg-[#8B0000]/10">
                            <feature.icon className="w-5 h-5 text-[#8B0000]" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#1C1C1C] mb-1">{feature.title}</h4>
                            <p className="text-sm text-[#5A5A5A]">{feature.text}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Séparateur */}
              {index < servicesDetails.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-5xl mx-auto border-b border-gray-200 mt-16"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 