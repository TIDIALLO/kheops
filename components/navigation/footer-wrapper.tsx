'use client'

import { useEffect, useState } from 'react'
import { Footer } from './footer'

export function FooterWrapper() {
  const [isLastSection, setIsLastSection] = useState(false)
  const [footerHeight, setFooterHeight] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Fonction pour vérifier si nous sommes dans la dernière section
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      
      // Si on est suffisamment proche de la fin du document
      const scrollThreshold = 200
      const isNearBottom = documentHeight - (scrollTop + windowHeight) < scrollThreshold
      
      // Vérification alternative basée sur l'ID de la section
      const contactSection = document.getElementById('contact')
      let isContactVisible = false
      
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect()
        isContactVisible = rect.top < windowHeight * 0.5
      }
      
      // On considère qu'on est dans la dernière section si l'une des conditions est vraie
      if (isNearBottom || isContactVisible) {
        if (!isLastSection) {
          setIsLastSection(true)
          // Délai d'animation pour la visibilité du footer
          setTimeout(() => {
            setIsVisible(true)
          }, 100)
        }
      } else {
        setIsVisible(false)
        // Délai pour masquer le footer après la fin de l'animation
        setTimeout(() => {
          setIsLastSection(false)
        }, 500)
      }
    }

    // Mesurer la hauteur du footer pour appliquer un padding-bottom au body
    const updateFooterHeight = () => {
      const footer = document.querySelector('footer')
      if (footer) {
        const height = footer.offsetHeight
        setFooterHeight(height)
        if (isLastSection) {
          document.body.style.paddingBottom = `${height}px`
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', updateFooterHeight)
    
    // Appels initiaux
    handleScroll()
    
    // Léger délai pour s'assurer que le footer est bien rendu
    setTimeout(updateFooterHeight, 500)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateFooterHeight)
      document.body.style.paddingBottom = '0'
    }
  }, [isLastSection])

  // Si on ne doit pas montrer le footer du tout
  if (!isLastSection) return null

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40 transition-all duration-500"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        opacity: isVisible ? 1 : 0
      }}
    >
      <Footer />
    </div>
  )
} 