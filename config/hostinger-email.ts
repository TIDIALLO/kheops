// Configuration pour l'envoi d'emails via Hostinger SMTP
export const hostingerEmailConfig = {
  // Paramètres SMTP Hostinger
  host: process.env.HOSTINGER_EMAIL_HOST || "smtp.hostinger.com",
  port: Number(process.env.HOSTINGER_EMAIL_PORT) || 465,
  secure: true, // true pour 465
  auth: {
    user: process.env.HOSTIGER_EMAIL_USER || "contact.kheops@kheops-consulting.com",
    pass: process.env.HOSTINGER_EMAIL_PASSWORD,
  },

  // Email de destination
  toEmail: "contact.kheops@kheops-consulting.com",

  // Email d'expédition
  fromEmail: "contact.kheops@kheops-consulting.com",
  fromName: "KHEOPS Consulting",

  // Vérifier si la configuration est valide
  isValid: function () {
    return !!(this.auth.user && this.auth.pass);
  },
};
