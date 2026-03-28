# Refactor Starter Réutilisable - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transformer le projet Caracas Bar & Tapas en un starter réutilisable pour sites de restaurant/coffee shop/bar, sans modifier l'apparence ni la structure.

**Architecture:** Refactor progressive par sections - créer une structure de données modulaire (content, menu, seo, config, images, contact), migrer les données de Caracas, puis refactoriser chaque composant pour consommer ces données via des props typées.

**Tech Stack:** TypeScript, Next.js 15, React, Tailwind CSS

---

## Phase 1 : Structure de types et dossiers

### Task 1: Créer les types principaux

**Files:**
- Create: `data/types/client.ts`

**Step 1: Créer le fichier de types principal**

```typescript
// data/types/client.ts

// Types principaux
export interface ClientConfig {
  content: ContentData
  menu: MenuData
  seo: SeoData
  config: BrandingConfig
  images: ImageConfig
  contact: ContactData
}

// Contenu éditorial
export interface ContentData {
  hero: HeroContent
  story: StoryContent
  experiences: ExperienceItem[]
  glossary: GlossaryItem[]
}

export interface HeroContent {
  enabled: boolean
  location: string
  tagline: string
  description: string
  backgroundImage: string
  quickInfo?: {
    rating?: string
    reviewCount?: string
  }
}

export interface StoryContent {
  enabled: boolean
  title: string
  paragraphs: string[]
  image: string
  establishmentYear?: number
}

export interface ExperienceItem {
  title: string
  description: string
  icon: string
}

export interface GlossaryItem {
  term: string
  definition: string
}

// Branding et design
export interface BrandingConfig {
  name: string
  tagline: string
  description: string
  colors: ColorScheme
  typography: Typography
  sections: SectionConfig
  cta: CTAConfig
}

export interface ColorScheme {
  primary: string
  secondary: string
  accent?: string
  background: string
  neutral: string
}

export interface Typography {
  display: { family: string; variable: string }
  body: { family: string; variable: string }
}

export interface SectionConfig {
  hero: { enabled: boolean }
  signatures: { enabled: boolean }
  story: { enabled: boolean }
  experiences: { enabled: boolean }
  gallery: { enabled: boolean }
  events: { enabled: boolean }
  reviews: { enabled: boolean }
}

export interface CTAConfig {
  primary: {
    text: string
    href: string
  }
  secondary?: {
    text: string
    href: string
  }
}

// Images
export interface ImageConfig {
  hero: {
    background: string
    localFallback?: string
  }
  story: {
    main: string
    localFallback?: string
  }
  gallery: ImageRef[]
  events: {
    afterwork: string
    privatization: string
    catering: string
  }
  menu: Record<string, string> // id item -> URL image
}

export interface ImageRef {
  src: string
  alt: string
  localFallback?: string
}

// Contact
export interface ContactData {
  address: {
    street: string
    city: string
    full: string
  }
  phone: string
  phoneLink: string
  email: string
  social: {
    instagram: string
    facebook: string
    linkedin?: string
  }
  hours: Record<string, string | null>
  reservationUrl: string
  googleMapsUrl: string
}

// SEO
export interface SeoData {
  siteName: string
  siteUrl: string
  title: {
    default: string
    template: string
  }
  description: string
  keywords: string[]
  openGraph: {
    type: string
    locale: string
    url: string
    title: string
    description: string
    images: Array<{
      url: string
      width: number
      height: number
      alt: string
    }>
  }
  twitter: {
    card: string
    title: string
    description: string
    images: string[]
  }
  jsonLd: {
    '@type': string
    name: string
    image: string
    description: string
    address: {
      streetAddress: string
      addressLocality: string
      postalCode: string
      addressCountry: string
    }
    geo: {
      latitude: number
      longitude: number
    }
    url: string
    telephone: string
    email: string
    priceRange: string
    servesCuisine: string[]
    openingHoursSpecification: Array<{
      '@type': string
      dayOfWeek: string | string[]
      opens: string
      closes: string
    }>
    sameAs: string[]
    aggregateRating: {
      '@type': string
      ratingValue: string
      reviewCount: string
    }
  }
}

// Menu
export interface MenuData {
  categories: MenuCategory[]
  items: MenuItem[]
  signatureDishes: SignatureDish[]
}

export interface MenuCategory {
  id: string
  name: string
  icon: string
}

export type BadgeType = 'bestseller' | 'spicy' | 'veggie' | 'new'
export type AllergenType = 'Gluten' | 'Crustacés' | 'Œufs' | 'Poisson' | 'Arachide' | 'Soja' | 'Lait' | 'Fruits à coque' | 'Céleri' | 'Moutarde' | 'Sésame' | 'Sulfites' | 'Lupin' | 'Mollusques'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  badges?: BadgeType[]
  allergens?: AllergenType[]
  image?: string
}

export interface SignatureDish {
  id: string
  name: string
  description: string
  price: number
  image: string
  badges: BadgeType[]
  category: string
}

// Événements et avis
export interface EventItem {
  title: string
  description: string
  icon: string
  image: string
  cta?: {
    text: string
    subtitle: string
    gradient: string
    iconBg: string
  }
}

export interface ReviewItem {
  id: number
  name: string
  date: string
  rating: number
  text: string
}
```

**Step 2: Commit**

```bash
git add data/types/client.ts
git commit -m "feat: add core TypeScript types for client config"
```

