'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { expertises } from '@/data/expertises'

export default function ExpertisePreviewSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#8B0000]/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[#8B0000] font-semibold mb-2 inline-block">Notre savoir-faire.</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
            Notre expertise en contrôle de projets.
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8B0000] to-[#8B0000]/30 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-[#5A5A5A] max-w-3xl mx-auto">
            Découvrez nos domaines d&apos;expertise pour une gestion optimale de vos projets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {expertises.map((expertise, index) => {
            const ExpertiseIcon = expertise.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-[#8B0000]/5 rounded-full mb-4">
                    <ExpertiseIcon className="w-8 h-8 text-[#8B0000]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">{expertise.title}</h3>
                  <p className="text-[#5A5A5A] text-sm">{expertise.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link 
            href="/expertise"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B0000] text-white rounded-lg hover:bg-[#8B0000]/90 transition-colors group"
          >
            <span>En savoir plus sur notre expertise.</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 