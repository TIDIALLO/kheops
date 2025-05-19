'use client'

import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState, useMemo } from 'react'

// Type pour les statistiques
interface Statistic {
  value: number
  suffix: string
  label: string
  description: string
  icon: string
  color: string
}

// Type pour les props de CountUp
interface CountUpProps {
  end: number
  suffix: string
  duration?: number
  color: string
}

// Animation de comptage avec easing
function CountUp({ end, suffix, duration = 2, color }: CountUpProps) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, { 
    once: true, 
    margin: "-100px",
    amount: 0.3
  })
  
  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const easeOutQuad = (x: number): number => 1 - (1 - x) * (1 - x)

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        const easedProgress = easeOutQuad(progress)

        setCount(Math.floor(end * easedProgress))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [end, duration, isInView])

  return (
    <div className="relative inline-flex items-center">
      <span ref={nodeRef} className="tabular-nums text-5xl font-bold" style={{ color }}>
        {count}
      </span>
      <span className="text-2xl font-semibold ml-1" style={{ color }}>
        {suffix}
      </span>
    </div>
  )
}

export function Statistics() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
    layoutEffect: false,
  })

  const opacity = useTransform(scrollYProgress, 
    [0, 0.2, 0.8, 1], 
    [0, 1, 1, 0],
    { clamp: true }
  )
  
  const scale = useTransform(scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8],
    { clamp: true }
  )

  const stats = useMemo(() => [
    { 
      value: 98,
      suffix: "%",
      label: "Taux de satisfaction",
      description: "De nos clients nous recommandent",
      icon: "🎯",
      color: "#2563EB"
    },
    { 
      value: 25,
      suffix: "+",
      label: "Projets gérés",
      description: "Projets accompagnés avec succès",
      icon: "📈",
      color: "#059669"
    },
    { 
      value: 15,
      suffix: "+",
      label: "Années d'expertise",
      description: "D'expérience dans le conseil",
      icon: "⭐",
      color: "#D97706"
    },
    { 
      value: 10,
      suffix: "+",
      label: "Experts",
      description: "Consultants spécialisés",
      icon: "👥",
      color: "#7C3AED"
    }
  ], [])

  return (
    <section 
      ref={containerRef}
      className="py-20 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, #ffffff 0%, #f8fafc 100%),
          radial-gradient(circle at top left, #2563eb08 0%, transparent 50%),
          radial-gradient(circle at bottom right, #05966908 0%, transparent 50%)
        `
      }}
    >
      {/* Optimized background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(45deg, #00000005 25%, transparent 25%),
          linear-gradient(-45deg, #00000005 25%, transparent 25%)
        `,
        backgroundSize: '20px 20px',
        backgroundPosition: '0 0, 0 10px'
      }} />
      
      <motion.div 
        className="container mx-auto px-4 relative"
        style={{ opacity, scale }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notre Impact en Chiffres
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Des résultats concrets qui démontrent notre expertise et notre engagement
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="relative group"
            >
              <div 
                className="p-6 rounded-xl backdrop-blur-[2px] hover:transform hover:scale-[1.02] transition-transform duration-300"
                style={{ 
                  background: `linear-gradient(135deg, ${stat.color}05 0%, ${stat.color}08 100%)`,
                  boxShadow: `0 8px 20px ${stat.color}08`
                }}
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div 
                    className="w-8 h-8 flex items-center justify-center text-lg rounded-lg shadow-md bg-white"
                    style={{ color: stat.color }}
                  >
                    {stat.icon}
                  </div>
                </div>

                <div className="flex flex-col items-center pt-4">
                  <CountUp 
                    end={stat.value} 
                    suffix={stat.suffix} 
                    color={stat.color}
                  />
                  <h3 className="text-base font-semibold text-gray-800 mt-2 mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {stat.description}
                  </p>
                </div>

                {/* Simplified border effect */}
                <div 
                  className="absolute inset-0 border-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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