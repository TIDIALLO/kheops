import { Metadata } from "next"
import { notFound } from "next/navigation"
// import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { services, secteurs, competences } from "@/data/services-data"

// Générer les métadonnées dynamiquement
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const service = services.find(service => service.id === params.id)
  
  if (!service) {
    return {
      title: "Service non trouvé | KHEOPS Consulting",
      description: "Le service demandé n'a pas été trouvé."
    }
  }
  
  return {
    title: `${service.title} | KHEOPS Consulting`,
    description: service.description
  }
}

// Générer les chemins statiques pour l'optimisation
export async function generateStaticParams() {
  return services.map(service => ({
    id: service.id
  }))
}

export default function ServicePage({ params }: { params: { id: string } }) {
  // Trouver le service correspondant à l'ID
  const service = services.find(service => service.id === params.id)
  
  // Si le service n'existe pas, afficher la page 404
  if (!service) {
    notFound()
  }
  
  // Liste des secteurs associés au service
  const serviceSecteursDetails = secteurs.filter(secteur => 
    service.secteurs.includes(secteur.id)
  )
  
  // Liste des compétences associées au service
  const serviceCompetencesDetails = competences.filter(competence => 
    service.competences.includes(competence.id)
  )
  
  // Contexte de couleur selon la catégorie
  const categoryColors = {
    "Contrôle de projets": {
      bg: "bg-[#fff8f8]",
      text: "text-[#800000]",
      border: "border-[#800000]/20",
      light: "bg-[#fff8f8]"
    },
    "Gestion des Ressources": {
      bg: "bg-[#fffdfa]",
      text: "text-[#9c6644]",
      border: "border-[#9c6644]/20",
      light: "bg-[#fffdfa]"
    },
    "Reporting": {
      bg: "bg-[#f9fdff]",
      text: "text-[#0066a2]",
      border: "border-[#0066a2]/20",
      light: "bg-[#f9fdff]"
    },
    "Conseil stratégique": {
      bg: "bg-[#f8f8ff]",
      text: "text-[#4b0082]",
      border: "border-[#4b0082]/20",
      light: "bg-[#f8f8ff]"
    }
  }
  
  // Contexte de couleur par défaut (fallback)
  const defaultColorContext = {
    bg: "bg-gray-100",
    text: "text-gray-700",
    border: "border-gray-200",
    light: "bg-gray-50"
  };
  
  // Sélection du contexte de couleur avec fallback
  const colorContext = categoryColors[service.category] || defaultColorContext;
  
  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-[#f9f5f5] to-[#f7f2f2] relative">
      {/* Motif de points en arrière-plan */}
      <div className="absolute inset-0 opacity-10 z-0" 
        style={{ 
          backgroundImage: `radial-gradient(#800000 0.5px, transparent 0.5px)`, 
          backgroundSize: '18px 18px'
        }}>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Lien de retour */}
        <Link 
          href="/recherche" 
          className="inline-flex items-center mb-6 text-[#5A5A5A] hover:text-[#800000] transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          <span>Retour à la recherche</span>
        </Link>
        
        {/* En-tête du service */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className={`p-4 rounded-lg ${colorContext.bg} self-start`}>
              <service.icon size={48} className={colorContext.text} />
            </div>
            
            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className={`text-sm px-3 py-1 rounded-full ${colorContext.bg} ${colorContext.text}`}>
                  {service.category}
                </span>
                
                {serviceCompetencesDetails.map(competence => (
                  <span key={competence.id} className="text-sm bg-gray-100 text-[#5A5A5A] px-3 py-1 rounded-full inline-flex items-center">
                    <competence.icon size={14} className="mr-1" />
                    {competence.name}
                  </span>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">{service.title}</h1>
              
              <p className="text-lg text-[#5A5A5A] mb-6">{service.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-2">
                {serviceSecteursDetails.map(secteur => (
                  <span key={secteur.id} className="text-sm bg-gray-100 text-[#5A5A5A] px-3 py-1 rounded-full inline-flex items-center">
                    <secteur.icon size={14} className="mr-1" />
                    {secteur.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Contenu principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-8">
            {/* Détails du service */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">À propos de ce service</h2>
              
              <div className="space-y-4">
                <p className="text-[#5A5A5A]">
                  KHEOPS Consulting vous accompagne dans l&apos;amélioration de votre performance opérationnelle grâce à notre expertise en {service.title.toLowerCase()}.
                </p>
                
                <p className="text-[#5A5A5A]">
                  Nos consultants expérimentés mettent à votre disposition des méthodologies éprouvées et des outils adaptés pour répondre à vos enjeux spécifiques dans un contexte de projets complexes.
                </p>
                
                <div className={`p-4 rounded-lg ${colorContext.light} ${colorContext.border} border mt-6`}>
                  <h3 className="font-semibold text-[#1C1C1C] mb-3">Points clés de notre approche</h3>
                  <ul className="space-y-2">
                    {["Expertise technique spécialisée", "Approche sur mesure", "Méthodologies éprouvées", "Outils performants", "Transfert de compétences"].map((point, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 size={18} className={`${colorContext.text} mr-2 mt-0.5 flex-shrink-0`} />
                        <span className="text-[#5A5A5A]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Bénéfices */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Bénéfices</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Amélioration de la performance opérationnelle",
                  "Optimisation des ressources et réduction des coûts",
                  "Sécurisation des projets et anticipation des risques",
                  "Amélioration de la prise de décision",
                  "Maîtrise des délais",
                  "Renforcement des compétences internes"
                ].map((benefit, index) => (
                  <div key={index} className={`p-4 rounded-lg ${colorContext.light} flex items-start`}>
                    <CheckCircle2 size={20} className={`${colorContext.text} mr-3 mt-0.5 flex-shrink-0`} />
                    <span className="text-[#5A5A5A]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact rapide */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">Vous êtes intéressé ?</h2>
              <p className="text-[#5A5A5A] mb-6">
                Contactez-nous pour discuter de vos besoins spécifiques et découvrir comment nous pouvons vous aider.
              </p>
              
              <Link 
                href="/contact" 
                className={`block w-full py-3 px-4 rounded-lg text-center font-medium text-white bg-[#800000] hover:bg-[#700000] transition-colors`}
              >
                Contactez-nous
              </Link>
            </div>
            
            {/* Services associés */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">Services associés</h2>
              
              <div className="space-y-4">
                {services
                  .filter(s => s.id !== service.id && s.category === service.category)
                  .slice(0, 3)
                  .map(relatedService => (
                    <Link 
                      key={relatedService.id} 
                      href={`/services/${relatedService.id}`}
                      className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className={`p-2 rounded-lg ${colorContext.bg} mr-3`}>
                        <relatedService.icon size={18} className={colorContext.text} />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#1C1C1C]">{relatedService.title}</h3>
                        <p className="text-sm text-[#5A5A5A] line-clamp-2">{relatedService.description}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
            
            {/* Tags */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h2 className="text-xl font-bold text-[#1C1C1C] mb-4">Mots-clés</h2>
              
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, index) => (
                  <Link 
                    key={index} 
                    href={`/recherche?q=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 text-sm rounded-full bg-gray-100 text-[#5A5A5A] hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-gradient-to-r from-[#800000] to-[#950000] rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Prêt à discuter de votre projet avec nous ?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Notre équipe d&apos;experts est à votre disposition pour vous accompagner dans la réussite de vos projets.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#800000] font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </main>
  )
} 