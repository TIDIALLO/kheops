'use client'

import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// Type pour les statistiques
interface Statistic {
  value: number
  suffix: string
  label: string
  description: string
  icon: string
  color: string
}

// Animation de comptage avec easing
function CountUp({ end, suffix, duration = 2.5, color }) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" })
  
  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4)

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        const easedProgress = easeOutQuart(progress)

        setCount(Math.floor(end * easedProgress))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }
  }, [end, duration, isInView])

  return (
    <div className="relative inline-flex items-center">
      <span ref={nodeRef} className="tabular-nums text-6xl font-bold" style={{ color }}>
        {count}
      </span>
      <span className="text-3xl font-semibold ml-1" style={{ color }}>
        {suffix}
      </span>
    </div>
  )
}

export function Statistics() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const stats: Statistic[] = [
    { 
      value: 98,
      suffix: "%",
      label: "Taux de satisfaction",
      description: "De nos clients nous recommandent",
      icon: "🎯",
      color: "#2563EB" // Bleu
    },
    { 
      value: 25,
      suffix: "+",
      label: "Projets gérés",
      description: "Projets accompagnés avec succès",
      icon: "📈",
      color: "#059669" // Vert
    },
    { 
      value: 5,
      suffix: "+",
      label: "Années d'expertise",
      description: "D'expérience dans le conseil",
      icon: "⭐",
      color: "#D97706" // Orange
    },
    { 
      value: 10,
      suffix: "+",
      label: "Experts",
      description: "Consultants spécialisés",
      icon: "👥",
      color: "#7C3AED" // Violet
    }
  ]

  return (
    <section 
      ref={containerRef}
      className="py-24 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, #ffffff 0%, #f8fafc 100%),
          radial-gradient(circle at top left, #2563eb10 0%, transparent 50%),
          radial-gradient(circle at bottom right, #05966910 0%, transparent 50%)
        `
      }}
    >
      {/* Motif de fond moderne */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(45deg, #00000005 25%, transparent 25%),
          linear-gradient(-45deg, #00000005 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #00000005 75%),
          linear-gradient(-45deg, transparent 75%, #00000005 75%)
        `,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
      }} />
      
      <motion.div 
        className="container mx-auto px-4 relative"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre Impact en Chiffres
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des résultats concrets qui démontrent notre expertise et notre engagement dans la réussite de vos projets
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.21, 0.45, 0.27, 0.99]
              }}
              className="relative group"
            >
              <div 
                className="p-6 rounded-xl transition-all duration-500 backdrop-blur-sm hover:transform hover:scale-105"
                style={{ 
                  background: `linear-gradient(135deg, ${stat.color}05 0%, ${stat.color}10 100%)`,
                  boxShadow: `0 10px 30px ${stat.color}10`
                }}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div 
                    className="w-10 h-10 flex items-center justify-center text-xl rounded-lg shadow-md bg-white"
                    style={{ color: stat.color }}
                  >
                    {stat.icon}
                  </div>
                </div>

                <div className="flex flex-col items-center pt-6">
                  <CountUp 
                    end={stat.value} 
                    suffix={stat.suffix} 
                    color={stat.color}
                  />
                  <h3 className="text-lg font-semibold text-gray-800 mt-3 mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    {stat.description}
                  </p>
                </div>

                {/* Effet de bordure animée */}
                <div 
                  className="absolute inset-0 border-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ borderColor: stat.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 