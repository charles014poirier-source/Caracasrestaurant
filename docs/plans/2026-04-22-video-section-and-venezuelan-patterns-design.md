# Design : Section Vidéo & Motifs Vénézuéliens

## Date
2026-04-22

## Objectif
Ajouter une section vidéo immersive sur la page d'accueil et intégrer des motifs traditionnels vénézuéliens (andins) de manière subtile pour renforcer l'identité visuelle du restaurant.

## Contexte
Le site actuel a une identité éditoriale élégante mais manque de références visuelles au Venezuela. L'objectif est d'apporter plus de chaleur et d'authenticité par :
1. Une section vidéo dynamique présentant l'art de vivre vénézuélien
2. Des motifs andins en background pattern pour une identité visuelle unique

## Approche retenue

**Section vidéo :** Section dédiée (VideoStorySection) entre Story et Experience

**Motifs :** Background pattern subtil avec motifs andins (triangles/losanges) en couleurs vénézuéliennes sur Hero et Story sections

---

## Architecture

### 1. Section Vidéo (VideoStorySection)

#### Position dans la page
**Fichier :** [app/page.tsx](app/page.tsx)

**Insertion :** Entre StorySection (ligne 49) et ExperienceSection (ligne 54)

```typescript
<StorySection ... />
<VideoStorySection />  // NOUVELLE SECTION
<ExperienceSection ... />
```

#### Contenu de la section

**Éléments :**
1. **Vidéo en arrière-plan**
   - Source : Pexels ou Pixabay (libre de droits, usage commercial)
   - Format : MP4, 1920x1080, < 5MB
   - Durée : 15-30 secondes (loop)
   - Autoplay, muted, playsinline

2. **Overlay gradient**
   - Noir avec dégradé vertical
   - Opacité : 30% (haut) → 50% (bas)
   - Assure la lisibilité du texte

3. **Texte centré**
   - Titre : "L'Art de Vivre Vénézuélien"
   - Sous-titre : "Découvrez nos saveurs et nos traditions"
   - Police : Serif (display-md pour titre, body-lg pour sous-titre)
   - Couleur : Blanc

4. **Bouton CTA**
   - Texte : "Voir notre carte"
   - Style : Button primary
   - Lien : Ancre vers section menu ou #menu

#### Responsive Design

**Desktop (> 1024px):**
- Hauteur : 60vh
- Titre : 3rem (48px)
- Sous-titre : 1.125rem (18px)
- Padding horizontal : 4rem

**Tablet (768px - 1023px):**
- Hauteur : 50vh
- Titre : 2.5rem (40px)
- Sous-titre : 1rem (16px)
- Padding horizontal : 3rem

**Mobile (< 768px):**
- Hauteur : 40vh
- Titre : 2rem (32px)
- Sous-titre : 1rem (16px)
- Padding horizontal : 2rem
- Fallback image si vidéo ne charge pas

#### Fichier à créer

**[components/sections/VideoStorySection.tsx](components/sections/VideoStorySection.tsx)**

```typescript
interface VideoStorySectionProps {
  videoUrl: string
  posterUrl: string
  config: {
    enabled: boolean
  }
}

export function VideoStorySection({ videoUrl, posterUrl, config }: VideoStorySectionProps) {
  if (!config.enabled) return null

  return (
    <section className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoUrl}
        poster={posterUrl}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8 md:px-12 lg:px-16">
        <h2 className="font-serif text-display-md text-neutral-900 text-white mb-4">
          L'Art de Vivre Vénézuélien
        </h2>
        <p className="text-body-lg text-neutral-600 text-white/90 mb-8 max-w-2xl">
          Découvrez nos saveurs et nos traditions
        </p>
        <Button size="lg" asChild>
          <a href="#menu">Voir notre carte</a>
        </Button>
      </div>
    </section>
  )
}
```

---

### 2. Motifs Andins - Background Pattern

#### Emplacements

**HeroSection** - [components/sections/HeroSection.tsx](components/sections/HeroSection.tsx)
- Pattern SVG subtil en background
- Opacité : 0.05 (5% - très discret)
- Position : Absolute, inset-0, pointer-events-none

