// Script de test pour la configuration OVH Email
const { OvhEmailClient, ovhEmailConfig } = require('./ovh-email-client');

// Configurations SMTP alternatives pour OVH
const smtpConfigs = [
  {
    name: 'Configuration 1 (SSL0)',
    host: 'ssl0.ovh.net',
    port: 587,
    secure: false
  },
  {
    name: 'Configuration 2 (SSL0 SSL)',
    host: 'ssl0.ovh.net',
    port: 465,
    secure: true
  },
  {
    name: 'Configuration 3 (Pro1)',
    host: 'pro1.mail.ovh.net',
    port: 587,
    secure: false
  },
  {
    name: 'Configuration 4 (Pro1 SSL)',
    host: 'pro1.mail.ovh.net',
    port: 465,
    secure: true
  }
];

async function testOvhEmail() {
  console.log('🧪 Test de la configuration OVH Email...\n');

  // Vérifier la configuration
  if (!ovhEmailConfig.isValid()) {
    console.log('❌ Configuration manquante');
    console.log('Vérifiez que le fichier .env.local contient :');
    console.log('OVH_EMAIL_USER=contact.kheops@kheops-consulting.com');
    console.log('OVH_EMAIL_PASSWORD=ton_mot_de_passe_ovh');
    return;
  }

  console.log('✅ Configuration trouvée');
  console.log(`📧 Email: ${ovhEmailConfig.auth.user}\n`);

  // Tester chaque configuration SMTP
  for (const config of smtpConfigs) {
    console.log(`\n🔧 Test de la ${config.name}...`);
    
    try {
      const testClient = new OvhEmailClient(config);
      const connectionOk = await testClient.testConnection();
      
      if (connectionOk) {
        console.log(`✅ ${config.name} - Connexion réussie !`);
        
        // Test d'envoi avec cette configuration
        console.log('📤 Test d\'envoi d\'email...');
        const testData = {
          name: 'Test KHEOPS',
          email: 'test@example.com',
          phone: '+221 78.193.59.69',
          company: 'KHEOPS Consulting',
          message: `Test avec ${config.name} - ${new Date().toLocaleString()}`
        };

        const success = await testClient.sendContactEmail(testData);
        
        if (success) {
          console.log('✅ Email de test envoyé avec succès !');
          console.log('📬 Vérifiez votre boîte de réception sur contact.kheops@kheops-consulting.com');
          console.log(`\n🎉 Configuration gagnante : ${config.name}`);
          console.log(`Host: ${config.host}, Port: ${config.port}, Secure: ${config.secure}`);
          return;
        } else {
          console.log('❌ Échec de l\'envoi de l\'email');
        }
      } else {
        console.log(`❌ ${config.name} - Échec de la connexion`);
      }
    } catch (error) {
      console.log(`❌ ${config.name} - Erreur: ${error.message}`);
    }
  }

  console.log('\n❌ Aucune configuration SMTP n\'a fonctionné');
  console.log('\n🔧 Suggestions :');
  console.log('1. Vérifiez que l\'email est bien activé dans votre panneau OVH');
  console.log('2. Vérifiez qu\'il n\'y a pas de restrictions SMTP activées');
  console.log('3. Contactez OVH pour vérifier les paramètres SMTP de votre email');
}

// Exécuter le test
testOvhEmail(); 