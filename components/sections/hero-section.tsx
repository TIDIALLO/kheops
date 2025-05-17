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

// Palette de couleurs améliorée
const colors = {
  primary: "#8B0000", // Rouge bordeaux principal
  secondary: "#A52A2A", // Rouge bordeaux secondaire
  dark: "#600000", // Rouge foncé
  light: "#f9f5f5", // Fond très légèrement teinté
  accent: "#f5f5f5", // Blanc cassé pour les détails
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
    // Augmenter légèrement le nombre de particules pour un effet plus riche
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: Math.random() * 5 + 1, // Taille variée
      opacity: Math.random() * 0.15 + 0.03, // Opacité subtile
      duration: Math.random() * 5 + 4 // Durée augmentée pour un effet plus doux
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
    >
      {/* Background principal avec gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#f5f0f0] via-white to-[#f7f2f2] z-0"></div>
      
      {/* Motif de points élégant en arrière-plan */}
      <div className="absolute inset-0 opacity-10 z-0" 
        style={{ 
          backgroundImage: `radial-gradient(${colors.primary} 0.5px, transparent 0.5px)`, 
          backgroundSize: '18px 18px'
        }}>
      </div>
      
      {/* Éléments décoratifs géométriques */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Grand cercle décoratif en haut à droite */}
        <div className="absolute -top-[5%] -right-[5%] w-[40%] aspect-square rounded-full opacity-10 bg-gradient-to-tr from-[#8B0000] to-[#A52A2A]"></div>
        
        {/* Forme géométrique en bas à gauche */}
        <div className="absolute -bottom-[5%] -left-[10%] w-[40%] h-[40%] opacity-10 bg-gradient-to-tr from-[#8B0000]/80 to-[#8B0000]/40 rounded-tl-[100px] rounded-tr-[200px] rounded-br-[50px]"></div>
      </div>
      
      {/* Contenu principal */}
      <div className="flex-grow flex flex-col justify-between z-10">
        {/* Texte principal */}
        <div className="container mx-auto pt-20 md:pt-24 lg:pt-28 px-4 text-center relative z-10">
          {/* Badge "KHEOPS" en haut */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8 rounded-full bg-[#8B0000]/10 px-4 py-2 border border-[#8B0000]/20"
          >
            <span className="text-[#8B0000] font-semibold">KHEOPS CONSULTING</span>
          </motion.div>
          
          {/* Animation par mots avec réinitialisation périodique */}
          <motion.div 
            key={animationKey}
            className="relative"
            initial="hidden"
            animate="visible"
            variants={titleContainer}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1C1C1C] leading-tight relative">
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
          </motion.div>
          
          {/* Sous-titre avec animation de flottement */}
          <motion.p 
            key={`subtitle-${animationKey}`}
            className="text-lg md:text-xl lg:text-2xl mt-8 text-[#5A5A5A] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            variants={floatAnimation}
            whileInView="animate"
          >
            Cabinet de conseil spécialisé dans le contrôle de projets complexes
          </motion.p>
          
          {/* Ligne décorative */}
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "80px", opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="h-1 bg-gradient-to-r from-[#8B0000] to-[#8B0000]/30 mx-auto mt-10 mb-10 rounded-full"
          ></motion.div>
          
          {/* Bouton CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="mt-8"
          >
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-[#8B0000] to-[#A52A2A] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span>Discuter de votre projet</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </motion.div>
        </div>
        
        {/* Image en bas */}
        <div className="relative w-full pt-16 pb-4 px-4 md:px-8 lg:px-12 flex justify-center items-end mt-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative w-full max-w-7xl z-20"
          >
            {/* Conteneur avec un effet d'ombre portée élégant */}
            <div className="relative overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(139,0,0,0.1)]">
              {/* Bordure subtile */}
              <div className="absolute inset-0 border border-[#8B0000]/10 rounded-xl z-30"></div>
              
              <Image
                src="/images/consulting.png"
                alt="Professionnels en réunion"
                width={1920}
                height={600}
                className="w-full h-auto object-contain max-h-[55vh]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Effet particules - Généré côté client uniquement */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-[#8B0000]"
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
    </section>
  )
} 