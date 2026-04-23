# Design: Bandes Horizontales du Drapeau Vénézuélien

**Date:** 2026-04-23
**Auteur:** Claude
**Statut:** Approuvé

## Objectif

Ajouter des éléments graphiques subtils mais identifiables qui font référence au Venezuela pour donner une identité visuelle forte au site Caracas Bar & Tapas, tout en préservant l'élégance et la lisibilité de la page d'accueil.

## Concept Visuel

Des bandes dégradées horizontales qui traversent la page de haut en bas, s'inspirant des couleurs du drapeau vénézuélien (jaune → bleu → rouge) de manière subtile et élégante.

### Structure des Bandes

1. **Bande jaune** (Hero) : Chaleur, accueil, énergie
2. **Bande bleue** (Story + Signatures) : Authenticité, tradition, profondeur
3. **Bande rouge** (Experiences + Gallery + Events) : Passion, festif, convivialité

Chaque bande contient des **motifs alimentaires et culturels stylisés** intégrés en subtilité.

## Spécifications par Section

### Section 1 : Hero (Bande Jaune)

**Propriétés :**
- Couleur : `#FFCC00` (jaune drapeau)
- Opacité : 8-10%
- Dégradé : horizontal vers transparent
- Motifs : Silhouettes d'arepas et de maïs stylisés

**Motifs SVG:**
- Arepas en perspective (vue du dessus)
- Grains de maïs épars
- Disposition aléatoire mais équilibrée
- Technique: en négatif (plus clairs que le fond)

**Placement:**
- Le motif part du bas de la section Hero
- S'estompe progressivement vers le bas
- Crée une transition vers la section Signatures

---

### Section 2 : Signatures + Story (Bande Bleue)

**Propriétés:**
- Couleur : `#0033A0` (bleu drapeau)
- Opacité : 8-12%
- Dégradé : continu entre les deux sections

**Motifs Signatures:**
- Silhouettes de cachapas
- Tequeños stylisés
- Opacité : 12% (plus visible pour mettre en valeur les plats)

**Motifs Story:**
- Géométrie précolombienne andine (losanges, triangles)
- Inspiré des textiles traditionnels vénézuéliens
- Opacité : 6-8% (plus discret pour ne pas perturber la lecture)

**Placement:**
- Motif continu entre Signatures et Story
- Variation d'opacité selon la section
- Transition fluide grâce au dégradé

---

### Section 3 : Experiences + Gallery + Events (Bande Rouge)

**Propriétés:**
- Couleur : `#CF142B` (rouge drapeau)
- Opacité : 6-12% (atténué progressivement)
- Dégradé : horizontal vers transparent

**Motifs Experiences:**
- Formes organiques évoquant les tepuys (montagnes vénézuéliennes)
- Cascades stylisées (Angel Falls)
- Opacité : 10-12%

**Motifs Gallery:**
- Étoiles/gouttes stylisées
- Évoque la joie et la célébration
- Opacité : 8-10%

**Motifs Events:**
- Notes de musique
- Cocktails stylisés
- Formes festives
- Opacité : 6-8% (très subtil pour ne pas gêner la lecture)

**Placement:**
- Motif rouge continu sur les trois sections
- Atténuation progressive vers Events
- Crée une ambiance chaleureuse sans être envahissante

---

## Architecture Technique

### Composant Principal : `VenezuelanFlagBackground`

**Interface:**
```typescript
interface VenezuelanFlagBackgroundProps {
  color: 'yellow' | 'blue' | 'red'
  motif: 'food' | 'ethnic' | 'nature' | 'festive'
  opacity?: number // 0.08-0.12 par défaut
  className?: string
  children: React.ReactNode
}
```

**Comportement:**
- Applique un dégradé de fond selon la couleur choisie
- Superpose un motif SVG en négatif
- Utilise z-index: -1 pour ne pas gêner l'accessibilité
- Animation subtile (pan lent) via CSS transforms

### Fichiers de Motifs SVG

Quatre fichiers SVG optimisés dans `/public/motifs/`:

1. **food.svg** (~3KB)
   - Arepas (vus du dessus)
   - Grains de maïs
   - Cachapas stylisés
   - Tequeños

2. **ethnic.svg** (~2KB)
   - Losanges andins
   - Triangles précolombiens
   - Géométrie textile traditionnelle

3. **nature.svg** (~3KB)
   - Silhouettes de tepuys
   - Cascades/Angel Falls
   - Formes organiques naturelles

4. **festive.svg** (~3KB)
   - Notes de musique
   - Cocktails
   - Étoiles/célébration

### Intégration dans les Sections Existantes

Chaque section existante sera envelopée du composant:

```tsx
<VenezuelanFlagBackground color="blue" motif="ethnic" opacity={0.08}>
  <StorySection {...props} />
</VenezuelanFlagBackground>
```

### Performance

- **SVG optimisés**: Chaque fichier < 5KB
- **Lazy loading**: Sections inférieures chargées à la demande
- **CSS animations**: Transforms GPU (pas de JS)
- **Accessibilité**: z-index négatif, contraste préservé

## Contraintes

- **Opacité**: Ne pas dépasser 12% pour préserver la lisibilité
- **Performance**: Temps de chargement < 100ms additionnel
- **Accessibilité**: Contraste WCAG AA maintenu sur tout le contenu
- **Responsive**: Motifs s'adaptent aux tailles d'écran
- **Compatibilité**: Fonctionne sur tous les navigateurs modernes

## Critères de Succès

✅ L'identité vénézuélienne est immédiatement perceptible
✅ La lisibilité du contenu n'est pas compromise
✅ Les motifs sont subtils mais visibles (8-12% opacité)
✅ Les performances sont maintenues (< 100ms impact)
✅ Le design est cohérent sur toute la page
✅ L'accessibilité est préservée (WCAG AA)

## Prochaines Étapes

Créer un plan d'implémentation détaillé avec:
1. Structure des fichiers à créer
2. Ordre d'implémentation par section
3. Tests de performance et d'accessibilité
4. Strategy de rollback si nécessaire
