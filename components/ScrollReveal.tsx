'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'
  duration?: number
  threshold?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once])

  const getTransform = () => {
    if (isVisible) return 'none'

    switch (direction) {
      case 'up':
        return 'translateY(60px)'
      case 'down':
        return 'translateY(-60px)'
      case 'left':
        return 'translateX(60px)'
      case 'right':
        return 'translateX(-60px)'
      case 'scale':
        return 'scale(0.9)'
      case 'fade':
      default:
        return 'none'
    }
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
