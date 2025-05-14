'use client'

import { useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { emailjsConfig } from '@/config/emailjs'

export function EmailJSInit() {
  useEffect(() => {
    try {
      // S'assurer que la clé n'est pas vide
      if (!emailjsConfig.publicKey || emailjsConfig.publicKey === 'your_public_key_here') {
        console.error('EmailJS: Clé publique non configurée correctement')
        return
      }
      
      // Initialiser EmailJS avec la clé publique
      emailjs.init(emailjsConfig.publicKey)
      
      console.log('EmailJS initialisé avec succès:', {
        serviceId: emailjsConfig.serviceId,
        templateId: emailjsConfig.templateId,
        publicKeyPrefix: emailjsConfig.publicKey.substring(0, 5) + '...'
      })
    } catch (error) {
      console.error('Erreur lors de l\'initialisation d\'EmailJS:', error)
    }
  }, [])

  return null
} 