import nodemailer from 'nodemailer';

async function testSMTP() {
  const transporter = nodemailer.createTransport({
    host: 'ssl0.ovh.net',
    port: 465,
    secure: true,
    auth: {
      user: 'contact.kheops@kheops-consulting.com',
      pass: 'Contkhparis2025',
    },
  });

  try {
    await transporter.verify();
    console.log(' Connexion SMTP réussie');
  } catch (err) {
    console.error(' Erreur SMTP :', err);
  }
}

testSMTP();
