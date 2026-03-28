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
```bash
cp -r data/clients/caracas data/clients/mon-restaurant
```

2. Modifier les fichiers de configuration :
- `data/clients/mon-restaurant/config.ts` : Nom, couleurs, sections
- `data/clients/mon-restaurant/content.ts` : Contenu éditorial
- `data/clients/mon-restaurant/menu.ts` : Menu et cartes
- `data/clients/mon-restaurant/contact.ts` : Coordonnées et horaires
- `data/clients/mon-restaurant/seo.ts` : Métadonnées SEO
- `data/clients/mon-restaurant/images.ts` : Images

3. Mettre à jour l'import dans `app/page.tsx` :
```typescript
import { monRestaurantConfig } from '@/data/clients/mon-restaurant'
```

## Structure du projet

```
data/
  clients/
    {client}/
      index.ts         # Point d'entrée
      config.ts        # Branding, couleurs, sections
      content.ts       # Histoire, expériences, lexique
      menu.ts          # Menu et plats signatures
      contact.ts       # Coordonnées, horaires, social
      seo.ts          # Métadonnées SEO
      images.ts       # Références images
  types/
    client.ts         # Types TypeScript
```

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
```typescript
colors: {
  primary: '#059669',
  secondary: '#D97706',
  // ...
}
```

### Sections
Activer/désactiver des sections :
```typescript
sections: {
  hero: { enabled: true },
  signatures: { enabled: true },
  gallery: { enabled: false }, // Désactivée
}
```

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Lucide Icons
