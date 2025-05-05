'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#333333] text-white w-full relative mt-auto">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-4">
              <div className="relative h-10 w-10 mr-3">
                <Image 
                  src="/images/logo.png" 
                  alt="Logo KHEOPS Consulting" 
                  width={40} 
                  height={40} 
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">KHEOPS</h3>
                <p className="text-sm text-gray-300">Consulting</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 text-sm">
              Cabinet de conseil spécialisé dans le contrôle de projets complexes. Planning, coûts, risques et ordonnancement pour des projets réussis.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-2">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#expertises" className="text-gray-300 hover:text-white transition-colors">
                  Expertises
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/secteurs" className="text-gray-300 hover:text-white transition-colors">
                  Secteurs
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-2">Nos services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Planification de projets</li>
              <li className="text-gray-300">Contrôle des coûts</li>
              <li className="text-gray-300">Analyse de risques</li>
              <li className="text-gray-300">Ordonnancement</li>
              <li className="text-gray-300">Formation et conseil</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-2">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#8B0000] mr-3 mt-0.5 shrink-0" />
                <span className="text-gray-300">19 Sicap Rue dix<br />DAKAR SENEGAL</span>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-[#8B0000] mr-3 mt-0.5 shrink-0" />
                <div className="text-gray-300">
                  <p>SENEGAL: +221 78.193.59.69</p>
                  <p>France: +33 07.86.02.51.97</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-[#8B0000] mr-3 mt-0.5 shrink-0" />
                <span className="text-gray-300">pierredieng.kheops@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton retour en haut */}
        <button 
          onClick={scrollToTop}
          className="fixed right-6 bottom-8 bg-[#8B0000] hover:bg-[#700000] text-white p-3 rounded-full shadow-lg transition-colors z-50"
          aria-label="Retour en haut de page"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-3">
        <div className="container mx-auto px-4 text-center text-gray-400 text-xs">
          <p>&copy; {currentYear} KHEOPS Consulting. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
} 