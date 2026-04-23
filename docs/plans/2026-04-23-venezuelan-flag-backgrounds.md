# Venezuelan Flag Backgrounds Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Ajouter des bandes horizontales inspirées du drapeau vénézuélien (jaune → bleu → rouge) avec des motifs culturels et alimentaires subtils en background des sections de la page d'accueil.

**Architecture:** Un composant `VenezuelanFlagBackground` réutilisable qui enveloppe chaque section existante, appliquant un dégradé de fond avec superposition de motifs SVG en négatif. Les motifs sont stockés dans `/public/motifs/` et chargés de manière optimisée.

**Tech Stack:** React/Next.js 15, TypeScript, Tailwind CSS, SVG

---

## Task 1: Create SVG Motif Files

**Files:**
- Create: `public/motifs/food.svg`
- Create: `public/motifs/ethnic.svg`
- Create: `public/motifs/nature.svg`
- Create: `public/motifs/festive.svg`

**Step 1: Create food.svg motif**

Create file `public/motifs/food.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <defs>
    <pattern id="arepaPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
      <!-- Arepa top view -->
      <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/>
      <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.4"/>
      <!-- Corn grains -->
      <circle cx="20" cy="30" r="2" fill="currentColor" opacity="0.3"/>
      <circle cx="80" cy="70" r="2" fill="currentColor" opacity="0.3"/>
      <circle cx="70" cy="20" r="2" fill="currentColor" opacity="0.3"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#arepaPattern)"/>
</svg>
```

**Step 2: Create ethnic.svg motif**

Create file `public/motifs/ethnic.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
  <defs>
    <pattern id="andinPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
      <!-- Losange central -->
      <path d="M30 5 L55 30 L30 55 L5 30 Z" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.6"/>
      <!-- Triangles -->
      <path d="M30 15 L45 40 L15 40 Z" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.6"/>
      <path d="M30 45 L15 20 L45 20 Z" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.6"/>
      <!-- Points décoratifs -->
      <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.8"/>
      <circle cx="15" cy="15" r="1.5" fill="currentColor" opacity="0.6"/>
      <circle cx="45" cy="15" r="1.5" fill="currentColor" opacity="0.6"/>
      <circle cx="15" cy="45" r="1.5" fill="currentColor" opacity="0.6"/>
      <circle cx="45" cy="45" r="1.5" fill="currentColor" opacity="0.6"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#andinPattern)"/>
</svg>
```

**Step 3: Create nature.svg motif**

Create file `public/motifs/nature.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <defs>
    <pattern id="tepuysPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
      <!-- Tepuy silhouette (table-top mountain) -->
      <path d="M20 80 L40 30 L60 30 L80 80" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5"/>
      <!-- Waterfall/cascade -->
      <path d="M50 30 L50 55" stroke="currentColor" stroke-width="0.5" opacity="0.4" stroke-dasharray="2,2"/>
      <!-- Organic shapes -->
      <path d="M10 90 Q30 70 50 90 T90 90" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.3"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#tepuysPattern)"/>
</svg>
```

**Step 4: Create festive.svg motif**

Create file `public/motifs/festive.svg`:
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
  <defs>
    <pattern id="fiestaPattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
      <!-- Music note -->
      <path d="M20 40 L20 25 L30 20 L30 35" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5"/>
      <circle cx="18" cy="42" r="3" fill="currentColor" opacity="0.5"/>
      <circle cx="28" cy="37" r="3" fill="currentColor" opacity="0.5"/>
      <!-- Cocktail glass -->
      <path d="M50 30 L50 50 M45 50 L55 50 M50 30 L40 40 L60 40" fill="none" stroke="currentColor" stroke-width="1" opacity="0.5"/>
      <!-- Stars/circles -->
      <circle cx="60" cy="20" r="2" fill="currentColor" opacity="0.4"/>
      <circle cx="70" cy="60" r="1.5" fill="currentColor" opacity="0.4"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#fiestaPattern)"/>
