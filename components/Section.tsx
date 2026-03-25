'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  background?: 'white' | 'background-100' | 'pattern' | 'neutral-900'
  container?: boolean
  py?: 'none' | 'sm' | 'md' | 'lg'
}

export function Section({
  children,
  className,
  id,
  background = 'white',
  container = true,
  py = 'lg',
}: SectionProps) {
  const backgrounds = {
    'white': 'bg-background-50',
    'background-100': 'bg-background-100',
    'pattern': 'bg-background-100 bg-pattern',
    'neutral-900': 'bg-neutral-900 text-white',
  }

  const paddingY = {
    none: '',
    sm: 'py-section-sm',
    md: 'py-16',
    lg: 'py-section',
  }

  return (
    <section
      id={id}
      className={cn(backgrounds[background], paddingY[py], className)}
    >
      {container ? (
        <div className="container mx-auto px-4">{children}</div>
      ) : (
        children
      )}
    </section>
  )
}

export interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      {subtitle && (
        <p className="text-primary-600 font-medium text-sm tracking-widest uppercase mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="font-serif text-heading-xl text-neutral-900 mb-4">{title}</h2>
      {description && (
        <p className="text-neutral-600 text-body-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}
