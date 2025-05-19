'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'

export default function PlanificationPage() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image avec overlay */}
      <div className="fixed inset-0 z-0">
        <div className="relative w-full h-screen">
          <Image
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
            alt="Background planification"
            fill
            priority
            quality={75}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/90 to-white/85 backdrop-blur-[2px]"></div>
        </div>
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
              Expertise en Gestion
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-gray-900 mb-4"
            >
              Planification de Projets
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Une planification stratégique pour garantir le succès de vos projets
            </motion.p>
          </div>

          {/* Image principale avec optimisation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative h-[500px] rounded-2xl overflow-hidden mb-16 shadow-2xl"
          >
            <Image
              src="/images/expertise/planification-main.jpg"
              alt="Planification de projets"
              fill
              priority
              quality={85}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPjA+OjU1RUVHSkxMUlNiY2JjP0BHZWVsY2z/2wBDAR"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Excellence en Planification</h2>
              <p className="text-lg">Des solutions sur mesure pour vos projets</p>
            </div>
          </motion.div>

          {/* Caractéristiques principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Calendar,
                title: "Planning détaillé",
                description: "Planification précise et adaptée à vos besoins"
              },
              {
                icon: Clock,
                title: "Gestion des délais",
                description: "Respect des échéances et optimisation du temps"
              },
              {
                icon: Users,
                title: "Coordination d'équipe",
                description: "Organisation efficace des ressources humaines"
              },
              {
                icon: Target,
                title: "Objectifs clairs",
                description: "Définition et suivi des objectifs du projet"
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
            <h2 className="text-4xl font-bold mb-4">Planifiez votre succès</h2>
            <p className="text-xl mb-8">
              Contactez-nous pour une planification stratégique de votre projet.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#8B0000] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Démarrer votre projet
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 