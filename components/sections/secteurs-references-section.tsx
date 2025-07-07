'use client'

import { useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

// Palette de couleurs rouge ajustée (plus claire pour le background)
const mainRed = "#800000";
const lighterRed = "#950000";
const darkerRed = "#600000";
const veryLightRed = "#fff5f5"; // Très léger rouge pour l'arrière-plan

// Logos des clients de KHEOPS
const references = [
  {
    name: "EDF",
    logo: "/images/clients/edf.png"
  },
  {
    name: "Alstom",
    logo: "/images/clients/alstom.png"
  },
  {
    name: "Egis",
    logo: "/images/clients/egis.png"
  },
  {
    name: "General Electric",
    logo: "/images/clients/general.png"
  },
  {
    name: "Saipem",
    logo: "/images/clients/saipem.png"
  },
  {
    name: "SAR",
    logo: "/images/clients/sar.png"
  },
  {
    name: "Ten",
    logo: "/images/clients/ten.png"
  },
  {
    name: "Westinghouse",
    logo: "/images/clients/westinghouse.png"
  }
]

export function SecteursReferencesSection()
{
  const marqueeRef = useRef<HTMLDivElement>(null)

  // Animation du défilement automatique
  useEffect(() =>
  {
    if (!marqueeRef.current) return

    const interval = setInterval(() =>
    {
      if (marqueeRef.current) {
        marqueeRef.current.scrollLeft += 1

        // Reset quand on atteint la fin
        if (
          marqueeRef.current.scrollLeft + marqueeRef.current.offsetWidth >=
          marqueeRef.current.scrollWidth
        ) {
          marqueeRef.current.scrollLeft = 0
        }
      }
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-br from-[#f9f5f5] to-[#f7f2f2] relative">
      {/* Motif de points en arrière-plan avec couleur plus légère */}
      <div className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: `radial-gradient(${mainRed} 0.5px, transparent 0.5px)`,
          backgroundSize: '18px 18px'
        }}>
      </div>

      {/* Effet de vague en bas avec dégradé amélioré */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-r from-[#800000]/5 via-[#950000]/8 to-[#800000]/5 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#800000] to-[#950000] text-transparent bg-clip-text"
          >
            Ils nous ont fait confiance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-[#5A5A5A] max-w-2xl mx-auto"
          >
            Des entreprises leaders dans leur secteur nous confient leurs projets les plus ambitieux
          </motion.p>
        </div>

        {/* Conteneur du carousel avec overflow hidden */}
        <div className="relative overflow-hidden mx-auto max-w-6xl">
          {/* Effet d'ombre sur les côtés */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#f9f5f5] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#f9f5f5] to-transparent z-10"></div>

          {/* Carousel avec défilement automatique */}
          <div
            ref={marqueeRef}
            className="flex overflow-x-auto gap-8 py-8 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Première copie des logos */}
            {references.map((reference, index) => (
              <motion.div
                key={`first-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="flex-shrink-0 flex items-center justify-center p-5 bg-white rounded-lg shadow-md min-w-[200px] h-[120px] border-2 border-[#800000]/5 hover:border-[#800000]/20 transition-all duration-300"
              >
                <Image
                  src={reference.logo}
                  alt={`Logo ${reference.name}`}
                  width={160}
                  height={80}
                  className="max-h-16 w-auto object-contain"
                />
              </motion.div>
            ))}

            {/* Deuxième copie des logos pour créer un effet infini */}
            {references.map((reference, index) => (
              <motion.div
                key={`second-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: (index + references.length) * 0.1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="flex-shrink-0 flex items-center justify-center p-5 bg-white rounded-lg shadow-md min-w-[200px] h-[120px] border-2 border-[#800000]/5 hover:border-[#800000]/20 transition-all duration-300"
              >
                <Image
                  src={reference.logo}
                  alt={`Logo ${reference.name}`}
                  width={160}
                  height={80}
                  className="max-h-16 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 