</svg>
```

**Step 5: Verify files created**

Run: `ls -lh public/motifs/`
Expected: 4 SVG files listed with sizes < 5KB each

**Step 6: Commit**

```bash
git add public/motifs/
git commit -m "feat: add Venezuelan cultural SVG motifs for flag backgrounds"
```

---

## Task 2: Create VenezuelanFlagBackground Component

**Files:**
- Create: `components/ui/VenezuelanFlagBackground.tsx`
- Test: Visual verification in browser

**Step 1: Create component file**

Create file `components/ui/VenezuelanFlagBackground.tsx`:
```tsx
import { ReactNode } from 'react'

export type MotifType = 'food' | 'ethnic' | 'nature' | 'festive'
export type FlagColor = 'yellow' | 'blue' | 'red'

interface VenezuelanFlagBackgroundProps {
  color: FlagColor
  motif: MotifType
  opacity?: number
  className?: string
  children: ReactNode
}

const colorMap = {
  yellow: '#FFCC00',
  blue: '#0033A0',
  red: '#CF142B'
}

const motifMap: Record<MotifType, string> = {
  food: '/motifs/food.svg',
  ethnic: '/motifs/ethnic.svg',
  nature: '/motifs/nature.svg',
  festive: '/motifs/festive.svg'
}

