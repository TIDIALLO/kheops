import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { secteurs, SecteurId } from '../data'
import { SecteurClient } from './secteur-client'

// Cette fonction indique à Next.js quelles pages générer statiquement
export async function generateStaticParams()
{
  const ids = Object.keys(secteurs)
  return ids.map((id) => ({
    id,
  }))
}

// Fonction pour générer les métadonnées de la page
export function generateMetadata({ params }: { params: { id: string } }): Metadata
{
  const secteur = secteurs[params.id as SecteurId]

  if (!secteur) {
    return {
      title: 'Secteur non trouvé',
      description: 'Le secteur demandé n\'existe pas.'
    }
  }

  return {
    title: `${secteur.titre} - KHEOPS Consulting`,
    description: secteur.description,
  }
}

export default function SecteurPage({ params }: { params: { id: string } })
{
  const { id } = params

  // Assurer que l'id est un type valide avant de l'utiliser
  if (!(id in secteurs)) {
    notFound()
  }

  // Utiliser une assertion de type ici car on a déjà validé l'id
  const secteur = secteurs[id as keyof typeof secteurs]

  return <SecteurClient secteur={secteur} />
} 