'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function ServicesCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#8B0000]/5 to-[#8B0000]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image décorative */}
            <div className="w-full md:w-2/5 bg-[#8B0000] py-12 px-6 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative w-40 h-40"
              >
                <div className="absolute inset-0 w-full h-full bg-white transform rotate-45"></div>
                <div className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] border-2 border-[#8B0000] transform rotate-45 flex items-center justify-center">
                  <span className="text-[#8B0000] text-2xl font-bold transform -rotate-45">KHEOPS</span>
                </div>
              </motion.div>
            </div>

            {/* Contenu textuel */}
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-[#1C1C1C] mb-4"
              >
                Besoin d'optimiser le contrôle de vos projets?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[#5A5A5A] mb-8"
              >
                Nos experts sont à votre disposition pour vous aider à maîtriser vos délais, budgets et risques. Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment KHEOPS Consulting peut vous accompagner vers la réussite.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  href="/#contact"
                  className="bg-[#8B0000] hover:bg-[#700000] text-white px-6 py-3 rounded-md font-medium text-center transition-colors shadow-md"
                >
                  Nous contacter
                </Link>
                <Link 
                  href="/secteurs"
                  className="border border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000]/5 px-6 py-3 rounded-md font-medium text-center transition-colors"
                >
                  Découvrir nos secteurs
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 