**StorySection** - [components/sections/StorySection.tsx](components/sections/StorySection.tsx)
- Pattern SVG subtil en background
- Opacité : 0.08 (8% - légèrement plus visible)
- Position : Absolute, inset-0, pointer-events-none

#### Design du Pattern SVG

**Spécifications :**
- **Taille :** 60px x 60px (pattern repeat)
- **Motifs :** Triangles et losanges entrelacés (style andin)
- **Couleurs :**
  - Jaune : #FFCC00
  - Bleu : #0033A0
  - Rouge : #CF142B
- **Stroke :** 1px, très fin
- **Style :** Lignes géométriques inspirées des textiles andins

#### Composant Réutilisable

**Fichier à créer :** [components/ui/VenezuelanPattern.tsx](components/ui/VenezuelanPattern.tsx)

```typescript
interface VenezuelanPatternProps {
  opacity?: number
  className?: string
}

export function VenezuelanPattern({ opacity = 0.05, className = "" }: VenezuelanPatternProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg
        className="w-full h-full"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="andinPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            {/* Losange central - Jaune */}
            <path
              d="M30 5 L55 30 L30 55 L5 30 Z"
              fill="none"
              stroke="#FFCC00"
              strokeWidth="0.5"
              opacity="0.6"
            />

            {/* Triangles - Bleu */}
            <path
              d="M30 15 L45 40 L15 40 Z"
              fill="none"
              stroke="#0033A0"
              strokeWidth="0.5"
              opacity="0.6"
            />

            {/* Triangle inversé - Rouge */}
            <path
              d="M30 45 L15 20 L45 20 Z"
              fill="none"
              stroke="#CF142B"
              strokeWidth="0.5"
              opacity="0.6"
            />

            {/* Points décoratifs - Jaune */}
            <circle cx="30" cy="30" r="2" fill="#FFCC00" opacity="0.8" />
            <circle cx="15" cy="15" r="1.5" fill="#FFCC00" opacity="0.6" />
            <circle cx="45" cy="15" r="1.5" fill="#FFCC00" opacity="0.6" />
            <circle cx="15" cy="45" r="1.5" fill="#FFCC00" opacity="0.6" />
            <circle cx="45" cy="45" r="1.5" fill="#FFCC00" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#andinPattern)`} opacity={opacity} />
      </svg>
    </div>
  )
}
```

---

### 3. Données de Configuration

#### Fichier à modifier : [data/clients/caracas/content.ts](data/clients/caracas/content.ts)

**Ajouter :**

```typescript
export const videoStory = {
  enabled: true,
  videoUrl: 'https://example.com/video.mp4',  // À remplacer par URL réelle
  posterUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80',  // Image actuelle de Story
  title: "L'Art de Vivre Vénézuélien",
  subtitle: "Découvrez nos saveurs et nos traditions",
  cta: {
    text: "Voir notre carte",
    href: "#menu"
  }
}
```

#### Fichier à modifier : [data/types/client.ts](data/types/client.ts)

**Ajouter dans ContentData :**

```typescript
export interface ContentData {
  hero: HeroContent
  story: StoryContent
  videoStory: VideoStoryContent  // NOUVEAU
  experiences: ExperienceItem[]
  glossary: GlossaryItem[]
  reviews: ReviewItem[]
}

export interface VideoStoryContent {
  enabled: boolean
  videoUrl: string
  posterUrl: string
  title: string
  subtitle: string
  cta: {
    text: string
    href: string
  }
}
```

---

### 4. Modifications des Composants Existants

#### HeroSection.tsx

**Ajouter le pattern :**

```typescript
import { VenezuelanPattern } from '@/components/ui/VenezuelanPattern'

// Dans le return, avant le contenu existant :
<VenezuelanPattern opacity={0.05} />
```

#### StorySection.tsx

**Ajouter le pattern :**

```typescript
import { VenezuelanPattern } from '@/components/ui/VenezuelanPattern'

// Dans le return, au début de la Section :
<VenezuelanPattern opacity={0.08} />
```

#### app/page.tsx

**Ajouter VideoStorySection :**

```typescript
import { VideoStorySection } from '@/components/sections/VideoStorySection'

