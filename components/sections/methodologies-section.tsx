'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarRange, TrendingUp, Layers3, FileSpreadsheet, ChevronDown, ChevronUp, 
  Calendar, BarChart2, Database, Table, FileSpreadsheetIcon, Bug, ClipboardList, GitBranch } from 'lucide-react'
import { cn } from '@/lib/utils'

// Structure des techniques et méthodes
const methodologies = [
  {
    id: 'planning',
    title: "Méthodes de planification",
    description: "Codes activités par zone/discipline/Responsabilité",
    icon: CalendarRange,
    color: "#8B0000",
    examples: ["Découpage par zone géographique", "Classification par discipline technique", "Attribution des responsabilités"]
  },
  {
    id: 'control',
    title: "Méthodes de contrôle de projet",
    description: "CPI / SPI / EVM / Productivités",
    icon: TrendingUp,
    color: "#5A5A5A",
    examples: ["Cost Performance Index", "Schedule Performance Index", "Earned Value Management", "Suivi des productivités"]
  },
  {
    id: 'structure',
    title: "Structures de découpage",
    description: "WBS, OBS, CBS, ABS: Work / Organization / Cost / Activity Breakdown Structure",
    icon: Layers3,
    color: "#8B0000",
    examples: ["Découpage hiérarchique des livrables", "Structure organisationnelle", "Répartition des coûts", "Décomposition des activités"]
  }
]

// Données pour les accordéons techniques avancées
const advancedTechniques = [
  {
    id: 'planning',
    title: 'Planification et ordonnancement',
    color: '#8B0000',
    items: [
      'Méthode du chemin critique (CPM)',
      'Diagrammes de Gantt avancés',
      'Planification par vagues successives',
      'Jalons et livrables intermédiaires',
      'Gestion des ressources limitées'
    ]
  },
  {
    id: 'metrics',
    title: 'Métriques et indicateurs',
    color: '#5A5A5A',
    items: [
      'Valeur acquise (EVM)',
      'Analyse des variances',
      'Indicateurs de performance clés (KPI)',
      'Courbes en S et projections',
      'Tableaux de bord de pilotage'
    ]
  },
  {
    id: 'risks',
    title: 'Gestion des risques',
    color: '#8B0000',
    items: [
      'Matrices probabilité-impact',
      'Plan de mitigation',
      'Analyse Monte Carlo',
      'Réserves pour aléas',
      'Registre des risques et opportunités'
    ]
  }
]

const tools = [
  {
    name: 'Primavera P6',
    icon: Calendar,
    description: 'Logiciel professionnel de gestion de projet et de planification',
    category: 'Planning'
  },
  {
    name: 'Microsoft Project',
    icon: Calendar,
    description: 'Solution de gestion de projet intégrée à la suite Microsoft Office',
    category: 'Planning'
  },
  {
    name: 'Power BI',
    icon: BarChart2,
    description: 'Outil de visualisation de données et de business intelligence',
    category: 'Analyse'
  },
  {
    name: 'Tableau',
    icon: Table,
    description: 'Plateforme d\'analyse et de visualisation de données avancée',
    category: 'Analyse'
  },
  {
    name: 'Excel avancé',
    icon: FileSpreadsheetIcon,
    description: 'Tableur avec fonctions avancées pour l\'analyse de données',
    category: 'Analyse'
  },
  {
    name: 'Jira',
    icon: Bug,
    description: 'Outil de suivi de projets et de gestion des tâches',
    category: 'Gestion'
  },
  {
    name: 'Risk Register',
    icon: ClipboardList,
    description: 'Solution spécialisée pour la gestion des risques',
    category: 'Risques'
  },
  {
    name: 'Tilos',
    icon: GitBranch,
    description: 'Logiciel de planification linéaire pour les projets d\'infrastructure',
    category: 'Planning'
  }
]

const AccordionItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="mb-4">
      <motion.button
        onClick={() => onToggle(item.id)}
        className={cn(
          "w-full py-4 px-6 flex justify-between items-center rounded-xl",
          "transition-all duration-300 shadow-sm",
          isOpen 
            ? `bg-[${item.color}] text-white` 
            : `bg-white text-[#1C1C1C] hover:bg-[${item.color}15]`
        )}
        whileHover={{ scale: isOpen ? 1 : 1.01 }}
        style={{ 
          backgroundColor: isOpen ? item.color : 'white',
          color: isOpen ? 'white' : '#1C1C1C',
          borderLeft: `4px solid ${item.color}`
        }}
      >
        <div className="flex items-center gap-3">
          <div 
            className={cn(
              "p-2 rounded-lg",
              isOpen ? "bg-white/20" : `bg-[${item.color}15]`
            )}
            style={{ 
              backgroundColor: isOpen ? 'rgba(255,255,255,0.2)' : `${item.color}20`
            }}
          >
            {item.icon && <item.icon className="w-5 h-5" />}
          </div>
          <span className="font-semibold text-lg">{item.title}</span>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div 
              className="p-6 bg-white border border-t-0 rounded-b-xl shadow-inner"
              style={{ borderColor: `${item.color}30` }}
            >
              <p className="mb-4 text-[#5A5A5A] font-medium">{item.description}</p>
              <div className="space-y-3">
                {item.items?.map((example, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-[#5A5A5A]">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function MethodologiesSection() {
  const [openMethod, setOpenMethod] = useState('planning')
  const [openTechnique, setOpenTechnique] = useState('planning')

  const toggleMethod = (id) => {
    setOpenMethod(openMethod === id ? null : id)
  }

  const toggleTechnique = (id) => {
    setOpenTechnique(openTechnique === id ? null : id)
  }

  return (
    <section id="methodologies" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
            Nos méthodologies et techniques
          </h2>
          <div className="w-20 h-1 bg-[#8B0000] mx-auto mb-6"></div>
          <p className="text-lg text-[#5A5A5A] max-w-3xl mx-auto">
            Nous utilisons des approches éprouvées et des techniques avancées pour garantir le succès de vos projets
          </p>
        </motion.div>

        {/* Section des méthodologies principales */}
        <div className="max-w-4xl mx-auto mb-16">
          {methodologies.map((method) => {
            // Adapte les données pour l'accordéon
            const methodWithItems = {
              ...method,
              items: method.examples
            }
            
            return (
              <AccordionItem 
                key={method.id}
                item={methodWithItems}
                isOpen={openMethod === method.id}
                onToggle={toggleMethod}
              />
            )
          })}
        </div>

        {/* Section des techniques avancées */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-lg bg-[#8B0000]20">
              <FileSpreadsheet className="w-6 h-6 text-[#8B0000]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#1C1C1C]">
              Techniques avancées de gestion de projets
            </h3>
          </div>
          
          <div className="mb-12">
            {advancedTechniques.map((technique) => (
              <AccordionItem 
                key={technique.id}
                item={technique}
                isOpen={openTechnique === technique.id}
                onToggle={toggleTechnique}
              />
            ))}
          </div>

          {/* Outils et logiciels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md p-8 border-l-4 border-[#8B0000]"
          >
            <h4 className="text-xl font-semibold text-[#1C1C1C] mb-6">
              Outils et logiciels spécialisés
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0px 8px 20px rgba(0,0,0,0.1)'
                  }}
                  className="relative p-6 rounded-xl shadow-sm border transition-all duration-200 overflow-hidden group"
                  style={{ 
                    borderColor: idx % 2 === 0 ? 'rgba(139, 0, 0, 0.1)' : 'rgba(90, 90, 90, 0.1)',
                    background: idx % 2 === 0 
                      ? 'linear-gradient(135deg, rgba(139, 0, 0, 0.03) 0%, rgba(255, 255, 255, 0.9) 100%)' 
                      : 'linear-gradient(135deg, rgba(90, 90, 90, 0.03) 0%, rgba(255, 255, 255, 0.9) 100%)'
                  }}
                >
                  {/* Cercle décoratif en arrière-plan */}
                  <div 
                    className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full opacity-10 transition-all duration-300 group-hover:scale-150 group-hover:opacity-20"
                    style={{ 
                      background: idx % 2 === 0 
                        ? 'radial-gradient(circle, rgba(139, 0, 0, 0.3) 0%, rgba(139, 0, 0, 0) 70%)' 
                        : 'radial-gradient(circle, rgba(90, 90, 90, 0.3) 0%, rgba(90, 90, 90, 0) 70%)'
                    }}
                  ></div>

                  {/* Lignes décoratives en arrière-plan */}
                  <div 
                    className="absolute top-0 left-0 w-full h-full opacity-5"
                    style={{ 
                      backgroundImage: `linear-gradient(45deg, ${idx % 2 === 0 ? '#8B0000' : '#5A5A5A'} 25%, transparent 25%), 
                                      linear-gradient(-45deg, ${idx % 2 === 0 ? '#8B0000' : '#5A5A5A'} 25%, transparent 25%)`,
                      backgroundSize: '8px 8px'
                    }}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div 
                        className="p-2.5 rounded-lg"
                        style={{ 
                          background: idx % 2 === 0 
                            ? 'linear-gradient(135deg, rgba(139, 0, 0, 0.15) 0%, rgba(139, 0, 0, 0.05) 100%)'
                            : 'linear-gradient(135deg, rgba(90, 90, 90, 0.15) 0%, rgba(90, 90, 90, 0.05) 100%)'
                        }}
                      >
                        <tool.icon className="w-5 h-5" style={{ 
                          color: idx % 2 === 0 ? '#8B0000' : '#5A5A5A'
                        }} />
                      </div>
                      <h5 className="font-semibold text-[#1C1C1C]">{tool.name}</h5>
                    </div>
                    <p className="text-sm text-[#5A5A5A] mb-3">{tool.description}</p>
                    <span 
                      className="text-xs font-medium px-3 py-1.5 rounded-full inline-block"
                      style={{ 
                        background: idx % 2 === 0 
                          ? 'linear-gradient(135deg, rgba(139, 0, 0, 0.1) 0%, rgba(139, 0, 0, 0.05) 100%)'
                          : 'linear-gradient(135deg, rgba(90, 90, 90, 0.1) 0%, rgba(90, 90, 90, 0.05) 100%)',
                        color: idx % 2 === 0 ? '#8B0000' : '#5A5A5A'
                      }}
                    >
                      {tool.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 