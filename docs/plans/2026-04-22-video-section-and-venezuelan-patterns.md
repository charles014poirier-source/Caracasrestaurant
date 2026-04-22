# Video Section & Venezuelan Patterns Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add an immersive video section to the homepage and integrate subtle Venezuelan Andean patterns (triangles/diamonds) as background patterns to reinforce visual identity.

**Architecture:**
1. Create new VideoStorySection component with background video, overlay, and centered text
2. Create reusable VenezuelanPattern component with SVG pattern (Andean-inspired triangles/diamonds)
3. Integrate pattern into HeroSection and StorySection as subtle backgrounds
4. Update data types and client configuration

**Tech Stack:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React components
- SVG patterns

---

## Task 1: Add VideoStoryContent Type Definition

**Files:**
- Modify: `data/types/client.ts`

**Step 1: Read current types**

Run: `cat data/types/client.ts | grep -A 20 "export interface ContentData"`

Expected: See ContentData interface with hero, story, experiences, glossary, reviews

**Step 2: Add VideoStoryContent interface**

Add after StoryContent interface (around line 42):

```typescript
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

**Step 3: Update ContentData interface**

Add videoStory field to ContentData interface:

```typescript
export interface ContentData {
  hero: HeroContent
  story: StoryContent
  videoStory: VideoStoryContent // NOUVEAU
  experiences: ExperienceItem[]
  glossary: GlossaryItem[]
  reviews: ReviewItem[]
}
```

**Step 4: Verify TypeScript compiles**

Run: `npm run build 2>&1 | head -20`

Expected: No TypeScript errors (will fail until videoStory is added to content objects)

**Step 5: Commit**

```bash
git add data/types/client.ts
git commit -m "feat: add VideoStoryContent type definition

- Add interface for video story section
- Include videoUrl, posterUrl, title, subtitle, CTA
- Update ContentData to include videoStory field"
```

---

## Task 2: Add Video Story Data to Caracas Content

**Files:**
- Modify: `data/clients/caracas/content.ts`

**Step 1: Read current content structure**

Run: `cat data/clients/caracas/content.ts`

Expected: See exports for hero, story, experiences, glossary, reviews

**Step 2: Add videoStory data**

Add before the `content` export object:

```typescript
export const videoStory = {
  enabled: true,
  videoUrl: 'https://videos.pexels.com/video-files/520876/520876-uhd_2560_1440_30fps.mp4',
  posterUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80',
  title: "L'Art de Vivre Vénézuélien",
  subtitle: "Découvrez nos saveurs et nos traditions",
  cta: {
    text: "Voir notre carte",
    href: "#menu"
  }
}
```

Note: Using a Pexels video as placeholder. Replace with actual restaurant video later.

**Step 3: Update content export**

Modify the content export to include videoStory:

```typescript
export const content: ContentData = {
  hero,
  story,
  videoStory, // NOUVEAU
  experiences,
  glossary,
  reviews,
}
```

**Step 4: Verify TypeScript compiles**

Run: `npm run build 2>&1 | head -20`

Expected: No TypeScript errors

**Step 5: Commit**

```bash
git add data/clients/caracas/content.ts
git commit -m "feat: add video story data to Caracas content

- Add videoStory with Pexels placeholder video
- Include poster image and CTA
- Update content export object"
```

---

## Task 3: Update Section Config to Include VideoStory

**Files:**
- Modify: `data/clients/caracas/config.ts`

**Step 1: Read current section config**

Run: `cat data/clients/caracas/config.ts | grep -A 15 "sections:"`

Expected: See section config with hero, signatures, story, etc.

**Step 2: Add videoStory to section config**

Add to the sections object:

```typescript
sections: {
  hero: { enabled: true },
  signatures: { enabled: true },
  story: { enabled: true },
  videoStory: { enabled: true }, // NOUVEAU
  experiences: { enabled: true },
  gallery: { enabled: true },
  events: { enabled: true },
  reviews: { enabled: true },
}
```

**Step 3: Verify TypeScript compiles**

Run: `npm run build 2>&1 | head -20`

Expected: No TypeScript errors

**Step 4: Commit**

```bash
git add data/clients/caracas/config.ts
git commit -m "feat: add videoStory to section config

