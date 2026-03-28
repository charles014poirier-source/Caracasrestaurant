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
