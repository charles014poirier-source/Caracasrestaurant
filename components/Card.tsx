'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'

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
  category?: string
}

export function SignatureCard({ name, description, price, image, badges = [], category }: Omit<SignatureCardProps, 'delay'>) {
  const cardContent = (
    <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer h-full flex flex-col border border-orange-100">
      {/* Image with gradient overlay */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

        {/* Badges */}
        {badges.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
            {badges.map((badge, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold shadow-md border-2 border-orange-200"
              >
                {badge === 'bestseller' && '⭐ Best-seller'}
                {badge === 'spicy' && '🌶️ Épicé'}
                {badge === 'veggie' && '🌿 Végétarien'}
                {badge === 'new' && '✨ Nouveau'}
              </span>
            ))}
          </div>
        )}

        {/* Price badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-white text-neutral-900 px-4 py-2 rounded-full font-bold text-lg shadow-lg border-2 border-neutral-200">
            {price.toFixed(2)}€
          </div>
        </div>

        {/* Heart icon on hover */}
        <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/95 backdrop-blur-sm p-2.5 rounded-full shadow-lg">
            <svg className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col bg-gradient-to-b from-white to-orange-50/30">
        <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-3 group-hover:text-orange-700 transition-colors">
          {name}
        </h3>
        <p className="text-body text-neutral-700 leading-relaxed flex-1">
          {description}
        </p>

        {/* CTA indicator */}
        <div className="mt-4 flex items-center gap-2 text-orange-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Voir la carte</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-shine pointer-events-none" />
    </div>
  )

  if (category) {
    return (
      <Link href={`/menu?category=${category}`} className="block">
        {cardContent}
      </Link>
    )
  }

  return cardContent
}
