import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/navbar";

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
      <body className="min-h-screen bg-white">
        <Navbar />
        {children}
        <footer className="bg-[#1C1C1C] text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">KHEOPS Consulting</h3>
                <p className="text-gray-300">
                  Experts en contrôle de projets et en gestion contractuelle pour vos projets complexes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white">Accueil</a></li>
                  <li><a href="#expertises" className="text-gray-300 hover:text-white">Expertises</a></li>
                  <li><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
                  <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <address className="text-gray-300 not-italic">
                  19 Sicap Rue dix<br />
                  DAKAR SENEGAL<br />
                  <span className="block mt-2">SENEGAL: <a href="tel:+221781935969" className="hover:text-white">+221 78.193.59.69</a></span>
                  <span className="block">France: <a href="tel:+33078602597" className="hover:text-white">+33 07 86 02 51 97</a></span>
                  <a href="mailto:pierredieng.kheops@gmail.com" className="hover:text-white block mt-2">pierredieng.kheops@gmail.com</a>
                </address>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} KHEOPS Consulting. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
