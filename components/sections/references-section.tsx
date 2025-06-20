'use client'

import { useEffect, useRef } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'

// Importations directes des logos
import edfLogo from '@/public/images/clients/edf.PNG';
import alstomLogo from '@/public/images/clients/alstom.PNG';
import egisLogo from '@/public/images/clients/egis.PNG';
import generalLogo from '@/public/images/clients/general.PNG';
import saipemLogo from '@/public/images/clients/saipem.PNG';
import sarLogo from '@/public/images/clients/sar.PNG';
import tenLogo from '@/public/images/clients/ten.PNG';
import westinghouseLogo from '@/public/images/clients/westinghouse.PNG';

// Palette de couleurs rouge ajustée
const mainRed = "#800000";

// Logos des clients de KHEOPS
const references = [
  {
    name: "EDF",
    logo: edfLogo
  },
  {
    name: "Alstom",
    logo: alstomLogo
  },
  {
    name: "Egis",
    logo: egisLogo
  },
  {
    name: "General Electric",
    logo: generalLogo
  },
  {
    name: "Saipem",
    logo: saipemLogo
  },
  {
    name: "SAR",
    logo: sarLogo
  },
  {
    name: "Ten",
    logo: tenLogo
  },
  {
    name: "Westinghouse",
    logo: westinghouseLogo
  }
]

interface ReferencesSectionProps
{
  isStandalone?: boolean
}

export function ReferencesSection({ isStandalone = false }: ReferencesSectionProps)
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
        {isStandalone && (
          <div className="relative mb-20">
            <div className="relative h-[300px] w-full rounded-2xl overflow-hidden mb-12">
              <Image
                src="/images/references-banner.jpg"
                alt="Nos références"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                priority={isStandalone}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000]/90 to-[#8B0000]/70" />
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                  >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      Ils nous font confiance
                    </h1>
                    <p className="text-xl text-white/90">
                      Des références prestigieuses dans des secteurs variés
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mb-12">
          {!isStandalone && (
            <span className="text-[#8B0000] font-semibold mb-2 inline-block">Nos références</span>
          )}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#800000] to-[#950000] text-transparent bg-clip-text"
          >
            Ils nous font confiance
          </motion.h2>
          {!isStandalone && (
            <div className="w-20 h-1 bg-gradient-to-r from-[#8B0000] to-[#8B0000]/30 mx-auto mb-6 rounded-full"></div>
          )}
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
                className="flex-shrink-0 flex items-center justify-center p-5 bg-white rounded-lg shadow-md min-w-[200px] h-[120px] border-2 border-[#800000]/5 hover:border-[#800000]/20 transition-all duration-300"
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

        {isStandalone && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-20 bg-[#8B0000]/5 rounded-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">
                  Une expertise reconnue
                </h3>
                <p className="text-[#5A5A5A] mb-6">
                  Notre expertise en contrôle de projets est reconnue par les plus grands groupes industriels.
                  Nous intervenons sur des projets complexes dans des secteurs variés : énergie, transport, construction, défense...
                </p>
                <ul className="space-y-3">
                  {['Projets internationaux', 'Secteurs variés', 'Expertise technique', 'Méthodologie éprouvée'].map((item, index) => (
                    <li key={index} className="flex items-center text-[#1C1C1C]">
                      <svg className="w-5 h-5 text-[#8B0000] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/images/expertise-illustration.jpg"
                  alt="KHEOPS Consulting Expertise"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
} 