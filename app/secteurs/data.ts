// Données des secteurs
export const secteurs = {
  construction: {
    titre: "Construction",
    description:
      "Gestion de projets complexes dans le secteur du bâtiment et de la construction, de la conception à la livraison.",
    image: "/images/secteurs/Construction.png",
    longDescription: `Notre expertise dans le secteur de la construction s'étend sur l'ensemble du cycle de vie des projets. 
    Nous intervenons dans la planification, le contrôle des coûts et la coordination des différents acteurs pour assurer 
    la réussite de vos projets de construction. Notre approche méthodique et notre expérience nous permettent d'anticiper 
    les défis et d'optimiser les processus de construction.`,
    points: [
      "Gestion de projets de construction résidentielle et commerciale.",
      "Coordination des équipes et des sous-traitants.",
      "Optimisation des plannings et des ressources.",
      "Suivi des coûts et contrôle budgétaire.",
      "Gestion des risques et de la qualité.",
    ],
  },
  industrie: {
    titre: "Industrie",
    description:
      "Accompagnement des projets industriels avec une expertise dans les processus de production et d'optimisation.",
    image: "/images/secteurs/industrie.png",
    longDescription: `Dans le secteur industriel, nous apportons notre expertise pour optimiser les processus de production 
    et améliorer la performance opérationnelle. Notre approche combine une compréhension approfondie des enjeux industriels 
    avec des méthodologies éprouvées de gestion de projet.`,
    points: [
      "Optimisation des processus de production.",
      "Amélioration continue et lean manufacturing.",
      "Gestion de la maintenance industrielle.",
      "Digitalisation des processus industriels.",
      "Conformité aux normes et certifications.",
    ],
  },
  energie: {
    titre: "Énergie",
    description:
      "Pilotage de projets dans le domaine de l'énergie, y compris les infrastructures nucléaires et renouvelables.",
    image: "/images/secteurs/energie.png",
    longDescription: `Le secteur de l'énergie fait face à des défis majeurs en termes de transition énergétique et d'efficacité. 
    Nous accompagnons nos clients dans leurs projets énergétiques, qu'il s'agisse d'installations conventionnelles ou 
    d'énergies renouvelables.`,
    points: [
      "Gestion de projets d'infrastructures énergétiques",
      "Développement des énergies renouvelables",
      "Optimisation de la consommation énergétique",
      "Conformité aux normes environnementales",
      "Sécurité des installations énergétiques",
    ],
  },
  transport: {
    titre: "Transport",
    description:
      "Expertise dans le management de projets liés aux infrastructures de transport et à la mobilité.",
    image: "/images/secteurs/transport.png",
    longDescription: `Notre expertise dans le secteur des transports couvre l'ensemble des modes de transport et des infrastructures 
    associées. Nous intervenons dans la planification et l'optimisation des systèmes de transport pour améliorer la mobilité 
    et l'efficacité logistique.`,
    points: [
      "Planification des infrastructures de transport",
      "Optimisation des flux logistiques",
      "Gestion de flottes de véhicules",
      "Développement de solutions de mobilité durable",
      "Amélioration de la performance opérationnelle",
    ],
  },
  infrastructure: {
    titre: "Infrastructure",
    description:
      "Contrôle et pilotage de grands projets d'infrastructure publique et privée.",
    image: "/images/secteurs/infrastructure.png",
    longDescription: `Nous accompagnons les projets d'infrastructure majeurs avec une expertise pointue en gestion de projet 
    et en coordination d'acteurs multiples. Notre approche garantit une exécution efficace et un contrôle rigoureux des 
    grands projets d'infrastructure.`,
    points: [
      "Gestion de projets d'infrastructure urbaine.",
      "Coordination des parties prenantes.",
      "Planification et suivi des travaux.",
      "Gestion des impacts environnementaux.",
      "Optimisation des coûts et des délais.",
    ],
  },
} as const;

export type SecteurId = keyof typeof secteurs;
