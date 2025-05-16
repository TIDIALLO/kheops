'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Menu, X, Home, Briefcase, Star, Building, MessageSquare, HelpCircle, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Chat } from '@/components/ui/chat'

export function NavbarClient() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('/')
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [isChatOpen, setIsChatOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Handler pour les clics sur les liens internes
  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsMenuOpen(false);
    
    // Si c'est un lien d'ancrage, effectuer un défilement fluide
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.includes('#')) {
      // Si c'est un lien de page avec ancre (exemple: '/#contact')
      const pagePath = href.split('#')[0];
      const anchorId = href.split('#')[1];
      
      // Si nous sommes déjà sur la bonne page, simplement défiler vers l'ancre
      if (window.location.pathname === pagePath || (pagePath === '/' && window.location.pathname === '')) {
        const element = document.querySelector(`#${anchorId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Sinon, naviguer vers la page, puis défiler vers l'ancre
        router.push(href);
      }
    }
  };

  // Fonction pour naviguer vers la page de contact
  const navigateToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('/contact');
  };

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
    
    // Observer les sections pour la navigation active
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    }
  }, [])

  // Animation variants pour les liens
  const linkVariants = {
    initial: { 
      opacity: 0.9, 
      scale: 1,
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    hover: { 
      opacity: 1, 
      scale: 1.05,
      backgroundColor: 'rgba(139, 0, 0, 0.08)',
      transition: { 
        duration: 0.2,
        ease: 'easeInOut'
      }
    },
    active: {
      opacity: 1,
      scale: 1.05,
      color: '#8B0000',
      fontWeight: '600',
      backgroundColor: 'rgba(139, 0, 0, 0.1)',
      transition: { 
        duration: 0.3
      }
    }
  };

  // Configuration des liens de navigation avec icônes
  const navLinks = [
    { href: '/', label: 'Accueil', icon: Home },
    { href: '/services', label: 'Services', icon: Briefcase },
    { href: '/methodologie', label: 'Méthodologie', icon: Star },
    { href: '/secteurs', label: 'Secteurs', icon: Building },
    { href: '/#contact', label: 'Contact', icon: MessageSquare },
    { href: '/recherche', label: 'Expertise', icon: Search }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 
        ${scrolled 
          ? 'py-2 bg-white/98 backdrop-blur-sm shadow-lg border-b border-[#8B0000]/10' 
          : 'py-4 bg-white bg-opacity-98'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo avec image et effet au survol */}
          <motion.div 
            className="group flex items-center space-x-3 transition-all duration-300 cursor-pointer"
            onClick={() => handleLinkClick('/')}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="relative h-14 w-14 overflow-hidden rounded-lg bg-white shadow-md"
              whileHover={{ scale: 1.05, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image 
                src="/images/logo.png" 
                alt="Logo KHEOPS Consulting" 
                width={56} 
                height={56} 
                priority
                className="object-contain p-1"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#8B0000] leading-tight tracking-tight group-hover:tracking-normal transition-all duration-300">
                KHEOPS
              </span>
              <span className="text-base text-[#5A5A5A] leading-tight tracking-wide">
                Consulting
              </span>
            </div>
          </motion.div>

          {/* Navigation desktop améliorée avec icônes */}
          <nav className="hidden md:flex space-x-2 lg:space-x-3 p-2 rounded-full bg-white/95 backdrop-blur-sm shadow-md ml-6 border border-gray-100">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                initial="initial"
                animate={activeLink === link.href ? "active" : hoveredLink === link.href ? "hover" : "initial"}
                variants={linkVariants}
                className={`relative py-2 px-4 rounded-full transition-all duration-300 ${
                  activeLink === link.href 
                    ? 'bg-[#8B0000]/10 shadow-sm' 
                    : 'hover:bg-[#8B0000]/5'
                }`}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link 
                  href={link.href}
                  className={`flex items-center gap-2 text-base transition-all relative z-10 ${
                    activeLink === link.href 
                      ? 'text-[#8B0000] font-semibold' 
                      : 'text-[#1C1C1C] font-medium hover:text-[#8B0000]'
                  }`}
                  onClick={(e) => {
                    // Pour les liens vers des pages, on laisse la navigation normale
                    if (link.href.startsWith('/') && !link.href.includes('#')) {
                      setActiveLink(link.href);
                      setIsMenuOpen(false);
                      return;
                    }
                    
                    // Pour les ancres, on fait un défilement fluide
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                >
                  <link.icon className={`w-5 h-5 ${activeLink === link.href ? 'text-[#8B0000]' : 'text-[#5A5A5A]'}`} />
                  <span className="font-medium">{link.label}</span>
                </Link>
                
                {/* Indicateur de lien actif unique */}
                <motion.div 
                  layoutId="activeIndicator"
                  className={`absolute -bottom-1 left-0 right-0 mx-auto h-0.5 bg-[#8B0000] rounded-full ${
                    activeLink === link.href ? 'w-3/4' : hoveredLink === link.href ? 'w-1/2' : 'w-0'
                  }`}
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: activeLink === link.href ? "75%" : hoveredLink === link.href ? "50%" : "0%"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </nav>

          {/* Bouton Contact amélioré (visible sur desktop) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:block"
          >
            <Button 
              className="bg-[#8B0000] hover:bg-[#700000] text-white shadow-md px-6 py-5 text-base font-medium transition-all duration-300 hover:shadow-lg rounded-full"
              onClick={navigateToContact}
            >
              Demander un devis
            </Button>
          </motion.div>

          {/* Bouton menu mobile amélioré */}
          <motion.button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full bg-white shadow-md text-[#1C1C1C] hover:text-[#8B0000] hover:bg-[#8B0000]/5 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Menu mobile amélioré avec icônes */}
        {isMenuOpen && (
          <motion.nav 
            className="md:hidden pt-4 pb-2 border-t mt-4 space-y-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`mx-2 rounded-xl overflow-hidden transition-all duration-200 ${
                  activeLink === link.href ? 'bg-[#8B0000]/10' : ''
                }`}
              >
                <Link 
                  href={link.href} 
                  className={`flex items-center gap-3 py-3 px-4 text-base transition-all ${
                    activeLink === link.href 
                      ? 'text-[#8B0000] font-semibold' 
                      : 'text-[#1C1C1C] hover:text-[#8B0000]'
                  }`}
                  onClick={(e) => {
                    // Pour les liens vers des pages, on laisse la navigation normale
                    if (link.href.startsWith('/') && !link.href.includes('#')) {
                      setActiveLink(link.href);
                      setIsMenuOpen(false);
                      return;
                    }
                    
                    // Pour les ancres, on fait un défilement fluide
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                >
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    activeLink === link.href 
                      ? 'bg-[#8B0000] text-white' 
                      : 'bg-gray-100 text-[#5A5A5A]'
                  }`}>
                    <link.icon className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{link.label}</span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="px-2 pt-2"
            >
              <Button 
                className="w-full bg-gradient-to-r from-[#8B0000] to-[#A80000] hover:from-[#700000] hover:to-[#900000] text-white mt-2 py-5 text-base font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={navigateToContact}
              >
                Demander un devis
              </Button>
            </motion.div>
          </motion.nav>
        )}
      </div>
    </header>
  )
} 