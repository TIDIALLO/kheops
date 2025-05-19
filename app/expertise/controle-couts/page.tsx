'use client'

import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, PieChart, FileText } from 'lucide-react'
import Link from 'next/link'

// Configuration du viewport
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function ControleCoutsPage() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image avec overlay */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/98 to-white/95"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* En-tête avec style amélioré */}
          <div className="text-center mb-12 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block px-4 py-1 rounded-full text-[#8B0000] bg-[#8B0000]/10 text-sm font-semibold mb-4"
            >
              Expertise Financière
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-gray-900 mb-4"
            >
              Contrôle des Coûts
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Optimisez vos dépenses et maximisez la rentabilité de vos projets grâce à notre expertise en contrôle des coûts
            </motion.p>
          </div>

          {/* Image principale avec style amélioré */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative h-[500px] rounded-2xl overflow-hidden mb-16 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="Contrôle des coûts"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Excellence Financière</h2>
              <p className="text-lg">Une approche stratégique pour la maîtrise de vos coûts</p>
            </div>
          </motion.div>

          {/* Caractéristiques principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: DollarSign,
                title: "Gestion budgétaire",
                description: "Suivi précis et optimisation des budgets"
              },
              {
                icon: TrendingUp,
                title: "Analyse financière",
                description: "Évaluation de la performance financière"
              },
              {
                icon: PieChart,
                title: "Répartition des coûts",
                description: "Analyse détaillée de la structure des coûts"
              },
              {
                icon: FileText,
                title: "Reporting financier",
                description: "Rapports détaillés et tableaux de bord"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              >
                <feature.icon className="w-12 h-12 text-[#8B0000] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Contenu détaillé */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Notre approche du contrôle des coûts</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Analyse et prévision</h3>
                <p className="text-gray-600 mb-4">
                  Notre approche commence par une analyse approfondie de votre structure de coûts
                  et l'établissement de prévisions budgétaires précises. Nous identifions les
                  opportunités d'optimisation et les risques potentiels.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Analyse de la structure des coûts</li>
                  <li>Prévisions budgétaires</li>
                  <li>Identification des optimisations</li>
                  <li>Gestion des risques financiers</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Suivi et optimisation</h3>
                <p className="text-gray-600 mb-4">
                  Nous mettons en place un système de suivi rigoureux pour contrôler les dépenses
                  et optimiser l'utilisation des ressources. Notre approche garantit une visibilité
                  totale sur vos coûts.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Tableaux de bord financiers</li>
                  <li>Suivi des écarts budgétaires</li>
                  <li>Optimisation continue</li>
                  <li>Reporting régulier</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white rounded-2xl p-12 text-center shadow-2xl"
          >
            <h2 className="text-4xl font-bold mb-4">Optimisez vos coûts dès maintenant</h2>
            <p className="text-xl mb-8">
              Contactez-nous pour une analyse personnalisée de votre structure de coûts.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#8B0000] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Demander un devis
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 