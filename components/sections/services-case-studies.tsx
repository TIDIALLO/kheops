'use client'

import { motion } from 'framer-motion'
import { Building2, Factory, Landmark, Construction, ArrowRight, CheckCircle, Target, Trophy } from 'lucide-react'
import Image from 'next/image'

const caseStudies = [
  {
    id: 'industrie',
    title: 'Projet industriel majeur',
    subtitle: 'Usine de production automobile',
    icon: Factory,
    image: '/images/case-studies/industry.jpg',
    challenge: 'Planification complexe d\'une usine de production avec plus de 1000 activités et coordination de 15 sous-traitants majeurs',
    solution: 'Mise en place d\'un planning détaillé avec analyse Monte-Carlo des risques et système de suivi en temps réel',
    duration: '18 mois',
    budget: '150M€',
    results: [
      'Réduction de 15% des délais initiaux',
      'Économie de 8% sur le budget global',
      'Meilleure coordination des sous-traitants',
      'Zéro accident de travail majeur'
    ],
    tags: ['Industrie', 'Planning', 'Risques', 'OPC']
  },
  {
    id: 'batiment',
    title: 'Grand projet immobilier',
    subtitle: 'Complex résidentiel premium',
    icon: Building2,
    image: '/images/case-studies/building.jpg',
    challenge: 'Coordination de multiples corps d\'état sur un chantier urbain contraint avec des exigences environnementales strictes',
    solution: 'Déploiement d\'une mission OPC avec outils de suivi digitaux et méthodologie Lean Construction',
    duration: '24 mois',
    budget: '80M€',
    results: [
      'Respect des délais malgré la complexité',
      'Zéro conflit majeur entre intervenants',
      'Satisfaction client de 95%',
      'Certification HQE niveau excellent'
    ],
    tags: ['Immobilier', 'OPC', 'Planning', 'Environnement']
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure publique',
    subtitle: 'Station d\'épuration nouvelle génération',
    icon: Landmark,
    image: '/images/case-studies/infrastructure.jpg',
    challenge: 'Maîtrise des coûts sur un projet public à fort enjeu avec des contraintes techniques complexes',
    solution: 'Contrôle budgétaire strict et anticipation des risques avec tableaux de bord temps réel',
    duration: '36 mois',
    budget: '200M€',
    results: [
      'Budget respecté à 99.5%',
      'Identification précoce des déviations',
      'Transparence totale pour les parties prenantes',
      'Innovation technique majeure validée'
    ],
    tags: ['Public', 'Coûts', 'Risques', 'Innovation']
  }
]

export default function ServicesCaseStudies() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#8B0000]/5 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[#8B0000] font-semibold mb-2 inline-block text-sm">Nos succès</span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-3">
            Nos réalisations marquantes
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#8B0000] to-[#8B0000]/30 mx-auto mb-4 rounded-full"></div>
          <p className="text-base text-[#5A5A5A] max-w-2xl mx-auto">
            Découvrez comment notre expertise a permis à nos clients d&apos;atteindre leurs objectifs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
              whileHover={{ y: -3 }}
            >
              {/* Image de couverture avec overlay amélioré */}
              <div className="relative h-44 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 z-20">
                  <motion.div 
                    className="p-1.5 bg-white rounded-full shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <study.icon className="w-4 h-4 text-[#8B0000]" />
                  </motion.div>
                </div>
                {/* Informations clés sur l'image */}
                <div className="absolute bottom-3 left-3 right-3 z-20 text-white">
                  <div className="flex items-center gap-3 text-xs mb-1.5">
                    <div className="flex items-center gap-1">
                      <Target className="w-3 h-3" />
                      <span>{study.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Trophy className="w-3 h-3" />
                      <span>{study.budget}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold leading-tight mb-0.5">{study.title}</h3>
                  <p className="text-xs text-white/80">{study.subtitle}</p>
                </div>
              </div>

              {/* Contenu avec design amélioré */}
              <div className="p-4">
                <div className="flex flex-wrap gap-1 mb-3">
                  {study.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-2 py-0.5 bg-[#8B0000]/5 text-[#8B0000] text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-md border border-gray-100">
                    <h4 className="font-semibold text-[#8B0000] mb-1.5 flex items-center gap-1.5 text-sm">
                      <Target className="w-3.5 h-3.5" />
                      Challenge
                    </h4>
                    <p className="text-xs text-[#5A5A5A] leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div className="bg-[#8B0000]/5 p-3 rounded-md">
                    <h4 className="font-semibold text-[#8B0000] mb-1.5 flex items-center gap-1.5 text-sm">
                      <ArrowRight className="w-3.5 h-3.5" />
                      Solution
                    </h4>
                    <p className="text-xs text-[#5A5A5A] leading-relaxed">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[#8B0000] mb-2 flex items-center gap-1.5 text-sm">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Résultats clés
                    </h4>
                    <ul className="text-xs text-[#5A5A5A] space-y-1">
                      {study.results.map((result, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-center gap-2 p-1.5 hover:bg-gray-50 rounded-md transition-colors"
                          whileHover={{ x: 3 }}
                        >
                          <Construction className="w-3 h-3 text-[#8B0000] flex-shrink-0" />
                          <span className="leading-relaxed">{result}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 