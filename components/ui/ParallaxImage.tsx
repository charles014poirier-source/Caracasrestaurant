'use client'

import { useEffect, useRef, useState } from 'react'
import Image, { ImageProps } from 'next/image'

interface ParallaxImageProps extends Omit<ImageProps, 'onLoad'> {
  parallaxSpeed?: number
  className?: string
}

export function ParallaxImage({ parallaxSpeed = 0.3, className = '', ...props }: ParallaxImageProps) {
  const [scrollY, setScrollY] = useState(0)
  const imgRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [])

  return (
    <div ref={imgRef} className={`overflow-hidden ${className}`}>
      <div
        className="transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: isVisible ? `translateY(${scrollY * parallaxSpeed}px)` : 'translateY(0)',
        }}
      >
        <img
          {...props}
          className={`w-full h-full object-cover ${props.className || ''}`}
          alt={props.alt}
        />
      </div>
    </div>
  )
}
