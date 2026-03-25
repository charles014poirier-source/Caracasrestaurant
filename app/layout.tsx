import type { Metadata } from 'next'
import { Bebas_Neue, Archivo } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { restaurantInfo } from '@/data/restaurant'

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
  metadataBase: new URL('https://caracas-bar-tapas.fr'),
  title: {
    default: 'Caracas Bar & Tapas | Cuisine Vénézuélienne à Levallois',
    template: '%s | Caracas Bar & Tapas',
  },
  description: 'Inspiré de Caracas, revisité à Paris. Découvrez les arepas, cachapas et tapas vénézuéliennes dans une ambiance festive et chaleureuse à Levallois.',
  keywords: ['restaurant vénézuélien', 'arepas Paris', 'tapas Levallois', 'cuisine vénézuélienne', 'Caracas', 'restaurant latino'],
  authors: [{ name: 'Caracas Bar & Tapas' }],
  creator: 'Caracas Bar & Tapas',
  publisher: 'Caracas Bar & Tapas',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://caracas-bar-tapas.fr',
    siteName: 'Caracas Bar & Tapas',
    title: 'Caracas Bar & Tapas | Cuisine Vénézuélienne à Levallois',
    description: 'Inspiré de Caracas, revisité à Paris. Découvrez les arepas, cachapas et tapas vénézuéliennes dans une ambiance festive et chaleureuse à Levallois.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Caracas Bar & Tapas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caracas Bar & Tapas | Cuisine Vénézuélienne à Levallois',
    description: 'Inspiré de Caracas, revisité à Paris. Découvrez les arepas, cachapas et tapas vénézuéliennes.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

// Schema.org JSON-LD data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Caracas Bar & Tapas',
  image: 'https://caracas-bar-tapas.fr/og-image.jpg',
  description: 'Inspiré de Caracas, revisité à Paris. Découvrez les arepas, cachapas et tapas vénézuéliennes dans une ambiance festive et chaleureuse à Levallois.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Rue de Paris',
    addressLocality: 'Levallois-Perret',
    postalCode: '92300',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.8924,
    longitude: 2.2875,
  },
  url: 'https://caracas-bar-tapas.fr',
  telephone: '+33123456789',
  email: 'contact@caracas-bar-tapas.fr',
  priceRange: '€€',
  servesCuisine: ['Venezuelan', 'Latin American', 'Tapas'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Wednesday'],
      opens: '19:00',
      closes: '23:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Thursday', 'Friday'],
      opens: '19:00',
      closes: '00:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '18:00',
      closes: '00:00',
    },
  ],
  sameAs: [
    'https://instagram.com/caracasbartapas',
    'https://facebook.com/caracasbartapas',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '120',
  },
}

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
