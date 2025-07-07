// Suppression du runtime edge qui peut causer des problèmes
// export const runtime = "edge";

import { Resend } from "resend";
import { resendConfig } from "../../../config/resend";
import { NextRequest, NextResponse } from "next/server";

const allowedOrigins = [
  "http://localhost:3000",
  "https://kheops-consulting.com",
];

function getAllowOrigin(request: NextRequest): string {
  const origin = request.headers.get("origin");
  return allowedOrigins.includes(origin || "")
    ? origin || allowedOrigins[1]
    : allowedOrigins[1];
}

export async function OPTIONS(request: NextRequest) {
  const allowOrigin = getAllowOrigin(request);
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": allowOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
}

interface FileData {
  name: string;
  size: number;
  type: string;
  data: string; // base64
}

interface ContactData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  files?: FileData[];
}

function validateContactData(data: ContactData): string[] {
  const errors: string[] = [];
  if (!data.name || data.name.trim().length < 2)
    errors.push("Le nom doit contenir au moins 2 caractères");
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.push("Format d'email invalide");
  if (!data.message || data.message.trim().length < 10)
    errors.push("Le message doit contenir au moins 10 caractères");

  // Validation des fichiers
  if (data.files && data.files.length > 0) {
    const maxFileSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
      "image/gif",
      "text/plain",
    ];

    data.files.forEach((file, index) => {
      if (file.size > maxFileSize) {
        errors.push(
          `Le fichier "${file.name}" dépasse la taille maximale de 10MB`
        );
      }
      if (!allowedTypes.includes(file.type)) {
        errors.push(`Le type de fichier "${file.name}" n'est pas autorisé`);
      }
    });
  }

  return errors;
}

function createEmailHTML(data: ContactData): string {
  const date = new Date().toLocaleString("fr-FR");
  const reference = `REF-${Date.now()}`;

  let filesList = "";
  if (data.files && data.files.length > 0) {
    filesList = `
      <h3>📎 Pièces jointes (${data.files.length}) :</h3>
      <ul>
        ${data.files
          .map(
            (file) => `
          <li>📄 ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)</li>
        `
          )
          .join("")}
      </ul>
    `;
  }

  return `
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: #8B0000; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .field { margin-bottom: 15px; }
        .field strong { color: #8B0000; }
        .files { background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0; }
        .footer { background: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="header">
        <h2>📧 Nouvelle demande de contact KHEOPS</h2>
      </div>
      
      <div class="content">
        <div class="field">
          <strong>👤 Nom :</strong> ${data.name}
        </div>
        
        <div class="field">
          <strong>📧 Email :</strong> ${data.email}
        </div>
        
        ${
          data.phone
            ? `
        <div class="field">
          <strong>📞 Téléphone :</strong> ${data.phone}
        </div>
        `
            : ""
        }
        
        ${
          data.company
            ? `
        <div class="field">
          <strong>🏢 Entreprise :</strong> ${data.company}
        </div>
        `
            : ""
        }
        
        <div class="field">
          <strong>💬 Message :</strong><br>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
            ${data.message.replace(/\n/g, "<br>")}
          </div>
        </div>
        
        ${filesList}
      </div>
      
      <div class="footer">
        <strong>Référence :</strong> ${reference} | <strong>Date :</strong> ${date}
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  const allowOrigin = getAllowOrigin(request);

  try {
    const body: ContactData = await request.json();
    const validationErrors = validateContactData(body);

    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Données invalides",
          details: validationErrors,
        },
        {
          status: 400,
          headers: {
            "Access-Control-Allow-Origin": allowOrigin,
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Max-Age": "86400",
          },
        }
      );
    }

    // Vérifier si la configuration Resend est valide
    if (!resendConfig.isValid()) {
      return NextResponse.json(
        {
          success: false,
          error: "Configuration email non valide",
        },
        {
          status: 500,
          headers: {
            "Access-Control-Allow-Origin": allowOrigin,
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Max-Age": "86400",
          },
        }
      );
    }

    const resend = new Resend(resendConfig.apiKey);
    const htmlContent = createEmailHTML(body);

    // Préparer les pièces jointes si elles existent
    const attachments = body.files
      ? body.files.map((file) => ({
          filename: file.name,
          content: Buffer.from(file.data, "base64"),
        }))
      : [];

    const result = await resend.emails.send({
      from: `${body.name} <${resendConfig.defaultFromEmail}>`,
      to: [resendConfig.toEmail],
      replyTo: body.email,
      subject: `Nouveau contact depuis le site - ${body.name}${body.files && body.files.length > 0 ? ` (${body.files.length} pièce${body.files.length > 1 ? "s" : ""} jointe${body.files.length > 1 ? "s" : ""})` : ""}`,
      html: htmlContent,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return NextResponse.json(
      {
        success: true,
        message: `Email envoyé avec succès via Resend${body.files && body.files.length > 0 ? ` avec ${body.files.length} pièce${body.files.length > 1 ? "s" : ""} jointe${body.files.length > 1 ? "s" : ""}` : ""}`,
        messageId: result.data?.id || "sent",
        filesCount: body.files ? body.files.length : 0,
      },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": allowOrigin,
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400",
        },
      }
    );
  } catch (error) {
    console.error("Erreur API contact:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Erreur interne du serveur",
      },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": allowOrigin,
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400",
        },
      }
    );
  }
}
