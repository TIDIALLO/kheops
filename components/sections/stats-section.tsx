'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

// Statistiques de KHEOPS
const stats = [
  {
    value: 150,
    suffix: "+",
    label: "Projets réalisés"
  },
  {
    value: 25,
    suffix: "+",
    label: "Experts certifiés"
  },
  {
    value: 15,
    suffix: "+",
    label: "Années d'expérience"
  },
  {
    value: 98,
    suffix: "%",
    label: "Clients satisfaits"
  }
]

// Couleur de fond rouge moins intense
const softRed = "#800000"; 

export function StatsSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  
  // États pour stocker les valeurs actuelles des compteurs
  const [counters, setCounters] = useState(stats.map(() => 0));
  
  // Animation des compteurs
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      
      // Démarrer l'animation des compteurs
      stats.forEach((stat, index) => {
        const duration = 2000; // Durée de l'animation (2 secondes)
        const finalValue = stat.value;
        const startTime = Date.now();
        
        const updateCounter = () => {
          const elapsedTime = Date.now() - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          
          // Utilisation d'une fonction d'ease-out pour un effet plus naturel
          const easeOutProgress = 1 - Math.pow(1 - progress, 3);
          
          // Calcul de la valeur actuelle
          const currentValue = Math.floor(easeOutProgress * finalValue);
          
          // Mise à jour du compteur
          setCounters(prevCounters => {
            const newCounters = [...prevCounters];
            newCounters[index] = currentValue;
            return newCounters;
          });
          
          // Continuer l'animation jusqu'à atteindre la valeur finale
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        };
        
        requestAnimationFrame(updateCounter);
      });
    }
  }, [isInView, controls]);
  
  return (
    <section 
      ref={ref}
      className="py-14 relative overflow-hidden"
      style={{ 
        background: `linear-gradient(135deg, ${softRed} 0%, #950000 100%)` 
      }}
    >
      {/* Motif de croix en arrière-plan */}
      <div className="absolute inset-0 opacity-15" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M10 10h1v1h-1v-1zm-1 0h1v-1H9v1zm-1-1h1v-1H8v1zm-1 0h1v1H7v-1z'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '20px 20px'
      }}></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/15 shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5, 
                    delay: index * 0.1 
                  } 
                }
              }}
            >
              <div className="relative z-10">
                {/* Effet de brillance subtil */}
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-8 bg-white/20 rounded-full blur-md"></div>
                
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white relative">
                  {counters[index]}{stat.suffix}
                </div>
                
                <div className="text-sm md:text-base text-white/90 font-medium">
                  {stat.label}
                </div>
              </div>
              
              {/* Effet de lumière radiale */}
              <div 
                className="absolute top-0 left-0 right-0 bottom-0 opacity-30"
                style={{
                  background: "radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)"
                }}
              ></div>
              
              {/* Effet de bordure brillante */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-white/50 via-white/30 to-transparent"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 