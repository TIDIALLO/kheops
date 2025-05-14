'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useIsMounted } from '@/hooks/use-is-mounted'

// Palette de couleurs
const colors = {
  primary: "#8B0000", // Rouge bordeaux principal
  primaryLight: "#cb0000", // Rouge bordeaux plus clair
  dark: "#600000", // Rouge foncé
  light: "#f9f5f5", // Fond très légèrement teinté
  white: "#ffffff", // Blanc
}

type BackgroundCircle = {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  color: string;
  opacity: number;
}

export function ProfessionalBackground() {
  const isMounted = useIsMounted()
  const [circles, setCircles] = useState<BackgroundCircle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Créer les cercles en arrière-plan
  useEffect(() => {
    if (!isMounted || !containerRef.current) return
    
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }
    }
    
    // Appel initial
    updateDimensions()
    
    // Redimensionnement
    window.addEventListener('resize', updateDimensions)
    
    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [isMounted])

  // Générer les cercles lorsque les dimensions changent
  useEffect(() => {
    if (!isMounted || dimensions.width === 0 || dimensions.height === 0) return
    
    const newCircles: BackgroundCircle[] = []
    
    // Cercles principaux - moins nombreux pour éviter les problèmes de performance
    for (let i = 0; i < 5; i++) {
      newCircles.push({
        id: i,
        size: Math.random() * 400 + 300, // Cercles larges
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        delay: Math.random() * 1,
        duration: 45, // Mouvement lent mais fixe
        color: i % 2 === 0 ? colors.primary : colors.primaryLight,
        opacity: 0.03 // Opacité fixe pour éviter les calculs
      })
    }
    
    // Cercles secondaires - limités en nombre
    for (let i = 0; i < 8; i++) {
      newCircles.push({
        id: i + 5,
        size: Math.random() * 150 + 50, // Cercles plus petits
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        delay: Math.random() * 1,
        duration: 40, // Mouvement lent mais fixe
        color: i % 3 === 0 ? colors.dark : colors.primary,
        opacity: 0.02 // Opacité fixe pour éviter les calculs
      })
    }
    
    setCircles(newCircles)
  }, [dimensions, isMounted])

  // Rendu côté client uniquement
  if (!isMounted) {
    return (
      <div 
        className="fixed inset-0 overflow-hidden z-[-1]"
        style={{ backgroundColor: colors.light }}
      ></div>
    )
  }

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden z-[-1]"
      style={{ backgroundColor: colors.light }}
    >
      {/* Dégradé principal */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 20%, ${colors.white} 0%, ${colors.light} 70%)`,
        }}
      ></div>
      
      {/* Effet de grain simplifié */}
      <div className="absolute inset-0 opacity-[0.02] bg-noise"></div>
      
      {/* Cercles animés en arrière-plan - simplifié */}
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          className="absolute rounded-full"
          initial={{ 
            x: circle.x, 
            y: circle.y,
            opacity: 0 
          }}
          animate={{ 
            x: [circle.x, circle.x + 100, circle.x - 50, circle.x],
            y: [circle.y, circle.y - 50, circle.y + 100, circle.y],
            opacity: circle.opacity
          }}
          transition={{
            duration: circle.duration,
            ease: "linear",
            delay: circle.delay,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            width: circle.size,
            height: circle.size,
            backgroundColor: circle.color,
            filter: 'blur(80px)',
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
      
      {/* Overlay simplifié */}
      <div className="absolute inset-0 bg-white/40"></div>
    </div>
  )
} 