'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import ButtonWithIconDemo from "@/components/ui/button-with-icon"
import { Menu, X, MapPin } from 'lucide-react'
import { SpotlightLink } from '@/components/SpotlightLink'
import { caracasConfig } from '@/data/clients/caracas'
import { contact } from '@/data/clients/caracas/contact'

const navigation = [
  { name: 'Menu', href: '/menu' },
  { name: 'Histoire', href: '/#histoire' },
  { name: 'Galerie', href: '/#galerie' },
  { name: 'Privatisation', href: '/#privatisation' },
]

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/holacaracas.paris/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.37c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/caracas.bar.tapas',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/caracas-paris/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-background-50/95 backdrop-blur-md shadow-soft' : 'bg-background-50/95 backdrop-blur-md'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Mobile: Burger button (left) | Desktop: Logo (left) */}
            <div className="flex items-center">
              {/* Mobile: Burger menu */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 -ml-2 rounded-lg transition-all flex-shrink-0 text-neutral-900 hover:bg-background-100"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>

              {/* Desktop Logo */}
              <div className="hidden lg:block flex-shrink-0 relative z-50">
                <Link href="/" className="flex-shrink-0 block">
                  <span className="font-serif text-2xl font-bold text-neutral-900 tracking-tight hover:text-secondary-600 transition-colors cursor-pointer">
                    {caracasConfig.config.name.split(' ')[0]}<span className="text-secondary-500">.</span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Mobile: Centered Logo */}
            <div className="lg:hidden absolute left-1/2 -translate-x-1/2 z-50">
              <Link href="/" className="flex-shrink-0 block">
                <span className="font-serif text-xl font-bold text-neutral-900 tracking-tight hover:text-secondary-600 transition-colors cursor-pointer">
                  {caracasConfig.config.name.split(' ')[0]}<span className="text-secondary-500">.</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center gap-10 flex-1 -ml-20">
              {navigation.map((item) => (
                <SpotlightLink
                  key={item.name}
                  href={item.href}
                >
                  {item.name}
                </SpotlightLink>
              ))}
            </nav>

            {/* Desktop Social & CTA */}
            <div className="hidden lg:flex items-center justify-end gap-4">
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={contact.social[social.name.toLowerCase() as keyof typeof contact.social]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex items-center justify-center text-neutral-600 hover:text-secondary-600 hover:bg-background-100 transition-all duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <ButtonWithIconDemo />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden',
          isMobileMenuOpen ? 'block' : 'hidden'
        )}
      >
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white shadow-2xl animate-slide-in">
          <div className="flex flex-col h-full">
            {/* Mobile menu header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-neutral-200 bg-white">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight"
              >
                {caracasConfig.config.name.split(' ')[0]}<span className="text-secondary-500">.</span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2 text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-all"
                aria-label="Fermer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile navigation */}
            <nav className="flex-1 overflow-y-auto p-4 sm:p-6">
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'block px-4 sm:px-6 py-4 sm:py-5 rounded-xl text-base sm:text-lg font-semibold transition-all duration-200 text-center',
                        pathname === item.href || (item.href.startsWith('/#') && pathname === '/')
                          ? 'bg-secondary-50 text-secondary-700'
                          : 'text-neutral-900 hover:bg-secondary-50 hover:text-secondary-700'
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile menu footer */}
            <div className="p-4 sm:p-6 border-t border-neutral-200 bg-neutral-50 space-y-3 sm:space-y-4">
              {/* CTA Button */}
              <div className="flex justify-center">
                <ButtonWithIconDemo />
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={contact.social[social.name.toLowerCase() as keyof typeof contact.social]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white text-neutral-600 hover:text-secondary-600 hover:bg-secondary-50 transition-all duration-200 border border-neutral-200 shadow-sm"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Maps Link */}
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-neutral-300 bg-white text-neutral-700 font-semibold hover:bg-neutral-50 transition-all duration-200 shadow-sm text-sm sm:text-base"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-600" />
                <span>Itinéraire</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
