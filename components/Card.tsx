'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export function Card({ children, className, hover = true, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={cn(
        'bg-background-50 rounded-card shadow-soft p-6',
        hover && 'transition-all duration-300 hover:shadow-medium hover:-translate-y-1',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export interface SignatureCardProps {
  name: string
  description: string
  price: number
  image: string
  badges?: Array<'bestseller' | 'spicy' | 'veggie' | 'new'>
}

export function SignatureCard({ name, description, price, image, badges = [] }: Omit<SignatureCardProps, 'delay'>) {
  return (
    <div className="group bg-background-50 rounded-card shadow-soft overflow-hidden transition-all duration-300 hover:shadow-medium hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden bg-background-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {badges.map((badge, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 bg-background-50/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium shadow-sm"
              >
                {badge === 'bestseller' && '⭐'}
                {badge === 'spicy' && '🌶️'}
                {badge === 'veggie' && '🌿'}
                {badge === 'new' && '✨'}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-serif text-lg text-neutral-900 group-hover:text-primary-600 transition-colors">
            {name}
          </h3>
          <span className="text-lg font-semibold text-primary-600 flex-shrink-0">
            {price.toFixed(2)}€
          </span>
        </div>
        <p className="text-body-sm text-neutral-600 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  )
}
