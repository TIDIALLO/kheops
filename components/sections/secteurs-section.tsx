'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Building2, Factory, Bolt, Truck, Router, Package } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

// Palette de couleurs rouge ajustée (plus claire pour le background)
const mainRed = "#800000";
const lighterRed = "#950000";
const darkerRed = "#600000";
const veryLightRed = "#fff5f5"; // Très léger rouge pour l'arrière-plan

// Définition des secteurs d'activité
const secteurs = [
  {
    id: "construction",
    titre: "Construction",
    description: "Gestion de projets complexes dans le secteur du bâtiment et de la construction, de la conception à la livraison.",
    image: "/images/secteurs/Construction.png",
    icon: Building2,
    color: mainRed
  },
  {
    id: "industrie",
    titre: "Industrie",
    description: "Accompagnement des projets industriels avec une expertise dans les processus de production et d'optimisation.",
    image: "/images/secteurs/industrie.png",
    icon: Factory,
    color: mainRed
  },
  {
    id: "energie",
    titre: "Énergie",
    description: "Pilotage de projets dans le domaine de l'énergie, y compris les infrastructures nucléaires et renouvelables.",
    image: "/images/secteurs/energie.png",
    icon: Bolt,
    color: mainRed
  },
  {
    id: "transport",
    titre: "Transport",
    description: "Expertise dans le management de projets liés aux infrastructures de transport et à la mobilité.",
    image: "/images/secteurs/transport.png",
    icon: Truck,
    color: mainRed
  },
  {
    id: "infrastructure",
    titre: "Infrastructure",
    description: "Contrôle et pilotage de grands projets d'infrastructure publique et privée.",
    image: "/images/secteurs/infrastructure.png",
    icon: Router,
    color: mainRed
  }
]

// Variants d'animation pour le conteneur principal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Variants d'animation pour chaque carte
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

export function SecteursSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-[#f9f5f5] to-[#f7f2f2] relative">
      {/* Motif de points en arrière-plan avec couleur plus légère */}
      <div className="absolute inset-0 opacity-10 z-0" 
        style={{ 
          backgroundImage: `radial-gradient(${mainRed} 0.5px, transparent 0.5px)`, 
          backgroundSize: '18px 18px'
        }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#800000] to-[#950000] text-transparent bg-clip-text">
            Nos Secteurs d&apos;Intervention
          </h1>
          <p className="text-[#5A5A5A] max-w-3xl mx-auto text-lg">
            KHEOPS Consulting intervient dans divers secteurs d&apos;activité, apportant son expertise en contrôle de projets à des industries variées et exigeantes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {secteurs.map((secteur) => (
            <motion.div
              key={secteur.id}
              id={secteur.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              onMouseEnter={() => setHoveredCard(secteur.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className="overflow-hidden h-full border-0 shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={secteur.image}
                    alt={secteur.titre}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Overlay de couleur avec animation */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/95 via-[#1C1C1C]/60 to-transparent"
                    animate={{ 
                      opacity: hoveredCard === secteur.id ? 0.98 : 0.9
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Titre et icône en superposition - Icône agrandie */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center">
                    <motion.div
                      animate={{
                        scale: hoveredCard === secteur.id ? 1.1 : 1,
                        x: hoveredCard === secteur.id ? 5 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="mr-3 bg-white p-3 rounded-full shadow-md" // padding augmenté
                    >
                      <secteur.icon className="h-7 w-7 text-gradient-to-r from-[#800000] to-[#950000]" style={{color: mainRed}} /> {/* taille augmentée de 6 à 7 */}
                    </motion.div>
                    <h3 className="text-white font-bold text-xl">{secteur.titre}</h3>
                  </div>
                </div>
                
                <CardContent className="p-6 bg-white">
                  <motion.p 
                    className="text-[#5A5A5A]"
                    animate={{
                      opacity: hoveredCard === secteur.id ? 1 : 0.9
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {secteur.description}
                  </motion.p>
                  
                  {/* Bouton "En savoir plus" avec animation et lien */}
                  <motion.a
                    href="/services"
                    className="mt-4 font-medium flex items-center cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, ${mainRed}, ${lighterRed})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}
                    animate={{ 
                      x: hoveredCard === secteur.id ? 5 : 0,
                      opacity: hoveredCard === secteur.id ? 1 : 0.9
                    }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ x: 10 }}
                  >
                    En savoir plus
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill={mainRed}>
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 