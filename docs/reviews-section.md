# Reviews Section Documentation

## Overview
The reviews section displays client testimonials with profile photos and links to Google reviews.

## Data Structure

### ReviewItem Type
```typescript
interface ReviewItem {
  id: number
  name: string
  date: string
  rating: number
  text: string
  avatar?: string // Unsplash photo URL
}
```

### Adding New Reviews

1. Add review to `data/clients/caracas/content.ts` in the `reviews` array
2. Use Unsplash for profile photos: `https://images.unsplash.com/photo-ID?w=200&h=200&fit=crop&crop=face`
3. Rebuild and test

## Avatar Guidelines

- **Size**: 200x200px
- **Format**: JPG from Unsplash
- **Crop**: Use `crop=face` parameter
- **Fit**: `fit=crop` for consistent sizing
- **Alt text**: Auto-generated as "Photo de {name}"

## Google Badge

The official Google badge is displayed inline with the CTA. The SVG uses official Google brand colors:
- Blue: #4285F4
- Green: #34A853
- Yellow: #FBBC05
- Red: #EA4335

## Accessibility

- All avatar images have descriptive alt text
- SVG has proper viewBox for scaling
- Color contrast meets WCAG AA standards
- Keyboard navigation supported

## Performance

- Images are lazy-loaded by Next.js
- Unsplash CDN provides fast delivery
- Optimized image sizes (200x200px)
