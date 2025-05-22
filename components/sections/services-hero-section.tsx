'use client'

import { motion } from 'framer-motion'
import { Clock, Coins, TriangleAlert, Construction } from 'lucide-react'
import Image from 'next/image'

export function ServicesHeroSection()
{
  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#8B0000]/5">
        {/* Container pour l'image avec ratio d'aspect réduit */}
        <div className="relative w-full aspect-[21/9] flex items-center justify-center bg-[#8B0000]/5">
          {/* Conteneur de l'image pleine largeur */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-[100vw] h-full relative">
              <Image
                src="/images/services/service.png"
                alt="Services KHEOPS Consulting"
                fill
                priority
                className="object-cover w-full h-full"
                quality={100}
              />
              {/* Superposition rouge plus prononcée */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000]/40 to-[#8B0000]/30 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-[#8B0000]/25"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/25"></div>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="absolute inset-0 flex items-center">
          <div className="container relative mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                  Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/90">Services</span>
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-white to-white/30 mx-auto mb-8 rounded-full"></div>
                <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-12 drop-shadow">
                  KHEOPS Consulting vous offre une gamme complète de services spécialisés en contrôle de projets pour garantir la réussite de vos initiatives
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {[
                  { icon: Clock, name: "Planning", description: "Optimisation des délais" },
                  { icon: Coins, name: "Coûts", description: "Maîtrise budgétaire" },
                  { icon: TriangleAlert, name: "Risques", description: "Anticipation et mitigation" },
                  { icon: Construction, name: "OPC", description: "Coordination efficace" }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-xl flex flex-col items-center justify-center border border-white/50"
                    whileHover={{
                      y: -8,
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                      backgroundColor: 'rgba(255, 255, 255, 1)'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + (index * 0.1),
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <div className="p-4 bg-gradient-to-br from-[#8B0000] to-[#A50000] rounded-full mb-4 shadow-md">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="font-semibold text-lg text-[#1C1C1C] mb-1">{service.name}</span>
                    <span className="text-sm text-[#5A5A5A]">{service.description}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Flèche de défilement */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 0 }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  y: [0, 10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                <div className="w-8 h-8 border-r-2 border-b-2 border-white rotate-45"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contrôle des coûts */}
      <section className="relative w-full bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenu textuel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-[#1C1C1C] mb-6">
                Contrôle des <span className="text-[#8B0000]">Coûts</span>
              </h2>
              <div className="w-20 h-1 bg-[#8B0000] rounded-full mb-8"></div>
              <p className="text-lg text-[#5A5A5A] mb-6">
                Notre expertise en contrôle des coûts vous permet de maîtriser votre budget tout au long du projet. Nous mettons en place des outils et des processus rigoureux pour :
              </p>
              <ul className="space-y-4">
                {[
                  "Une estimation détaillée des coûts initiaux",
                  "Un suivi régulier des dépenses",
                  "Une analyse des écarts budgétaires",
                  "Une optimisation des ressources",
                  "Une prévision et un contrôle des dépassements"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-[#5A5A5A]"
                  >
                    <Coins className="w-5 h-5 text-[#8B0000]" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/services/cdc.png"
                alt="Contrôle des coûts KHEOPS Consulting"
                fill
                className="object-cover"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000]/10 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Gestion des risques */}
      <section className="relative w-full bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Grille inversée pour la variation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image en premier sur desktop */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[16/10] w-[85%] mx-auto rounded-xl overflow-hidden shadow-2xl lg:order-1 order-2"
            >
              <Image
                src="/images/services/risk.png"
                alt="Gestion des risques KHEOPS Consulting"
                fill
                priority
                className="object-cover w-full h-full"
                quality={100}
              />
              {/* Superposition moderne avec dégradé plus subtil */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/10 via-transparent to-black/10"></div>
            </motion.div>

            {/* Contenu textuel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:order-2 order-1"
            >
              <div className="flex items-center space-x-3 mb-4">
                <TriangleAlert className="w-8 h-8 text-[#8B0000]" />
                <h2 className="text-4xl font-bold text-[#1C1C1C]">
                  Gestion des <span className="text-[#8B0000]">Risques</span>
                </h2>
              </div>

              <div className="w-20 h-1 bg-gradient-to-r from-[#8B0000] to-[#8B0000]/50 rounded-full mb-8"></div>

              <p className="text-lg text-[#5A5A5A] leading-relaxed">
                Notre approche proactive de la gestion des risques vous permet d'anticiper et de maîtriser les aléas de vos projets. Nous développons des stratégies sur mesure pour identifier, évaluer et atténuer les risques potentiels.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {[
                  {
                    title: "Identification",
                    description: "Détection précoce des risques potentiels",
                    delay: 0.1
                  },
                  {
                    title: "Analyse",
                    description: "Évaluation approfondie des impacts",
                    delay: 0.2
                  },
                  {
                    title: "Mitigation",
                    description: "Stratégies de réduction des risques",
                    delay: 0.3
                  },
                  {
                    title: "Suivi",
                    description: "Monitoring continu et ajustements",
                    delay: 0.4
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: item.delay
                      }
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className="bg-gradient-to-br from-white to-gray-50/80 p-3 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-[#8B0000]/20 cursor-pointer"
                  >
                    <h3 className="text-[#8B0000] font-semibold mb-1 flex items-center text-sm">
                      <motion.span
                        className="bg-[#8B0000]/10 p-1.5 rounded-md mr-2"
                        whileHover={{ rotate: 10 }}
                      >
                        <TriangleAlert className="w-3.5 h-3.5 text-[#8B0000]" />
                      </motion.span>
                      {item.title}
                    </h3>
                    <p className="text-[#5A5A5A] text-xs leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-4 p-3 bg-gradient-to-r from-[#8B0000]/5 to-[#8B0000]/10 rounded-lg border border-[#8B0000]/10"
              >
                <h4 className="font-semibold text-[#1C1C1C] mb-2">Notre engagement</h4>
                <p className="text-[#5A5A5A]">
                  Nous vous accompagnons dans la mise en place d'une culture de gestion des risques robuste et adaptée à vos enjeux spécifiques.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Planification */}
      <section className="relative w-full bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
            {/* Contenu textuel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-8 h-8 text-[#8B0000]" />
                <h2 className="text-4xl font-bold text-[#1C1C1C]">
                  Planification <span className="text-[#8B0000]">Stratégique</span>
                </h2>
              </div>

              <div className="w-20 h-1 bg-gradient-to-r from-[#8B0000] to-[#8B0000]/50 rounded-full mb-8"></div>

              <p className="text-lg text-[#5A5A5A] leading-relaxed">
                Notre expertise en planification vous permet de structurer et optimiser vos projets de manière efficace. Nous utilisons des méthodologies éprouvées pour garantir le respect des délais et la coordination optimale des ressources.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/services/planification.png"
                alt="Planification stratégique KHEOPS Consulting"
                fill
                className="object-cover"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/20 via-transparent to-black/20"></div>
            </motion.div>
          </div>

          {/* Timeline interactive */}
          <div className="mt-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl font-semibold text-center mb-12 text-[#1C1C1C]"
            >
              Notre Processus de Planification
            </motion.h3>

            <div className="relative">
              {/* Ligne de temps */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#8B0000] to-[#8B0000]/30"></div>

              {/* Étapes */}
              {[
                {
                  title: "Analyse Initiale",
                  description: "Évaluation approfondie des besoins et contraintes du projet",
                  icon: "📊"
                },
                {
                  title: "Structuration",
                  description: "Définition des phases et jalons clés du projet",
                  icon: "🎯"
                },
                {
                  title: "Optimisation",
                  description: "Allocation optimale des ressources et définition du chemin critique",
                  icon: "⚡"
                },
                {
                  title: "Suivi & Contrôle",
                  description: "Monitoring continu et ajustements proactifs",
                  icon: "📈"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-end" : "justify-start"
                    } md:w-1/2 ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}
                >
                  {/* Point sur la timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#8B0000] shadow-lg"></div>

                  {/* Contenu */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`relative w-[90%] p-6 bg-white rounded-xl shadow-xl border border-[#8B0000]/10 ${index % 2 === 0 ? "text-right mr-8" : "text-left ml-8"
                      }`}
                  >
                    <div className="text-3xl mb-3">{step.icon}</div>
                    <h4 className="text-xl font-semibold text-[#8B0000] mb-2">{step.title}</h4>
                    <p className="text-[#5A5A5A]">{step.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-[#8B0000]/5 p-6 rounded-lg border border-[#8B0000]/10">
              <h4 className="text-xl font-semibold text-[#1C1C1C] mb-3">
                Optimisez votre planification avec KHEOPS Consulting
              </h4>
              <p className="text-[#5A5A5A] max-w-2xl mx-auto">
                Notre approche méthodique et nos outils avancés vous permettent de maîtriser les délais et de maximiser l&apos;efficacité de vos projets.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
} 