- Enable videoStory section
- Maintain consistency with other section configs"
```

---

## Task 4: Create VenezuelanPattern Component

**Files:**
- Create: `components/ui/VenezuelanPattern.tsx`

**Step 1: Create the VenezuelanPattern component**

Create the file with this content:

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
        aria-hidden="true"
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

**Step 2: Verify TypeScript compiles**

Run: `npm run build 2>&1 | head -20`

Expected: No TypeScript errors

**Step 3: Commit**

```bash
git add components/ui/VenezuelanPattern.tsx
git commit -m "feat: create VenezuelanPattern component

- Add SVG pattern with Andean-inspired motifs
- Triangles, diamonds, decorative dots
- Venezuelan colors: yellow, blue, red
- Reusable with customizable opacity"
```

---

## Task 5: Integrate Pattern into HeroSection

**Files:**
- Modify: `components/sections/HeroSection.tsx`

**Step 1: Read current HeroSection**

Run: `cat components/sections/HeroSection.tsx | head -20`

Expected: See imports and component structure

**Step 2: Add VenezuelanPattern import**

Add to imports at top:

```typescript
import { VenezuelanPattern } from '@/components/ui/VenezuelanPattern'
```

**Step 3: Add pattern to HeroSection**

Find the main return statement and add the pattern at the beginning of the section content. The pattern should be inside the Section component but before other content.

Add immediately after the opening `<section>` tag or as the first element in the container div:

```typescript
<VenezuelanPattern opacity={0.05} />
```

**Step 4: Verify TypeScript compiles**

Run: `npm run build 2>&1 | head -20`

Expected: No TypeScript errors

**Step 5: Test in browser**

Run: `npm run build && npm run preview`

Open: http://localhost:3000

Expected: Hero section has subtle pattern overlay

**Step 6: Commit**

```bash
git add components/sections/HeroSection.tsx
git commit -m "feat: add Venezuelan pattern to HeroSection

- Integrate subtle Andean pattern (5% opacity)
- Enhance visual identity with Venezuelan motifs
- Pattern positioned absolutely, non-interactive"
```

---

## Task 6: Integrate Pattern into StorySection

**Files:**
- Modify: `components/sections/StorySection.tsx`

**Step 1: Add VenezuelanPattern import**

Add to imports at top:

```typescript
import { VenezuelanPattern } from '@/components/ui/VenezuelanPattern'
```

**Step 2: Add pattern to StorySection**

Add the pattern immediately after the opening `<Section id="histoire" background="pattern">` tag:

```typescript
<VenezuelanPattern opacity={0.08} />
```

**Step 3: Verify TypeScript compiles**

Run: `npm run build 2>&1 | head -20`

Expected: No TypeScript errors

**Step 4: Test in browser**

Run: `npm run build && npm run preview`

Open: http://localhost:3000#histoire

Expected: Story section has slightly more visible pattern overlay

**Step 5: Commit**

```bash
git add components/sections/StorySection.tsx
git commit -m "feat: add Venezuelan pattern to StorySection

- Integrate Andean pattern (8% opacity)
- Slightly more visible than in Hero
- Reinforce Venezuelan identity throughout page"
```

---

## Task 7: Create VideoStorySection Component

**Files:**
- Create: `components/sections/VideoStorySection.tsx`

**Step 1: Create the VideoStorySection component**

Create the file with this content:

```typescript
import { VideoStoryContent } from '@/data/types/client'
import { Button } from '@/components/Button'

interface VideoStorySectionProps {
  content: VideoStoryContent
  config: {
    enabled: boolean
  }
}

export function VideoStorySection({ content, config }: VideoStorySectionProps) {
  if (!config.enabled) return null

  return (
    <section className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={content.videoUrl}
        poster={content.posterUrl}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8 md:px-12 lg:px-16">
        <h2 className="font-serif text-display-md text-white mb-4">
          {content.title}
        </h2>
        <p className="text-body-lg text-white/90 mb-8 max-w-2xl">
          {content.subtitle}
        </p>
        <Button size="lg" asChild>
          <a href={content.cta.href}>{content.cta.text}</a>
        </Button>
      </div>
    </section>
  )
}
```

**Step 2: Verify TypeScript compiles**

Run: `npm run build 2>&1 | head -20`

Expected: No TypeScript errors

**Step 3: Commit**

```bash
git add components/sections/VideoStorySection.tsx
git commit -m "feat: create VideoStorySection component

