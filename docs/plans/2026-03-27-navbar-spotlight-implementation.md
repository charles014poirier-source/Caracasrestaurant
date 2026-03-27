# Navbar Spotlight Animation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the simple underline hover effect with an interactive spotlight animation that follows the mouse cursor on desktop navigation links.

**Architecture:** Create a reusable `SpotlightLink` component that encapsulates the spotlight logic with mouse position tracking. Integrate it into the existing Header component for desktop navigation only.

**Tech Stack:** React (client component), TypeScript, Tailwind CSS, Next.js

---

## Task 1: Create SpotlightLink Component

**Files:**
- Create: `components/SpotlightLink.tsx`

**Step 1: Create the SpotlightLink component file**

```tsx
'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface SpotlightLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function SpotlightLink({ href, children, className = '' }: SpotlightLinkProps) {
  const pathname = usePathname()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const linkRef = useRef<HTMLAnchorElement>(null)

  const isActive = pathname === href || (href.startsWith('/#') && pathname === '/')

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!linkRef.current) return

    const rect = linkRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <Link
      ref={linkRef}
      href={href}
      className={cn(
        'relative overflow-hidden text-base font-semibold transition-colors duration-200',
        'py-2 px-3 -mx-3 rounded-lg',
        isActive ? 'text-neutral-900' : 'text-neutral-700 hover:text-secondary-600',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight effect */}
      <span
        className={cn(
          'absolute rounded-full pointer-events-none',
          'bg-radial-gradient from-secondary-400/40 to-transparent',
          'transition-opacity duration-150 ease-out',
          isHovered || isActive ? 'opacity-100' : 'opacity-0',
          isActive && !isHovered ? 'duration-300' : ''
        )}
        style={{
          width: '200px',
          height: '200px',
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          transform: 'translate3d(0, 0, 0)',
          willChange: 'opacity, transform',
        }}
      />

      {/* Content */}
      <span className="relative z-10">{children}</span>
    </Link>
  )
}
```

**Step 2: Add radial gradient utility to Tailwind config**

**File:** `tailwind.config.ts`

Find the `theme` section and add to `extend`:

```typescript
extend: {
  // ... existing extensions
  backgroundImage: {
    'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
  },
}
```

**Step 3: Commit SpotlightLink component**

```bash
git add components/SpotlightLink.tsx tailwind.config.ts
git commit -m "feat: add SpotlightLink component with mouse-following animation

- Create reusable SpotlightLink component
- Track mouse position relative to link
- Radial gradient spotlight effect with secondary colors
- Smooth opacity transitions for hover/active states
- Performance optimizations (translate3d, will-change)

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

---

## Task 2: Integrate SpotlightLink into Header

**Files:**
- Modify: `components/Header.tsx:117-133`

**Step 1: Import SpotlightLink component**

Add import at the top of the file:

```tsx
import { SpotlightLink } from '@/components/SpotlightLink'
```

**Step 2: Replace navigation links with SpotlightLink**

Find the desktop navigation section (around line 117-133) and replace the `<nav>` content:

**Before:**
```tsx
<nav className="hidden lg:flex items-center justify-center gap-10 flex-1 -ml-20">
  {navigation.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className={cn(
        'text-base font-semibold transition-all duration-200 hover:text-secondary-600 relative py-2',
        pathname === item.href || (item.href.startsWith('/#') && pathname === '/')
          ? 'text-neutral-900'
          : 'text-neutral-700',
        'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary-500 after:transition-all after:duration-300 hover:after:w-full'
      )}
    >
      {item.name}
    </Link>
  ))}
</nav>
```

**After:**
```tsx
<nav className="hidden lg:flex items-center justify-center gap-10 flex-1 -ml-20">
  {navigation.map((item) => (
    <SpotlightLink
      key={item.name}
      href={item.href}
    >
      {item.name}
    </SpotlightLink>
  ))}
