'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

// Liste des témoignages clients
const testimonials = [
  {
    id: 1,
    name: "Jean Dupont",
    role: "Directeur de Projet, EDF",
    quote: "L'expertise de KHEOPS Consulting a permis de réduire significativement les délais de notre projet tout en maintenant la qualité attendue. Leur approche méthodique du planning a été déterminante.",
    image: "/images/testimonials/testimonial-1.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Marie Laurent",
    role: "Responsable Financier, Alstom",
    quote: "Grâce à l'analyse des coûts réalisée par KHEOPS, nous avons pu identifier et rectifier plusieurs sources de dépassement budgétaire, avec un gain net sur notre projet de plus de 15%.",
    image: "/images/testimonials/testimonial-2.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Philippe Mercier",
    role: "Chef de Projet Senior, Egis",
    quote: "La méthodologie d'analyse des risques proposée par KHEOPS nous a donné une vision claire des zones critiques. Leur plan de mitigation a évité plusieurs crises potentielles.",
    image: "/images/testimonials/testimonial-3.jpg",
    rating: 4
  },
  {
    id: 4,
    name: "Sophie Deschamps",
    role: "Directrice des Opérations, SAR",
    quote: "L'équipe de KHEOPS s'est parfaitement intégrée à notre organisation. Leur coordination de l'OPC a permis de tenir les délais malgré la complexité technique de notre projet industriel.",
    image: "/images/testimonials/testimonial-4.jpg",
    rating: 5
  }
]

// Animations pour les cartes
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 500 : -500,
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.4
    }
  })
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  
  // Gestion du défilement automatique
  useEffect(() => {
    if (!isAutoPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }
    
    intervalRef.current = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isAutoPlaying])
  
  // Navigation dans le carrousel
  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }
  
  const goToPrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }
  
  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }
  
  // Pause automatique sur survol
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Arrière-plan avec un motif subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-[#8B0000]/5 opacity-70 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5 z-0"></div>
      
      {/* Éléments de design */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#8B0000]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B0000]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1C1C1C] mb-4">
            Témoignages <span className="text-[#8B0000]">Clients</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8B0000] to-[#8B0000]/30 mx-auto mb-6"></div>
          <p className="text-lg text-[#5A5A5A] max-w-2xl mx-auto">
            Découvrez ce que nos clients disent de notre collaboration et des résultats obtenus
          </p>
        </motion.div>
        
        {/* Carrousel de témoignages */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Flèches de navigation */}
          <motion.button 
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white hover:bg-[#8B0000] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>
          
          <motion.button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white hover:bg-[#8B0000] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
          
          {/* Conteneur du carrousel avec nouveau design */}
          <div className="overflow-hidden rounded-3xl min-h-[300px] md:min-h-[400px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div 
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full rounded-3xl"
              >
                {/* Carte de témoignage améliorée */}
                {(() => {
                  const testimonial = testimonials[currentIndex];
                  return (
                    <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 overflow-hidden relative">
                      {/* Élément de design */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B0000]/80 via-[#8B0000] to-[#8B0000]/80"></div>
                      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-[#8B0000]/5 z-0"></div>
                      
                      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                        {/* Image et info du client */}
                        <div className="flex flex-col items-center md:items-start">
                          {/* Photo avec effet */}
                          <div className="relative">
                            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-xl border-4 border-white">
                              <div 
                                className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
                                style={{
                                  backgroundImage: `url(${testimonial.image})`,
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center'
                                }}
                              >
                                {!testimonial.image && (
                                  <span className="text-5xl text-[#8B0000]">{testimonial.name.charAt(0)}</span>
                                )}
                              </div>
                            </div>
                            {/* Badge de logo KHEOPS */}
                            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
                              <div className="w-8 h-8 rounded-full bg-[#8B0000] flex items-center justify-center text-white font-bold text-xs">
                                K
                              </div>
                            </div>
                          </div>
                          
                          {/* Rating stars */}
                          <div className="flex mt-4 mb-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                        </div>
                        
                        {/* Contenu du témoignage */}
                        <div className="flex-1">
                          <div className="text-[#8B0000] mb-4">
                            <Quote className="h-12 w-12 opacity-20 rotate-180" />
                          </div>
                          <motion.blockquote 
                            className="text-lg md:text-xl font-light text-[#1C1C1C] mb-8 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                          >
                            "{testimonial.quote}"
                          </motion.blockquote>
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                            className="border-t border-gray-100 pt-4"
                          >
                            <h4 className="font-bold text-xl text-[#8B0000]">{testimonial.name}</h4>
                            <p className="text-[#5A5A5A]">{testimonial.role}</p>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Indicateurs de position améliorés */}
          <div className="flex justify-center mt-10 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-500 border-2 ${
                  currentIndex === index 
                    ? 'w-12 h-3 bg-gradient-to-r from-[#8B0000] to-[#8B0000]/70 border-[#8B0000]' 
                    : 'w-3 h-3 bg-white hover:bg-gray-200 border-gray-300 hover:border-[#8B0000]/50'
                }`}
                aria-label={`Témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 