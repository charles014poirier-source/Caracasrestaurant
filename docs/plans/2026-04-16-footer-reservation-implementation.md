# Footer Reservation CTA Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the footer reservation CTA to be visually integrated with the footer's gradient theme and fix the non-functional "Caracas" navigation link.

**Architecture:** Replace the current flashy reservation banner with a subtly integrated section matching the footer's secondary-700→900 gradient. Fix navigation link z-index/clickability issues in Header.

**Tech Stack:** React, Next.js, Tailwind CSS, TypeScript

---

### Task 1: Fix "Caracas" link clickability in Header

**Files:**
- Modify: `components/Header.tsx:100-105`

**Step 1: Identify the issue**

Examine the current "Caracas" link implementation to determine why it's not clickable. Possible causes:
- Z-index conflicts
- Overlapping elements
- Event propagation issues

**Step 2: Fix the desktop logo link**

Replace lines 100-105 with proper z-index and click handling:

```tsx
{/* Desktop Logo */}
<div className="hidden lg:block flex-shrink-0 relative z-50">
  <Link href="/" className="flex-shrink-0 block">
    <span className="font-serif text-2xl font-bold text-neutral-900 tracking-tight hover:text-secondary-600 transition-colors cursor-pointer">
      Caracas<span className="text-secondary-500">.</span>
    </span>
  </Link>
</div>
```

**Step 3: Fix the mobile logo link**

Replace lines 109-115 with proper z-index:

```tsx
{/* Mobile: Centered Logo */}
<div className="lg:hidden absolute left-1/2 -translate-x-1/2 z-50">
  <Link href="/" className="flex-shrink-0 block">
    <span className="font-serif text-xl font-bold text-neutral-900 tracking-tight hover:text-secondary-600 transition-colors cursor-pointer">
      Caracas<span className="text-secondary-500">.</span>
    </span>
  </Link>
</div>
```

**Step 4: Test the fix**

Run: `npm run dev`
Expected: Click on "Caracas" text navigates to homepage
Test on both desktop and mobile viewports

**Step 5: Commit**

```bash
git add components/Header.tsx
git commit -m "fix: make Caracas logo link clickable with proper z-index"
```

---

### Task 2: Create new FooterReservationCTA component

**Files:**
- Create: `components/FooterReservationCTA.tsx`

**Step 1: Create the component file**

Create new file with integrated reservation CTA design:

```tsx
import { Calendar } from 'lucide-react'
import Link from 'next/link'

export function FooterReservationCTA() {
  return (
    <div className="border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left side - Content */}
          <div className="flex items-center gap-4 flex-1">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                <Calendar className="w-7 h-7 text-white" />
              </div>
            </div>

            {/* Text */}
            <div>
              <h4 className="font-serif text-xl font-bold text-white mb-1">
                Réservez votre table
              </h4>
              <p className="text-white/70 text-sm">
                Places limitées • Week-end chargé
              </p>
            </div>
          </div>

          {/* Right side - CTA Button */}
          <Link
            href="/contact#reservation"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-secondary-700 rounded-xl font-bold text-base shadow-lg hover:shadow-xl hover:bg-white/90 hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            <Calendar className="w-5 h-5" />
            <span>Réserver</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
```

**Step 2: Verify syntax**

Run: `npm run build`
Expected: No TypeScript errors

**Step 3: Commit**

```bash
git add components/FooterReservationCTA.tsx
git commit -m "feat: create FooterReservationCTA component with integrated design"
```

---

### Task 3: Update Footer7 component to use new CTA

**Files:**
- Modify: `components/ui/footer-7.tsx:1-310`

**Step 1: Import the new component**

Add import at line 2 (after React import):

```tsx
import { FooterReservationCTA } from '@/components/FooterReservationCTA'
```

**Step 2: Replace old reservation banner**

Replace lines 218-289 (the entire "Reservation CTA Banner" section) with:

```tsx
        {/* Reservation CTA */}
        <FooterReservationCTA />
```