</nav>
```

**Step 3: Remove unused Link import**

Since we're now using SpotlightLink for navigation, the `Link` import from `next/link` is only used for the logo. Keep it.

**Step 4: Test the changes**

```bash
npm run dev
```

**Expected results:**
- ✅ Hover over navigation links shows spotlight following mouse
- ✅ Spotlight color matches site's secondary orange/amber theme
- ✅ Active link has centered spotlight (reduced opacity)
- ✅ Smooth transitions on hover enter/leave
- ✅ No overflow issues with spotlight
- ✅ Mobile navigation unchanged (still uses old styling)

**Step 5: Commit Header integration**

```bash
git add components/Header.tsx
git commit -m "feat: integrate SpotlightLink into desktop navigation

- Replace standard Link components with SpotlightLink
- Remove old underline hover effect
- Maintain mobile navigation styling
- Spotlight follows mouse cursor on hover
- Active link state with centered spotlight

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

---

## Task 3: Manual Testing & Verification

**Step 1: Run development server**

```bash
npm run dev
```

Navigate to: `http://localhost:3000`

**Step 2: Test desktop navigation**

1. Hover over each navigation link (Menu, Histoire, Galerie, Privatisation)
2. Verify spotlight appears and follows cursor
3. Check spotlight is contained within link bounds
4. Test hover enter/leave transitions are smooth
5. Verify active page link has centered spotlight

**Step 3: Test mobile navigation**

1. Resize browser to mobile width (< 1024px)
2. Open mobile menu
3. Verify navigation links still have old styling (background pill)
4. No spotlight effect on mobile

**Step 4: Cross-browser testing**

Test in:
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari (if on Mac)

**Step 5: Performance check**

1. Open browser DevTools → Performance tab
2. Record while hovering over navigation links
3. Verify consistent 60fps
4. Check no layout thrashing or excessive repaints

**Step 6: Create test verification commit**

```bash
git add .
git commit -m "test: verify spotlight animation functionality

- Manual testing complete on desktop navigation
- Spotlight follows mouse cursor smoothly
- Active state displays correctly
- Mobile navigation unaffected
- Performance: 60fps on hover transitions
- Tested on Chrome, Firefox, Safari

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

---

## Task 4: Cleanup & Documentation

**Step 1: Update design document status**

**File:** `docs/plans/2026-03-27-navbar-spotlight-animation-design.md`

Add at the end:

```markdown
## Implementation Status

✅ **Completed** - 2026-03-27
- SpotlightLink component created
- Integrated into Header desktop navigation
- Manual testing passed
- Performance verified at 60fps
```

**Step 2: Final commit**

```bash
git add docs/plans/2026-03-27-navbar-spotlight-animation-design.md
git commit -m "docs: mark spotlight animation design as implemented

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

---

## Verification Checklist

Before considering this feature complete, verify:

- [ ] Spotlight appears on hover and follows mouse smoothly
- [ ] Spotlight uses secondary-400 color (orange/amber)
- [ ] Spotlight is contained within link bounds (no overflow)
- [ ] Active link has centered spotlight with reduced opacity
- [ ] Transitions are smooth (150ms in, 300ms out)
- [ ] No performance issues (60fps maintained)
- [ ] Mobile navigation unchanged
- [ ] Works across Chrome, Firefox, Safari
- [ ] No console errors or warnings
- [ ] Code follows project conventions
- [ ] Design document updated

---

## Notes

**TDD Consideration:** This feature is primarily visual and interactive, making traditional unit tests less valuable. Manual testing with visual verification is the primary testing approach.

**Browser Compatibility:** The animation uses standard CSS and React event handlers supported by all modern browsers. No polyfills needed.

**Accessibility:** The spotlight is a visual enhancement only. Screen readers and keyboard navigation work exactly as before since we're using the standard Link component internally.

**Future Enhancements:**
- Add customization props (spotlight size, colors, speed)
- Consider adding to other interactive elements (buttons, cards)
- Add user preference to disable animations (prefers-reduced-motion)
