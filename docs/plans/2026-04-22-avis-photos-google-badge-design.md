# Design : Ajout photos de profil et badge Google aux avis

## Date
2026-04-22

## Objectif
Ajouter des photos de profil réalistes aux avis clients et intégrer un badge Google officiel pour rediriger vers les avis Google du restaurant.

## Contexte
La section Reviews affiche actuellement des initiales dans des cercles colorés pour les profils des clients. Pour augmenter le réalisme et la crédibilité, nous souhaitons remplacer ces initiales par des photos de personnes réelles. De plus, nous voulons ajouter un badge Google visible pour renforcer la légitimité des avis.

## Approche retenue
**Approche 1** : Stocker les URLs Unsplash directement dans les données

### Avantages
- Contrôle total sur l'apparence
- Pas de dépendance API externe
- Photos de qualité professionnelle
- Fichiers locaux (performance optimale)

### Inconvénients
- Recherche manuelle des images (une seule fois)
- Légèrement plus de code initial

## Architecture

### 1. Structure des données

#### Modification du type `ReviewItem` dans `data/types/client.ts`

```typescript
export interface ReviewItem {
  id: number
  name: string
  date: string
  rating: number
  text: string
  avatar?: string // NOUVEAU : URL de la photo de profil
}
```

#### Migration des avis dans `data/clients/caracas/content.ts`

- Ajouter une propriété `reviews: ReviewItem[]` dans `ContentData`
- Déplacer les 4 avis de `app/page.tsx` vers ce fichier
- Ajouter les URLs des avatars Unsplash

#### URLs Unsplash sélectionnées

Photos libres de droits, haute qualité (200x200px, crop face) :

- **Marie L.** : `https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face`
- **Thomas R.** : `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face`
- **Sophie M.** : `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face`
- **Carlos D.** : `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face`

### 2. Modifications du composant ReviewsSection

#### Remplacement des initiales par les photos

Dans `components/sections/ReviewsSection.tsx` (lignes 62-64) :

```tsx
// AVANT :
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center text-white font-semibold text-lg">
  {review.name.charAt(0)}
</div>

// APRÈS :
{review.avatar ? (
  <img
    src={review.avatar}
    alt={`Photo de ${review.name}`}
    className="w-12 h-12 rounded-full object-cover border-2 border-secondary-200"
  />
) : (
  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center text-white font-semibold text-lg">
    {review.name.charAt(0)}
  </div>
)}
```

**Caractéristiques :**
- Condition : affiche l'image si `avatar` existe
- Fallback : affiche les initiales si pas d'avatar
- Styling : bordure secondaire pour cohérence visuelle
- Accessibilité : alt text descriptif

#### Ajout du badge Google

Dans le bloc CTA (après ligne 86 dans `components/sections/ReviewsSection.tsx`) :

```tsx
<div className="flex items-center gap-2 mb-1">
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
  <span className="font-semibold text-neutral-900">Google</span>
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 text-secondary-500 fill-secondary-500" />
    ))}
  </div>
</div>
```

**Caractéristiques :**
- Logo Google officiel en SVG (4 couleurs)
- Texte "Google" en gras
- 5 étoiles dorées
- Positionné avant le texte "Laissez votre avis sur Google"

### 3. Mise à jour de app/page.tsx

```typescript
// SUPPRIMER : Les 4 avis hardcodés (lignes 36-64)

// REMPLACER par :
import { caracasConfig } from '@/data/clients/caracas'

// DANS le JSX :
<ReviewsSection
  reviews={caracasConfig.content.reviews}
  rating="4.8"
  reviewCount="120"
  googleMapsUrl={contact.googleMapsUrl}
  config={caracasConfig.config.sections.reviews}
/>
```

## Fichiers à modifier

1. `data/types/client.ts` - Ajouter `avatar?: string` dans `ReviewItem`
2. `data/clients/caracas/content.ts` - Ajouter les 4 avis avec URLs Unsplash
3. `app/page.tsx` - Supprimer les avis hardcodés, importer depuis `caracasConfig`
4. `components/sections/ReviewsSection.tsx` - Afficher les photos + badge Google

## Tests à vérifier

- [ ] Les photos s'affichent correctement
- [ ] Le fallback (initiales) fonctionne si pas d'avatar
- [ ] Le badge Google s'affiche avec les bonnes couleurs
- [ ] Responsive design conservé (mobile, tablet, desktop)
- [ ] Accessibilité (alt text sur les images)
- [ ] Performance (chargement des images)
- [ ] Cohérence visuelle avec le reste du site

## Impact

- **Utilisateurs** : Expérience plus réaliste et crédible
- **Conversion** : Badge Google renforce la confiance → plus de clics vers les avis
- **Maintenance** : Code plus propre (avis dans data, pas hardcodés)
- **Performance** : Images optimisées Unsplash (200x200px)

## Notes

- Les URLs Unsplash sont stables et ne nécessitent pas de clé API
- Format carré 200x200px optimal pour les avatars
- Paramètre `crop=face` garantit que le visage est centré
- Fallback en place si une URL ne fonctionne plus
