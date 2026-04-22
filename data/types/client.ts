// data/types/client.ts

// Types principaux
export interface ClientConfig {
  content: ContentData
  menu: MenuData
  seo: SeoData
  config: BrandingConfig
  images: ImageConfig
  contact: ContactData
  hours?: Record<string, string | null>
}

// Contenu éditorial
export interface ContentData {
  hero: HeroContent
  story: StoryContent
  experiences: ExperienceItem[]
  glossary: GlossaryItem[]
  reviews: ReviewItem[] // NOUVEAU
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
  menu: Record<string, string>
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
  authors?: Array<{ name: string }>
  creator?: string
  publisher?: string
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
  avatar?: string // URL de la photo de profil (Unsplash)
}
