'use client'

import { motion } from 'framer-motion'
import { Shield, AlertTriangle, CheckCircle, BarChart } from 'lucide-react'
import Link from 'next/link'

export default function GestionRisquesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Gestion des Risques
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Identifiez, analysez et maîtrisez les risques pour sécuriser vos projets
          </motion.p>
        </div>

        {/* Image principale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative h-96 rounded-2xl overflow-hidden mb-16"
        >
          <img
            src="/images/expertise/risques.jpg"
            alt="Gestion des risques"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Caractéristiques principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: "Protection projet",
              description: "Sécurisation complète de vos projets"
            },
            {
              icon: AlertTriangle,
              title: "Identification risques",
              description: "Détection précoce des menaces potentielles"
            },
            {
              icon: CheckCircle,
              title: "Plans d'action",
              description: "Stratégies de mitigation efficaces"
            },
            {
              icon: BarChart,
              title: "Suivi continu",
              description: "Monitoring et ajustements en temps réel"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <feature.icon className="w-12 h-12 text-[#8B0000] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Contenu détaillé */}
        <div className="prose prose-lg max-w-none mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Notre approche de la gestion des risques</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Identification et analyse</h3>
              <p className="text-gray-600 mb-4">
                Notre processus commence par une identification exhaustive des risques potentiels
                et une analyse approfondie de leur impact sur votre projet. Nous utilisons des
                méthodologies éprouvées pour évaluer chaque risque.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Cartographie des risques</li>
                <li>Évaluation des impacts</li>
                <li>Analyse de probabilité</li>
                <li>Priorisation des risques</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mitigation et contrôle</h3>
              <p className="text-gray-600 mb-4">
                Nous développons des stratégies de mitigation sur mesure et mettons en place
                des systèmes de contrôle efficaces pour suivre et gérer les risques tout au
                long de votre projet.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Plans de mitigation</li>
                <li>Stratégies de réponse</li>
                <li>Systèmes de surveillance</li>
                <li>Révisions périodiques</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-[#8B0000] text-white rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Sécurisez votre projet dès maintenant</h2>
          <p className="text-lg mb-8">
            Contactez-nous pour une évaluation complète des risques de votre projet.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#8B0000] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
          >
            Demander un devis
          </Link>
        </motion.div>
      </div>
    </main>
  )
} 