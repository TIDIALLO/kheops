// Configuration pour Brevo (anciennement Sendinblue)
export const brevoConfig = {
  apiKey: process.env.BREVO_API_KEY,
  
  // Vérifier si la configuration est valide
  isValid: function() {
    return !!this.apiKey;
  },
  
  // Email de destination
  toEmail: 'contact.kheops@kheops-consulting.com',
  
  // Email d'expédition (doit être vérifié dans Brevo)
  fromEmail: 'contact.kheops@kheops-consulting.com',
  fromName: 'KHEOPS Consulting'
} 