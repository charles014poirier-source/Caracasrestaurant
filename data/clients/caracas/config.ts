// data/clients/caracas/config.ts
import { BrandingConfig } from '@/data/types/client'

export const config: BrandingConfig = {
  name: 'Caracas Bar & Tapas',
  tagline: 'Cuisine vénézuélienne & tapas festives à Levallois',
  description: 'Inspiré de Caracas, revisité à Paris. Un voyage culinaire entre arepas, cachapas et cocktails créoles.',

  colors: {
    primary: '#059669',    // emerald-600
    secondary: '#D97706',  // amber-600
    accent: '#EC4899',     // pink-500
    background: '#FAFAF9', // stone-50
    neutral: '#1C1917',    // stone-900
  },

  typography: {
    display: { family: 'Bebas Neue', variable: '--font-bebas' },
    body: { family: 'Archivo', variable: '--font-archivo' },
  },

  sections: {
    hero: { enabled: true },
    signatures: { enabled: true },
    story: { enabled: true },
    experiences: { enabled: true },
    gallery: { enabled: true },
    events: { enabled: true },
    reviews: { enabled: true },
  },

  cta: {
    primary: {
      text: 'La carte',
      href: '/menu',
    },
    secondary: {
      text: 'Click & Collect',
      href: 'https://deliveroo.fr/fr/menu/paris/levallois-perret/caracas-levallois-31-rue-henri-barbusse',
    },
  },
}
