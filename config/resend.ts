// Configuration pour l'envoi d'emails via Resend
export const resendConfig = {
  // Clé API Resend (à récupérer sur https://resend.com/api-keys)
  apiKey: process.env.RESEND_API_KEY,

  // Email de destination (où tu veux recevoir les emails)
  toEmail: "contact.kheops@kheops-consulting.com",

  // Email d'expédition par défaut (domaine vérifié)
  defaultFromEmail: "onboarding@resend.dev", // Domaine temporaire Resend
  fromName: "KHEOPS Consulting",

  // Vérifier si la configuration est valide
  isValid: function () {
    return !!(this.apiKey && this.defaultFromEmail);
  },
};
