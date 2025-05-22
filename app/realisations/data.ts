export const realisations = [
  {
    id: "epc-lucy",
    titre: "Projet EPC LUCY 2.0",
    description:
      "Construction de deux usines d'épaississement et d'assèchement des résidus issus de l'extraction du NICKEL.",
    image: "/images/realisations/lucy.jpg",
    points: [
      "Contrôle des coûts",
      "Gestion des délais",
      "Coordination des équipes",
      "Suivi de la qualité",
    ],
    secteur: "industrie",
  },
  {
    id: "sar-acatbs",
    titre: "Projet SAR ACATBS",
    description:
      "Planification des travaux neufs GREENFIELD et des travaux d'arrêt BROWFIELD (génie civil, charpente métallique, tuyauterie industrielle, Electricité et Instrumentation, Pré mise en service, mise en service)",
    image: "/images/realisations/acatbs.jpg",
    points: [
      "Génie civil",
      "Charpente métallique",
      "Tuyauterie industrielle",
      "Electricité et Instrumentation",
      "Pré mise en service",
      "Mise en service",
    ],
    secteur: "industrie",
  },
  {
    id: "papua-lng",
    titre: "Projet PAPUA LNG",
    description:
      "Relier les champs gaziers Elk et Antelope à une unité de liquéfaction du gaz naturel situé à Port Moresby (Papouasie Nouvelle Guinée).",
    image: "/images/realisations/papua.jpg",
    points: [
      "Gestion de projet complexe",
      "Coordination internationale",
      "Planification des infrastructures",
      "Contrôle des coûts",
    ],
    secteur: "energie",
  },
] as const;

export type RealisationId = (typeof realisations)[number]["id"];
