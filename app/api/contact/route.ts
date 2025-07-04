import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { resendConfig } from "../../../config/resend";

// Forcer la route à être dynamique
export const dynamic = "force-dynamic";

// Initialiser Resend
const resend = new Resend(resendConfig.apiKey);

// Fonction de validation des données
function validateContactData(data: any) {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push("Le nom doit contenir au moins 2 caractères");
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Format d'email invalide");
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push("Le message doit contenir au moins 10 caractères");
  }

  return errors;
}

// Fonction de création du contenu HTML de l'email
function createEmailHTML(data: any) {
  const date = new Date().toLocaleString("fr-FR");
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
          
          ${
            data.phone
              ? `
          <div class="info-row">
            <span class="label">Téléphone:</span>
            <span>${data.phone}</span>
          </div>
          `
              : ""
          }
          
          ${
            data.company
              ? `
          <div class="info-row">
            <span class="label">Entreprise:</span>
            <span>${data.company}</span>
          </div>
          `
              : ""
          }
          
          <div class="info-row">
            <span class="label">Message:</span>
            <div class="message-box">
              ${data.message.replace(/\n/g, "<br>")}
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

// Endpoint principal
export async function POST(request: NextRequest) {
  console.log("📧 Début de la requête POST /api/contact avec Resend");

  try {
    // 1. Vérifier la configuration Resend
    if (!resendConfig.isValid()) {
      console.error("❌ Configuration Resend manquante");
      return NextResponse.json(
        {
          success: false,
          error: "Configuration Resend manquante. Vérifiez RESEND_API_KEY.",
        },
        { status: 500 }
      );
    }

    // 2. Récupérer et valider les données
    const body = await request.json();
    console.log("📝 Données reçues:", {
      name: body.name,
      email: body.email,
      hasPhone: !!body.phone,
      hasCompany: !!body.company,
      messageLength: body.message?.length,
    });

    const validationErrors = validateContactData(body);
    if (validationErrors.length > 0) {
      console.error("❌ Erreurs de validation:", validationErrors);
      return NextResponse.json(
        {
          success: false,
          error: "Données invalides",
          details: validationErrors,
        },
        { status: 400 }
      );
    }

    // 3. Préparer l'email
    console.log("📧 Préparation de l'email avec Resend...");
    const htmlContent = createEmailHTML(body);

    // 4. Envoyer l'email via Resend
    console.log("🚀 Envoi de l'email via Resend...");
    const result = await resend.emails.send({
      from: `${resendConfig.fromName} <${resendConfig.defaultFromEmail}>`,
      to: [resendConfig.toEmail],
      replyTo: body.email,
      subject: `Nouveau contact depuis le site - ${body.name}`,
      html: htmlContent,
    });

    console.log("✅ Email envoyé avec succès via Resend:", result);

    // 5. Réponse de succès
      return NextResponse.json(
      {
        success: true,
        message: "Email envoyé avec succès via Resend",
        messageId: result.data?.id || "sent",
      },
        { status: 200 }
      );
  } catch (error) {
    console.error("❌ Erreur API contact avec Resend:", error);

    // Gestion d'erreur détaillée
    let errorMessage = "Erreur interne du serveur";
    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        errorMessage = "Clé API Resend invalide - Vérifiez RESEND_API_KEY";
      } else if (error.message.includes("domain")) {
        errorMessage = "Domaine d'email non vérifié sur Resend";
      } else {
        errorMessage = error.message;
      }
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        details: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}
