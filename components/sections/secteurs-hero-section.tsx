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
            {/* Image professionnelle des secteurs d'activité */}
            <div className="relative z-10">
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image représentant la diversité des secteurs d'activité */}
                <div className="relative h-[400px] w-[500px]">
                  {/* Rendu d'une image composite professionnelle */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#800000]/80 z-10"></div>
                  
                  {/* Utilisation d'une div avec background-image comme solution de secours */}
                  <div 
                    className="absolute inset-0 bg-gray-200" 
                    style={{ 
                      backgroundImage: `url('/images/services/planification.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  
                  {/* Overlay avec effets et texte */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-white text-xl font-bold mb-2">Maîtrise multi-sectorielle</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Industrie</span>
                      <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Énergie</span>
                      <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Transport</span>
                      <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Construction</span>
                      <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">Logistique</span>
                    </div>
                  </div>
                </div>
                
                {/* Bulle d'information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -right-10 -top-10 bg-white rounded-xl p-4 shadow-lg border border-gray-100 max-w-[180px]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-[#800000]/10 p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-semibold text-sm text-[#1C1C1C]">Expertise reconnue</span>
                  </div>
                  <p className="text-xs text-[#5A5A5A]">Plus de 20 ans d'expérience dans les projets complexes multisectoriels</p>
                </motion.div>
                
                {/* Badge de confiance */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -left-10 -bottom-10 bg-[#800000] text-white rounded-full h-[90px] w-[90px] flex items-center justify-center shadow-lg"
                  style={{ transform: 'rotate(-10deg)' }}
                >
                  <div className="text-center">
                    <div className="text-xs font-bold">EXPERTISE</div>
                    <div className="text-lg font-bold">100%</div>
                    <div className="text-[10px]">CERTIFIÉE</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 