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
          isHovered ? 'opacity-100' : 'opacity-0'
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
