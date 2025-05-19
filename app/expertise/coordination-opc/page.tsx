'use client'

import { motion } from 'framer-motion'
import { Users, Network, Clock, Target } from 'lucide-react'
import Link from 'next/link'

// Configuration du viewport
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function CoordinationOPCPage() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image avec overlay */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/98 to-white/95"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block px-4 py-1 rounded-full text-[#8B0000] bg-[#8B0000]/10 text-sm font-semibold mb-4"
            >
              Expertise en Coordination
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-gray-900 mb-4"
            >
              Coordination OPC
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Orchestrez efficacement vos projets multi-intervenants
            </motion.p>
          </div>

          {/* Image principale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative h-[500px] rounded-2xl overflow-hidden mb-16 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
              alt="Coordination OPC"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Excellence en Coordination</h2>
              <p className="text-lg">Une orchestration parfaite de vos projets</p>
            </div>
          </motion.div>

          {/* Caractéristiques principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Users,
                title: "Gestion d'Équipe",
                description: "Coordination efficace des intervenants"
              },
              {
                icon: Network,
                title: "Pilotage Global",
                description: "Vision d'ensemble et synchronisation"
              },
              {
                icon: Clock,
                title: "Optimisation Délais",
                description: "Respect des plannings et échéances"
              },
              {
                icon: Target,
                title: "Objectifs Communs",
                description: "Alignement des parties prenantes"
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

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white rounded-2xl p-12 text-center shadow-2xl"
          >
            <h2 className="text-4xl font-bold mb-4">Optimisez votre coordination</h2>
            <p className="text-xl mb-8">
              Contactez-nous pour une coordination OPC efficace de votre projet.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#8B0000] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Coordonner votre projet
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 