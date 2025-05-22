import { Metadata } from 'next'
import { controleCouts } from './data'
import { ControleCoutsClient } from './controle-couts-client'

export const metadata: Metadata = {
    title: 'Contrôle des Coûts - KHEOPS Consulting',
    description: 'Expertise en gestion budgétaire et contrôle des coûts pour vos projets complexes.',
}

export default function ControleCoutsPage()
{
    return <ControleCoutsClient controleCouts={controleCouts} />
} 