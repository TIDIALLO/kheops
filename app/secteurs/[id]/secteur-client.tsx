'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { secteurs } from '../data'

type SecteurData = typeof secteurs[keyof typeof secteurs]

export function SecteurClient({ secteur }: { secteur: SecteurData }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f5f5] to-[#f7f2f2]">
      {/* Image de fond avec overlay */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src={secteur.image}
          alt={secteur.titre}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        
        {/* Contenu superposé sur l'image */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-center"
          >
            {secteur.titre}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center max-w-3xl"
          >
            {secteur.description}
          </motion.p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-16">
        <Link 
          href="/secteurs"
          className="inline-flex items-center text-[#800000] hover:text-[#950000] mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Retour aux secteurs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Description détaillée */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-[#800000]">Notre Expertise</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              {secteur.longDescription}
            </p>
          </motion.div>

          {/* Points clés */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-[#800000]">Points Clés</h3>
            <ul className="space-y-4">
              {secteur.points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="h-6 w-6 rounded-full bg-[#800000] text-white flex items-center justify-center text-sm mr-3 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 