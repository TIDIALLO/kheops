'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

// Les données sont maintenant directement dans la fonction pour éviter l'erreur de linter
export function ExpertiseDetailsSection() {
  const [activeArea, setActiveArea] = useState<number | null>(null)

  return (
    <section id="expertise-details" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#8B0000] text-center mb-16"
        >
          Notre expertise en quelques mots
        </motion.h2>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 max-w-5xl mx-auto">
          {/* Diagramme de Venn interactif */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-[400px] h-[400px] flex-shrink-0"
          >
            {/* Cercles du diagramme de Venn */}
            <div className="relative w-full h-full">
              {/* Contrôle de projets - cercle jaune */}
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                className={`absolute w-[220px] h-[220px] rounded-full ${
                  activeArea === 1 ? 'bg-yellow-400' : 'bg-yellow-300'
                } top-[50px] left-[50px] flex items-center justify-center text-center cursor-pointer transition-colors duration-300 shadow-lg z-10`}
                onClick={() => setActiveArea(activeArea === 1 ? null : 1)}
              >
                <p className="font-bold text-lg px-4">Contrôle de projets</p>
              </motion.div>

              {/* Gestion des Ressources - cercle bleu clair */}
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                className={`absolute w-[220px] h-[220px] rounded-full ${
                  activeArea === 2 ? 'bg-blue-400' : 'bg-blue-300'
                } top-[50px] right-[50px] flex items-center justify-center text-center cursor-pointer transition-colors duration-300 shadow-lg z-20`}
                onClick={() => setActiveArea(activeArea === 2 ? null : 2)}
              >
                <p className="font-bold text-lg px-4">Gestion des Ressources</p>
              </motion.div>

              {/* Reporting - cercle bleu foncé */}
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                className={`absolute w-[220px] h-[220px] rounded-full ${
                  activeArea === 3 ? 'bg-blue-800' : 'bg-blue-700'
                } text-white bottom-[30px] left-[90px] flex items-center justify-center text-center cursor-pointer transition-colors duration-300 shadow-lg z-30`}
                onClick={() => setActiveArea(activeArea === 3 ? null : 3)}
              >
                <p className="font-bold text-lg">Reporting</p>
              </motion.div>
              
              {/* Points d'intersection */}
              <div className="absolute top-[120px] left-[170px] w-[50px] h-[50px] rounded-full bg-opacity-60 bg-gray-400 z-25"></div>
              <div className="absolute top-[170px] right-[130px] w-[50px] h-[50px] rounded-full bg-opacity-60 bg-blue-500 z-35"></div>
              <div className="absolute top-[170px] left-[120px] w-[50px] h-[50px] rounded-full bg-opacity-60 bg-gray-600 z-35"></div>
              
              {/* Point central (noir) où les trois se rencontrent */}
              <div className="absolute top-[155px] left-[155px] w-[40px] h-[40px] rounded-full bg-black z-50"></div>
              
              {/* Numéros de cercles */}
              <div className="absolute top-[20px] left-[20px] w-[40px] h-[40px] rounded-full bg-white border-2 border-yellow-500 flex items-center justify-center font-bold text-xl z-40">1</div>
              <div className="absolute top-[20px] right-[20px] w-[40px] h-[40px] rounded-full bg-white border-2 border-blue-500 flex items-center justify-center font-bold text-xl z-40">2</div>
              <div className="absolute bottom-[60px] left-[50%] transform -translate-x-1/2 w-[40px] h-[40px] rounded-full bg-white border-2 border-blue-800 flex items-center justify-center font-bold text-xl z-40">3</div>
            </div>
          </motion.div>

          {/* Détails des expertises - côté droit */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Première section - Contrôle de projets */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`mb-4 ${activeArea === 1 || activeArea === null ? 'opacity-100' : 'opacity-50'} transition-opacity duration-300`}
            >
              <motion.div 
                className="flex items-center gap-3 mb-3 cursor-pointer"
                onClick={() => setActiveArea(activeArea === 1 ? null : 1)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-8 h-8 rounded-full bg-yellow-300 flex items-center justify-center font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Contrôle de projets</h3>
              </motion.div>
              
              <ul className="ml-11 space-y-2">
                {['Planning', 'Coûts', 'Risques'].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-2 w-1.5 h-1.5 bg-gray-500 rounded-full shrink-0"></span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Deuxième section - Gestion des Ressources */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className={`mb-4 ${activeArea === 2 || activeArea === null ? 'opacity-100' : 'opacity-50'} transition-opacity duration-300`}
            >
              <motion.div 
                className="flex items-center gap-3 mb-3 cursor-pointer"
                onClick={() => setActiveArea(activeArea === 2 ? null : 2)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Gestion des Ressources</h3>
              </motion.div>
              
              <ul className="ml-11 space-y-2">
                {['Ordonnancement', 'RBS', 'Nivellement', 'Lissage'].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-2 w-1.5 h-1.5 bg-gray-500 rounded-full shrink-0"></span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Troisième section - Reporting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className={`${activeArea === 3 || activeArea === null ? 'opacity-100' : 'opacity-50'} transition-opacity duration-300`}
            >
              <motion.div 
                className="flex items-center gap-3 mb-3 cursor-pointer"
                onClick={() => setActiveArea(activeArea === 3 ? null : 3)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Reporting</h3>
              </motion.div>
              
              <ul className="ml-11 space-y-2">
                {['Les indicateurs', 'Les plans de recouvrement'].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-2 w-1.5 h-1.5 bg-gray-500 rounded-full shrink-0"></span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
        
        {/* Logo KHEOPS en bas à droite */}
        <motion.div 
          className="flex justify-end mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 w-full h-full bg-[#8B0000] transform rotate-45"></div>
            <div className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] border-2 border-white transform rotate-45 flex items-center justify-center">
              <span className="text-white text-xs font-bold transform -rotate-45">KHEOPS<br/>Consulting</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 