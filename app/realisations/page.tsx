import { Metadata } from 'next'
import { realisations } from './data'
import { RealisationsClient } from './realisations-client'

export const metadata: Metadata = {
  title: 'Nos Réalisations - KHEOPS Consulting',
  description: 'Découvrez nos projets marquants dans le contrôle de projets complexes.',
}

export default function RealisationsPage() {
  return <RealisationsClient realisations={realisations} />
} 