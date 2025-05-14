import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { EmailJSInit } from "@/components/emailjs-init";

export const metadata: Metadata = {
  title: "KHEOPS Consulting - Experts en Contrôle de Projets",
  description: "Cabinet de conseil spécialisé dans le contrôle de projets : planning, coûts, risques, ordonnancement",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
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
