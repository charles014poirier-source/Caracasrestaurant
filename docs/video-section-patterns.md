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
