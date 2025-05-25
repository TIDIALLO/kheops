'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Check, ArrowRight, BarChart3, FileText, Users, MessageSquare, ListChecks } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useEffect, useState } from 'react'

export function ProcessSection() {
  // Hook pour la détection des médias
  const [isMounted, setIsMounted] = useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")
  
  // Montage côté client seulement
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Étapes du processus
  const processSteps = [
    {
      id: 1,
      icon: MessageSquare,
      title: "Consultation initiale",
      description: "Nous commençons par comprendre vos objectifs, vos contraintes et les spécificités de votre projet à travers une discussion approfondie.",
      benefits: [
        "Analyse de vos besoins spécifiques",
        "Identification des enjeux clés",
        "Définition des objectifs SMART"
      ]
    },
    {
      id: 2,
      icon: FileText,
      title: "Diagnostic et proposition",
      description: "Nous réalisons un diagnostic précis de votre situation actuelle et élaborons une proposition d'intervention adaptée à vos besoins.",
      benefits: [
        "Analyse détaillée de l'existant",
        "Identification des risques",
        "Proposition sur mesure"
      ]
    },
    {
      id: 3,
      icon: Users,
      title: "Mise en place",
      description: "Notre équipe dédiée met en place les outils et méthodologies nécessaires pour optimiser le contrôle de votre projet.",
      benefits: [
        "Équipe adaptée à vos besoins",
        "Mise en place des outils",
        "Formation de vos équipes"
      ]
    },
    {
      id: 4,
      icon: BarChart3,
      title: "Suivi et ajustement",
      description: "Nous assurons un suivi rigoureux et régulier, avec des points d'étape pour ajuster la stratégie si nécessaire.",
      benefits: [
        "Tableaux de bord personnalisés",
        "Reporting régulier",
        "Ajustements proactifs"
      ]
    },
    {
      id: 5,
      icon: ListChecks,
      title: "Bilan et transfert",
      description: "À la fin de la mission, nous réalisons un bilan complet et assurons le transfert des compétences vers vos équipes.",
      benefits: [
        "Bilan des résultats obtenus",
        "Documentation complète",
        "Accompagnement à l'autonomie"
      ]
    }
  ];

  // Variants d'animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* En-tête de section avec image */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-3 sm:px-4 py-1 rounded-full bg-[#8B0000]/10 text-[#8B0000] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              Notre approche
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-3 sm:mb-4">
              Notre processus d&apos;accompagnement:
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#8B0000] to-[#8B0000]/30 mx-auto mb-4 sm:mb-6 rounded-full"></div>
            <p className="text-base sm:text-lg text-[#5A5A5A] max-w-3xl mx-auto px-2">
              Une méthodologie éprouvée pour garantir le succès de vos projets les plus complexes.  
            </p>
          </motion.div>
          
          {/* Image illustrative du processus - responsive */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 sm:mt-8 w-full sm:w-11/12 md:w-4/5 lg:w-3/5 xl:w-1/2 relative"
          >
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg border border-[#8B0000]/10">
              <div className="aspect-[16/9] relative">
                <Image 
                  src="/images/services/planification.png" 
                  alt="Notre processus de planification" 
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#8B0000]/40 to-transparent mix-blend-multiply"></div>
                {/* Badge */}
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-medium text-[#8B0000] shadow-md">
                  Processus KHEOPS
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Étapes du processus - amélioré pour la responsivité */}
        <div className="relative max-w-4xl lg:max-w-5xl mx-auto">
          {/* Ligne de connexion - masquée sur mobile, visible sur tablette+ */}
          {isMounted && isDesktop && (
            <div className="absolute left-[28px] sm:left-16 top-[45px] bottom-20 w-[2px] bg-gradient-to-b from-[#8B0000] via-[#8B0000]/50 to-[#8B0000]/20"></div>
          )}
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="space-y-8 sm:space-y-10 lg:space-y-12"
          >
            {processSteps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className={`flex flex-col ${isMounted && isDesktop ? (index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row') : 'md:flex-row'} gap-4 sm:gap-6 md:gap-8 items-start`}
                >
                  {/* Icône et numéro - ajustement responsive */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#8B0000] to-[#A52A2A] text-white flex items-center justify-center shadow-lg relative z-10">
                      <span className="font-bold text-sm sm:text-base">{step.id}</span>
                    </div>
                    {isMounted && isDesktop && (
                      <div className="hidden md:flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mt-4 rounded-full bg-[#8B0000]/5 border border-[#8B0000]/10">
                        <StepIcon className="w-6 h-6 sm:w-8 sm:h-8 text-[#8B0000]" />
                      </div>
                    )}
                  </div>
                  
                  {/* Contenu - adapté pour chaque taille d'écran */}
                  <div 
                    className={`flex-grow bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-5 md:p-6 border-t-4 border-[#8B0000] 
                      ${isMounted && isDesktop && index % 2 === 1 ? 'md:text-right' : ''}`}
                  >
                    {/* Titre mobile avec icône */}
                    <div className="md:hidden flex items-center gap-3 mb-3">
                      <StepIcon className="w-5 h-5 text-[#8B0000]" />
                      <h3 className="text-lg sm:text-xl font-bold text-[#1C1C1C]">
                        {step.title}
                      </h3>
                    </div>
                    
                    {/* Titre desktop sans icône */}
                    <div className="hidden md:block mb-3">
                      <h3 className="text-xl font-bold text-[#1C1C1C]">
                        {step.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#5A5A5A] mb-3 sm:mb-4">
                      {step.description}
                    </p>
                    
                    {/* Liste d'avantages */}
                    <div className="space-y-1.5 sm:space-y-2">
                      {step.benefits.map((benefit, idx) => (
                        <div 
                          key={idx} 
                          className={`flex items-center gap-2 
                            ${isMounted && isDesktop && index % 2 === 1 ? 'md:justify-end' : ''}`}
                        >
                          <div className="bg-[#8B0000]/10 p-1 rounded-full">
                            <Check className="w-3 h-3 text-[#8B0000]" />
                          </div>
                          <span className="text-xs sm:text-sm text-[#5A5A5A]">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        
        {/* CTA - ajusté pour la responsivité */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12 sm:mt-14 md:mt-16"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white text-sm sm:text-base font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
          >
            <span>Démarrer votre projet.</span>
            <ArrowRight size={isMounted && isDesktop ? 16 : 14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Exportation par défaut pour l'import dynamique
export default { ProcessSection }; 