- Add video background with autoplay, muted, loop
- Gradient overlay for text readability
- Responsive height: 40vh mobile, 50vh tablet, 60vh desktop
- Centered text and CTA button"
```

---

## Task 8: Integrate VideoStorySection into HomePage

**Files:**
- Modify: `app/page.tsx`

**Step 1: Add VideoStorySection import**

Add to imports at top:

```typescript
import { VideoStorySection } from '@/components/sections/VideoStorySection'
```

**Step 2: Add VideoStorySection to page**

Insert between StorySection and ExperienceSection (after line 52):

```typescript
<StorySection
  content={caracasConfig.content.story}
  glossary={caracasConfig.content.glossary}
  config={caracasConfig.config.sections.story}
/>
<VideoStorySection
  content={caracasConfig.content.videoStory}
  config={caracasConfig.config.sections.videoStory}
/>
<ExperienceSection
  experiences={caracasConfig.content.experiences}
  config={caracasConfig.config.sections.experiences}
/>
```

**Step 3: Verify TypeScript compiles**

Run: `npm run build 2>&1 | head -20`

Expected: No TypeScript errors

**Step 4: Test in browser**

Run: `npm run build && npm run preview`

Open: http://localhost:3000

Expected:
- Video section appears between Story and Experience
- Video plays in background
- Text is readable with overlay
- Responsive on mobile, tablet, desktop
- CTA button works

**Step 5: Test responsive behavior**

Check viewports:
- Mobile (375px): Height 40vh, text readable
- Tablet (768px): Height 50vh
- Desktop (1440px): Height 60vh

Expected: Layout adapts properly across all breakpoints

**Step 6: Commit**

```bash
git add app/page.tsx
git commit -m "feat: integrate VideoStorySection into homepage

- Add video section between Story and Experience
- Perfectly responsive for all devices
- Video background with overlay and CTA
- Maintains smooth scroll and page flow"
```

---

## Task 9: Final Testing & Optimization

**Files:**
- No file creation/modification (testing only)

**Step 1: Run full build**

Run: `npm run build`

Expected: Build succeeds with no errors

**Step 2: Test all features**

Verify checklist:
- [ ] Video loads and plays automatically on all devices
- [ ] Fallback image displays if video fails
- [ ] Pattern is visible on Hero section (5% opacity)
- [ ] Pattern is visible on Story section (8% opacity)
- [ ] Patterns don't interfere with text readability
- [ ] Video section is responsive (40vh/50vh/60vh)
- [ ] CTA button navigates to #menu
- [ ] No console errors
- [ ] Cross-browser compatibility (Chrome, Safari, Firefox)

**Step 3: Performance check**

Run: `npm run build`

Check:
- Bundle size is acceptable
- No performance warnings
- Video weight is reasonable (< 5MB)

**Step 4: Accessibility check**

Verify:
- Video has muted attribute (autoplay requirement)
- Text contrast is sufficient (white on dark overlay)
- CTA button is keyboard accessible
- Pattern has aria-hidden="true"

**Step 5: Visual regression testing**

Take screenshots at all breakpoints:
- Mobile (375px)
- Tablet (768px)
- Desktop (1440px)

**Step 6: Final commit**

```bash
git add .
git commit -m "test: complete video section and Venezuelan patterns feature

✅ All tests passing
✅ Responsive design verified (mobile, tablet, desktop)
✅ Accessibility validated
✅ Performance optimized
✅ Cross-browser compatible

Features:
- Immersive video section with overlay
- Andean-inspired patterns on Hero and Story
- Venezuelan colors (yellow, blue, red) used subtly
- Perfectly responsive for all devices
- Free stock video placeholder (easily replaceable)
- SVG patterns optimized for performance"
```

---

## Task 10: Update Documentation

**Files:**
- Create: `docs/video-section-patterns.md`

**Step 1: Create documentation**

Create documentation file:

```markdown
# Video Section & Venezuelan Patterns Documentation

## Overview
The video section and Venezuelan patterns add immersive visual elements and reinforce the restaurant's Venezuelan identity.

## Video Section

