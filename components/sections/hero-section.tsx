import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      {/* Fond avec effet d'overlay */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#1C1C1C]">
            L'excellence en
            <span className="text-[#8B0000] block mt-2">Contrôle de Projets</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#5A5A5A] mb-8 max-w-2xl mx-auto">
            Optimisez la performance de vos projets grâce à notre expertise en planification, 
            maîtrise des coûts et gestion des risques.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#8B0000] hover:bg-[#700000] text-white"
            >
              Découvrir nos services
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white"
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 