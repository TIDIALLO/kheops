import Image from 'next/image'

const domaines = [
  {
    title: "Industrie",
    image: "/images/industrie.jpg",
    alt: "Site industriel"
  },
  {
    title: "Construction",
    image: "/images/construction.jpg",
    alt: "Chantier de construction"
  },
  {
    title: "Énergie",
    image: "/images/energie.jpg",
    alt: "Installation énergétique"
  },
  {
    title: "Infrastructure",
    image: "/images/infrastructure.jpg",
    alt: "Infrastructure de transport"
  },
  {
    title: "Nucléaire",
    image: "/images/nucleaire.jpg",
    alt: "Centrale nucléaire"
  },
  {
    title: "Transport",
    image: "/images/transport.jpg",
    alt: "Transport ferroviaire"
  }
]

export function DomainesSection() {
  return (
    <section id="domaines" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
            Nos domaines d'intervention
          </h2>
          <p className="text-lg text-[#5A5A5A] max-w-2xl mx-auto">
            Une expertise multisectorielle au service de vos projets complexes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domaines.map((domaine, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg shadow-lg h-64"
            >
              <Image
                src={domaine.image}
                alt={domaine.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">
                  {domaine.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 