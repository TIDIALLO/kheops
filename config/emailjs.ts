// Configuration pour EmailJS
export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  
  // Vérifier si la configuration est valide
  isValid: function() {
    if (!this.serviceId) {
      console.error('EmailJS: Service ID manquant');
      return false;
    }
    if (!this.templateId) {
      console.error('EmailJS: Template ID manquant');
      return false;
    }
    if (!this.publicKey) {
      console.error('EmailJS: Public Key manquante');
      return false;
    }
    return true;
  }
}

// Vérifier la configuration au chargement
if (!emailjsConfig.isValid()) {
  console.error('Configuration EmailJS invalide. Veuillez vérifier vos variables d\'environnement.');
} 