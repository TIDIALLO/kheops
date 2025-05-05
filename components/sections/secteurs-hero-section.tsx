'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Palette de couleurs rouge ajustée (plus claire pour le background)
const mainRed = "#800000";
const lighterRed = "#950000";
const darkerRed = "#600000";
const veryLightRed = "#fff5f5"; // Très léger rouge pour l'arrière-plan

export function SecteursHeroSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Arrière-plan avec dégradé amélioré et plus léger */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f9f5f5] to-[#f7f2f2] z-0"></div>
      
      {/* Motif de points en arrière-plan avec couleur améliorée et opacité réduite */}
      <div className="absolute inset-0 opacity-10 z-0" 
        style={{ 
          backgroundImage: `radial-gradient(${mainRed} 0.5px, transparent 0.5px)`, 
          backgroundSize: '18px 18px'
        }}>
      </div>
      
      {/* Superposition de texture subtile */}
      <div className="absolute inset-0 opacity-5 z-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23952323' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}>
      </div>
      
      {/* Effet de vague en bas avec dégradé amélioré */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-[#800000]/5 via-[#950000]/8 to-[#800000]/5 z-0"></div>
      
      {/* Élément décoratif de style "coup de pinceau" avec couleur améliorée */}
      <div className="absolute right-0 top-20 h-64 w-64 transform rotate-45 z-0" 
        style={{ 
          background: 'linear-gradient(135deg, rgba(128,0,0,0.03) 0%, rgba(149,0,0,0.02) 50%, rgba(128,0,0,0.03) 100%)',
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
        }}>
      </div>
      
      {/* Effet de lumière douce en haut à gauche */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#f9e8e8] to-transparent opacity-60 rounded-full filter blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#800000] to-[#950000] text-transparent bg-clip-text">Expertise</span> dans de nombreux secteurs d'activité
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#5A5A5A] text-lg mb-6"
            >
              KHEOPS Consulting accompagne ses clients dans des secteurs variés et exigeants, où l'excellence opérationnelle et la maîtrise des projets complexes sont déterminantes.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#5A5A5A] text-lg mb-8"
            >
              Notre expertise s'applique à des contextes multiples, avec une méthodologie adaptée à chaque secteur d'activité et ses contraintes spécifiques.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-gradient-to-r from-[#800000] to-[#950000] text-white px-6 py-3 rounded-md font-medium text-center hover:from-[#600000] hover:to-[#800000] transition-all shadow-lg"
              >
                Nous contacter
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#expertise"
                className="border border-[#800000] text-transparent bg-clip-text bg-gradient-to-r from-[#800000] to-[#950000] px-6 py-3 rounded-md font-medium text-center hover:bg-[#f0e5e5] transition-colors shadow-md"
              >
                Nos expertises
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center"
          >
            {/* Cercle décoratif avec animation pulse */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 right-1/4 w-20 h-20 bg-gradient-to-r from-[#800000]/10 to-[#950000]/5 rounded-full"
            ></motion.div>
            
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 5,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-gradient-to-l from-[#800000]/5 to-[#950000]/3 rounded-full"
            ></motion.div>
            
            {/* Illustration avec des éléments visuels */}
            <div className="relative z-10 bg-white p-8 rounded-xl shadow-xl border border-gray-100">
              <div className="grid grid-cols-3 gap-4">
                {/* Éléments visuels représentant les secteurs - Icônes agrandies */}
                <div className="bg-gradient-to-br from-[#f9f5f5] to-[#faf8f8] rounded-lg h-24 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="bg-gradient-to-br from-[#f9f5f5] to-[#faf8f8] rounded-lg h-24 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="bg-gradient-to-br from-[#f9f5f5] to-[#faf8f8] rounded-lg h-24 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                </div>
                <div className="bg-gradient-to-br from-[#f9f5f5] to-[#faf8f8] rounded-lg h-24 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div className="bg-gradient-to-br from-[#f9f5f5] to-[#faf8f8] rounded-lg h-24 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="bg-gradient-to-br from-[#f9f5f5] to-[#faf8f8] rounded-lg h-24 flex items-center justify-center transition-all duration-300 hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 