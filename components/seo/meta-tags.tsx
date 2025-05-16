import Head from 'next/head'
import { siteConfig } from '@/config/seo'

interface MetaTagsProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
}

export function MetaTags({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  url = siteConfig.url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
}: MetaTagsProps) {
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`

  return (
    <Head>
      {/* Balises meta de base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* Balises Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />
      
      {/* Balises Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Balises pour articles */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      {section && <meta property="article:section" content={section} />}
      
      {/* Balises pour les moteurs de recherche */}
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content={siteConfig.keywords.join(', ')} />
      
      {/* Langues alternatives */}
      {siteConfig.alternateLanguages.map((lang) => (
        <link
          key={lang.lang}
          rel="alternate"
          hrefLang={lang.lang}
          href={lang.url}
        />
      ))}
      
      {/* Données structurées pour l'organisation */}
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
    </Head>
  )
} 