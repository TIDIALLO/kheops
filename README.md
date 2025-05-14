# KHEOPS Consulting

Site web officiel de KHEOPS Consulting, cabinet de conseil spécialisé dans le contrôle de projets complexes.

## 🚀 Démarrage rapide

### Installation

```bash
# Cloner le dépôt
git clone [votre-repo-url]
cd kheops-consulting

# Installer les dépendances
npm install
```

### Configuration de l'environnement de développement

1. Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```env
# Configuration EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_0k7sqys
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_py1g735
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=NcSUafJLSL3cqsMvt
```

2. Lancez le serveur de développement :

```bash
npm run dev
```

3. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🧰 Fonctionnalités

- Design responsive et moderne
- Formulaire de contact fonctionnel avec EmailJS
- Optimisations SEO avec métadonnées adaptées
- Favicon et icônes d'application personnalisés

## 🛠️ Technologies utilisées

- [Next.js 15](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire
- [EmailJS](https://www.emailjs.com/) - Service d'envoi d'emails
- [Framer Motion](https://www.framer.com/motion/) - Animations fluides

## 📦 Structure du projet

```
/
├── app/                # Dossier principal des pages (structure Next.js App Router)
├── components/         # Composants React réutilisables
├── config/             # Configuration (EmailJS, etc.)
├── public/             # Fichiers statiques (favicons, images)
├── scripts/            # Scripts utilitaires pour le déploiement
└── DEPLOYMENT.md       # Guide détaillé pour le déploiement
```

## 📋 Déploiement

Pour déployer le site en production, consultez le fichier [DEPLOYMENT.md](./DEPLOYMENT.md) qui contient les instructions détaillées.

Commande rapide pour le déploiement :

```bash
npm run deploy
```

Cette commande validera la configuration et construira les fichiers de production.

## 🤝 Contribution

1. Créez une branche pour votre fonctionnalité (`git checkout -b feature/amazing-feature`)
2. Validez vos changements (`git commit -m 'Add some amazing feature'`)
3. Poussez vers la branche (`git push origin feature/amazing-feature`)
4. Ouvrez une Pull Request

## 📝 Configuration de l'environnement

### Variables d'environnement

| Variable | Description | Exemple |
|----------|-------------|---------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | ID du service EmailJS | service_0k7sqys |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | ID du template EmailJS | template_py1g735 |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Clé publique EmailJS | NcSUafJLSL3cqsMvt |

## ✅ Liste de vérification avant déploiement

- [ ] Toutes les variables d'environnement sont configurées
- [ ] Les favicons et icônes sont présents dans le dossier public
- [ ] Le formulaire de contact a été testé
- [ ] Les métadonnées des pages sont correctes
- [ ] Le site est responsive sur tous les appareils

## 📄 Licence

Tous droits réservés © KHEOPS Consulting
