# Guide de déploiement - KHEOPS Consulting

Ce document décrit les étapes pour déployer le site KHEOPS Consulting sur un environnement de production.

## Prérequis

- Node.js 18+ et npm ou yarn
- Accès à un service d'hébergement (Vercel, Netlify, serveur VPS, etc.)
- Compte EmailJS actif

## 1. Configuration des variables d'environnement

### Variables EmailJS requises

Ces variables doivent être configurées sur la plateforme d'hébergement :

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_0k7sqys
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_py1g735
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=NcSUafJLSL3cqsMvt
```

**IMPORTANT** : Pour la sécurité, en production, utilisez vos propres clés EmailJS et non les valeurs par défaut.

## 2. Options de déploiement

### Option A : Déploiement sur Vercel (recommandé)

1. Créez un compte sur [Vercel](https://vercel.com) si vous n'en avez pas déjà un
2. Connectez votre dépôt GitHub/GitLab/Bitbucket à Vercel
3. Configurez un nouveau projet en sélectionnant le framework Next.js
4. Ajoutez les variables d'environnement mentionnées ci-dessus dans la section "Environment Variables"
5. Déployez l'application

Vercel détectera automatiquement que c'est une application Next.js et appliquera les optimisations nécessaires.

### Option B : Déploiement sur Netlify

1. Créez un compte sur [Netlify](https://netlify.com)
2. Connectez votre dépôt à Netlify
3. Configurez les paramètres de build :
   - Build command : `npm run build`
   - Publish directory : `.next`
4. Ajoutez les variables d'environnement dans les paramètres du site
5. Déployez l'application

### Option C : Déploiement sur serveur VPS/hébergement traditionnel

1. Préparez votre build de production :
   ```bash
   npm run build
   ```

2. Transférez les fichiers suivants sur votre serveur :
   - Dossier `.next`
   - Dossier `public`
   - Fichier `package.json`
   - Fichier `next.config.js`

3. Sur le serveur, installez les dépendances :
   ```bash
   npm install --production
   ```

4. Configurez les variables d'environnement sur votre serveur
   
5. Démarrez l'application :
   ```bash
   npm start
   ```

6. Configurez un service comme PM2 pour garder l'application en cours d'exécution :
   ```bash
   npm install -g pm2
   pm2 start npm --name "kheops-consulting" -- start
   ```

## 3. Vérifications post-déploiement

Après déploiement, assurez-vous de vérifier :

1. Que l'icône KHEOPS s'affiche correctement dans les onglets du navigateur
2. Que les titres des pages sont correctement formatés (exemple : "Services | KHEOPS Consulting")
3. Que le formulaire de contact fonctionne et envoie des emails via EmailJS
4. Que tous les liens internes fonctionnent correctement
5. Que le site est responsive sur mobile et tablette

## 4. Mise à jour du site

Pour mettre à jour le site après déploiement :

### Sur Vercel/Netlify
Il suffit de pousser les modifications sur la branche principale de votre dépôt. Le déploiement sera automatique.

### Sur serveur traditionnel
1. Effectuez un build local : `npm run build`
2. Transférez les fichiers mis à jour sur le serveur
3. Redémarrez l'application : `pm2 restart kheops-consulting`

## Support

Pour toute question concernant le déploiement, contactez l'équipe technique KHEOPS. 