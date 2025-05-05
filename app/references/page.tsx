import { ReferencesSection } from '@/components/sections/references-section'

export const metadata = {
  title: 'Nos Références | KHEOPS Consulting',
  description: 'Découvrez les entreprises qui nous font confiance pour leurs projets les plus ambitieux. Des références prestigieuses dans des secteurs variés.',
}

export default function ReferencesPage() {
  return (
    <main>
      <ReferencesSection isStandalone={true} />
    </main>
  )
} 