// Dans le JSX, entre StorySection et ExperienceSection :
<StorySection ... />
<VideoStorySection
  content={caracasConfig.content.videoStory}
  config={caracasConfig.config.sections.videoStory}  // À ajouter dans config
/>
<ExperienceSection ... />
```

---

## Fichiers à Modifier/Créer

### Créer
1. `components/sections/VideoStorySection.tsx` - Section vidéo avec overlay
2. `components/ui/VenezuelanPattern.tsx` - Pattern andin réutilisable

### Modifier
3. `data/types/client.ts` - Ajouter VideoStoryContent interface
4. `data/clients/caracas/content.ts` - Ajouter videoStory data
5. `data/clients/caracas/config.ts` - Ajouter videoStory dans section config
6. `components/sections/HeroSection.tsx` - Ajouter VenezuelanPattern
7. `components/sections/StorySection.tsx` - Ajouter VenezuelanPattern
8. `app/page.tsx` - Ajouter VideoStorySection

---

## Responsive Design

### Mobile First Approach

**Breakpoints :**
- Mobile : < 768px
- Tablet : 768px - 1023px
- Desktop : ≥ 1024px

**Section Vidéo :**
- Hauteur adaptative : 40vh → 50vh → 60vh
- Taille de texte : 2rem → 2.5rem → 3rem
- Padding : 2rem → 3rem → 4rem

**Pattern :**
- Opacité constante (0.05 en Hero, 0.08 en Story)
- Performance : SVG optimisé, pas de reload

---

## Performance

**Optimisations :**
1. **Vidéo**
   - Format MP4 H.264
   - Poids < 5MB
   - Autoplay, muted, playsinline
   - Poster image pour instantané

2. **Pattern SVG**
   - Format vectoriel (léger)
   - Pattern repeat optimisé
   - Opacité gérée par CSS
   - Pointer-events-none pour pas bloquer les interactions

3. **Loading**
   - Lazy loading si nécessaire
   - Fallback image si vidéo échoue

---

## Accessibilité

**Vidéo :**
- Texte alternatif en overlay
- Contraste suffisant (overlay sombre)
- Vidéo muted (pas de son autoplay)

**Pattern :**
- Opacité faible (pas de gêne visuelle)
- Pointer-events-none (pas d'interférence)

**Navigation :**
- Bouton CTA accessible
- Lien fonctionnel vers #menu

---

## Tests à Vérifier

- [ ] Vidéo s'affiche correctement sur tous les devices
- [ ] Fallback image si vidéo ne charge pas
- [ ] Pattern visible mais discret sur Hero et Story
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] CTA bouton fonctionnel
- [ ] Performance (loading time, video weight)
- [ ] Accessibilité (contraste, navigation)
- [ ] Cross-browser (Chrome, Firefox, Safari, Edge)

---

## Sources Vidéo (Libres de Droits)

**Sites recommandés :**
- Pexels : https://www.pexels.com/fr-fr/videos/
- Pixabay : https://pixabay.com/fr/videos/
- Mixkit : https://mixkit.co/free-stock-video/

**Mots-clés recherche :**
- "restaurant ambiance"
- "tapas restaurant"
- "latin american food"
- "cooking"
- "warm restaurant interior"

**Critères de sélection :**
- Lumière chaude
- Mouvement subtil
- Ambiance conviviale
- Qualité Full HD

---

## Impact

**Utilisateurs :**
- Expérience plus immersive
- Identité visuelle renforcée
- Connexion émotionnelle au Venezuela

**Marque :**
- Différenciation visuelle
- Authenticité renforcée
- Mémorabilité accrue

**Technique :**
- +2 composants
- +1 section
- Performance optimisée
- Code maintenable

---

## Notes

- **Phase 1** : Implémenter la structure et les composants
- **Phase 2** : Trouver et intégrer la vidéo libre de droits
- **Phase 3** : Ajuster l'opacité des motifs selon feedback
- **Évolutivité** : Pattern réutilisable pour d'autres sections ou pages

**Design évolutif :**
- Les motifs peuvent être étendus à d'autres sections
- La vidéo peut être facilement remplacée
- Le pattern SVG peut être animé si souhaité
