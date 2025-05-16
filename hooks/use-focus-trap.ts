import { useEffect, useRef } from 'react'

export function useFocusTrap(isActive: boolean = true) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isActive) return

    const element = elementRef.current
    if (!element) return

    // Liste des éléments focusables
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstFocusable = focusableElements[0] as HTMLElement
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement

    // Sauvegarder l'élément actuellement focus
    const previousActiveElement = document.activeElement

    // Focus le premier élément
    firstFocusable?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      // Shift + Tab
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault()
          lastFocusable?.focus()
        }
      }
      // Tab
      else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault()
          firstFocusable?.focus()
        }
      }
    }

    // Ajouter les event listeners
    element.addEventListener('keydown', handleKeyDown)

    return () => {
      element.removeEventListener('keydown', handleKeyDown)
      // Restaurer le focus
      if (previousActiveElement instanceof HTMLElement) {
        previousActiveElement.focus()
      }
    }
  }, [isActive])

  return elementRef
} 