---

### Task 2: Créer la structure de dossiers pour les clients

**Files:**
- Create: `data/clients/caracas/content.ts`
- Create: `data/clients/caracas/menu.ts`
- Create: `data/clients/caracas/seo.ts`
- Create: `data/clients/caracas/config.ts`
- Create: `data/clients/caracas/images.ts`
- Create: `data/clients/caracas/contact.ts`
- Create: `data/clients/caracas/index.ts`

**Step 1: Créer content.ts avec les données migrées depuis app/page.tsx**

```typescript
// data/clients/caracas/content.ts
import { ContentData } from '@/data/types/client'

export const content: ContentData = {
  hero: {
    enabled: true,
    location: 'Levallois-Perret',
    tagline: 'Cuisine vénézuélienne & tapas festives à Levallois',
    description: 'Inspiré de Caracas, revisité à Paris. Un voyage culinaire entre arepas, cachapas et cocktails créoles.',
    backgroundImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80',
    quickInfo: {
      rating: '4.8/5',
      reviewCount: '120+ avis',
    },
  },

  story: {
    enabled: true,
    title: 'De Caracas à Levallois',
    paragraphs: [
      'Caracas Bar & Tapas est né de l\'amitié d\'Igor et Difrines, deux passionnés souhaitant partager la richesse de la cuisine vénézuélienne avec les Parisiens.',
      'Notre mission : vous faire voyager à travers les saveurs authentiques du Venezuela, depuis les arepas du petit-déjeuner jusqu\'aux cocktails du soir.',
      'Aujourd\'hui installés à Levallois, nous perpétuons cette tradition d\'accueil et de partage, où chaque plat raconte une histoire.',
    ],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    establishmentYear: 2015,
  },

  experiences: [
    {
      title: 'Cuisine Authentique',
      description: 'Des recettes transmises, des produits frais, des saveurs du Venezuela',
      icon: '🍲',
    },
    {
      title: 'Cocktails Créoles',
      description: 'Rhum, cachaca, pisco... des mélanges festifs et rafraîchissants',
      icon: '🍹',
    },
    {
      title: 'Ambiance Festive',
      description: 'Musique latine, décoration chaleureuse, esprit de partage',
      icon: '🎵',
    },
  ],

  glossary: [
    {
      term: 'Arepas',
      definition: 'Galettes de maïs, grillées ou frites, fourrées selon les envies. La base de la cuisine vénézuélienne.',
    },
    {
      term: 'Cachapa',
      definition: 'Crêpe épaisse à base de maïs doux, généralement servie avec du fromage fondu.',
    },
    {
      term: 'Pabellón Criollo',
      definition: 'Le plat national : bœuf, haricots noirs, riz et plantain frit.',
    },
    {
      term: 'Tequeños',
      definition: 'Bâtonnets de pâte feuilletée fourrés au fromage, l\'apéritif incontournable.',
    },
  ],
}
```

**Step 2: Commit**

```bash
git add data/clients/caracas/content.ts
git commit -m "feat: migrate content data to caracus client config"
```

**Step 3: Créer menu.ts avec les données migrées depuis data/restaurant.ts**

```typescript
// data/clients/caracas/menu.ts
import { MenuData } from '@/data/types/client'

export const menu: MenuData = {
  categories: [
    { id: 'a-partager', name: 'À partager', icon: '🍽️' },
    { id: 'arepas', name: 'Arepas', icon: '🫓' },
    { id: 'cachapas', name: 'Cachapas', icon: '🥞' },
    { id: 'tapas', name: 'Tapas', icon: '🥘' },
    { id: 'plats', name: 'Plats', icon: '🍲' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'cocktails', name: 'Cocktails', icon: '🍹' },
    { id: 'sans-alcool', name: 'Sans alcool', icon: '🧃' },
  ],

  items: [
    // À partager
    {
      id: 'guasacaca',
      name: 'Guasacaca & Chips',
      description: 'Sauce à l\'avocat vénézuélienne, maison, accompagnée de plantains frits',
      price: 9.50,
      category: 'a-partager',
      badges: ['veggie', 'bestseller'],
      allergens: ['Gluten'],
      image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&q=80',
    },
    // ... (conserver tous les items existants de data/restaurant.ts)
  ],

  signatureDishes: [
    {
      id: 'arepa-reina-sig',
      name: 'Reina Pepiada',
      description: 'L\'incontournable : arepas au maïs, poulet rôti et avocat',
      price: 13.50,
      image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600&q=80',
      badges: ['bestseller'],
      category: 'arepas',
    },
    // ... (conserver tous les signatureDishes existants)
  ],
}
```

**Step 4: Commit**

```bash
git add data/clients/caracas/menu.ts
git commit -m "feat: migrate menu data to caracus client config"
```

**Step 5: Créer config.ts avec branding et sections**

```typescript
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
```

**Step 6: Commit**

```bash
git add data/clients/caracas/config.ts
git commit -m "feat: add branding config for caracas client"
```

**Step 7: Créer contact.ts**

