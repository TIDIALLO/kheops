'use client'

import { motion } from 'framer-motion'
import { Building2, Factory, Atom, Truck, PlaneTakeoff, HardHat, Droplet, Drill } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Liste des industries servies
const industries = [
  { nom: "BTP", icon: Building2, color: "#8B0000", sectorId: "construction" },
  { nom: "Nucléaire", icon: Atom, color: "#8B0000", sectorId: "energie" },
  { nom: "Pétrochimie", icon: Factory, color: "#8B0000", sectorId: "industrie" },
  { nom: "Oil & Gas", icon: Droplet, color: "#8B0000", sectorId: "energie" },
  { nom: "Transport", icon: Truck, color: "#8B0000", sectorId: "transport" },
  { nom: "Aéroportuaire", icon: PlaneTakeoff, color: "#8B0000", sectorId: "transport" },
  { nom: "Construction", icon: HardHat, color: "#8B0000", sectorId: "construction" },
  { nom: "Industrie", icon: Drill, color: "#8B0000", sectorId: "industrie" }
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export function DomainesSection()
{
  return (
    <section id="domaines" className="py-20 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="h-full flex flex-col justify-center"
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-[#8B0000]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              KHEOPS Consulting, partenaire privilégié du monde industriel.
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.p variants={itemVariants} className="text-[#5A5A5A]">
                La réussite des grands projets complexes représente un défi croissant pour les entreprises.
              </motion.p>

              <motion.p variants={itemVariants} className="text-[#5A5A5A]">
                Depuis ses débuts, KHEOPS CONSULTING est le partenaire privilégié des industries. Principalement les industries liées au BTP, au <span className="text-[#8B0000] font-medium">nucléaire</span>, au gaz, au pétrole, au transport et à l&apos;aéroportuaire.
              </motion.p>

              <motion.p variants={itemVariants} className="text-[#5A5A5A]">
                Ses succès dans tous les projets entrepris depuis 20 ans lui permettent aujourd&apos;hui d&apos;étendre son champs de compétences. La société s&apos;ouvre à tous les domaines où le management de projet à grande échelle est requis.
              </motion.p>

              <motion.p variants={itemVariants} className="text-[#5A5A5A]">
                Les projets, la multiplication des normes, les délais et budgets réduits, ainsi que les exigences accrues en matière de sécurité, qualité et durabilité, nécessitent une gestion de projet efficace.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 grid grid-cols-3 md:grid-cols-4 gap-3"
            >
              {industries.map((industry, index) => (
                <Link
                  key={index}
                  href="/secteurs"
                  className="block"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, backgroundColor: "#f8f8f8" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-[#8B0000]/20 cursor-pointer"
                  >
                    <industry.icon className="w-6 h-6 text-[#8B0000] mb-2" />
                    <span className="text-[#1C1C1C] font-medium text-xs">{industry.nom}</span>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-full flex items-center justify-center"
          >
            <div className="relative rounded-xs overflow-hidden shadow-xl w-full max-w-xl">
              <Image
                src="/images/control.png"
                alt="Réunion professionnelle"
                width={1300}
                height={1000}
                className="w-full h-auto object-cover"
                priority
              />

              {/* Overlay avec effet de dégradé */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/60 to-transparent pointer-events-none"></div>

              {/* Texte en superposition */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-bold mb-2">Une expertise reconnue depuis 20 ans.</h3>
                <p className="text-white/90 text-sm">Gestion de projets complexes dans les industries les plus exigeantes.</p>
              </div>
            </div>

            {/* Éléments décoratifs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0080ff]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#8B0000]/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 