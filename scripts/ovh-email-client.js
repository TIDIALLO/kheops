// Version JavaScript du client OVH Email pour les tests
const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

// Configuration OVH
const ovhEmailConfig = {
  host: 'ssl0.ovh.net',
  port: 587,
  secure: false,
  auth: {
    user: process.env.OVH_EMAIL_USER || 'contact.kheops@kheops-consulting.com',
    pass: process.env.OVH_EMAIL_PASSWORD || 'Contkhparis2025'
  },
  toEmail: 'contact.kheops@kheops-consulting.com',
  fromEmail: 'contact.kheops@kheops-consulting.com',
  fromName: 'KHEOPS Consulting',
  isValid: function() {
    return !!(this.auth.user && this.auth.pass);
  }
};

// Client email pour OVH
class OvhEmailClient {
  constructor(customConfig = null) {
    const config = customConfig || {
      host: ovhEmailConfig.host,
      port: ovhEmailConfig.port,
      secure: ovhEmailConfig.secure
    };

    this.transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: ovhEmailConfig.auth.user,
        pass: ovhEmailConfig.auth.pass,
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  // Tester la connexion SMTP
  async testConnection() {
    try {
      await this.transporter.verify();
      console.log('Connexion SMTP réussie');
      return true;
    } catch (error) {
      console.error('Erreur de connexion SMTP:', error);
      return false;
    }
  }

  // Envoyer un email de contact
  async sendContactEmail(data) {
    try {
      const htmlContent = this.createEmailHTML(data);
      
      const attachments = data.attachments?.map(attachment => ({
        filename: attachment.name,
        content: attachment.content,
        encoding: 'base64',
        contentType: attachment.type
      })) || [];

      const mailOptions = {
        from: `"${ovhEmailConfig.fromName}" <${ovhEmailConfig.fromEmail}>`,
        to: ovhEmailConfig.toEmail,
        replyTo: `"${data.name}" <${data.email}>`,
        subject: `Nouveau contact depuis le site - ${data.name}`,
        html: htmlContent,
        attachments: attachments
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log('Email envoyé avec succès:', result.messageId);
      return true;
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      return false;
    }
  }

  // Créer le contenu HTML de l'email
  createEmailHTML(data) {
    const date = new Date().toLocaleString('fr-FR');
    const reference = `REF-${Date.now()}`;

    return `
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact KHEOPS Consulting</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f5f5f5; }
          .container { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
          .header { background: #8B0000; color: #fff; padding: 25px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; }
          .content { padding: 25px; }
          .footer { background: #f5f5f5; padding: 15px 25px; text-align: center; font-size: 12px; color: #777; }
          .info-row { margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 15px; }
          .info-row:last-child { border-bottom: none; }
          .label { font-weight: bold; color: #8B0000; }
          .message-box { background: #f9f5f5; padding: 15px; border-radius: 5px; margin-top: 20px; border-left: 4px solid #8B0000; }
          .meta-info { font-size: 11px; color: #999; margin-top: 30px; padding-top: 15px; border-top: 1px dashed #eee; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>KHEOPS CONSULTING</h1>
            <p>Nouvelle demande de contact</p>
          </div>
          
          <div class="content">
            <div class="info-row">
              <span class="label">Nom:</span>
              <span>${data.name}</span>
            </div>
            
            <div class="info-row">
              <span class="label">Email:</span>
              <span>${data.email}</span>
            </div>
            
            ${data.phone ? `
            <div class="info-row">
              <span class="label">Téléphone:</span>
              <span>${data.phone}</span>
            </div>
            ` : ''}
            
            ${data.company ? `
            <div class="info-row">
              <span class="label">Entreprise:</span>
              <span>${data.company}</span>
            </div>
            ` : ''}
            
            <div class="info-row">
              <span class="label">Message:</span>
              <div class="message-box">
                ${data.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div class="meta-info">
              <p>Référence: ${reference}</p>
              <p>Date: ${date}</p>
            </div>
          </div>
          
          <div class="footer">
            <p>© 2025 KHEOPS Consulting. Tous droits réservés.</p>
            <p>19 Sicap Rue dix, DAKAR SENEGAL | +221 78.193.59.69</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }
}

module.exports = { OvhEmailClient, ovhEmailConfig }; 