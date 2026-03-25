# Caracas Bar & Tapas - Site Web

Site web premium pour le restaurant vénézuélien Caracas Bar & Tapas à Levallois.

## 🎨 Direction Artistique

**Style**: "Tropical Parisian Chic" - L'élégance du bistro parisien rencontre l'âme vénézuélienne subtile.

### Palette de couleurs
- **Base neutres**: Ivoire/Cream, Noir doux, Gris chaud
- **Accents Venezuela** (subtils):
  - Jaune doré (`gold-500`) - CTA principal
  - Bleu nuit (`midnight-500`) - Liens et hover
  - Rouge brique (`brick-500`) - Micro-détails

### Typographie
- **Serif**: Cormorant Garamond (titres élégants)
- **Sans**: DM Sans (texte moderne et lisible)

## 🏗️ Stack Technique

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icônes**: Lucide React
- **Carrousel**: Embla Carousel

## 📁 Structure du Projet

```
caracas restaurant/
├── app/
│   ├── contact/
│   │   └── page.tsx          # Page contact & réservation
│   ├── menu/
│   │   └── page.tsx          # Page menu HTML mobile-first
│   ├── layout.tsx            # Layout racine + SEO + Schema.org
│   ├── page.tsx              # Page d'accueil
│   └── globals.css           # Styles globaux
├── components/
│   ├── Badge.tsx             # Badges (Best-seller, Épicé, Végétarien, Allergènes)
│   ├── Button.tsx            # Boutons (primary, secondary, ghost, outline)
│   ├── Card.tsx              # Cartes (signature, review)
│   ├── Footer.tsx            # Footer avec infos pratiques
│   ├── Header.tsx            # Header sticky avec menu mobile
│   └── Section.tsx           # Composant section réutilisable
├── data/
│   └── restaurant.ts         # Données centralisées du restaurant
├── lib/
│   └── utils.ts              # Utilitaires (cn, formatPhone, getTodayHours)
├── tailwind.config.ts        # Configuration Tailwind personnalisée
├── next.config.js            # Configuration Next.js
├── tsconfig.json             # Configuration TypeScript
└── package.json              # Dépendances
```

## 🚀 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Démarrer le serveur de production
npm start
```

## 📄 Pages

### 1. Home (`/`)
- Hero section avec image plein écran
- Signatures (6 plats phares)
- Expérience (Cuisine, Cocktails, Ambiance)
- Histoire courte + lexique vénézuélien
- Menu teaser (catégories)
- Avis clients
- Galerie photos
- Privatisation & événements
- Infos pratiques
- CTA final

### 2. Menu (`/menu`)
- Navigation sticky par catégories
- Section Best-sellers
- Liste détaillée des plats avec:
  - Prix
  - Badges (Best-seller, Épicé, Végétarien)
  - Allergènes
- Informations allergènes
- Lien PDF (optionnel)
- CTA réservation/appel

### 3. Contact (`/contact`)
- Formulaire de réservation
- Coordonnées (téléphone, email, réseaux)
- Horaires détaillés
- Accès (métro, bus, voiture, vélo)
- Lien Google Maps

## 🎯 Fonctionnalités Clés

### Conversion-First
- CTA "Réserver" omniprésent
- Bouton sticky sur mobile
- Alternative "Appeler"
- Lien "Itinéraire"

### Mobile-First
- Menu HTML ultra-lisible sur mobile
- Navigation drawer sur mobile
- Boutons d'action sticky
- Typographie responsive

### SEO & Performance
- Metadata optimisées
- OpenGraph + Twitter Cards
- Schema.org Restaurant
- Images optimisées (lazy loading)
- Polices optimisées (display: swap)

### Accessibilité
- Contrastes WCAG AA
- Tailles de police minimales (16px)
- Focus visible
- Navigation clavier
- ARIA labels

## 🍽️ Contenu

Les données du restaurant sont centralisées dans `data/restaurant.ts`:

- `restaurantInfo` - Coordonnées, horaires, réseaux sociaux
- `menuItems` - Tous les plats du menu
- `menuCategories` - Catégories du menu
- `signatureDishes` - Plats signatures pour l'accueil
- `experiences` - Les 3 piliers de l'expérience
- `reviews` - Avis clients
- `galleryImages` - Images de la galerie
- `events` - Types d'événements (privatisation)
- `glossary` - Lexique vénézuélien

## 🎨 Composants UI

### Button
```tsx
<Button variant="primary" size="lg" asChild>
  <Link href="/contact#reservation">Réserver</Link>
</Button>
```

### Badge
```tsx
<Badge type="bestseller" />  // Best-seller, spicy, veggie, new
<AllergenBadge allergen="Gluten" />
```

### Card
```tsx
<SignatureCard
  name="Reina Pepiada"
  description="Arepas au maïs, poulet et avocat"
  price={13.50}
  image="/image.jpg"
  badges={['bestseller', 'veggie']}
/>
```

### Section
```tsx
<Section background="cream" py="lg" id="signatures">
  <SectionHeader
    title="Nos Signatures"
    subtitle="Les incontournables"
    description="..."
  />
  {/* content */}
</Section>
```

## 🔧 Personnalisation

### Couleurs
Modifier `tailwind.config.ts`:
```typescript
colors: {
  gold: { 500: '#C9A018' },    // Jaune vénézuélien
  midnight: { 500: '#1E4C6F' }, // Bleu vénézuélien
  brick: { 500: '#C23626' },    // Rouge vénézuélien
}
```

### Contenu
Modifier `data/restaurant.ts` pour mettre à jour:
- Horaires
- Menu
- Prix
- Images
- Avis

## 📱 Responsive

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Déploiement

```bash
# Builder
npm run build

# Tester la production localement
npm start
```

Ce site est conçu pour être déployé sur Vercel, mais fonctionne sur任何 plateforme Node.js.

## 📝 Notes

- Les images sont des placeholders Unsplash (à remplacer par vos photos)
- Le formulaire de réservation est à connecter à votre backend/service
- Le code de vérification Google est à remplacer dans `layout.tsx`
- Les liens réseaux sociaux sont à mettre à jour dans `data/restaurant.ts`

---

**Design & Développement**: Premium conversion-first site pour Caracas Bar & Tapas
