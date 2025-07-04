#!/usr/bin/env node

/**
 * Script de validation des configurations avant déploiement
 * 
 * Usage: node scripts/validate-config.js
 */

const fs = require('fs');
const path = require('path');

// Couleurs pour les logs
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

console.log(`${colors.blue}=== Validation de la configuration KHEOPS Consulting ===${colors.reset}\n`);

// Vérification des variables d'environnement
const requiredEnvVars = [
  'RESEND_API_KEY',
];

console.log(`${colors.blue}Vérification des variables d'environnement...${colors.reset}`);

let missingVars = [];

requiredEnvVars.forEach(varName => {
  const value = process.env[varName];
  
  if (!value) {
    missingVars.push(varName);
  }
});

if (missingVars.length > 0) {
  console.log(`${colors.red}Variables manquantes: ${missingVars.join(', ')}${colors.reset}`);
  console.log(`
${colors.yellow}Ces variables doivent être configurées avant le déploiement.
Ajoutez-les dans le fichier .env.local pour le développement 
ou dans les variables d'environnement de votre plateforme de déploiement.

Pour Resend:
1. Créez un compte sur https://resend.com
2. Générez une clé API
3. Ajoutez RESEND_API_KEY=votre_clé_api${colors.reset}
  `);
} else {
  console.log(`${colors.green}✓ Toutes les variables d'environnement requises sont configurées correctement.${colors.reset}`);
}

// Vérification des fichiers nécessaires
console.log(`\n${colors.blue}Vérification des fichiers essentiels...${colors.reset}`);

const essentialFiles = [
  { path: 'public/favicon.ico', message: 'Favicon manquant' },
  { path: 'public/apple-touch-icon.png', message: 'Icône Apple Touch manquante' },
  { path: 'public/site.webmanifest', message: 'Manifeste Web manquant' },
  { path: 'next.config.js', message: 'Configuration Next.js manquante' },
];

let missingFiles = [];

essentialFiles.forEach(file => {
  if (!fs.existsSync(path.join(process.cwd(), file.path))) {
    missingFiles.push(`${file.path}: ${file.message}`);
  }
});

if (missingFiles.length > 0) {
  console.log(`${colors.red}Fichiers manquants:${colors.reset}`);
  missingFiles.forEach(file => {
    console.log(`${colors.red}- ${file}${colors.reset}`);
  });
} else {
  console.log(`${colors.green}✓ Tous les fichiers essentiels sont présents.${colors.reset}`);
}

// Résumé
console.log(`\n${colors.blue}=== Résumé de la validation ===${colors.reset}`);

if (missingVars.length > 0 || missingFiles.length > 0) {
  console.log(`${colors.red}❌ Des problèmes ont été détectés. Veuillez les corriger avant de déployer.${colors.reset}`);
  process.exit(1);
} else {
  console.log(`${colors.green}✅ Validation réussie! La configuration est prête pour le déploiement.${colors.reset}`);
  process.exit(0);
} 