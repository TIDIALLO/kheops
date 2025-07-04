import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata, Viewport } from 'next'
import { Footer } from "@/components/navigation/footer";
import { NavbarClient } from '@/components/navigation/navbar-client'
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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  verification: {
    google: 'votre_code_verification_google',
  },
  appleWebApp: {
    title: siteConfig.name,
    statusBarStyle: 'black-translucent',
    startupImage: [
      {
        url: '/apple-touch-icon.png',
        media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
      },
    ],
  },
  applicationName: 'KHEOPS Consulting',
}

// Fonction pour générer les métadonnées de viewport (nouvelle approche Next.js)
export function generateViewport(): Viewport
{
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: '#8B0000',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
{
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

        <NavbarClient />

        <main id="main-content" className="flex-grow">
          {children}
        </main>

        <Footer />
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
