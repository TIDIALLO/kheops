'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export function Footer() {
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleLogoClick = () => {
    router.push('/');
    scrollToTop();
  };

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#333333] text-white w-full relative mt-auto">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLogoClick}
              className="flex items-center mb-4 cursor-pointer group w-fit"
            >
              <div className="relative h-12 w-12 mr-3 rounded-lg overflow-hidden transition-transform duration-300 group-hover:shadow-lg">
                <Image 
                  src="/images/logo.png" 
                  alt="Logo KHEOPS Consulting" 
                  width={48} 
                  height={48} 
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="transition-all duration-300">
                <h3 className="text-xl font-bold text-white group-hover:text-[#8B0000]">KHEOPS</h3>
                <p className="text-sm text-gray-300 group-hover:text-white">Consulting</p>
              </div>
            </motion.div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Cabinet de conseil spécialisé dans le contrôle de projets complexes. Planning, coûts, risques et ordonnancement pour des projets réussis.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-2">Liens rapides</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#expertises" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Expertises
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/secteurs" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Secteurs
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-2">Nos services</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer hover:translate-x-1 inline-block">
                Planification de projets
              </li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer hover:translate-x-1 inline-block">
                Contrôle des coûts
              </li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer hover:translate-x-1 inline-block">
                Analyse de risques
              </li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer hover:translate-x-1 inline-block">
                Ordonnancement
              </li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer hover:translate-x-1 inline-block">
                Formation et conseil
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-700 pb-2">Contact</h3>
            <div className="space-y-4 text-sm">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start group"
              >
                <MapPin className="w-5 h-5 text-[#8B0000] mr-3 mt-0.5 shrink-0 group-hover:text-white transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  19 Sicap Rue dix<br />DAKAR SENEGAL
                </span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start group"
              >
                <Phone className="w-5 h-5 text-[#8B0000] mr-3 mt-0.5 shrink-0 group-hover:text-white transition-colors" />
                <div className="text-gray-300 group-hover:text-white transition-colors">
                  <p>SENEGAL: +221 78.193.59.69</p>
                  <p>France: +33 07.86.02.51.97</p>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start group"
              >
                <Mail className="w-5 h-5 text-[#8B0000] mr-3 mt-0.5 shrink-0 group-hover:text-white transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  pierredieng.kheops@gmail.com
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bouton retour en haut */}
        <motion.button 
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed right-6 bottom-8 bg-[#8B0000] hover:bg-[#700000] text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 hover:shadow-xl"
          aria-label="Retour en haut de page"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} KHEOPS Consulting. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
} 