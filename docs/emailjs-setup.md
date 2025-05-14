# Configuration d'EmailJS pour KHEOPS Consulting

Ce document explique comment configurer EmailJS pour le formulaire de contact du site KHEOPS Consulting.

## Prérequis

1. Créer un compte sur [EmailJS](https://www.emailjs.com/)
2. Configurer un service email (Gmail, Outlook, etc.)
3. Créer un modèle d'email

## Étapes de configuration

### 1. Créer un compte EmailJS

- Rendez-vous sur [EmailJS](https://www.emailjs.com/) et inscrivez-vous
- Le plan gratuit permet d'envoyer jusqu'à 200 emails par mois

### 2. Ajouter un service email

- Dans le tableau de bord EmailJS, cliquez sur "Email Services" puis "Add New Service"
- Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
- Suivez les instructions pour connecter votre compte email
- Notez l'ID du service (par exemple: "service_kheops")

### 3. Créer un modèle d'email

- Dans le tableau de bord EmailJS, cliquez sur "Email Templates" puis "Create New Template"
- Concevez votre modèle d'email en utilisant les variables suivantes:
  - `{{from_name}}`: Nom de l'expéditeur
  - `{{reply_to}}`: Email de l'expéditeur
  - `{{company}}`: Entreprise de l'expéditeur
  - `{{message}}`: Message de l'expéditeur
- Notez l'ID du modèle (par exemple: "template_contact")

### 4. Obtenir la clé publique

- Dans le tableau de bord EmailJS, cliquez sur "Account" puis "API Keys"
- Copiez votre "Public Key"

### 5. Configuration dans l'application

Créez un fichier `.env.local` à la racine du projet avec les informations suivantes:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
```

Alternativement, vous pouvez modifier directement le fichier `config/emailjs.ts` :

```typescript
export const emailjsConfig = {
  serviceId: 'votre_service_id',
  templateId: 'votre_template_id',
  publicKey: 'votre_public_key',
}
```

## Tester le formulaire

1. Lancez l'application en mode développement
2. Accédez à la page de contact
3. Remplissez le formulaire et envoyez-le
4. Vérifiez que l'email est bien reçu à l'adresse configurée

## Dépannage

Si vous rencontrez des problèmes avec l'envoi d'emails:

1. Vérifiez les identifiants dans le fichier `.env.local` ou `config/emailjs.ts`
2. Consultez les logs dans la console du navigateur
3. Vérifiez le tableau de bord EmailJS pour voir si l'email a été envoyé
4. Vérifiez votre boîte de réception et les dossiers spam/indésirables 