```typescript
// data/clients/caracas/contact.ts
import { ContactData } from '@/data/types/client'

export const contact: ContactData = {
  address: {
    street: '123 Rue de Paris',
    city: '92300 Levallois-Perret',
    full: '123 Rue de Paris, 92300 Levallois-Perret',
  },
  phone: '01 23 45 67 89',
  phoneLink: '+33123456789',
  email: 'contact@caracas-bar-tapas.fr',
  social: {
    instagram: 'https://www.instagram.com/holacaracas.paris/',
    facebook: 'https://www.facebook.com/caracas.bar.tapas',
    linkedin: 'https://www.linkedin.com/company/caracas-paris/',
  },
  hours: {
    lundi: '19h00 - 23h00',
    mardi: null, // Closed
    mercredi: '19h00 - 23h00',
    jeudi: '19h00 - 00h00',
    vendredi: '19h00 - 00h00',
    samedi: '18h00 - 00h00',
    dimanche: null, // Closed
  },
  reservationUrl: '/contact#reservation',
  googleMapsUrl: 'https://maps.app.goo.gl/CsKc6rc471n63fV86',
}

// Export pour compatibilité avec l'existant
export const restaurantInfo = contact
```

**Step 8: Commit**

```bash
git add data/clients/caracas/contact.ts
git commit -m "feat: add contact data for caracas client"
```

**Step 9: Créer seo.ts**

```typescript
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
```

**Step 10: Commit**

```bash
git add data/clients/caracas/seo.ts
git commit -m "feat: add SEO data for caracas client"
```

**Step 11: Créer images.ts**

```typescript
// data/clients/caracas/images.ts
import { ImageConfig } from '@/data/types/client'

export const images: ImageConfig = {
  hero: {
    background: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80',
    localFallback: '/images/hero-background.jpg',
  },
  story: {
    main: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    localFallback: '/images/story-main.jpg',
  },
  gallery: [
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', alt: 'Ambiance du restaurant' },
    { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80', alt: 'Cocktails colorés' },
    { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80', alt: 'Plat typique' },
    { src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80', alt: 'Intérieur chaleureux' },
    { src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80', alt: 'Fête et musique' },
    { src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80', alt: 'Détail décoratif' },
  ],
  events: {
    afterwork: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80',
    privatization: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    catering: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
  },
  menu: {
    'guasacaca': 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&q=80',
    'tequenos': 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600&q=80',
    // ... (ajouter tous les items avec images)
  },
}
```

**Step 12: Commit**

```bash
git add data/clients/caracas/images.ts
git commit -m "feat: add image config for caracas client"
```

