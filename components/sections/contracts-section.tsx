'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export function ContractsSection() {
  return (
    <section className="relative h-[80vh] bg-[#2E86F7] overflow-hidden">
      {/* Contenu principal */}
      <div className="container mx-auto relative z-10 h-full flex flex-col justify-start px-4 pt-16 md:pt-20 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="block"
            >
              Gérer les Contrats
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="block mt-2"
            >
              Créer la Valeur
            </motion.span>
          </h2>
        </motion.div>
      </div>

      {/* Image de personnes en silhouette - taille réduite */}
      <div className="absolute bottom-0 left-0 right-0 w-full max-h-[40%] flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full max-w-5xl px-8 pb-8"
        >
          <Image
            src="/images/consulting.png"
            alt="Professionnels en réunion"
            width={1000}
            height={350}
            className="w-full h-auto object-contain max-h-[35vh]"
            priority
          />
        </motion.div>
      </div>

      {/* Effet de lumière subtil */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#5AA0FF] to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#1A73E8] to-transparent opacity-50"></div>

      {/* Points lumineux animés */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.2 + 0.1,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              opacity: [
                Math.random() * 0.2 + 0.1,
                Math.random() * 0.3 + 0.2,
                Math.random() * 0.2 + 0.1
              ],
              scale: [
                Math.random() * 0.5 + 0.5,
                Math.random() * 0.7 + 0.6,
                Math.random() * 0.5 + 0.5
              ]
            }}
            transition={{ 
              duration: Math.random() * 3 + 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ 
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
            }}
          />
        ))}
      </div>
    </section>
  )
} 