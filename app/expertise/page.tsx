'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Tag, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Types pour nos expertises
interface Expertise {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  image: string
  link: string
}

// Données des expertises avec des images plus professionnelles
const expertiseData: Expertise[] = [
  {
    id: 'planification',
    title: 'Planification de Projets',
    description: 'Expertise en planification détaillée, gestion des délais et optimisation des ressources pour garantir le succès de vos projets.',
    category: 'Gestion de Projet',
    tags: ['Planning', 'Ressources', 'Délais', 'Optimisation'],
    image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1',
    link: '/expertise/planification'
  },
  {
    id: 'cout',
    title: 'Contrôle des Coûts',
    description: 'Maîtrise des coûts, analyse budgétaire et optimisation des dépenses pour maximiser la rentabilité de vos projets.',
    category: 'Finance',
    tags: ['Budget', 'Coûts', 'Analyse financière', 'ROI'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    link: '/expertise/controle-couts'
  },
  {
    id: 'risques',
    title: 'Gestion des Risques',
    description: 'Identification, analyse et mitigation des risques pour sécuriser vos projets et garantir leur bon déroulement.',
    category: 'Risk Management',
    tags: ['Risques', 'Analyse', 'Mitigation', 'Sécurité'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3',
    link: '/expertise/gestion-risques'
  },
  {
    id: 'opc',
    title: 'Coordination OPC',
    description: 'Ordonnancement, pilotage et coordination optimisés pour une gestion efficace de vos projets multi-intervenants.',
    category: 'Coordination',
    tags: ['OPC', 'Pilotage', 'Coordination', 'Multi-projets'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    link: '/expertise/coordination-opc'
  }
]

// Composant de carte d'expertise amélioré
function ExpertiseCard({ expertise }: { expertise: Expertise }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={expertise.image}
          alt={expertise.title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <span className="text-sm font-semibold text-[#8B0000]">{expertise.category}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#8B0000] transition-colors">
          {expertise.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {expertise.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {expertise.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full group-hover:bg-[#8B0000]/10 group-hover:text-[#8B0000] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Link
          href={expertise.link}
          className="inline-flex items-center text-[#8B0000] font-medium hover:text-[#700000] transition-colors group-hover:gap-3"
        >
          En savoir plus
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}

export default function ExpertisePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  
  // Obtenir toutes les catégories uniques
  const categories = Array.from(new Set(expertiseData.map(exp => exp.category)))
  
  // Obtenir tous les tags uniques
  const allTags = Array.from(new Set(expertiseData.flatMap(exp => exp.tags)))
  
  // Fonction de recherche
  const handleSearch = () => {
    // La recherche est déjà en temps réel grâce au state
    // Cette fonction pourrait être utilisée pour des fonctionnalités additionnelles
  }
  
  // Filtrer les expertises
  const filteredExpertise = expertiseData.filter(expertise => {
    const matchesSearch = expertise.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         expertise.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || expertise.category === selectedCategory
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.every(tag => expertise.tags.includes(tag))
    
    return matchesSearch && matchesCategory && matchesTags
  })

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* En-tête amélioré */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-1 rounded-full text-[#8B0000] bg-[#8B0000]/10 text-sm font-semibold mb-4">
              Nos domaines d'expertise
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            Notre Expertise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Découvrez nos domaines d'expertise et trouvez les solutions adaptées à vos besoins
          </motion.p>
        </div>

        {/* Barre de recherche et filtres améliorés */}
        <div className="mb-12 space-y-6 bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Recherche avec bouton */}
            <div className="flex-1">
              <div className="relative flex items-center">
                <div className="absolute left-3 text-gray-400">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="Rechercher une expertise..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                />
                <button
                  onClick={handleSearch}
                  className="px-6 py-3 bg-[#8B0000] text-white rounded-r-lg hover:bg-[#700000] transition-colors"
                >
                  Rechercher
                </button>
              </div>
            </div>

            {/* Filtre par catégorie */}
            <div className="w-full md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent appearance-none bg-white"
              >
                <option value="">Toutes les catégories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Tags améliorés */}
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSelectedTags(prev =>
                    prev.includes(tag)
                      ? prev.filter(t => t !== tag)
                      : [...prev, tag]
                  )
                }}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedTags.includes(tag)
                    ? 'bg-[#8B0000] text-white shadow-md transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                <Tag className="w-4 h-4 mr-2" />
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Grille des expertises */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExpertise.map((expertise) => (
            <ExpertiseCard key={expertise.id} expertise={expertise} />
          ))}
        </div>

        {/* Message si aucun résultat */}
        {filteredExpertise.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-white rounded-xl shadow-lg mt-8"
          >
            <p className="text-gray-600 text-lg">
              Aucune expertise ne correspond à vos critères de recherche.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('')
                setSelectedTags([])
              }}
              className="mt-4 text-[#8B0000] font-medium hover:text-[#700000]"
            >
              Réinitialiser les filtres
            </button>
          </motion.div>
        )}
      </div>
    </main>
  )
} 