// Configuration pour EmailJS
export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  
  // Vérifier si la configuration est valide
  isValid: function() {
    return !!(this.serviceId && this.templateId && this.publicKey);
  }
} 