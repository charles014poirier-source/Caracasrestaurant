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

  // Active seulement pour les liens directs (pas les ancres)
  const isActive = pathname === href

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
        'relative overflow-hidden text-base font-semibold transition-all duration-300',
        'py-2 px-4 -mx-4 rounded-xl',
        isActive
          ? 'text-neutral-900'
          : 'text-neutral-700 hover:text-neutral-900'
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background hover effect */}
      <span
        className={cn(
          'absolute inset-0 rounded-xl pointer-events-none',
          'bg-neutral-100/50',
          'transition-all duration-300 ease-out',
          isHovered || isActive ? 'opacity-100' : 'opacity-0'
        )}
      />

      {/* Spotlight effect */}
      <span
        className={cn(
          'absolute rounded-full pointer-events-none',
          'bg-gradient-radial from-secondary-400/25 via-secondary-400/5 to-transparent',
          'transition-all duration-300 ease-out',
          isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        )}
        style={{
          width: '250px',
          height: '250px',
          left: mousePosition.x - 125,
          top: mousePosition.y - 125,
          transform: 'translate3d(0, 0, 0)',
          willChange: 'opacity, transform',
        }}
      />

      {/* Active indicator bar - uniquement au clic (quand actif) */}
      {isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-secondary-500 rounded-full" />
      )}

      {/* Content */}
      <span className="relative z-10 inline-block">
        {children}
      </span>
    </Link>
  )
}
