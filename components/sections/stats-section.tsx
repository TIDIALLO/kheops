const stats = [
  {
    number: "150+",
    label: "Projets réalisés"
  },
  {
    number: "25+",
    label: "Experts certifiés"
  },
  {
    number: "15+",
    label: "Années d'expérience"
  },
  {
    number: "98%",
    label: "Clients satisfaits"
  }
]

export function StatsSection() {
  return (
    <section className="py-20 bg-[#8B0000] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-lg opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 