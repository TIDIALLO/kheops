'use client'

import { motion } from 'framer-motion'
import { Rocket, Factory, LineChart } from 'lucide-react'
import Image from 'next/image'

// Études de cas des projets KHEOPS
const caseStudies = [
  {
    id: 'lucy',
    title: 'Projet EPC LUCY 2.0',
    subtitle: 'Province SUD de GORO, NOUVELLE CALÉDONIE',
    icon: Factory,
    image: '/images/case-studies/lucy.jpg',
    imagePosition: 'center center',
    challenge: 'Construction de deux usines d\'épaississement et d\'assèchement des résidus d\'exploitation',
    solution: 'Réalisation des activités de planification et de contrôle de projet',
    duration: 'En cours',
    budget: '600M€+',
    results: [
      'Maîtrise des délais',
      'Contrôle budgétaire rigoureux',
      'Coordination multi-équipes',
      'Gestion des risques adaptée aux contraintes locales'
    ],
    client: 'Prony Resources New Caledonia',
    sector: 'Industrie minière',
    tags: ['Planification', 'Contrôle', 'Industrie', 'International']
  },
  {
    id: 'acatbs',
    title: 'Projet ACATBS',
    subtitle: 'Dakar, SÉNÉGAL',
    icon: LineChart,
    image: '/images/case-studies/ACATBS-Sar.png',
    imagePosition: 'center 25%',
    hasLogo: true,
    challenge: 'Accroître de 30% la capacité de traitement du pétrole brut en provenance du champ SANGOMAR',
    solution: 'Planification des travaux neufs GREENFIELD et des travaux BROWFIELD de raccordement tuyauterie',
    duration: 'En cours',
    budget: 'Confidentiel',
    results: [
      'Coordination génie civil et charpente',
      'Gestion tuyauterie métallique',
      'Supervision électricité et instrumentation',
      'Maîtrise des raccordements pendant la phase Arrêt métal'
    ],
    client: 'Société Africaine de Raffinage',
    sector: 'Énergie Pétrole et Gaz',
    tags: ['Planification', 'Coordination', 'Énergie', 'Travaux']
  },
  {
    id: 'papua',
    title: 'Projet PAPUA LNG',
    subtitle: 'Paris La défense, FRANCE',
    icon: Rocket,
    image: '/images/case-studies/PAPUA LNG.png',
    imagePosition: 'center 20%',
    hasLogo: true,
    challenge: 'Relier les champs gaziers d\'Elk et Antelope à une unité de traitement et de liquéfaction à Port Moresby',
    solution: 'Réalisation du planning FEED phase 2, du reporting et de la gestion des risques planning',
    duration: 'En cours',
    budget: 'Confidentiel',
    results: [
      'Coordination d\'un gazoduc de 320km',
      'Production estimée à 5.4 millions de tonnes/an',
      'Collaboration internationale avec ExxonMobil',
      'Gestion des risques planning optimisée'
    ],
    client: 'TOTAL ENERGIES',
    sector: 'Énergie Pétrole et Gaz',
    tags: ['Planning', 'Reporting', 'Risques', 'International']
  }
]

export default function ServicesCaseStudies() {
  return (
    <section className="py-20 relative">
      {/* Image d'arrière-plan avec overlay */}
      <div className="absolute inset-0 z-0">
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay sombre */}
        <Image 
          src="/images/backgrounds/achievements-bg.jpg" 
          alt="Fond réalisations" 
          fill 
          className="object-cover" 
          priority 
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-white font-semibold mb-2 inline-block text-sm px-4 py-1 bg-[#8B0000]/80 rounded-full">Nos succès</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 mt-3">
            Nos réalisations marquantes
          </h2>
          <div className="w-20 h-0.5 bg-white mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Découvrez comment notre expertise a permis à nos clients d&apos;atteindre leurs objectifs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => {
            const Icon = study.icon
            return (
              <motion.div 
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl overflow-hidden border border-white/20 shadow-xl group hover:scale-[1.02] transition-transform duration-300 h-[600px] flex flex-col"
              >
                {/* Image du projet avec overlay dégradé */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  {/* Bordure subtile en haut pour souligner les logos */}
                  {study.hasLogo && (
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/30 z-20"></div>
                  )}
                  
                  {/* Overlay optimisé pour faire ressortir les logos */}
                  <div className={`absolute inset-0 ${study.hasLogo ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent' : 'bg-gradient-to-t from-black/80 via-black/40 to-black/10'} z-10`} />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="bg-[#8B0000] p-1.5 rounded-lg">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight">{study.title}</h3>
                    </div>
                    <p className="text-white/95 text-xs font-medium">{study.subtitle}</p>
                  </div>
                  <Image 
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    style={study.imagePosition ? { objectPosition: study.imagePosition, objectFit: 'cover' } : { objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                    quality={95}
                  />
                </div>

                {/* Contenu du projet */}
                <div className="p-5 bg-[#1a1a1a] flex-grow flex flex-col">
                  {/* Client et secteur */}
                  <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-3">
                    <div className="flex-1">
                      <p className="text-white/70 text-xs uppercase font-semibold tracking-wider mb-1">Client</p>
                      <p className="font-medium text-xs text-white">{study.client}</p>
                    </div>
                    <div className="flex-1 text-right">
                      <p className="text-white/70 text-xs uppercase font-semibold tracking-wider mb-1">Secteur</p>
                      <p className="font-medium text-xs text-white">{study.sector}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <p className="text-white/90 text-xs leading-relaxed font-medium min-h-[48px]">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4">
                    <p className="text-white/70 text-xs uppercase font-semibold tracking-wider mb-1">Notre intervention</p>
                    <p className="text-white text-xs leading-relaxed min-h-[48px]">{study.solution}</p>
                  </div>

                  {/* Résultats clés */}
                  <div className="mt-auto pt-4">
                    <p className="text-white/70 text-xs uppercase font-semibold tracking-wider mb-2">Points clés</p>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="text-white/90 text-xs flex items-start">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#8B0000] mt-1 mr-1.5 flex-shrink-0"></span>
                          <span className="font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 