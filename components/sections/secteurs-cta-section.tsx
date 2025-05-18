'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

// Palette de couleurs rouge ajustée (plus claire pour le background)
const mainRed = "#800000";
const lighterRed = "#950000";
const darkerRed = "#600000";
const veryLightRed = "#fff5f5"; // Très léger rouge pour l'arrière-plan

export function SecteursCTASection() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#f9f5f5] to-[#f7f2f2] relative">
      {/* Motif de points en arrière-plan avec couleur plus légère */}
      <div className="absolute inset-0 opacity-10 z-0" 
        style={{ 
          backgroundImage: `radial-gradient(${mainRed} 0.5px, transparent 0.5px)`, 
          backgroundSize: '18px 18px'
        }}>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-xl p-10 relative overflow-hidden border border-gray-100"
        >
          {/* Élément graphique décoratif */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#f9f5f5] to-transparent"></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#800000]/5 to-[#950000]/3 rounded-full"></div>
          
          {/* Effet de lumière douce en haut à gauche */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#f9e8e8] to-transparent opacity-60 rounded-full filter blur-xl z-0"></div>
          
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#800000] to-[#950000] text-transparent bg-clip-text"
            >
              Prêt à transformer votre gestion de projet ?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-[#5A5A5A] text-lg mb-8 max-w-3xl"
            >
              Quel que soit votre secteur d'activité, KHEOPS Consulting vous accompagne dans l'optimisation de vos projets complexes. Notre expertise est à votre service pour relever vos défis les plus ambitieux.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button 
                onClick={() => handleNavigation('/contact')}
                className="bg-gradient-to-r from-[#800000] to-[#950000] text-white hover:from-[#600000] hover:to-[#800000] hover:scale-105 transition-all shadow-lg px-8 py-6 text-lg font-medium"
              >
                Demander un accompagnement
              </Button>
              <Button 
                onClick={() => handleNavigation('/expertise')}
                className="bg-white border-2 border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white hover:scale-105 transition-all shadow-md px-8 py-6 text-lg font-medium"
              >
                Découvrir nos expertises
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 