### Purpose
Creates an immersive break between the story and experience sections, showcasing the Venezuelan way of life.

### Data Structure

```typescript
interface VideoStoryContent {
  enabled: boolean
  videoUrl: string      // MP4 video URL
  posterUrl: string     // Fallback image
  title: string         // Main heading
  subtitle: string      // Subheading
  cta: {
    text: string        // Button text
    href: string        // Link destination
  }
}
```

### Updating Video

1. Replace `videoUrl` with your own video
2. Update `posterUrl` with fallback image
3. Adjust title and subtitle as needed
4. Modify CTA text and link

### Video Guidelines

- **Format**: MP4, H.264 encoding
- **Resolution**: 1920x1080 (Full HD)
- **Duration**: 15-30 seconds (loop)
- **File size**: < 5MB
- **Content**: Restaurant ambiance, warm lighting, subtle movement

### Free Video Sources

- Pexels: https://www.pexels.com/fr-fr/videos/
- Pixabay: https://pixabay.com/fr/videos/
- Mixkit: https://mixkit.co/free-stock-video/

Search keywords: "restaurant", "tapas", "cooking", "warm interior"

## Venezuelan Patterns

### Purpose
Subtle background patterns inspired by Andean textiles add visual identity without overwhelming the design.

### Pattern Component

```typescript
<VenezuelanPattern opacity={0.05} />
```

### Opacity Guidelines

- **Hero section**: 0.05 (5% - very subtle)
- **Story section**: 0.08 (8% - slightly more visible)

### Pattern Design

- **Motifs**: Triangles and diamonds (Andean-inspired)
- **Colors**: Venezuelan flag colors
  - Yellow: #FFCC00
  - Blue: #0033A0
  - Red: #CF142B
- **Size**: 60px x 60px repeat
- **Stroke**: 0.5px (very fine)

### Usage

```typescript
import { VenezuelanPattern } from '@/components/ui/VenezuelanPattern'

// In a section with relative positioning
<div className="relative">
  <VenezuelanPattern opacity={0.05} />
  {/* Your content here */}
</div>
```

## Responsive Design

### Video Section Heights

- Mobile (< 768px): 40vh
- Tablet (768-1023px): 50vh
- Desktop (≥ 1024px): 60vh

### Text Sizes

- Mobile: Title 2rem, Body 1rem
- Tablet: Title 2.5rem, Body 1.125rem
- Desktop: Title 3rem, Body 1.125rem

### Padding

- Mobile: 2rem
- Tablet: 3rem
- Desktop: 4rem

## Performance

**Optimizations:**
- Video muted for autoplay (browser requirement)
- playsInline for mobile support
- SVG patterns are lightweight
- Pattern uses pointer-events-none
- Poster image provides instant fallback

## Accessibility

- Video is muted (autoplay requirement)
- Text has high contrast (white on dark overlay)
- Patterns are decorative (aria-hidden)
- CTA button is keyboard accessible
- Semantic HTML structure

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (playsInline required)
- Mobile browsers: Full support (playsInline required)

## Troubleshooting

**Video not playing:**
- Check browser autoplay policies (requires muted)
- Verify video URL is accessible
- Ensure video format is MP4/H.264

**Pattern not visible:**
- Check opacity value (0.05 is very subtle)
- Verify z-index positioning
- Ensure parent has position: relative

**Text not readable:**
- Increase overlay opacity
- Check text color (white)
- Verify gradient direction
```

**Step 2: Commit documentation**

```bash
git add docs/video-section-patterns.md
git commit -m "docs: add video section and patterns documentation

- Video section data structure and guidelines
- Venezuelan pattern usage and opacity
- Responsive design specifications
- Performance and accessibility notes
- Troubleshooting guide"
```

---

## Summary

This implementation adds:

1. **Immersive Video Section**: Background video with overlay and CTA
2. **Venezuelan Patterns**: Subtle Andean-inspired SVG patterns
3. **Responsive Design**: Perfect display on all devices
4. **Performance**: Optimized video and lightweight patterns
5. **Accessibility**: Screen reader friendly, keyboard navigable

**Total Files Created:** 3
**Total Files Modified:** 5
**Estimated Time:** 90-120 minutes
**Test Coverage:** Manual browser testing + build verification
