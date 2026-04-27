// data/clients/caracas/seo.ts
import { SeoData } from '@/data/types/client'

export const seo: SeoData = {
  siteName: 'Caracas Bar & Tapas',
  siteUrl: 'https://caracas-bar-tapas.fr',
  title: {
    default: 'Caracas Bar & Tapas | Restaurant Vénézuélien à Levallois-Perret',
    template: '%s | Caracas Bar & Tapas',
  },
  description: 'Restaurant vénézuélien authentique à Levallois-Perret. Découvrez nos arepas, cachapas, tapas et cocktails créoles dans une ambiance festive et chaleureuse. Réservation en ligne.',
  keywords: [
    'restaurant vénézuélien Levallois',
    'arepas Levallois-Perret',
    'tapas vénézuéliennes Paris',
    'restaurant latino Levallois',
    'cuisine sud-américaine',
    'restaurant festif Paris',
    'cocktails créoles',
    'cachapas',
    'empanadas',
    'pabellón criollo',
    'restaurant 92300',
    'restaurant Levallois centre',
    'soirée latino Paris'
  ],
  authors: [
    { name: 'Caracas Bar & Tapas' }
  ],
  creator: 'Caracas Bar & Tapas',
  publisher: 'Caracas Bar & Tapas',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://caracas-bar-tapas.fr',
    title: 'Caracas Bar & Tapas | Restaurant Vénézuélien à Levallois-Perret',
    description: 'Restaurant vénézuélien authentique à Levallois-Perret. Découvrez nos arepas, cachapas, tapas et cocktails créoles dans une ambiance festive.',
    images: [
      {
        url: 'https://caracas-bar-tapas.fr/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Caracas Bar & Tapas - Restaurant Vénézuélien à Levallois',
      },
    ],
    siteName: 'Caracas Bar & Tapas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caracas Bar & Tapas | Restaurant Vénézuélien à Levallois',
    description: 'Restaurant vénézuélien authentique à Levallois-Perret. Découvrez nos arepas, cachapas et tapas.',
    images: ['https://caracas-bar-tapas.fr/og-image.jpg'],
  },
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Caracas Bar & Tapas',
    image: [
      'https://caracas-bar-tapas.fr/og-image.jpg',
      'https://caracas-bar-tapas.fr/images/caracas-interieur.jpg'
    ],
    description: 'Restaurant vénézuélien authentique situé à Levallois-Perret. Spécialités : arepas, cachapas, tapas vénézuéliennes et cocktails créoles. Ambiance festive et chaleureuse.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '31 Rue Henri Barbusse',
      addressLocality: 'Levallois-Perret',
      postalCode: '92300',
      addressCountry: 'FR',
      addressRegion: 'Île-de-France'
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
    servesCuisine: ['Venezuelan', 'Latin American', 'Tapas', 'South American'],
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
    acceptsReservations: true,
    reservationUrl: 'https://caracas-bar-tapas.fr/contact#reservation',
    menu: 'https://caracas-bar-tapas.fr/menu',
    sameAs: [
      'https://www.instagram.com/holacaracas.paris/',
      'https://www.facebook.com/caracas.bar.tapas',
      'https://www.linkedin.com/company/caracas-paris/'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '120',
      bestRating: '5',
      worstRating: '1',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 48.8924,
        longitude: 2.2875,
      },
      geoRadius: '5000'
    }
  },
}
