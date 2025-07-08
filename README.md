# KHEOPS Consulting - Site Web

Site web professionnel pour KHEOPS Consulting, cabinet spécialisé dans le contrôle de projets complexes.

## 🚀 Fonctionnalités

- Design moderne et responsive
- Animations fluides avec Framer Motion
- Formulaire de contact fonctionnel avec Resend
- Optimisation SEO complète
- Performance optimisée
- Support multilingue (français)

## 🛠️ Technologies Utilisées

- [Next.js 14](https://nextjs.org/) - Framework React
- [React 18](https://reactjs.org/) - Bibliothèque UI
- [TypeScript](https://www.typescriptlang.org/) - Typage statique
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Resend](https://resend.com/) - Service d'envoi d'emails
- [Sharp](https://sharp.pixelplumbing.com/) - Optimisation d'images

## 📦 Installation

```bash
# Cloner le repository
git clone [url-du-repo]

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

## ⚙️ Configuration

### Variables d'environnement requises

Créez un fichier `.env.local` à la racine du projet :

```env
# Configuration Resend pour l'envoi d'emails
RESEND_API_KEY=votre_clé_api_resend
```

### Configuration Resend

1. Créez un compte sur [Resend](https://resend.com/)
2. Générez une clé API
3. Vérifiez votre domaine d'expédition
4. Ajoutez la clé API dans vos variables d'environnement

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
npm run deploy
```

### Hostinger

```bash
npm run deploy:hostinger
```

### Netlify

```bash
npm run netlify-build
```

## 📁 Structure du Projet

```
kheops/
├── app/                 # Pages et routes (App Router)
├── components/          # Composants React réutilisables
│   ├── sections/        # Sections de page
│   ├── ui/             # Composants UI de base
│   └── navigation/     # Navigation et footer
├── config/             # Configuration (Resend, etc.)
├── data/               # Données statiques
├── hooks/              # Hooks React personnalisés
├── lib/                # Utilitaires et helpers
├── public/             # Assets statiques
└── scripts/            # Scripts de déploiement
```

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont définies dans `tailwind.config.js` :

- Rouge principal : `#8B0000`
- Rouge secondaire : `#A52A2A`
- Gris foncé : `#1C1C1C`
- Gris moyen : `#5A5A5A`

### Typographie

- Police principale : Inter (Google Fonts)
- Tailles responsives configurées dans Tailwind

## 📧 Configuration Email

Le formulaire de contact utilise Resend pour l'envoi d'emails :

| Variable | Description | Exemple |
|----------|-------------|---------|
| `RESEND_API_KEY` | Clé API Resend | re_123456789 |

**IMPORTANT** : Pour la sécurité, utilisez vos propres clés Resend en production.

## 🔧 Scripts Disponibles

- `npm run dev` - Lancement en développement
- `npm run build` - Build de production
- `npm run start` - Lancement en production
- `npm run lint` - Vérification du code
- `npm run deploy` - Déploiement sur Vercel
- `npm run deploy:hostinger` - Déploiement sur Hostinger

## 📈 Performance

- Images optimisées avec Next.js Image
- Code splitting automatique
- Lazy loading des composants
- Compression des assets
- Cache optimisé

## 🔒 Sécurité

- Validation des données côté serveur
- Protection CSRF
- Headers de sécurité configurés
- Variables d'environnement sécurisées

## 📞 Support

Pour toute question ou problème, contactez l'équipe de développement.

---

**KHEOPS Consulting** - Excellence en contrôle de projets
<!-- test deploy -->
# Trigger deploy
# trigger ssh fix