**Step 13: Créer index.ts (point d'entrée)**

```typescript
// data/clients/caracas/index.ts
import { ClientConfig } from '@/data/types/client'
import { content } from './content'
import { menu } from './menu'
import { seo } from './seo'
import { config } from './config'
import { images } from './images'
import { contact } from './contact'

export const caracasConfig: ClientConfig = {
  content,
  menu,
  seo,
  config,
  images,
  contact,
}

export default caracasConfig
```

**Step 14: Commit**

```bash
git add data/clients/caracas/index.ts
git commit -m "feat: add entry point for caracus client config"
```

---

## Phase 2 : Créer les composants sections

### Task 3: Créer HeroSection component

**Files:**
- Create: `components/sections/HeroSection.tsx`

**Step 1: Créer le composant HeroSection**

```typescript
// components/sections/HeroSection.tsx
import { HeroContent, BrandingConfig } from '@/data/types/client'
import { Button } from '@/components/Button'
import { Star, Clock, MapPin, ArrowRight, Utensils } from 'lucide-react'
import Link from 'next/link'

interface HeroSectionProps {
  content: HeroContent
  config: BrandingConfig
  todayHours?: string
}

export function HeroSection({ content, config, todayHours }: HeroSectionProps) {
  if (!content.enabled) return null

  return (
    <section className="relative min-h-[90vh] flex items-center bg-neutral-900">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={content.backgroundImage}
          alt={`Ambiance du restaurant ${config.name}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/75 via-neutral-900/70 to-neutral-900" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
          <p className="text-primary-400 font-semibold tracking-wide uppercase mb-4 animate-fade-in">
            {content.location}
          </p>
          <h1 className="font-serif text-display-lg text-white mb-6 animate-slide-up leading-tight">
            {content.tagline}
          </h1>
          <p className="text-xl lg:text-2xl text-neutral-100 mb-8 leading-relaxed animate-slide-up stagger-1">
            {content.description}
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12 animate-slide-up stagger-2">
            <Button
              size="lg"
              className="!bg-gradient-to-r !from-secondary-400 !to-secondary-600 !text-white !border-0 hover:!shadow-glow hover:!scale-105 hover:!from-secondary-300 hover:!to-secondary-500 transition-all duration-300 !rounded-full relative overflow-hidden group !px-8 !py-6"
              asChild
            >
              <Link href={config.cta.primary.href} className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-400 via-secondary-500 to-secondary-600 animate-gradient-shift" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping opacity-0 group-hover:opacity-100" />
                <div className="absolute inset-0 rounded-full border border-white/20 group-hover:animate-pulse" />
                <div className="relative z-10 flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Utensils className="w-5 h-5 text-white/90" />
                    <div className="flex flex-col items-start">
                      <span className="font-bold text-lg leading-tight">{config.cta.primary.text}</span>
                      <span className="text-xs text-white/80 font-medium">Arepas • Tapas • Cocktails</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:animate-shine" />
              </Link>
            </Button>

            {config.cta.secondary && (
              <Button
                size="lg"
                variant="outline"
                className="!bg-white/10 !backdrop-blur-sm !text-white !border-2 !border-white/30 hover:!bg-white/20 hover:!border-white/50 hover:!scale-105 transition-all duration-300 !rounded-full"
                asChild
              >
                <a href={config.cta.secondary.href} target="_blank" rel="noopener noreferrer">
                  {config.cta.secondary.text}
                </a>
              </Button>
            )}
          </div>

          {/* Quick info */}
          {content.quickInfo && (
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-12 text-neutral-200 text-sm animate-slide-up stagger-3">
              {todayHours && (
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary-400" />
                  <span className="font-medium">Aujourd'hui : {todayHours || 'Fermé'}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="font-medium">{content.location}</span>
              </div>
              {content.quickInfo.rating && (
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary-400 fill-primary-400" />
                  <span className="font-medium">{content.quickInfo.rating}</span>
                  {content.quickInfo.reviewCount && <span>• {content.quickInfo.reviewCount}</span>}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add components/sections/HeroSection.tsx
git commit -m "feat: create HeroSection component with props"
```

---

### Task 4: Créer SignaturesSection component

**Files:**
- Create: `components/sections/SignaturesSection.tsx`

**Step 1: Créer le composant SignaturesSection**

```typescript
// components/sections/SignaturesSection.tsx
import { Section, SectionHeader } from '@/components/Section'
import { SignatureDish } from '@/data/types/client'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SignatureCard } from '@/components/Card'
import { Button } from '@/components/Button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface SignaturesSectionProps {
  items: SignatureDish[]
  config: {
    enabled: boolean
  }
}

export function SignaturesSection({ items, config }: SignaturesSectionProps) {
  if (!config.enabled) return null

  return (
    <Section id="signatures" background="white">
      <ScrollReveal direction="fade" delay={0}>
        <SectionHeader
          title="Nos Signatures"
          subtitle="Les incontournables"
          description="Les plats qui ont fait notre réputation. Une invitation au voyage gustatif."
        />
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {items.map((dish, index) => (
          <ScrollReveal key={dish.id} direction="up" delay={index * 0.1}>
            <SignatureCard {...dish} />
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal direction="fade" delay={0.4}>
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="group relative overflow-hidden shadow-warm hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 animate-bounce-slow rounded-full"
            asChild
          >
            <Link href="/menu" className="flex items-center gap-2 relative">
              <span className="relative z-10">Découvrir toute la carte</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 animate-arrow-slide relative z-10" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </Link>
          </Button>
        </div>
      </ScrollReveal>
    </Section>
  )
}
```

**Step 2: Commit**

```bash
git add components/sections/SignaturesSection.tsx
git commit -m "feat: create SignaturesSection component"
```

---

### Task 5: Créer StorySection component

**Files:**
- Create: `components/sections/StorySection.tsx`

**Step 1: Créer le composant StorySection**

```typescript
// components/sections/StorySection.tsx
import { Section } from '@/components/Section'
import { StoryContent, GlossaryItem } from '@/data/types/client'
import { ScrollReveal } from '@/components/ScrollReveal'

interface StorySectionProps {
  content: StoryContent
  glossary: GlossaryItem[]
  config: {
    enabled: boolean
  }
}

export function StorySection({ content, glossary, config }: StorySectionProps) {
  if (!config.enabled) return null

  return (
    <Section id="histoire" background="pattern">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <ScrollReveal direction="left">
          <div>
            <p className="text-primary-600 font-semibold tracking-wide uppercase mb-3 text-center lg:text-left">
              Notre Histoire
            </p>
            <h2 className="font-serif text-display-md text-neutral-900 mb-6 text-center lg:text-left">
              {content.title}
            </h2>
            <div className="space-y-4 text-neutral-600 text-body-lg leading-relaxed">
              {content.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Glossary */}
            {glossary.length > 0 && (
              <div className="mt-8 pt-8 border-t border-neutral-200">
                <h4 className="font-serif text-lg text-neutral-900 mb-4 text-center lg:text-left">
                  Petit lexique vénézuélien
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  {glossary.map((item, index) => (
                    <ScrollReveal key={index} direction="up" delay={index * 0.05}>
                      <div className="bg-background-50 p-4 rounded-card shadow-soft">
                        <span className="font-semibold text-primary-600">{item.term}</span>
                        <span className="mx-2 text-neutral-400">•</span>
                        <span className="text-neutral-600">{item.definition}</span>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.2}>
          <div className="relative">
            <img
              src={content.image}
              alt="Ambiance du restaurant"
              className="rounded-card shadow-medium w-full aspect-[4/3] object-cover"
            />
            {content.establishmentYear && (
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-primary-500 text-white p-4 lg:p-6 rounded-card shadow-lg">
                <p className="font-serif text-2xl lg:text-3xl font-bold">{content.establishmentYear}</p>
                <p className="text-xs lg:text-sm">Année de création</p>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  )
}
```

**Step 2: Commit**

```bash
git add components/sections/StorySection.tsx
git commit -m "feat: create StorySection component"
```

---

### Task 6: Créer ExperienceSection component

**Files:**
- Create: `components/sections/ExperienceSection.tsx`

**Step 1: Créer le composant ExperienceSection**

```typescript
// components/sections/ExperienceSection.tsx
import { Section } from '@/components/Section'
import { ExperienceItem } from '@/data/types/client'
import { ScrollReveal } from '@/components/ScrollReveal'

interface ExperienceSectionProps {
  experiences: ExperienceItem[]
  config: {
    enabled: boolean
  }
}

export function ExperienceSection({ experiences, config }: ExperienceSectionProps) {
  if (!config.enabled) return null

  return (
    <Section background="background-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {experiences.map((experience, index) => (
          <ScrollReveal key={index} direction="up" delay={index * 0.15}>
            <div className="text-center group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {experience.icon}
              </div>
              <h3 className="font-serif text-heading-lg text-neutral-900 mb-3">
                {experience.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {experience.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
```

**Step 2: Commit**

```bash
git add components/sections/ExperienceSection.tsx
git commit -m "feat: create ExperienceSection component"
```

---

### Task 7: Créer GallerySection component

**Files:**
- Create: `components/sections/GallerySection.tsx`

**Step 1: Créer le composant GallerySection**

```typescript
// components/sections/GallerySection.tsx
import { Section, SectionHeader } from '@/components/Section'
import { ImageRef } from '@/data/types/client'
import { ScrollReveal } from '@/components/ScrollReveal'

interface GallerySectionProps {
  images: ImageRef[]
  config: {
    enabled: boolean
  }
}

export function GallerySection({ images, config }: GallerySectionProps) {
  if (!config.enabled) return null

  return (
    <Section id="galerie" background="white">
      <ScrollReveal direction="fade">
        <SectionHeader
          title="L'Ambiance"
          subtitle="Un lieu vivant"
          description="Découvrez l'atmosphère chaleureuse"
        />
      </ScrollReveal>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <ScrollReveal key={index} direction="scale" delay={index * 0.08}>
            <div
              className={`relative overflow-hidden rounded-card group ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
```

**Step 2: Commit**

```bash
git add components/sections/GallerySection.tsx
git commit -m "feat: create GallerySection component"
```

---

### Task 8: Créer EventsSection component

**Files:**
- Create: `components/sections/EventsSection.tsx`

**Step 1: Créer le composant EventsSection**

```typescript
// components/sections/EventsSection.tsx
import { Section, SectionHeader } from '@/components/Section'
import { EventItem } from '@/data/types/client'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Button } from '@/components/Button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface EventsSectionProps {
  events: EventItem[]
  config: {
    enabled: boolean
  }
}

export function EventsSection({ events, config }: EventsSectionProps) {
  if (!config.enabled) return null

  const ctaConfig: Record<string, { text: string; subtitle: string; gradient: string; iconBg: string }> = {
    'Afterwork & Tapas': {
      text: 'Réserver un jeudi',
      subtitle: 'Dès 19h • Jusqu\'à 20 personnes',
      gradient: 'from-amber-500 to-orange-600',
      iconBg: 'bg-amber-100',
    },
    'Privatisation Étage': {
      text: 'Demander un devis',
      subtitle: 'Étage privé • Jusqu\'à 40 personnes',
      gradient: 'from-emerald-500 to-secondary-600',
      iconBg: 'bg-emerald-100',
    },
    'Traiteur & Cocktails': {
      text: 'Nous contacter',
      subtitle: 'Chez vous • Formules sur mesure',
      gradient: 'from-blue-500 to-primary-600',
      iconBg: 'bg-blue-100',
    },
  }

  return (
    <Section id="privatisation" background="background-100">
      <ScrollReveal direction="fade">
        <SectionHeader
          title="Privatisation & Événements"
          subtitle="Vos moments, nos saveurs"
          description="Des expériences uniques pour vos moments spéciaux"
        />
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event, index) => {
          const cta = ctaConfig[event.title] || {
            text: 'En savoir plus',
            subtitle: 'Contactez-nous',
            gradient: 'from-secondary-500 to-secondary-600',
            iconBg: 'bg-secondary-100',
          }

          return (
            <ScrollReveal key={index} direction="up" delay={index * 0.12}>
              <div className="bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
                      {event.icon}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="font-serif text-heading-lg text-neutral-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <div className="space-y-3">
                    <Button
                      size="lg"
                      className={`w-full bg-gradient-to-r ${cta.gradient} text-white hover:opacity-90 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 rounded-full`}
                      asChild
                    >
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        <span>{cta.text}</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                    <p className="text-center text-sm text-neutral-500 font-medium">
                      {cta.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )
        })}
      </div>

      {/* Bottom CTA banner */}
      <ScrollReveal direction="fade" delay={0.5}>
        <div className="mt-16 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80"
              alt="Événement au restaurant"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm" />
          </div>

          <div className="relative z-10">
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
              Un projet d'événement ?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Nous créons des expériences sur mesure pour vos moments spéciaux. Contactez-nous pour en discuter.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="!bg-white !text-neutral-900 hover:!bg-white/90 hover:!scale-105 hover:!shadow-2xl transition-all duration-300 rounded-full px-8 py-4 font-bold text-lg shadow-xl border-2 border-white/30 inline-flex items-center gap-2"
              >
                <span>Demander un devis gratuit</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  )
}
```

**Step 2: Commit**

```bash
git add components/sections/EventsSection.tsx
git commit -m "feat: create EventsSection component"
```

---

### Task 9: Créer ReviewsSection component

**Files:**
- Create: `components/sections/ReviewsSection.tsx`

**Step 1: Créer le composant ReviewsSection**

```typescript
// components/sections/ReviewsSection.tsx
import { ReviewItem } from '@/data/types/client'
import { ScrollReveal } from '@/components/ScrollReveal'
import { Star } from 'lucide-react'
import { Button } from '@/components/Button'
import { ArrowRight } from 'lucide-react'

interface ReviewsSectionProps {
  reviews: ReviewItem[]
  rating: string
  reviewCount: string
  googleMapsUrl: string
  config: {
    enabled: boolean
  }
}

export function ReviewsSection({ reviews, rating, reviewCount, googleMapsUrl, config }: ReviewsSectionProps) {
  if (!config.enabled) return null

  return (
    <section className="py-24 bg-background-100">
      <ScrollReveal direction="fade">
        <div className="text-center mb-16">
          <p className="text-secondary-600 font-semibold tracking-wide uppercase mb-3">
            Avis Clients
          </p>
          <h2 className="font-serif text-heading-xl text-neutral-900 mb-4">
            Ce qu'ils disent de nous
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-secondary-500 fill-secondary-500" />
              ))}
            </div>
            <span className="text-3xl font-bold text-neutral-900">{rating}</span>
            <span className="text-neutral-600">sur 5</span>
          </div>
          <p className="text-neutral-600 text-body-lg">
            Plus de {reviewCount} avis vérifiés sur Google et Deliveroo
          </p>
        </div>
      </ScrollReveal>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.slice(0, 3).map((review) => (
            <div key={review.id} className="bg-background-50 rounded-card p-8 shadow-soft h-full flex flex-col">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? 'text-secondary-500 fill-secondary-500' : 'text-neutral-300'}`}
                  />
                ))}
              </div>
              <p className="text-neutral-800 mb-6 text-body leading-relaxed flex-grow">
                "{review.text}"
              </p>
              <div className="pt-5 border-t border-neutral-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center text-white font-semibold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-neutral-900 font-semibold text-body">{review.name}</p>
                    <p className="text-neutral-500 text-body-sm">{review.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ScrollReveal direction="fade" delay={0.5}>
          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-background-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">M</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary-300 to-secondary-500 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">S</div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">P</div>
                </div>
                <div className="text-left">
                  <p className="text-neutral-900 font-semibold">Rejoignez nos +{reviewCount} clients satisfaits</p>
                  <p className="text-neutral-600 text-body-sm">Laissez votre avis sur Google</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary-500 fill-secondary-500" />
                ))}
              </div>
              <Button size="lg" className="shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300" asChild>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Lire tous les avis</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add components/sections/ReviewsSection.tsx
git commit -m "feat: create ReviewsSection component"
```

---

## Phase 3 : Migrer la page principale

### Task 10: Migrer app/page.tsx pour utiliser les nouveaux composants

**Files:**
- Modify: `app/page.tsx:1-477`

**Step 1: Remplacer le contenu de app/page.tsx**

```typescript
// app/page.tsx
import { caracasConfig } from '@/data/clients/caracas'
import { contact } from '@/data/clients/caracas/contact'
import { HeroSection } from '@/components/sections/HeroSection'
import { SignaturesSection } from '@/components/sections/SignaturesSection'
import { StorySection } from '@/components/sections/StorySection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { EventsSection } from '@/components/sections/EventsSection'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { EventItem, ReviewItem } from '@/data/types/client'

// Données d'événements (à migrer dans data/clients/caracas/content.ts plus tard)
const events: EventItem[] = [
  {
    title: 'Afterwork & Tapas',
    description: 'Chaque jeudi, formules tapas à partager entre collègues ou amis. Ambiance musicale garantie.',
    icon: '🍹',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80',
  },
  {
    title: 'Privatisation Étage',
    description: 'Notre étage peut accueillir vos événements jusqu\'à 40 personnes. Formules sur mesure.',
    icon: '🎉',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
  },
  {
    title: 'Traiteur & Cocktails',
    description: 'Nous apportons nos saveurs chez vous pour vos événements privés ou professionnels.',
    icon: '🍽️',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
  },
]

// Données d'avis (à migrer dans data/clients/caracas/content.ts plus tard)
const reviews: ReviewItem[] = [
  {
    id: 1,
    name: 'Marie L.',
    date: 'Il y a 2 semaines',
    rating: 5,
    text: 'Les arepas sont incroyables ! On s\'y croirait vraiment au Venezuela. L\'ambiance est super conviviale et le personnel adorable.',
  },
  {
    id: 2,
    name: 'Thomas R.',
    date: 'Il y a 1 mois',
    rating: 5,
    text: 'Découverte gustative extraordinaire ! Le Pabellón est un must. Les cocktails sont parfaitement dosés. Je recommande à 100%.',
  },
  {
    id: 3,
    name: 'Sophie M.',
    date: 'Il y a 3 semaines',
    rating: 4,
    text: 'Très belle découverte. Les empanadas sont délicieuses et le service attentionné. On y retourne !',
  },
  {
    id: 4,
    name: 'Carlos D.',
    date: 'Il y a 2 mois',
    rating: 5,
    text: 'Enfin de vraies saveurs vénézuéliennes à Paris ! La cachapa m\'a rappelé mes souvenirs d\'enfance. Merci pour ce moment.',
  },
]

export default function HomePage() {
  const todayHours = Object.values(contact.hours)[new Date().getDay()] || 'Fermé'

  return (
    <>
      <HeroSection
        content={caracasConfig.content.hero}
        config={caracasConfig.config}
        todayHours={todayHours}
      />
      <SignaturesSection
        items={caracasConfig.menu.signatureDishes}
        config={caracasConfig.config.sections.signatures}
      />
      <StorySection
        content={caracasConfig.content.story}
        glossary={caracasConfig.content.glossary}
        config={caracasConfig.config.sections.story}
      />
      <ExperienceSection
        experiences={caracasConfig.content.experiences}
        config={caracasConfig.config.sections.experiences}
      />
      <GallerySection
        images={caracasConfig.images.gallery}
        config={caracasConfig.config.sections.gallery}
      />
      <EventsSection
        events={events}
        config={caracasConfig.config.sections.events}
      />
      <ReviewsSection
        reviews={reviews}
        rating="4.8"
        reviewCount="120"
        googleMapsUrl={contact.googleMapsUrl}
        config={caracasConfig.config.sections.reviews}
      />
    </>
  )
}
```

**Step 2: Vérifier que le site fonctionne toujours**

Run: `npm run dev`
Expected: Site démarre et s'affiche correctement

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: migrate homepage to use new section components"
```

---

## Phase 4 : Nettoyer les anciens fichiers

### Task 11: Supprimer ou déplacer l'ancien data/restaurant.ts

**Files:**
- Backup: `data/restaurant.ts` → `data/restaurant.backup.ts`

**Step 1: Créer une sauvegarde du fichier original**

```bash
cp data/restaurant.ts data/restaurant.backup.ts
```

**Step 2: Supprimer l'ancien fichier**

```bash
rm data/restaurant.ts
```

**Step 3: Commit**

```bash
git add data/restaurant.ts data/restaurant.backup.ts
git commit -m "chore: backup and remove old restaurant.ts file"
```

---

## Phase 5 : Mettre à jour les autres composants

### Task 12: Mettre à jour Header.tsx pour utiliser les données

**Files:**
- Modify: `components/Header.tsx:1-247`

**Step 1: Modifier Header.tsx**

```typescript
// components/Header.tsx - Modifications à faire
// Remplacer les lignes hardcodées :
// - Logo "Caracas" → utiliser config.name
// - Navigation → pourrait rester en dur ou migrer
// - Social links → utiliser contact.social
// - Reservation button → utiliser config.cta.primary

import { caracasConfig } from '@/data/clients/caracas'

// Dans le JSX, remplacer :
<span className="font-serif text-2xl font-bold text-neutral-900 tracking-tight">
  Caracas<span className="text-secondary-500">.</span>
</span>
// Par :
<span className="font-serif text-2xl font-bold text-neutral-900 tracking-tight">
  {caracasConfig.config.name.split(' ')[0]}<span className="text-secondary-500">.</span>
</span>
```

**Step 2: Commit**

```bash
git add components/Header.tsx
git commit -m "feat: update Header to use client config data"
```

---

### Task 13: Mettre à jour Footer pour utiliser les données

**Files:**
- Modify: `components/ui/footer-7.tsx:1-310`

**Step 1: Modifier Footer pour accepter des props**

```typescript
// components/ui/footer-7.tsx
// Ajouter des props pour remplacer les valeurs par défaut
import { ContactData, BrandingConfig } from '@/data/types/client'

interface Footer7Props {
  contact: ContactData
  config: BrandingConfig
}

export const Footer7 = ({ contact, config }: Footer7Props) => {
  // Utiliser contact.address, contact.phone, etc.
  // Utiliser config.name, config.description, etc.
}
```

**Step 2: Mettre à jour Footer.tsx**

```typescript
// components/Footer.tsx
import { Footer7 } from "@/components/ui/footer-7"
import { caracasConfig } from '@/data/clients/caracas'

export function Footer() {
  return <Footer7 contact={caracasConfig.contact} config={caracasConfig.config} />
}
```

**Step 3: Commit**

```bash
git add components/ui/footer-7.tsx components/Footer.tsx
git commit -m "feat: update Footer to use client config data"
```

---

### Task 14: Mettre à jour app/layout.tsx pour utiliser les données SEO

**Files:**
- Modify: `app/layout.tsx:1-152`

**Step 1: Modifier layout.tsx**

```typescript
// app/layout.tsx
import { caracasConfig } from '@/data/clients/caracas'

export const metadata: Metadata = {
  metadataBase: new URL(caracasConfig.seo.siteUrl),
  title: caracasConfig.seo.title,
  description: caracasConfig.seo.description,
  keywords: caracasConfig.seo.keywords,
  openGraph: caracasConfig.seo.openGraph,
  twitter: caracasConfig.seo.twitter,
  // ...
}

const jsonLd = caracasConfig.seo.jsonLd
```

**Step 2: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: update layout to use client SEO config"
```

---

## Phase 6 : Finalisation et documentation

### Task 15: Créer un README pour le starter

**Files:**
- Create: `README.md`

**Step 1: Créer le README**

```markdown
# Restaurant/Coffee Shop Website Starter

Un starter Next.js pour créer des sites de restaurants, coffee shops, bars et autres lieux de restauration.

## Caractéristiques

- Design éditorial et moderne
- Responsive (mobile-first)
- SEO optimisé
- Performance optimisée
- Facilement personnalisable

## Créer un nouveau site

1. Dupliquer le dossier client :
\`\`\`bash
cp -r data/clients/caracas data/clients/mon-restaurant
\`\`\`

2. Modifier les fichiers de configuration :
- `data/clients/mon-restaurant/config.ts` : Nom, couleurs, sections
- `data/clients/mon-restaurant/content.ts` : Contenu éditorial
- `data/clients/mon-restaurant/menu.ts` : Menu et cartes
- `data/clients/mon-restaurant/contact.ts` : Coordonnées et horaires
- `data/clients/mon-restaurant/seo.ts` : Métadonnées SEO
- `data/clients/mon-restaurant/images.ts` : Images

3. Mettre à jour l'import dans `app/page.tsx` :
\`\`\`typescript
import { monRestaurantConfig } from '@/data/clients/mon-restaurant'
\`\`\`

## Structure du projet

\`\`\`
data/
  clients/
    {client}/
      index.ts         # Point d'entrée
      config.ts        # Branding, couleurs, sections
      content.ts       # Histoire, expériences, lexique
      menu.ts          # Menu et plats signatures
      contact.ts       # Coordonnées, horaires, social
      seo.ts           # Métadonnées SEO
      images.ts        # Références images
  types/
    client.ts         # Types TypeScript
\`\`\`

## Sections configurables

- Hero (avec image de fond et CTA)
- Plats signatures
- Histoire + lexique
- Piliers d'expérience
- Galerie photos
- Événements & privatisation
- Avis clients

## Personnalisation

### Couleurs
Modifier `config.colors` dans le fichier client :
\`\`\`typescript
colors: {
  primary: '#059669',
  secondary: '#D97706',
  // ...
}
\`\`\`

### Sections
Activer/désactiver des sections :
\`\`\`typescript
sections: {
  hero: { enabled: true },
  signatures: { enabled: true },
  gallery: { enabled: false }, // Désactivée
}
\`\`\`

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Lucide Icons
\`\`\`

**Step 2: Commit**

```bash
git add README.md
git commit -m "docs: add comprehensive README for starter"
```

---

### Task 16: Créer un guide de migration

**Files:**
- Create: `docs/MIGRATION_GUIDE.md`

**Step 1: Créer le guide de migration**

```markdown
# Guide de Migration : Caracas vers Starter

## Aperçu

Ce document explique comment le projet Caracas Bar & Tapas a été transformé en starter réutilisable.

## Changements principaux

### Avant
- Données dispersées dans plusieurs fichiers
- Contenu hardcodé dans les composants
- Difficile de créer un nouveau site

### Après
- Toutes les données centralisées dans `data/clients/caracas/`
- Composants réutilisables avec props
- Créer un nouveau site = dupliquer un dossier

## Fichiers créés

### Types
- `data/types/client.ts` - Types TypeScript principaux

### Données Caracas
- `data/clients/caracas/index.ts` - Point d'entrée
- `data/clients/caracas/config.ts` - Branding
- `data/clients/caracas/content.ts` - Contenu éditorial
- `data/clients/caracas/menu.ts` - Menu
- `data/clients/caracas/contact.ts` - Coordonnées
- `data/clients/caracas/seo.ts` - SEO
- `data/clients/caracas/images.ts` - Images

### Composants
- `components/sections/HeroSection.tsx`
- `components/sections/SignaturesSection.tsx`
- `components/sections/StorySection.tsx`
- `components/sections/ExperienceSection.tsx`
- `components/sections/GallerySection.tsx`
- `components/sections/EventsSection.tsx`
- `components/sections/ReviewsSection.tsx`

## Fichiers modifiés

- `app/page.tsx` - Utilise les nouveaux composants
- `app/layout.tsx` - Utilise les données SEO
- `components/Header.tsx` - Utilise les données client
- `components/Footer.tsx` - Utilise les données client

## Tests à effectuer

1. ✅ Navigation fonctionne
2. ✅ Toutes les sections s'affichent
3. ✅ Design inchangé
4. ✅ Responsive OK
5. ✅ SEO metadata OK
6. ✅ Liens fonctionnels

## Prochaines étapes

Pour créer un nouveau site :
1. Dupliquer `data/clients/caracas`
2. Modifier les données
3. Tester le rendu
\`\`\`

**Step 2: Commit**

```bash
git add docs/MIGRATION_GUIDE.md
git commit -m "docs: add migration guide"
```

---

### Task 17: Test final et validation

**Step 1: Lancer le site en production locale**

```bash
npm run build
npm start
```

**Step 2: Vérifier tous les points**

- [ ] Page d'accueil s'affiche
- [ ] Toutes les sections sont présentes
- [ ] Design identique à l'original
- [ ] Mobile responsive OK
- [ ] Navigation fonctionne
- [ ] Menu page fonctionne
- [ ] Contact page fonctionne
- [ ] Footer s'affiche correctement
- [ ] SEO metadata présente
- [ ] Images chargent correctement

**Step 3: Commit final**

```bash
git add .
git commit -m "chore: complete refactor to reusable starter

- Created modular data structure in data/clients/
- Migrated all Caracas content to new structure
- Created reusable section components
- Updated all pages to use new data
- Added comprehensive documentation

BREAKING CHANGE: data/restaurant.ts replaced with data/clients/ structure"
```

---

## Résumé

**Total des tâches :** 17
**Fichiers créés :** ~20
**Fichiers modifiés :** ~5
**Estimation :** 4-6 heures de travail

Ce plan permet une migration progressive sans casser le site existant, avec des commits fréquents et une documentation complète.
