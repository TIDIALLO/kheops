// Configuration pour EmailJS
export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_0k7sqys',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_py1g735',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'NcSUafJLSL3cqsMvt',
  
  // Vérifier si la configuration est valide
  isValid: function() {
    return !!this.serviceId && 
           !!this.templateId && 
           !!this.publicKey;
  }
} 