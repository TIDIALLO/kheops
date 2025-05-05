'use client'

import { motion } from 'framer-motion'
import { Calendar, BarChart2, Users, ArrowRight } from 'lucide-react'
import Image from 'next/image'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

// Données OPC
const opcData = [
  {
    title: "Ordonnancement",
    icon: Calendar,
    description: "Planifier et organiser le chantier avant de le démarrer. Cette phase amont s'appuie sur une analyse fine des tâches élémentaires nécessaires à l'exécution des travaux afin de déterminer leurs enchaînements. Un calendrier détaillé est élaboré à l'issue de cette phase.",
    color: "from-[#8B0000] to-[#B30000]"
  },
  {
    title: "Pilotage",
    icon: BarChart2,
    description: "Application du planning et des mesures d'organisation mises en place lors de l'ordonnancement. Durant cette phase de suivi, le pilote OPC contrôle rigoureusement les délais et la qualité des ouvrages.",
    color: "from-[#8B0000] to-[#990000]"
  },
  {
    title: "Coordination",
    icon: Users,
    description: "Supervision et gestion de tous les acteurs professionnels qui prennent part au projet. Cette phase assure la cohérence des interventions et la communication entre toutes les parties prenantes.",
    color: "from-[#8B0000] to-[#AA0000]"
  }
]

export function OPCSection() {
  return (
    <section id="opc" className="py-20 flex items-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4"
          >
            <span className="text-[#8B0000]">Ordonnancement Pilotage Contrôle</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-[#5A5A5A]"
          >
            Le pilote OPC joue un rôle prépondérant dans le déroulement d'un projet de construction.
          </motion.p>
        </div>

        {/* Image de contrôle de projet avec taille réduite */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10 flex justify-center"
        >
          <div className="bg-white p-4 rounded-xl shadow-md max-w-3xl border border-gray-200">
            <Image
              src="/images/control.PNG"
              alt="Diagramme de contrôle de projet"
              width={700}
              height={350}
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {opcData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className={`bg-gradient-to-r ${item.color} p-5 flex items-center justify-between`}>
                  <div className="rounded-full bg-white/10 p-3">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-[#5A5A5A] mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex justify-end">
                    <motion.div 
                      className="text-[#8B0000] font-medium flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">En savoir plus</span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 