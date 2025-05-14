import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { EmailJSInit } from "@/components/emailjs-init";

export const metadata: Metadata = {
  title: {
    template: '%s | KHEOPS Consulting',
    default: 'KHEOPS Consulting - Experts en Contrôle de Projets',
  },
  description: "Cabinet de conseil spécialisé dans le contrôle de projets : planning, coûts, risques, ordonnancement",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="flex flex-col min-h-screen bg-white">
        <EmailJSInit />
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
