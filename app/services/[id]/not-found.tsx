import Link from 'next/link'
import { Search, ArrowLeft } from 'lucide-react'

export default function ServiceNotFound() {
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
        
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#800000]/10 flex items-center justify-center mx-auto mb-6">
            <Search size={28} className="text-[#800000]" />
          </div>
          
          <h1 className="text-3xl font-bold text-[#1C1C1C] mb-4">Service non trouvé</h1>
          
          <p className="text-lg text-[#5A5A5A] mb-8">
            Le service que vous recherchez n&apos;existe pas ou a été déplacé.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/recherche" 
              className="py-3 px-6 rounded-lg bg-[#800000] text-white hover:bg-[#700000] transition-colors font-medium"
            >
              Rechercher un service
            </Link>
            
            <Link 
              href="/services" 
              className="py-3 px-6 rounded-lg border border-[#5A5A5A]/20 text-[#5A5A5A] hover:bg-[#5A5A5A]/10 transition-colors font-medium"
            >
              Tous nos services
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 