# Configuration OVH Email pour KHEOPS Consulting

Ce guide explique comment configurer l'envoi d'emails via OVH pour le site KHEOPS Consulting.

## 🎯 Avantages de cette solution

- ✅ **Gratuit** (inclus dans l'hébergement OVH)
- ✅ **Sécurisé** (pas de service tiers)
- ✅ **Contrôle total** sur l'envoi d'emails
- ✅ **Meilleure délivrabilité** (email officiel du domaine)
- ✅ **Simple** à configurer

## 📋 Prérequis

1. **Email OVH actif** : `contact.kheops@kheops-consulting.com`
2. **Mot de passe** de l'email OVH
3. **Accès** au panneau OVH

## 🔧 Étapes de configuration

### Étape 1 : Vérifier l'email OVH

1. **Connecte-toi** à ton panneau OVH : https://www.ovh.com/manager/
2. **Va dans** "Emails" → `contact.kheops@kheops-consulting.com`
3. **Vérifie** que l'email est bien activé
4. **Note** le mot de passe (ou change-le si nécessaire)

### Étape 2 : Configurer les variables d'environnement

1. **Crée** un fichier `.env.local` à la racine du projet
2. **Ajoute** ces lignes :

```env
OVH_EMAIL_USER=contact.kheops@kheops-consulting.com
OVH_EMAIL_PASSWORD=ton_mot_de_passe_ovh
```

### Étape 3 : Tester la configuration

1. **Lance** le script de test :
```bash
node scripts/test-ovh-email.js
```

2. **Vérifie** que tu reçois l'email de test sur `contact.kheops@kheops-consulting.com`

### Étape 4 : Tester le formulaire de contact

1. **Lance** l'application :
```bash
npm run dev
```

2. **Va** sur la page de contact
3. **Envoie** un email de test
4. **Vérifie** la réception

## 🔍 Paramètres SMTP OVH utilisés

- **Serveur SMTP** : `ssl0.ovh.net`
- **Port** : `587`
- **Sécurité** : `STARTTLS`
- **Authentification** : Oui
- **Nom d'utilisateur** : `contact.kheops@kheops-consulting.com`
- **Mot de passe** : [ton mot de passe OVH]

## 🆘 Dépannage

### Problème : "Configuration OVH manquante"
**Solution :** Vérifie que le fichier `.env.local` existe et contient les bonnes valeurs.

### Problème : "Impossible de se connecter au serveur SMTP"
**Solutions possibles :**
1. **Vérifie** le mot de passe OVH
2. **Vérifie** que l'email est activé dans le panneau OVH
3. **Essaie** le port 465 avec `secure: true`

### Problème : "Email non reçu"
**Solutions possibles :**
1. **Vérifie** la boîte spam/indésirables
2. **Vérifie** que l'email de destination est correct
3. **Teste** avec un autre client email

## 📧 Fonctionnalités

- ✅ **Envoi d'emails** depuis le formulaire de contact
- ✅ **Pièces jointes** supportées (PDF, images, etc.)
- ✅ **Template HTML** professionnel
- ✅ **Validation** des données
- ✅ **Gestion d'erreurs** complète
- ✅ **Test de connexion** automatique

## 🔒 Sécurité

- **Mot de passe** stocké dans les variables d'environnement
- **Validation** des emails côté serveur
- **Limitation** de la taille des fichiers
- **Protection** contre les injections

## 📞 Support

Si tu rencontres des problèmes :
1. **Vérifie** ce guide
2. **Teste** avec le script de test
3. **Contacte** OVH si nécessaire
4. **Vérifie** les logs de l'application 