export function VenezuelanFlagBackground({
  color,
  motif,
  opacity = 0.1,
  className = '',
  children
}: VenezuelanFlagBackgroundProps) {
  const bgColor = colorMap[color]
  const motifUrl = motifMap[motif]

  return (
    <div className={`relative ${className}`}>
      {/* Gradient background */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          background: `linear-gradient(180deg, ${bgColor} 0%, ${bgColor} 50%, transparent 100%)`
        }}
      />

      {/* SVG motif overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${motifUrl})`,
          opacity: opacity,
          maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
```

**Step 2: Verify component compiles**

Run: `npm run build`
Expected: Build completes without errors

**Step 3: Commit**

```bash
git add components/ui/VenezuelanFlagBackground.tsx
git commit -m "feat: create VenezuelanFlagBackground component with gradient and motif overlay"
```

---

## Task 3: Add Tailwind Animations for Backgrounds

**Files:**
- Modify: `tailwind.config.ts:115-125`
- Test: Build verification

**Step 1: Add slow pan animation**

Edit `tailwind.config.ts`, add to `animation` object after line 125:
```typescript
'gradient-shift': 'gradientShift 3s ease infinite',
'slow-pan': 'slowPan 30s linear infinite',
```

**Step 2: Add keyframes for slowPan**

Edit `tailwind.config.ts`, add to `keyframes` object after `gradientShift`:
```typescript
gradientShift: {
  '0%, 100%': { backgroundPosition: '0% 50%' },
  '50%': { backgroundPosition: '100% 50%' },
},
slowPan: {
  '0%': { backgroundPosition: '0% 0%' },
  '100%': { backgroundPosition: '100px 100px' },
},
```

**Step 3: Verify build**

Run: `npm run build`
Expected: Build completes successfully

**Step 4: Commit**

```bash
git add tailwind.config.ts
git commit -m "feat: add slow-pan animation for background motifs"
```

---

## Task 4: Integrate Background into Hero Section

**Files:**
- Modify: `app/page.tsx:41-45`

**Step 1: Wrap HeroSection with VenezuelanFlagBackground**

Edit `app/page.tsx`, wrap HeroSection component:
```tsx
<VenezuelanFlagBackground color="yellow" motif="food" opacity={0.1}>
  <HeroSection
    content={caracasConfig.content.hero}
    config={caracasConfig.config}
    todayHours={todayHours}
  />
</VenezuelanFlagBackground>
```

**Step 2: Add import at top of file**

Edit `app/page.tsx`, add to imports:
```tsx
import { VenezuelanFlagBackground } from '@/components/ui/VenezuelanFlagBackground'
```

**Step 3: Verify in browser**

Run: `npm run dev`
Navigate to: http://localhost:3000
Expected: Hero section shows subtle yellow gradient with arepa/corn motifs

**Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add Venezuelan yellow flag background to Hero section"
```

---

## Task 5: Integrate Background into Signatures Section

**Files:**
- Modify: `app/page.tsx:46-50`

**Step 1: Wrap SignaturesSection with VenezuelanFlagBackground**

Edit `app/page.tsx`, wrap SignaturesSection component:
```tsx
<VenezuelanFlagBackground color="blue" motif="food" opacity={0.12}>
  <SignaturesSection
    items={caracasConfig.menu.signatureDishes}
    config={caracasConfig.config.sections.signatures}
  />
</VenezuelanFlagBackground>
```

**Step 2: Verify in browser**

Run: `npm run dev`
Navigate to: http://localhost:3000
Expected: Signatures section shows subtle blue gradient with food motifs

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add Venezuelan blue flag background to Signatures section"
```

---

## Task 6: Integrate Background into Story Section

**Files:**
- Modify: `app/page.tsx:51-56`

**Step 1: Wrap StorySection with VenezuelanFlagBackground**

Edit `app/page.tsx`, wrap StorySection component:
```tsx
<VenezuelanFlagBackground color="blue" motif="ethnic" opacity={0.08}>
  <StorySection
    content={caracasConfig.content.story}
    glossary={caracasConfig.content.glossary}
    config={caracasConfig.config.sections.story}
  />
</VenezuelanFlagBackground>
```

**Step 2: Remove existing VenezuelanPattern from StorySection component**

Edit `components/sections/StorySection.tsx:20`, remove line:
```tsx
<VenezuelanPattern opacity={0.08} />
```

**Step 3: Remove unused import**

Edit `components/sections/StorySection.tsx:5`, remove:
```tsx
import { VenezuelanPattern } from '@/components/ui/VenezuelanPattern'
```

**Step 4: Verify in browser**

Run: `npm run dev`
Navigate to: http://localhost:3000
Expected: Story section shows subtle blue gradient with Andean geometric patterns

**Step 5: Commit**

```bash
git add app/page.tsx components/sections/StorySection.tsx
git commit -m "feat: add Venezuelan blue flag background to Story section with ethnic motifs"
```

---

## Task 7: Integrate Background into Experiences Section

**Files:**
- Modify: `app/page.tsx:57-61`

**Step 1: Wrap ExperienceSection with VenezuelanFlagBackground**

Edit `app/page.tsx`, wrap ExperienceSection component:
```tsx
<VenezuelanFlagBackground color="red" motif="nature" opacity={0.1}>
  <ExperienceSection
    experiences={caracasConfig.content.experiences}
    config={caracasConfig.config.sections.experiences}
  />
</VenezuelanFlagBackground>
```

**Step 2: Verify in browser**

Run: `npm run dev`
Navigate to: http://localhost:3000
Expected: Experiences section shows subtle red gradient with nature motifs (tepuys, waterfalls)

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add Venezuelan red flag background to Experiences section"
```

---

## Task 8: Integrate Background into Gallery Section

**Files:**
- Modify: `app/page.tsx:62-66`

**Step 1: Wrap GallerySection with VenezuelanFlagBackground**

Edit `app/page.tsx`, wrap GallerySection component:
```tsx
<VenezuelanFlagBackground color="red" motif="nature" opacity={0.08}>
  <GallerySection
    images={caracasConfig.images.gallery}
    config={caracasConfig.config.sections.gallery}
  />
</VenezuelanFlagBackground>
```

**Step 2: Verify in browser**

Run: `npm run dev`
Navigate to: http://localhost:3000
Expected: Gallery section shows subtle red gradient with nature motifs

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add Venezuelan red flag background to Gallery section"
```

---

## Task 9: Integrate Background into Events Section

**Files:**
- Modify: `app/page.tsx:67-71`

**Step 1: Wrap EventsSection with VenezuelanFlagBackground**

Edit `app/page.tsx`, wrap EventsSection component:
```tsx
<VenezuelanFlagBackground color="red" motif="festive" opacity={0.06}>
  <EventsSection
    events={events}
    config={caracasConfig.config.sections.events}
  />
</VenezuelanFlagBackground>
```

**Step 2: Verify in browser**

Run: `npm run dev`
Navigate to: http://localhost:3000
Expected: Events section shows very subtle red gradient with festive motifs (music, cocktails)

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add Venezuelan red flag background to Events section with festive motifs"
```

---

## Task 10: Performance Testing and Optimization

**Files:**
- Test: Browser DevTools Lighthouse
- Test: Bundle size verification

**Step 1: Run Lighthouse audit**

Run: `npm run build && npm run start`
Open Chrome DevTools → Lighthouse → Run audit
Expected: Performance score > 90, no significant degradation

**Step 2: Check bundle size**

Run: `npm run build`
Check build output for total bundle size
Expected: Increase < 50KB total for all SVG files

**Step 3: Verify lazy loading**

Open Chrome DevTools → Network tab
Reload page and scroll to bottom
Expected: SVG files load as sections come into view

**Step 4: Test accessibility**

Run: Lighthouse audit again
Check: Accessibility score > 95
Expected: Color contrast maintained, screen reader navigation unaffected

**Step 5: Commit any optimizations**

If optimizations needed:
```bash
git add .
git commit -m "perf: optimize Venezuelan flag backgrounds for performance"
```

---

## Task 11: Responsive Testing

**Files:**
- Test: Browser devtools responsive mode

**Step 1: Test mobile view (320px - 768px)**

Open Chrome DevTools → Toggle device toolbar
Test at: 320px, 375px, 414px, 768px
Expected: Motifs scale properly, no horizontal overflow

**Step 2: Test tablet view (768px - 1024px)**

Test at: 768px, 834px, 1024px
Expected: Motifs visible but not overwhelming

**Step 3: Test desktop view (1024px+)**

Test at: 1280px, 1440px, 1920px
Expected: Motifs enhance visual hierarchy without dominating

**Step 4: Fix any responsive issues**

If issues found, adjust component or CSS:
```bash
git add components/ui/VenezuelanFlagBackground.tsx
git commit -m "fix: adjust Venezuelan flag backgrounds for responsive breakpoints"
```

---

## Task 12: Final Verification and Documentation

**Files:**
- Test: Full page scroll test
- Modify: `CLAUDE.md` (if needed)

**Step 1: Full visual regression test**

Run: `npm run dev`
Scroll from top to bottom of homepage
Verify:
- ✅ Yellow gradient in Hero (food motifs)
- ✅ Blue gradient in Signatures (food motifs, 12% opacity)
- ✅ Blue gradient in Story (ethnic motifs, 8% opacity)
- ✅ Red gradient in Experiences (nature motifs, 10% opacity)
- ✅ Red gradient in Gallery (nature motifs, 8% opacity)
- ✅ Red gradient in Events (festive motifs, 6% opacity)
- ✅ All gradients fade to transparent at bottom
- ✅ No visible seams between sections
- ✅ Content remains perfectly readable
- ✅ Venezuelan identity is clear but subtle

**Step 2: Test dark mode (if applicable)**

If site supports dark mode, toggle and verify appearance
Expected: Motifs remain visible and appropriate

**Step 3: Final commit**

```bash
git add .
git commit -m "feat: complete Venezuelan flag backgrounds integration with cultural motifs"
```

**Step 4: Update documentation**

If needed, update `CLAUDE.md` with new component usage:
```bash
git add CLAUDE.md
git commit -m "docs: update documentation for Venezuelan flag backgrounds"
```

---

## Success Criteria

After completing all tasks:

✅ Homepage displays Venezuelan flag colors as subtle horizontal bands
✅ Each section has appropriate cultural/food motifs
✅ Motifs are visible (8-12% opacity) but don't interfere with readability
✅ Performance impact is minimal (< 50KB total, < 100ms load time)
✅ Accessibility is maintained (WCAG AA contrast)
✅ Responsive design works on all screen sizes
✅ Venezuelan cultural identity is immediately apparent
✅ Design feels premium and intentional, not overwhelming

---

## Notes

- **Opacity values are carefully tuned**: Don't increase beyond 12% or readability will suffer
- **Gradient fade at bottom**: Creates seamless transitions between sections
- **SVG masks**: Ensure motifs fade out gradually, not abrupt cutoffs
- **Performance focus**: All SVG files should be < 5KB each
- **Accessibility first**: Always test with screen readers and color contrast tools
- **Cultural respect**: Motifs are inspired by Venezuelan culture, not caricatures
