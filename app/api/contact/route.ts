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

interface ContactData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

function validateContactData(data: ContactData): string[] {
  const errors: string[] = [];
  if (!data.name || data.name.trim().length < 2)
    errors.push("Le nom doit contenir au moins 2 caractères");
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.push("Format d'email invalide");
  if (!data.message || data.message.trim().length < 10)
    errors.push("Le message doit contenir au moins 10 caractères");
  return errors;
}

function createEmailHTML(data: ContactData): string {
  const date = new Date().toLocaleString("fr-FR");
  const reference = `REF-${Date.now()}`;
  return `
    <html><body>
      <h2>Nouvelle demande de contact</h2>
      <p><b>Nom:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Téléphone:</b> ${data.phone || ""}</p>
      <p><b>Entreprise:</b> ${data.company || ""}</p>
      <p><b>Message:</b><br>${data.message.replace(/\n/g, "<br>")}</p>
      <hr><small>Référence: ${reference} | Date: ${date}</small>
    </body></html>
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

    const result = await resend.emails.send({
      from: `${body.name} <${resendConfig.defaultFromEmail}>`,
      to: [resendConfig.toEmail],
      replyTo: body.email,
      subject: `Nouveau contact depuis le site - ${body.name}`,
      html: htmlContent,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Email envoyé avec succès via Resend",
        messageId: result.data?.id || "sent",
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
