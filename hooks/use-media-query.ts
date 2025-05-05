'use client'

import { useState, useEffect } from 'react'

/**
 * Un hook personnalisé qui détecte si une media query correspond à l'écran actuel
 * @param query La media query CSS à vérifier (ex: "(min-width: 768px)")
 * @returns Un booléen indiquant si la media query correspond
 */
export function useMediaQuery(query: string): boolean {
  // Par défaut, supposons que le média ne correspond pas (pour le SSR)
  const [matches, setMatches] = useState(false)
  
  useEffect(() => {
    // Créer un MediaQueryList pour la requête
    const media = window.matchMedia(query)
    
    // Définir l'état initial
    setMatches(media.matches)
    
    // Définir un callback pour mettre à jour l'état
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }
    
    // Ajouter le listener
    // Note: La vieille API est pour la compatibilité avec Safari < 14
    if (media.addEventListener) {
      media.addEventListener('change', listener)
    } else {
      // @ts-ignore - pour les anciens navigateurs
      media.addListener(listener)
    }
    
    // Nettoyer au démontage
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', listener)
      } else {
        // @ts-ignore - pour les anciens navigateurs
        media.removeListener(listener)
      }
    }
  }, [query])
  
  return matches
} 