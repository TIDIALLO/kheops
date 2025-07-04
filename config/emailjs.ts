// Configuration pour l'envoi d'emails via EmailJS
export const emailjsConfig = {
  // Service ID EmailJS
  serviceId: process.env.EMAILJS_SERVICE_ID || "service_xxxxx",

  // Template ID EmailJS
  templateId: process.env.EMAILJS_TEMPLATE_ID || "template_xxxxx",

  // Clé publique EmailJS
  publicKey: process.env.EMAILJS_PUBLIC_KEY || "public_key_xxxxx",

  // Email de destination
  toEmail: "contact.kheops@kheops-consulting.com",

  // Email d'expédition (peut être ton domaine personnalisé)
  fromEmail: "contact.kheops@kheops-consulting.com",
  fromName: "KHEOPS Consulting",

  // Vérifier si la configuration est valide
  isValid: function () {
    return !!(this.serviceId && this.templateId && this.publicKey);
  },
};
