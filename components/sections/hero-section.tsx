'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

// Définition d'un type pour les particules
type Particle = {
  id: number;
  x: string;
  y: string;
  size: number;
  opacity: number;
  duration: number;
}

// Palette de couleurs grises
const colors = {
  primary: "#5A5A5A", // Gris principal (comme dans le logo KHEOPS)
  lighter: "#6E6E6E", // Gris légèrement plus clair
  darker: "#484848", // Gris plus foncé
  accent: "#8B0000", // Rouge bordeaux pour les accents uniquement
  lightGray: "#F5F5F5", // Gris très clair pour certains éléments
}

export function HeroSection() {
  // Utilisation d'un state pour générer les particules uniquement côté client
  const [particles, setParticles] = useState<Particle[]>([]);
  // State pour contrôler l'animation répétée du texte
  const [animationKey, setAnimationKey] = useState(0);

  // Animation répétée toutes les 10 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 10000); // Répéter l'animation toutes les 10 secondes
    
    return () => clearInterval(interval);
  }, []);

  // Générer les particules uniquement après le montage du composant (côté client)
  useEffect(() => {
    // Réduire le nombre de particules et les rendre plus subtiles
    const newParticles = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 1, // Taille légèrement réduite
      opacity: Math.random() * 0.12 + 0.03, // Opacité réduite
      duration: Math.random() * 4 + 3 // Durée augmentée pour un effet plus doux
    }));
    setParticles(newParticles);
  }, []);

  // Variants pour les animations de texte
  const titleContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  // Animation pour chaque mot
  const wordAnimation = {
    hidden: { 
      opacity: 0,
      y: 20,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };
  
  // Animation secondaire pour l'effet de flottement continu
  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };
  
  // Diviser le titre en mots pour une animation séquentielle
  const title1 = "Votre vision, notre expertise :".split(" ");
  const title2 = "ensemble vers la réussite.".split(" ");

  return (
    <section 
      className="relative min-h-screen overflow-hidden flex flex-col pt-16 md:pt-20" 
      id="home"
      style={{ 
        background: `linear-gradient(135deg, ${colors.lighter} 0%, ${colors.darker} 100%)`,
      }}
    >
      {/* Motif subtil en arrière-plan */}
      <div className="absolute inset-0 opacity-4" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M30 30h1v1h-1v-1zm-3 0h1v1h-1v-1zm6 0h1v1h-1v-1zm3 0h1v1h-1v-1z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Contenu principal */}
      <div className="flex-grow flex flex-col justify-between">
        {/* Texte principal */}
        <div className="container mx-auto pt-20 md:pt-24 lg:pt-28 px-8 text-center relative z-10">
          {/* Animation par mots avec réinitialisation périodique */}
          <motion.div 
            key={animationKey}
            className="relative"
            initial="hidden"
            animate="visible"
            variants={titleContainer}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight relative">
              <div className="flex flex-wrap justify-center gap-x-3 mb-2">
                {title1.map((word, i) => (
                  <motion.span 
                    key={`line1-${i}`} 
                    className="inline-block"
                    variants={wordAnimation}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-x-3 mt-2">
                {title2.map((word, i) => (
                  <motion.span 
                    key={`line2-${i}`} 
                    className="inline-block"
                    variants={wordAnimation}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </h1>
            
            {/* Effet de surbrillance qui se déplace sur le texte */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 5, 
                ease: "linear", 
                repeat: Infinity
              }}
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                backgroundSize: "200% 100%"
              }}
            />
          </motion.div>
          
          {/* Sous-titre avec animation de flottement */}
          <motion.p 
            key={`subtitle-${animationKey}`}
            className="text-lg md:text-xl lg:text-2xl mt-8 text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            variants={floatAnimation}
            whileInView="animate"
          >
            Cabinet de conseil spécialisé dans le contrôle de projets complexes
          </motion.p>
        </div>
        
        {/* Image en bas - Avec un effet de luminosité augmentée mais pas trop */}
        <div className="relative w-full pt-16 pb-4 px-4 md:px-8 lg:px-12 flex justify-center items-end mt-6">
          {/* Overlay dégradé sur l'image - utilisant des gris au lieu de rouge */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#5A5A5A]/70 via-[#5A5A5A]/10 to-[#5A5A5A]/30 z-10"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative w-full max-w-7xl z-20"
          >
            {/* Conteneur avec un effet de luminosité pour l'image */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              {/* Filtre de luminosité pour éclaircir l'image */}
              <div className="absolute inset-0 bg-white opacity-15 mix-blend-overlay z-10"></div>
              
              <Image
                src="/images/consulting.png"
                alt="Professionnels en réunion"
                width={1920}
                height={600}
                className="w-full h-auto object-contain max-h-[55vh] brightness-120 contrast-105"
                priority
              />
              
              {/* Reflet léger sur l'image */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/30 to-transparent z-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Effet particules - Généré côté client uniquement */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white"
            initial={{ 
              x: particle.x, 
              y: particle.y,
              opacity: particle.opacity
            }}
            animate={{ 
              opacity: [
                particle.opacity,
                particle.opacity * 1.5,
                particle.opacity
              ]
            }}
            transition={{ 
              duration: particle.duration, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ 
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>
      
      {/* Légère vague décorative entre le texte et l'image */}
      <div className="absolute top-[45%] left-0 w-full h-24 opacity-10 pointer-events-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  )
} 