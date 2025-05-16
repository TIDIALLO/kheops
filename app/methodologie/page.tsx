import { Metadata } from 'next'
import { siteConfig } from '@/config/seo'

export const metadata: Metadata = {
  title: 'Notre Méthodologie | KHEOPS Consulting',
  description: 'Découvrez notre approche méthodologique unique pour la transformation digitale et le contrôle de projets.',
  openGraph: {
    title: 'Notre Méthodologie | KHEOPS Consulting',
    description: 'Découvrez notre approche méthodologique unique pour la transformation digitale et le contrôle de projets.',
  },
}

export default function MethodologiePage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-6">
            Notre Méthodologie
          </h1>
          
          <p className="text-lg text-gray-700 mb-8">
            Chez KHEOPS Consulting, nous avons développé une approche méthodologique 
            rigoureuse et éprouvée pour garantir le succès de vos projets.
          </p>

          <div className="space-y-12">
            {/* Phase 1: Analyse */}
            <section className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#8B0000]">
              <h2 className="text-2xl font-bold text-[#8B0000] mb-4">
                1. Analyse et Diagnostic
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#8B0000] mr-3" />
                  <span>Étude approfondie de votre organisation et de vos besoins</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#8B0000] mr-3" />
                  <span>Identification des points forts et des axes d'amélioration</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#8B0000] mr-3" />
                  <span>Analyse des processus existants</span>
                </li>
              </ul>
            </section>

            {/* Phase 2: Conception */}
            <section className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#8B0000]">
              <h2 className="text-2xl font-bold text-[#8B0000] mb-4">
                2. Conception de Solutions
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#8B0000] mr-3" />
                  <span>Élaboration de solutions sur mesure</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#8B0000] mr-3" />
                  <span>Définition des objectifs et des indicateurs de performance</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#8B0000] mr-3" />
                  <span>Planification détaillée des actions à mener</span>
                </li>
              </ul>
            </section>

            {/* Phase 3: Implémentation */}
            <section className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#8B0000]">
              <h2 className="text-2xl font-bold text-[#8B0000] mb-4">
                3. Implémentation
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#8B0000] mr-3" />
                  <span>Mise en œuvre progressive des solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#8B0000] mr-3" />
                  <span>Formation et accompagnement des équipes</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#8B0000] mr-3" />
                  <span>Suivi et ajustements continus</span>
                </li>
              </ul>
            </section>

            {/* Phase 4: Évaluation */}
            <section className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#8B0000]">
              <h2 className="text-2xl font-bold text-[#8B0000] mb-4">
                4. Évaluation et Optimisation
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#8B0000] mr-3" />
                  <span>Mesure des résultats et analyse des performances</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#8B0000] mr-3" />
                  <span>Identification des opportunités d'amélioration</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#8B0000] mr-3" />
                  <span>Recommandations pour l'évolution continue</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              Prêt à transformer votre organisation avec une méthodologie éprouvée ?
            </p>
            <a
              href="/#contact"
              className="inline-block bg-[#8B0000] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#700000] transition-colors duration-300"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 