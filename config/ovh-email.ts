// Configuration pour l'envoi d'emails via OVH SMTP
export const ovhEmailConfig = {
  // Paramètres SMTP OVH
  host: process.env.OVH_EMAIL_HOST || "mx4.mail.ovh.net",
  port: Number(process.env.OVH_EMAIL_PORT) || 465,
  secure: true, // true pour 465
  auth: {
    user: process.env.OVH_EMAIL_USER || "contact.kheops@kheops-consulting.com",
    pass: process.env.OVH_EMAIL_PASSWORD,
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
