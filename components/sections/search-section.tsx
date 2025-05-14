'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, X, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { services, secteurs, competences, Service } from '@/data/services-data'
import { ServiceCard } from '@/components/service-card'

export function SearchSection() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSecteurs, setSelectedSecteurs] = useState<string[]>([])
  const [selectedCompetences, setSelectedCompetences] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [filteredServices, setFilteredServices] = useState<Service[]>(services)
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  // Extraire les catégories uniques
  const categories = Array.from(new Set(services.map(service => service.category)))

  // Filtrer les services en fonction des critères
  useEffect(() => {
    let results = services

    // Filtre par terme de recherche
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      results = results.filter(
        service => 
          service.title.toLowerCase().includes(term) || 
          service.description.toLowerCase().includes(term) ||
          service.tags.some(tag => tag.toLowerCase().includes(term))
      )
    }

    // Filtre par secteurs
    if (selectedSecteurs.length > 0) {
      results = results.filter(
        service => service.secteurs.some(secteur => selectedSecteurs.includes(secteur))
      )
    }

    // Filtre par compétences
    if (selectedCompetences.length > 0) {
      results = results.filter(
        service => service.competences.some(comp => selectedCompetences.includes(comp))
      )
    }

    // Filtre par catégories
    if (selectedCategories.length > 0) {
      results = results.filter(
        service => selectedCategories.includes(service.category)
      )
    }

    setFilteredServices(results)
  }, [searchTerm, selectedSecteurs, selectedCompetences, selectedCategories])

  // Gestion des filtres
  const toggleSecteur = (secteurId: string) => {
    setSelectedSecteurs(prev => 
      prev.includes(secteurId) 
        ? prev.filter(id => id !== secteurId) 
        : [...prev, secteurId]
    )
  }

  const toggleCompetence = (competenceId: string) => {
    setSelectedCompetences(prev => 
      prev.includes(competenceId) 
        ? prev.filter(id => id !== competenceId) 
        : [...prev, competenceId]
    )
  }

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    )
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedSecteurs([])
    setSelectedCompetences([])
    setSelectedCategories([])
  }

  const hasActiveFilters = searchTerm || selectedSecteurs.length > 0 || selectedCompetences.length > 0 || selectedCategories.length > 0

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-[#f9f5f5] to-[#f7f2f2] relative">
      {/* Motif de points en arrière-plan */}
      <div className="absolute inset-0 opacity-10 z-0" 
        style={{ 
          backgroundImage: `radial-gradient(#800000 0.5px, transparent 0.5px)`, 
          backgroundSize: '18px 18px'
        }}>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block p-2 px-4 rounded-full bg-[#800000]/10 text-[#800000] font-medium text-sm mb-4">
            <Search className="inline-block mr-2 h-4 w-4" /> Moteur de recherche KHEOPS
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#800000] to-[#950000] text-transparent bg-clip-text"
          >
            Trouvez le service adapté à vos besoins
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#5A5A5A] max-w-2xl mx-auto"
          >
            Filtrez par secteur d&apos;activité, type de service ou compétence pour découvrir comment KHEOPS Consulting peut vous accompagner
          </motion.p>
        </div>

        {/* Mots-clés populaires */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          <span className="text-sm text-[#5A5A5A] mr-2 self-center">Recherches populaires :</span>
          {['Planning', 'Coûts', 'Risques', 'OPC', 'Énergie', 'Construction'].map((keyword) => (
            <button
              key={keyword}
              onClick={() => setSearchTerm(keyword)}
              className="px-3 py-1 text-sm rounded-full bg-white shadow-sm border border-[#800000]/10 hover:bg-[#800000]/5 hover:border-[#800000]/30 transition-colors"
            >
              {keyword}
            </button>
          ))}
        </motion.div>

        {/* Barre de recherche et filtres */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5A5A5A]" size={20} />
              <input
                type="text"
                placeholder="Rechercher un service, une expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-[#800000]/10 focus:border-[#800000]/30 focus:outline-none transition-colors"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#5A5A5A] hover:text-[#800000]"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            
            <button
              onClick={() => {
                // Cette fonction serait utilisée pour déclencher la recherche
                // Dans notre cas, la recherche est déjà en temps réel avec l'useEffect
              }}
              className="hidden md:flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#800000] to-[#950000] text-white rounded-lg hover:shadow-md transition-all hover:from-[#700000] hover:to-[#850000] min-w-[120px]"
            >
              <Search className="mr-2" size={18} />
              <span>Rechercher</span>
            </button>
            
            {/* Bouton de recherche mobile */}
            <div className="w-full md:hidden flex justify-between space-x-2">
              <button
                onClick={() => {
                  // Cette fonction serait utilisée pour déclencher la recherche
                  // Dans notre cas, la recherche est déjà en temps réel avec l'useEffect
                }}
                className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-[#800000] to-[#950000] text-white rounded-lg hover:shadow-md transition-all hover:from-[#700000] hover:to-[#850000] flex-1"
              >
                <Search className="mr-2" size={18} />
                <span>Rechercher</span>
              </button>
              
              <button 
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors ${
                  hasActiveFilters 
                    ? 'bg-[#800000] text-white hover:bg-[#600000]'
                    : 'bg-[#f0f0f0] text-[#5A5A5A] hover:bg-[#e0e0e0]'
                }`}
              >
                <Filter size={18} />
                <span>Filtres</span>
                {hasActiveFilters && (
                  <span className="inline-flex items-center justify-center w-6 h-6 ml-1 text-xs font-semibold text-white bg-[#950000] rounded-full">
                    {selectedSecteurs.length + selectedCompetences.length + selectedCategories.length + (searchTerm ? 1 : 0)}
                  </span>
                )}
              </button>
            </div>
            
            <button 
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className={`hidden md:flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors ${
                hasActiveFilters 
                  ? 'bg-[#800000] text-white hover:bg-[#600000]'
                  : 'bg-[#f0f0f0] text-[#5A5A5A] hover:bg-[#e0e0e0]'
              }`}
            >
              <Filter size={18} />
              <span>Filtres</span>
              {hasActiveFilters && (
                <span className="inline-flex items-center justify-center w-6 h-6 ml-1 text-xs font-semibold text-white bg-[#950000] rounded-full">
                  {selectedSecteurs.length + selectedCompetences.length + selectedCategories.length + (searchTerm ? 1 : 0)}
                </span>
              )}
            </button>
            {hasActiveFilters && (
              <button 
                onClick={clearFilters}
                className="text-[#800000] hover:text-[#600000] font-medium flex items-center gap-1 transition-colors"
              >
                <X size={16} />
                <span>Effacer tout</span>
              </button>
            )}
          </div>

          {/* Panneaux de filtres */}
          {isFiltersOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 pt-4 border-t border-gray-200"
            >
              {/* Filtres par secteur */}
              <div>
                <h3 className="font-semibold text-[#1C1C1C] mb-3">Secteurs d&apos;activité</h3>
                <div className="space-y-2">
                  {secteurs.map((secteur) => (
                    <button
                      key={secteur.id}
                      onClick={() => toggleSecteur(secteur.id)}
                      className={`flex items-center gap-2 w-full rounded-lg px-3 py-2 text-left transition-colors ${
                        selectedSecteurs.includes(secteur.id)
                          ? 'bg-[#800000]/10 text-[#800000]'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <secteur.icon size={18} className={selectedSecteurs.includes(secteur.id) ? 'text-[#800000]' : 'text-[#5A5A5A]'} />
                      <span>{secteur.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtres par compétence */}
              <div>
                <h3 className="font-semibold text-[#1C1C1C] mb-3">Compétences</h3>
                <div className="space-y-2">
                  {competences.map((competence) => (
                    <button
                      key={competence.id}
                      onClick={() => toggleCompetence(competence.id)}
                      className={`flex items-center gap-2 w-full rounded-lg px-3 py-2 text-left transition-colors ${
                        selectedCompetences.includes(competence.id)
                          ? 'bg-[#800000]/10 text-[#800000]'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <competence.icon size={18} className={selectedCompetences.includes(competence.id) ? 'text-[#800000]' : 'text-[#5A5A5A]'} />
                      <span>{competence.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtres par catégorie */}
              <div>
                <h3 className="font-semibold text-[#1C1C1C] mb-3">Catégories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`flex items-center gap-2 w-full rounded-lg px-3 py-2 text-left transition-colors ${
                        selectedCategories.includes(category)
                          ? 'bg-[#800000]/10 text-[#800000]'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <span
                        className={`w-3 h-3 rounded-full ${
                          category === 'Contrôle de projets' ? 'bg-[#800000]' :
                          category === 'Gestion des Ressources' ? 'bg-[#9c6644]' :
                          'bg-[#0066a2]'
                        }`}
                      ></span>
                      <span>{category}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Résultats */}
        <div className="mb-8">
          <p className="text-[#5A5A5A] mb-6">
            {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} trouvé{filteredServices.length !== 1 ? 's' : ''}
          </p>

          {filteredServices.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl shadow-sm">
              <Image
                src="/images/placeholder-logo.svg"
                alt="Aucun résultat"
                width={80}
                height={80}
                className="mx-auto mb-4 opacity-30"
              />
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-2">Aucun service ne correspond à vos critères</h3>
              <p className="text-[#5A5A5A] mb-4">Essayez de modifier vos filtres ou contactez-nous directement.</p>
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-[#800000] text-white rounded-lg hover:bg-[#600000] transition-colors inline-flex items-center gap-2"
              >
                <X size={16} />
                <span>Réinitialiser les filtres</span>
              </button>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </motion.div>
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-[#800000] to-[#950000] rounded-xl p-8 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Vous ne trouvez pas ce que vous cherchez ?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Notre équipe d&apos;experts est à votre disposition pour vous aider à identifier la solution adaptée à vos besoins spécifiques.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#800000] font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span>Contactez-nous</span>
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 