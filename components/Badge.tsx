import { cn } from '@/lib/utils'
import { Flame, Leaf, Star } from 'lucide-react'

export interface BadgeProps {
  type?: 'bestseller' | 'spicy' | 'veggie' | 'new'
  size?: 'sm' | 'md'
  className?: string
}

export function Badge({ type = 'bestseller', size = 'md', className }: BadgeProps) {
  const badges = {
    bestseller: {
      label: 'Best-seller',
      icon: Star,
      colors: 'bg-primary-100 text-primary-700 border-primary-200',
    },
    spicy: {
      label: 'Épicé',
      icon: Flame,
      colors: 'bg-accent-50 text-accent-600 border-accent-200',
    },
    veggie: {
      label: 'Végétarien',
      icon: Leaf,
      colors: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
    new: {
      label: 'Nouveau',
      icon: Star,
      colors: 'bg-secondary-50 text-secondary-600 border-secondary-200',
    },
  }

  const badge = badges[type]
  const Icon = badge.icon
  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-sm px-2.5 py-1 gap-1.5',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center border rounded-full font-medium',
        badge.colors,
        sizeStyles[size],
        className
      )}
    >
      <Icon className="w-3 h-3" strokeWidth={2.5} />
      {badge.label}
    </span>
  )
}

export interface AllergenBadgeProps {
  allergen: string
  className?: string
}

const allergenColors: Record<string, string> = {
  'Gluten': 'bg-amber-50 text-amber-700 border-amber-200',
  'Crustacés': 'bg-red-50 text-red-700 border-red-200',
  'Œufs': 'bg-orange-50 text-orange-700 border-orange-200',
  'Poisson': 'bg-blue-50 text-blue-700 border-blue-200',
  'Arachide': 'bg-yellow-50 text-yellow-700 border-yellow-200',
  'Soja': 'bg-green-50 text-green-700 border-green-200',
  'Lait': 'bg-sky-50 text-sky-700 border-sky-200',
  'Fruits à coque': 'bg-purple-50 text-purple-700 border-purple-200',
  'Céleri': 'bg-lime-50 text-lime-700 border-lime-200',
  'Moutarde': 'bg-yellow-50 text-yellow-800 border-yellow-200',
  'Sésame': 'bg-stone-50 text-stone-700 border-stone-200',
  'Sulfites': 'bg-rose-50 text-rose-700 border-rose-200',
  'Lupin': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  'Mollusques': 'bg-teal-50 text-teal-700 border-teal-200',
}

export function AllergenBadge({ allergen, className }: AllergenBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center text-xs px-1.5 py-0.5 border rounded',
        allergenColors[allergen] || 'bg-neutral-50 text-neutral-600 border-neutral-200',
        className
      )}
      title={allergen}
    >
      {allergen[0]}
    </span>
  )
}
