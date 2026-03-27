# Design: Animation Spotlumière pour la Navbar

**Date:** 2026-03-27
**Projet:** Caracas Bar & Tapas - Website
**Auteur:** Claude (avec l'utilisateur)

## Contexte

Le site actuel utilise un simple soulignement orange qui s'étend au hover sur les liens de navigation. L'utilisateur souhaite une animation plus distinctive et mémorable qui correspond à l'ambiance festive et chaleureuse du restaurant vénézuélien.

## Objectif

Créer une animation de hover interactive et moderne pour les liens de navigation de la navbar desktop qui améliore l'expérience utilisateur tout en renforçant l'identité visuelle du restaurant.

## Design Retenu: Spotlumière Interactif

### Comportement Visuel

L'animation crée un effet de spotlumière qui suit la position de la souris lorsqu'elle survole les liens de navigation :

1. **Activation au hover** : Un spotlumière radial apparaît et suit la souris
2. **Dégradé coloré** : Utilisation des couleurs secondaires du site (orange/ambre : secondary-400 à secondary-600)
3. **Masquage propre** : L'effet est contenu dans les limites du lien via `overflow: hidden`
4. **Estompage progressif** : La lumière s'estompe naturellement vers les bords (radial gradient)
5. **Transition fluide** : Disparition en douceur quand la souris quitte le lien

**Spécifications visuelles :**
- Centre du spot : `secondary-400` (#fbbf24 - orange clair)
- Bords du spot : transparent (fade out progressif)
- Taille du spot : ~200px de diamètre
- Forme : Radial gradient circulaire

### Implémentation Technique

#### Architecture

**Modification de `components/Header.tsx` :**

1. **Création d'un composant `SpotlightLink`** :
   - Encapsule la logique de l'animation
   - Gère le state local pour la position de la souris
   - Accepte les props : `href`, `children`, `isActive`

2. **State management** :
   - `{ x, y }` pour tracker la position relative de la souris
   - `{ isHovered }` pour gérer l'apparition/disparition

3. **Event handlers** :
   - `onMouseMove` : Calcule la position relative au lien
   - `onMouseEnter` : Active le spotlight
   - `onMouseLeave` : Désactive le spotlight

**Structure du composant SpotlightLink :**

```tsx
interface SpotlightLinkProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
  className?: string
}

// Éléments clés :
// - position: relative sur le conteneur
// - overflow: hidden pour masquer le spotlight
// - Élément spotlight en absolute avec radial-gradient
// - pointer-events: none sur le spotlight
```

#### CSS et Styles

**Classes Tailwind utilisées :**

Sur le conteneur (link) :
- `relative overflow-hidden` : Contient le spotlight
- `transition-colors duration-200` : Transition de couleur du texte

Sur l'élément spotlight :
- `absolute rounded-full` : Position absolue, forme circulaire
- `pointer-events-none` : Ne bloque pas les interactions
- `radial-gradient` : Dégradé radial pour l'effet de lumière
- `opacity-0 group-hover:opacity-100` : Apparition au hover
- `transition-opacity duration-150` : Transition fluide

**Variables CSS (si nécessaire) :**
```css
--spotlight-size: 200px;
--spotlight-color: theme('colors.secondary.400');
```

### Animations et Timing

#### Apparition
- **Property** : `opacity`
- **Transition** : `0 → 1`
- **Duration** : `150ms`
- **Easing** : `ease-out`
- **Delay** : `0ms` (instantané)

#### Déplacement
- **Pas de transition** sur `top/left` (follow direct de la souris)
- La fluidité vient de la fréquence native des mouse events

#### Disparition
- **Property** : `opacity`
- **Transition** : `1 → 0`
- **Duration** : `300ms`
- **Easing** : `ease-in`
- **Delay** : `0ms`

#### État actif (page courante)
- Le spotlight reste visible sur le lien actif
- **Opacity** : `0.6` (plus subtil que le hover)
- **Position** : Centrée sur le lien

### Performance

**Optimisations :**
- Utilisation de `transform: translate3d()` pour accélération GPU
- `will-change: opacity, transform` pour optimiser le rendu
- Pas de repaints coûteux (uniquement compositing)
- `pointer-events: none` sur le spotlight pour éviter les event listeners

**Considérations mobile :**
- L'animation ne s'active que sur desktop (`hidden lg:flex`)
- Les liens mobiles gardent leur style actuel (background color)

## Alternatives Considérées

1. **Pill qui remplit** : Animation classique d'un background qui remplit de gauche à droite
2. **Glow lumineux** : Lueur autour du texte avec text-shadow ou box-shadow

Ces alternatives ont été écartées car moins originales et moins interactives que le spotlumière.

## Livrables

1. **Composant `SpotlightLink`** dans un nouveau fichier ou intégré à `Header.tsx`
2. **Modification de la navbar desktop** dans `components/Header.tsx`
3. **Tests manuels** : Hover sur desktop, responsive, état actif
4. **Compatibilité** : Fonctionne avec la structure existante, pas de breaking changes

## Critères de Succès

- ✅ L'animation est fluide (60fps)
- ✅ Le spotlight suit fidèlement la souris
- ✅ L'effet est contenu dans les limites du lien
- ✅ Les transitions sont douces et naturelles
- ✅ L'état actif est clairement visible
- ✅ Pas d'impact sur les performances globales
- ✅ Fonctionne sur tous les navigateurs modernes
