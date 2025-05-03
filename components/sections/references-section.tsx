'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Logos des clients de KHEOPS
const references = [
  {
    name: "EDF",
    logo: "/images/clients/edf.PNG"
  },
  {
    name: "Alstom",
    logo: "/images/clients/alstom.PNG"
  },
  {
    name: "Egis",
    logo: "/images/clients/egis.PNG"
  },
  {
    name: "General Electric",
    logo: "/images/clients/general.PNG"
  },
  {
    name: "Saipem",
    logo: "/images/clients/saipem.PNG"
  },
  {
    name: "SAR",
    logo: "/images/clients/sar.PNG"
  },
  {
    name: "Ten",
    logo: "/images/clients/ten.PNG"
  },
  {
    name: "Westinghouse",
    logo: "/images/clients/westinghouse.PNG"
  }
]

export function ReferencesSection() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  // Animation du défilement
  useEffect(() => {
    if (!marqueeRef.current) return

    const interval = setInterval(() => {
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
    <section id="references" className="py-20 bg-[#8B0000]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4"
          >
            Ils nous font confiance
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
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#8B0000]/5 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#8B0000]/5 to-transparent z-10"></div>

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
                className="flex-shrink-0 flex items-center justify-center p-5 bg-white rounded-lg shadow-md min-w-[200px] h-[120px] border-2 border-[#8B0000]/10 hover:border-[#8B0000]"
              >
                <Image
                  src={reference.logo}
                  alt={`Logo ${reference.name}`}
                  width={160}
                  height={80}
                  className="max-h-16 object-contain"
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
                className="flex-shrink-0 flex items-center justify-center p-5 bg-white rounded-lg shadow-md min-w-[200px] h-[120px] border-2 border-[#8B0000]/10 hover:border-[#8B0000]"
              >
                <Image
                  src={reference.logo}
                  alt={`Logo ${reference.name}`}
                  width={160}
                  height={80}
                  className="max-h-16 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 