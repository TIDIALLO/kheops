# Guide de Déploiement - KHEOPS Consulting

Ce guide détaille les étapes pour déployer le site web KHEOPS Consulting sur différentes plateformes.

## 📋 Prérequis

- Compte GitHub actif
- Compte Resend actif
- Variables d'environnement configurées

### Variables Resend requises

```env
RESEND_API_KEY=votre_clé_api_resend
```

**IMPORTANT** : Pour la sécurité, utilisez vos propres clés Resend et non les valeurs par défaut.

## 🚀 Déploiement sur Vercel (Recommandé)

### Étape 1 : Préparation

1. Assurez-vous que votre code est commité sur GitHub
2. Vérifiez que toutes les variables d'environnement sont configurées

### Étape 2 : Déploiement

```bash
# Build et validation
npm run deploy
```

### Étape 3 : Configuration Vercel

1. Connectez votre repository GitHub à Vercel
2. Configurez les variables d'environnement dans Vercel :
   - `RESEND_API_KEY`

### Étape 4 : Vérification

1. Testez le formulaire de contact
2. Vérifiez que les emails sont envoyés via Resend
3. Contrôlez la responsivité sur différents appareils

## 🌐 Déploiement sur Hostinger

### Étape 1 : Build local

```bash
npm run deploy:hostinger
```

### Étape 2 : Upload

1. Connectez-vous à votre panneau Hostinger
2. Uploadez le fichier `deploy.zip` généré
3. Extrayez le contenu dans le dossier public_html

### Étape 3 : Configuration

1. Configurez les variables d'environnement dans Hostinger
2. Vérifiez que Node.js est activé
3. Configurez les redirections si nécessaire

## 📧 Configuration Resend

### Création du compte

1. Rendez-vous sur [Resend](https://resend.com/)
2. Créez un compte gratuit
3. Vérifiez votre domaine d'expédition

### Configuration de l'API

1. Générez une clé API dans votre dashboard Resend
2. Ajoutez la clé dans vos variables d'environnement
3. Testez l'envoi d'un email de test

### Domaine personnalisé

1. Ajoutez votre domaine dans Resend
2. Configurez les enregistrements DNS
3. Vérifiez la configuration
4. Mettez à jour `config/resend.ts` avec votre domaine

## ✅ Liste de vérification

### Avant le déploiement

- [ ] Toutes les variables d'environnement sont configurées
- [ ] Le formulaire de contact fonctionne en local
- [ ] Les images sont optimisées
- [ ] Le site est responsive
- [ ] Les métadonnées SEO sont correctes

### Après le déploiement

- [ ] Le site se charge correctement
- [ ] Le formulaire de contact envoie des emails via Resend
- [ ] Les performances sont satisfaisantes
- [ ] Le SSL est activé
- [ ] Les redirections fonctionnent

## 🔧 Dépannage

### Problèmes courants

1. **Emails non envoyés** : Vérifiez la clé API Resend
2. **Erreurs de build** : Vérifiez les variables d'environnement
3. **Problèmes de performance** : Optimisez les images

### Logs utiles

```bash
# Vérifier les logs de build
npm run build

# Tester l'API localement
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Test"}'
```

## 📞 Support

Pour toute question ou problème de déploiement, contactez l'équipe de développement.

---

**KHEOPS Consulting** - Excellence en contrôle de projets 