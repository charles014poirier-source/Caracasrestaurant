import type { Metadata } from 'next'
import { Bebas_Neue, Archivo } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { caracasConfig } from '@/data/clients/caracas'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-archivo',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(caracasConfig.seo.siteUrl),
  title: {
    default: caracasConfig.seo.title.default,
    template: caracasConfig.seo.title.template,
  },
  description: caracasConfig.seo.description,
  keywords: caracasConfig.seo.keywords,
  authors: caracasConfig.seo.authors,
  creator: caracasConfig.seo.creator,
  publisher: caracasConfig.seo.publisher,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: caracasConfig.seo.openGraph,
  twitter: caracasConfig.seo.twitter,
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
  verification: {
    google: 'your-google-verification-code',
  },
}

// Schema.org JSON-LD data
const jsonLd = caracasConfig.seo.jsonLd

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${bebasNeue.variable} ${archivo.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main className="min-h-screen pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
