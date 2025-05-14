'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Import dynamique côté client uniquement
const ProfessionalBackground = dynamic(
  () => import('@/components/ui/professional-background').then(mod => mod.ProfessionalBackground),
  { ssr: false }
)

export function BackgroundWrapper() {
  return (
    <Suspense fallback={
      <div 
        className="fixed inset-0 overflow-hidden z-[-1]" 
        style={{ backgroundColor: "#f9f5f5" }}
      />
    }>
      <ProfessionalBackground />
    </Suspense>
  )
} 