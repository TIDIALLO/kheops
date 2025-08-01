'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X, Home, Briefcase, Star, Building, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { debounce } from '@/lib/utils'

export function NavbarClient() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('/')
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  // Optimisation des fonctions avec useCallback
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const navigateHome = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
    setIsMenuOpen(false);
  }, [pathname, router]);

  // Optimized link click handler with debounce
  const handleLinkClick = useCallback(
    debounce((e: React.MouseEvent, href: string) => {
      e.preventDefault();
      setActiveLink(href);
      setIsMenuOpen(false);
      
      if (href === '/') {
        navigateHome(e);
        return;
      }

      if (!href.includes('#')) {
        router.push(href);
        return;
      }

      const [pagePath, anchor] = href.split('#');
      if (!pagePath || pathname === pagePath) {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push(href);
      }
    }, 100),
    [pathname, router, navigateHome]
  );

  // Optimized scroll handler with RAF and debounce
  useEffect(() => {
    let rafId: number;
    let lastScrollY = window.scrollY;
    
    const handleScroll = debounce(() => {
      rafId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        if (Math.abs(currentScrollY - lastScrollY) > 5) {
          setScrolled(currentScrollY > 50);
          lastScrollY = currentScrollY;
        }
      });
    }, 10);

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Memoized animation variants
  const linkVariants = useMemo(() => ({
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
        ease: 'easeOut'
      }
    },
    active: {
      opacity: 1,
      scale: 1.05,
      color: '#8B0000',
      fontWeight: '600',
      backgroundColor: 'rgba(139, 0, 0, 0.1)',
      transition: { 
        duration: 0.2
      }
    }
  }), []);

  // Memoized navigation links
  const navLinks = useMemo(() => [
    { href: '/', label: 'Accueil', icon: Home },
    { href: '/services', label: 'Services', icon: Briefcase },
    { href: '/methodologie', label: 'Méthodologie', icon: Star },
    { href: '/secteurs', label: 'Secteurs', icon: Building },
    { href: '/expertise', label: 'Expertise', icon: Lightbulb }
  ], []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 will-change-transform
        ${scrolled 
          ? 'py-2.5 bg-white/98 backdrop-blur-sm shadow-lg border-b border-[#8B0000]/10' 
          : 'py-3 bg-white bg-opacity-98'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo avec navigation optimisée */}
          <Link 
            href="/"
            onClick={navigateHome}
            className="group flex items-center space-x-2 transition-transform duration-200"
          >
            <motion.div 
              className="relative h-11 w-11 overflow-hidden rounded-lg bg-white shadow-md"
              whileHover={{ scale: 1.05, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Image 
                src="/images/logo.png" 
                alt="Logo KHEOPS Consulting" 
                width={44} 
                height={44} 
                priority
                className="object-contain p-0.5"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#8B0000] leading-tight tracking-tight group-hover:tracking-normal transition-all duration-200">
                KHEOPS
              </span>
              <span className="text-sm text-[#5A5A5A] leading-none tracking-wide">
                Consulting
              </span>
            </div>
          </Link>

          {/* Navigation desktop optimisée */}
          <nav className="hidden md:flex space-x-2 lg:space-x-3 p-2 rounded-full bg-white/95 backdrop-blur-sm shadow-md ml-4 border border-gray-100">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                initial="initial"
                animate={activeLink === link.href ? "active" : hoveredLink === link.href ? "hover" : "initial"}
                variants={linkVariants}
                className={`relative py-2.5 px-4 rounded-full transition-transform duration-200 ${
                  activeLink === link.href 
                    ? 'bg-[#8B0000]/10 shadow-sm' 
                    : 'hover:bg-[#8B0000]/5'
                }`}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link 
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`flex items-center gap-2 text-base transition-colors relative z-10 ${
                    activeLink === link.href 
                      ? 'text-[#8B0000] font-semibold' 
                      : 'text-[#1C1C1C] font-medium hover:text-[#8B0000]'
                  }`}
                >
                  <link.icon className={`w-5 h-5 ${activeLink === link.href ? 'text-[#8B0000]' : 'text-[#5A5A5A]'}`} />
                  <span className="font-medium">{link.label}</span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Bouton Demander un devis */}
          <Link 
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              if (pathname === '/') {
                // Si on est sur la page d'accueil, on fait défiler jusqu'à la section contact
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              } else {
                // Si on est sur une autre page, on redirige vers la page d'accueil avec l'ancre #contact
                router.push('/#contact');
              }
              setIsMenuOpen(false);
            }}
            className="hidden md:block"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                className="bg-[#8B0000] hover:bg-[#700000] text-white shadow-md px-7 py-3 text-base font-medium transition-colors duration-200 hover:shadow-lg rounded-full"
              >
                Demander un devis
              </Button>
            </motion.div>
          </Link>

          {/* Menu mobile optimisé */}
          <motion.button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full bg-white shadow-md text-[#1C1C1C] hover:text-[#8B0000] hover:bg-[#8B0000]/5 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Menu mobile avec animation optimisée */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              className="md:hidden pt-4 pb-2 border-t mt-4 space-y-2 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  className={`mx-2 rounded-xl overflow-hidden transition-colors duration-200 ${
                    activeLink === link.href ? 'bg-[#8B0000]/10' : ''
                  }`}
                >
                  <Link 
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`flex items-center gap-3 py-3 px-4 text-base transition-colors ${
                      activeLink === link.href 
                        ? 'text-[#8B0000] font-semibold' 
                        : 'text-[#1C1C1C] hover:text-[#8B0000]'
                    }`}
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
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
} 