**Step 3: Verify the integration**

The footer should now have:
1. Logo, description, contact info, social links
2. Navigation sections
3. Hours section
4. NEW: Integrated reservation CTA
5. Bottom bar with copyright

**Step 4: Test responsive behavior**

Run: `npm run dev`
Test on:
- Mobile (< 640px): Layout should be vertical
- Tablet (640px - 1024px): Layout should be horizontal
- Desktop (> 1024px): Layout should be horizontal

**Step 5: Commit**

```bash
git add components/ui/footer-7.tsx
git commit -m "refactor: replace old reservation banner with integrated FooterReservationCTA"
```

---

### Task 4: Test navigation and functionality

**Files:**
- No file modifications

**Step 1: Start development server**

Run: `npm run dev`

**Step 2: Test "Caracas" link navigation**

1. Click on "Caracas" text in desktop header
   Expected: Navigate to home page (/)
2. Click on "Caracas" text in mobile header
   Expected: Navigate to home page (/)
3. Verify URL changes to `/`

**Step 3: Test reservation CTA button**

1. Scroll to footer
2. Click "Réserver" button
   Expected: Navigate to `/contact#reservation`
3. Verify smooth scroll to reservation section

**Step 4: Test responsive layouts**

Test on multiple screen sizes:
- 375px (mobile)
- 768px (tablet)
- 1024px (desktop)
- 1440px (large desktop)

**Step 5: Verify visual consistency**

Check that:
- Reservation CTA matches footer gradient
- No jarring color transitions
- Hover states work properly
- Shadows and spacing are consistent

**Step 6: Accessibility check**

Verify:
- All links have proper focus states
- Color contrast meets WCAG AA standards
- Keyboard navigation works (Tab, Enter)
- Screen readers announce links correctly

**Step 7: Commit documentation**

```bash
git add docs/plans/2026-04-16-footer-reservation-*.md
git commit -m "docs: add footer reservation redesign plan and documentation"
```

---

### Task 5: Clean up and final verification

**Files:**
- No new files, verification only

**Step 1: Run type checking**

Run: `npm run type-check` or `tsc --noEmit`
Expected: No TypeScript errors

**Step 2: Run linting**

Run: `npm run lint`
Expected: No linting errors

**Step 3: Build production bundle**

Run: `npm run build`
Expected: Build succeeds without errors

**Step 4: Final smoke test**

Run: `npm run dev`
Manual test checklist:
- [ ] Home page loads
- [ ] "Caracas" link works in header
- [ ] Footer displays correctly
- [ ] Reservation CTA button works
- [ ] All responsive breakpoints function
- [ ] No console errors
- [ ] Smooth animations

**Step 5: Create summary PR**

If working in a branch, create PR with:

```bash
git push -u origin feature/footer-reservation-redesign
gh pr create --title "refactor: redesign footer reservation CTA and fix navigation" --body "## Summary
- Fixed non-functional 'Caracas' link in header navigation
- Redesigned footer reservation CTA to integrate with footer theme
- Removed flashy animations and conflicting colors
- Improved visual consistency across footer

## Changes
- Header.tsx: Added z-index to logo links for proper clickability
- FooterReservationCTA.tsx: New component with integrated design
- footer-7.tsx: Replaced old banner with new component

## Testing
- Tested navigation links on desktop and mobile
- Verified responsive behavior across breakpoints
- Confirmed accessibility and keyboard navigation"
```

**Step 6: Final commit**

```bash
git add .
git commit -m "chore: complete footer reservation redesign implementation"
```

---

## Success Criteria

- [x] "Caracas" link is clickable and navigates to home page
- [x] Reservation CTA integrates seamlessly with footer gradient
- [x] All animations removed (no pulse, shine, ping effects)
- [x] Responsive layout works on all screen sizes
- [x] No TypeScript or linting errors
- [x] Accessibility standards met
- [x] Visual consistency maintained across footer sections
