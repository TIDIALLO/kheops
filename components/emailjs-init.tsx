'use client'

import { useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { emailjsConfig } from '@/config/emailjs'

export function EmailJSInit() {
  useEffect(() => {
    if (emailjsConfig.isValid()) {
      emailjs.init(emailjsConfig.publicKey)
    }
  }, [])

  return null
} 