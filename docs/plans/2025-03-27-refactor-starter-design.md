# Design : Refactor en Starter Réutilisable

**Date** : 27 mars 2025
**Auteur** : Claude
**Statut** : Validé par l'utilisateur

## Objectif

Transformer le projet Caracas Bar & Tapas en un starter réutilisable pour créer des sites de restaurants, coffee shops, bars et autres lieux de restauration, tout en conservant le design et la structure actuels inchangés.

## Contraintes

- ✅ Ne pas modifier l'apparence du site
- ✅ Ne pas changer l'ordre des sections
- ✅ Éviter la duplication de contenu en dur dans les composants
- ✅ Permettre la personnalisation complète (contenu + branding)
- ✅ Faciliter la création de nouveaux sites

## Architecture Choisi : Approche 1 - Refactor Progressive

### Structure des Dossiers

```
data/
  clients/
    caracas/
      index.ts              # Point d'entrée, exporte tout
      content.ts            # Histoire, concept, glossaire, expériences
      menu.ts               # Catégories, items, plats signatures
      seo.ts                # Métadonnées, Open Graph, JSON-LD
      config.ts             # Branding, couleurs, typographie, sections
      images.ts             # Références images (locales/URLs)
      contact.ts            # Coordonnées, horaires, social
  types/
    client.ts               # Types principaux (ClientConfig, etc.)
    section.ts              # Interfaces de sections
    menu.ts                 # Types pour le menu

components/
  sections/
    HeroSection.tsx         # Section hero avec props
    SignaturesSection.tsx   # Plats signatures
    StorySection.tsx        # Histoire + lexique
    ExperienceSection.tsx   # Piliers d'expérience
    GallerySection.tsx      # Galerie photos
    EventsSection.tsx       # Événements & privatisation
    ReviewsSection.tsx      # Avis clients
```

### Types TypeScript Principaux

```typescript
// Interface principale
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

// Branding et design
export interface BrandingConfig {
  name: string
  tagline: string
  description: string
  colors: ColorScheme
  typography: Typography
  sections: SectionConfig
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
```

### Fichiers de Données - Caracas

#### Point d'entrée

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

#### Exemple : Configuration

```typescript
// data/clients/caracas/config.ts
import { BrandingConfig } from '@/data/types/client'

export const config: BrandingConfig = {
  name: 'Caracas Bar & Tapas',
  tagline: 'Cuisine vénézuélienne & tapas festives à Levallois',
  description: 'Inspiré de Caracas, revisité à Paris.',

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
}
```

### Composants Sections

Chaque section devient un composant autonome avec des props typées :

```typescript
// components/sections/HeroSection.tsx
import { HeroContent, BrandingConfig } from '@/data/types/client'

interface HeroSectionProps {
  content: HeroContent
  config: BrandingConfig
  todayHours?: string
}

export function HeroSection({ content, config, todayHours }: HeroSectionProps) {
  if (!content.enabled) return null

  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Implémentation utilisant content et config */}
    </section>
  )
}
```

### Page Principale Refactorisée

```typescript
// app/page.tsx
import { caracasConfig } from '@/data/clients/caracas'
import { restaurantInfo } from '@/data/clients/caracas/contact'
import { HeroSection } from '@/components/sections/HeroSection'
import { SignaturesSection } from '@/components/sections/SignaturesSection'
// ...

export default function HomePage() {
  const todayHours = Object.values(restaurantInfo.hours)[new Date().getDay()]

  return (
    <>
      <HeroSection
        content={caracasConfig.content.hero}
        config={caracasConfig.config}
        todayHours={todayHours}
      />
      {/* Autres sections */}
    </>
  )
}
```

### Système d'Images Hybride

Support des URLs externes ET des images locales :

```typescript
// data/clients/caracas/images.ts
export const images: ImageConfig = {
  hero: {
    background: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80',
    localFallback: '/images/hero-background.jpg',
  },
  // ...
}
```

Helper pour résoudre les images :

```typescript
// lib/images.ts
export function resolveImage(imageRef: ImageRef): string {
  if (imageRef.localFallback) {
    return imageRef.src
  }
  return imageRef.src
}
```

## Migration Progressive

L'approche permet une migration section par section :

1. **Phase 1** : Créer les types et la structure de dossiers
2. **Phase 2** : Migrer les données de Caracas dans les nouveaux fichiers
3. **Phase 3** : Refactoriser chaque section indépendamment
4. **Phase 4** : Nettoyer les anciens fichiers
5. **Phase 5** : Créer un nouveau site pour tester

## Créer un Nouveau Site

```bash
# 1. Dupliquer le dossier client
cp -r data/clients/caracas data/clients/mon-restaurant

# 2. Modifier les données
# - Éditer data/clients/mon-restaurant/config.ts
# - Éditer data/clients/mon-restaurant/content.ts
# - Éditer data/clients/mon-restaurant/menu.ts
# ...

# 3. Mettre à jour l'import
# Dans app/page.tsx : import { monRestaurantConfig } from '@/data/clients/mon-restaurant'
```

## Avantages de cette Architecture

✅ **Organisée** : Données structurées par domaine
✅ **Type-safe** : TypeScript garantit la cohérence
✅ **Maintenable** : Facile de trouver où modifier quoi
✅ **Évolutive** : Ajouter un type de lieu est simple
✅ **Collaborative** : Pas de merge conflicts sur des fichiers géants
✅ **Progressive** : Migration sans casser l'existant

## Prochaine Étape

Créer un plan d'implémentation détaillé avec la compétence `writing-plans`.
