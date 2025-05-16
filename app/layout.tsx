import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { Footer } from "@/components/navigation/footer";
import { EmailJSInit } from "@/components/emailjs-init";
import { NavbarClient } from '@/components/navigation/navbar-client'
import { Chat } from '@/components/ui/chat'
import { ScrollToTop } from '@/components/ui/scroll-to-top'
import { A11yAnnouncer } from '@/components/ui/a11y-announcer'
import { siteConfig } from '@/config/seo'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.organization.name }],
  creator: siteConfig.organization.name,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@KHEOPSConsult',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'votre_code_verification_google',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="fr" 
      className={inter.variable}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Préchargement des ressources critiques */}
        <link
          rel="preload"
          href={inter.url}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white">
        {/* Skip to main content link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-[#8B0000] focus:shadow-lg focus:rounded-md"
        >
          Aller au contenu principal
        </a>
        
        <EmailJSInit />
        <NavbarClient />
        
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        
        <Footer />
        <Chat />
        <ScrollToTop />
        <A11yAnnouncer />
        
        {/* Données structurées Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: siteConfig.organization.name,
              url: siteConfig.url,
              logo: siteConfig.organization.logo,
              address: siteConfig.organization.address,
              contactPoint: siteConfig.organization.contactPoint,
            }),
          }}
        />
      </body>
    </html>
  )
}
