// data/clients/caracas/seo.ts
import { SeoData } from '@/data/types/client'

export const seo: SeoData = {
  siteName: 'Caracas Bar & Tapas',
  siteUrl: 'https://caracas-bar-tapas.fr',
  title: {
    default: 'Caracas Bar & Tapas | Cuisine Vénézuélienne à Levallois',
    template: '%s | Caracas Bar & Tapas',
  },
  description: 'Inspiré de Caracas, revisité à Paris. Découvrez les arepas, cachapas et tapas vénézuéliennes dans une ambiance festive et chaleureuse à Levallois.',
  keywords: ['restaurant vénézuélien', 'arepas Paris', 'tapas Levallois', 'cuisine vénézuélienne', 'Caracas', 'restaurant latino'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://caracas-bar-tapas.fr',
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
  jsonLd: {
    '@type': 'Restaurant',
    name: 'Caracas Bar & Tapas',
    image: 'https://caracas-bar-tapas.fr/og-image.jpg',
    description: 'Inspiré de Caracas, revisité à Paris. Découvrez les arepas, cachapas et tapas vénézuéliennes dans une ambiance festive et chaleureuse à Levallois.',
    address: {
      streetAddress: '123 Rue de Paris',
      addressLocality: 'Levallois-Perret',
      postalCode: '92300',
      addressCountry: 'FR',
    },
    geo: {
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
  },
}
