'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function NavbarClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Effet de scroll pour changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header 
      className={`bg-white shadow-sm py-4 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-md' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#8B0000] hover:scale-105 transition-transform">
            KHEOPS Consulting
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-[#1C1C1C] hover:text-[#8B0000] transition-colors">
              Accueil
            </Link>
            <Link href="#services" className="text-[#1C1C1C] hover:text-[#8B0000] transition-colors">
              Services
            </Link>
            <Link href="#expertises" className="text-[#1C1C1C] hover:text-[#8B0000] transition-colors">
              Expertises
            </Link>
            <Link href="#domaines" className="text-[#1C1C1C] hover:text-[#8B0000] transition-colors">
              Secteurs
            </Link>
            <Link href="#contact" className="text-[#1C1C1C] hover:text-[#8B0000] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Bouton Contact (visible sur desktop) */}
          <Button 
            className="hidden md:flex bg-[#8B0000] hover:bg-[#700000] text-white hover:scale-105 transition-transform"
          >
            Demander un devis
          </Button>

          {/* Bouton menu mobile */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-[#1C1C1C] hover:text-[#8B0000]"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 border-t mt-4 space-y-4 animate-fadeIn">
            <Link 
              href="/" 
              className="block py-2 text-[#1C1C1C] hover:text-[#8B0000]"
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            <Link 
              href="#services" 
              className="block py-2 text-[#1C1C1C] hover:text-[#8B0000]"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              href="#expertises" 
              className="block py-2 text-[#1C1C1C] hover:text-[#8B0000]"
              onClick={toggleMenu}
            >
              Expertises
            </Link>
            <Link 
              href="#domaines" 
              className="block py-2 text-[#1C1C1C] hover:text-[#8B0000]"
              onClick={toggleMenu}
            >
              Secteurs
            </Link>
            <Link 
              href="#contact" 
              className="block py-2 text-[#1C1C1C] hover:text-[#8B0000]"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button 
              className="w-full bg-[#8B0000] hover:bg-[#700000] text-white mt-4"
              onClick={toggleMenu}
            >
              Demander un devis
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
} 