import { Building, Clock, Coins, Construction, Factory, TriangleAlert, Target, BriefcaseBusiness, Radar, BarChart4, Landmark, LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  tags: string[];
  secteurs: string[];
  competences: string[];
}

export const secteurs = [
  {
    id: "energie",
    name: "Énergie",
    description: "Projets dans le secteur de l'énergie nucléaire, renouvelable et traditionnelle",
    icon: Factory
  },
  {
    id: "construction",
    name: "Construction",
    description: "Bâtiment, génie civil et infrastructures complexes",
    icon: Building
  },
  {
    id: "industrie",
    name: "Industrie",
    description: "Secteur industriel et manufacturier",
    icon: Factory
  },
  {
    id: "transport",
    name: "Transport",
    description: "Infrastructures de transport et mobilité",
    icon: Landmark
  },
  {
    id: "defense",
    name: "Défense",
    description: "Projets dans le secteur de la défense",
    icon: Target
  }
];

export const competences = [
  { id: "planning", name: "Planning", icon: Clock },
  { id: "couts", name: "Contrôle des coûts", icon: Coins },
  { id: "risques", name: "Gestion des risques", icon: TriangleAlert },
  { id: "opc", name: "OPC", icon: Construction },
  { id: "conseil", name: "Conseil stratégique", icon: BriefcaseBusiness },
  { id: "analyse", name: "Analyse de données", icon: BarChart4 },
  { id: "monitoring", name: "Monitoring de projet", icon: Radar }
];

export const services: Service[] = [
  {
    id: "planning-strategique",
    title: "Planification Stratégique",
    description: "Élaboration de plannings détaillés, analyse des délais et optimisation des chemins critiques pour garantir le respect des échéances.",
    icon: Clock,
    category: "Contrôle de projets",
    tags: ["planning", "délais", "ordonnancement", "chemins critiques", "jalons"],
    secteurs: ["energie", "construction", "industrie", "transport", "defense"],
    competences: ["planning"]
  },
  {
    id: "controle-couts",
    title: "Contrôle des Coûts",
    description: "Gestion budgétaire, suivi des dépenses, prévisions financières et analyse de la valeur acquise (EVM) pour maîtriser les coûts du projet.",
    icon: Coins,
    category: "Contrôle de projets",
    tags: ["budget", "coûts", "EVM", "prévisions", "finance"],
    secteurs: ["energie", "construction", "industrie", "transport", "defense"],
    competences: ["couts"]
  },
  {
    id: "gestion-risques",
    title: "Gestion des Risques",
    description: "Identification, analyse qualitative et quantitative, plan de mitigation et suivi des risques et opportunités du projet.",
    icon: TriangleAlert,
    category: "Contrôle de projets",
    tags: ["risques", "mitigation", "analyse", "opportunités", "plan d'action"],
    secteurs: ["energie", "construction", "industrie", "transport", "defense"],
    competences: ["risques"]
  },
  {
    id: "opc",
    title: "OPC - Ordonnancement, Pilotage et Coordination",
    description: "Gestion de l'ordonnancement des travaux, pilotage et coordination des différents intervenants dans les projets de construction.",
    icon: Construction,
    category: "Contrôle de projets",
    tags: ["OPC", "coordination", "pilotage", "ordonnancement", "construction"],
    secteurs: ["construction", "energie"],
    competences: ["opc"]
  },
  {
    id: "audit-projets",
    title: "Audit de Projets",
    description: "Évaluation indépendante de l'état d'avancement, de la santé et de la gouvernance d'un projet avec recommandations d'amélioration.",
    icon: Target,
    category: "Conseil stratégique",
    tags: ["audit", "évaluation", "recommandations", "diagnostic", "amélioration"],
    secteurs: ["energie", "construction", "industrie", "transport"],
    competences: ["conseil", "analyse"]
  },
  {
    id: "pmo-services",
    title: "PMO - Project Management Office",
    description: "Mise en place et gestion de bureaux de projets pour standardiser les processus, faciliter le partage d'informations et améliorer la performance globale.",
    icon: BriefcaseBusiness,
    category: "Gestion des Ressources",
    tags: ["PMO", "bureau de projets", "standardisation", "gouvernance", "performance"],
    secteurs: ["energie", "construction", "industrie", "defense"],
    competences: ["conseil", "planning", "couts"]
  },
  {
    id: "reporting-performance",
    title: "Reporting et Tableaux de Bord",
    description: "Conception et mise en œuvre de systèmes de reporting personnalisés et de tableaux de bord pour suivre la performance des projets.",
    icon: BarChart4,
    category: "Reporting",
    tags: ["reporting", "tableaux de bord", "KPI", "suivi", "mesure"],
    secteurs: ["energie", "construction", "industrie", "transport", "defense"],
    competences: ["analyse"]
  },
  {
    id: "formation-methodologie",
    title: "Formation et Méthodologie",
    description: "Formation des équipes aux méthodologies et outils de gestion de projet, accompagnement au changement et développement des compétences.",
    icon: Radar,
    category: "Gestion des Ressources",
    tags: ["formation", "méthodologie", "accompagnement", "compétences", "outils"],
    secteurs: ["energie", "construction", "industrie", "transport", "defense"],
    competences: ["conseil"]
  }
]; 