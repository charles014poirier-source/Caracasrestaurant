'use client'

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

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
  allergens?: string[]
  details?: string
}

export function SignatureCard({ name, description, price, image, badges = [], category, allergens = [], details }: Omit<SignatureCardProps, 'delay'>) {
  const [showModal, setShowModal] = React.useState(false)

  // Filter out 'bestseller' badge
  const filteredBadges = badges.filter(badge => badge !== 'bestseller')

  // Show modal if it's open
  if (showModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
        <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
          {/* Venezuelan flag top bar */}
          <div className="flex h-1.5 rounded-t-2xl overflow-hidden">
            <div className="flex-1 bg-yellow-400"></div>
            <div className="flex-1 bg-blue-600"></div>
            <div className="flex-1 bg-red-500"></div>
          </div>

          <div className="relative">
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />

              {/* Close button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                aria-label="Fermer"
              >
                <svg className="w-5 h-5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Price */}
              <div className="absolute bottom-4 right-4 bg-white text-neutral-900 px-5 py-2.5 rounded-xl font-bold text-xl shadow-lg border-2 border-yellow-400/40">
                {price.toFixed(2)}€
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Badges */}
              {filteredBadges.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {filteredBadges.map((badge, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 bg-neutral-100 text-neutral-700 px-3 py-1.5 rounded-lg text-xs font-semibold"
                    >
                      {badge === 'spicy' && '🌶️ Épicé'}
                      {badge === 'veggie' && '🌿 Végétarien'}
                      {badge === 'new' && '✨ Nouveau'}
                    </span>
                  ))}
                </div>
              )}

              <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-3">
                {name}
              </h3>

              <p className="text-neutral-700 leading-relaxed mb-6">
                {description}
              </p>

              {details && (
                <div className="bg-gradient-to-br from-yellow-50/50 via-blue-50/30 to-red-50/50 rounded-xl p-5 mb-6 border border-yellow-200/50">
                  <h4 className="font-semibold text-neutral-900 mb-2 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    À propos
                  </h4>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {details}
                  </p>
                </div>
              )}

              {/* Allergens */}
              {allergens && allergens.length > 0 && (
                <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
                  <h4 className="font-semibold text-neutral-900 mb-2 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Allergènes
                  </h4>
                  <p className="text-sm text-neutral-600">
                    {allergens.length > 0 ? allergens.join(', ') : 'Aucun allergène déclaré'}
                  </p>
                </div>
              )}

              {/* CTA Button */}
              <div className="mt-6">
                <Link
                  href="/menu"
                  onClick={() => setShowModal(false)}
                  className="block w-full bg-neutral-900 hover:bg-neutral-800 text-white text-center py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl"
                >
                  Voir la carte complète
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Card content - Clean design with Venezuelan flag accents
  const cardContent = (
    <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer h-full flex flex-col border border-neutral-100">
      {/* Venezuelan flag top accents - 3 small lines */}
      <div className="absolute top-0 left-0 right-0 flex h-1">
        <div className="flex-1 bg-yellow-400/60 group-hover:bg-yellow-400/80 transition-colors"></div>
        <div className="flex-1 bg-blue-600/60 group-hover:bg-blue-600/80 transition-colors"></div>
        <div className="flex-1 bg-red-500/60 group-hover:bg-red-500/80 transition-colors"></div>
      </div>

      {/* Image with clean frame */}
      <div className="relative p-4 pb-0">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          {/* Light gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/15 via-transparent to-transparent" />

          {/* Price badge - Clean with Venezuelan accent */}
          <div className="absolute top-2 right-2 z-10">
            <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg font-bold text-sm shadow-md border-2 border-yellow-400/40 text-neutral-900">
              {price.toFixed(2)}€
            </div>
          </div>

          {/* Clean badges */}
          {filteredBadges.length > 0 && (
            <div className="absolute top-2 left-2 z-10">
              <div className="bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-lg shadow-sm border border-neutral-200">
                <span className="text-sm">
                  {filteredBadges.map((badge) => {
                    if (badge === 'spicy') return '🌶️'
                    if (badge === 'veggie') return '🌿'
                    if (badge === 'new') return '✨'
                    return ''
                  })}
                </span>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Content - Clean and light */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="font-serif text-lg font-bold text-neutral-900 mb-1.5 leading-tight">
            {name}
          </h3>
          <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2 mb-3">
            {description}
          </p>
        </div>

        {/* Clean CTA button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setShowModal(true)
          }}
          className="group/btn relative w-full bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl px-4 py-2.5 font-medium text-sm transition-all duration-300 hover:shadow-lg"
        >
          <span className="flex items-center justify-center gap-2">
            Découvrir
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>

    </div>
  )

  // Return card wrapped in Link if category exists
  if (category) {
    return (
      <Link href={`/menu?category=${category}`} className="block">
        {cardContent}
      </Link>
    )
  }

  return cardContent
}
