import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern neutral palette
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },

        // Primary - Blue-gray (#697895)
        primary: {
          50: '#F0F2F5',
          100: '#E0E5EB',
          200: '#C2CBD8',
          300: '#A4B1C5',
          400: '#8697B2',
          500: '#697895', // Primary color
          600: '#54637D',
          700: '#3F4E65',
          800: '#2A394D',
          900: '#152435',
        },

        // Secondary - Dark green (#233C2A)
        secondary: {
          50: '#E8EDE9',
          100: '#D1DBD3',
          200: '#A3B7A7',
          300: '#75937B',
          400: '#476F4F',
          500: '#233C2A', // Secondary color
          600: '#1A2D20',
          700: '#112016',
          800: '#08130C',
          900: '#000603',
        },

        // Accent - Vibrant coral (kept for CTAs)
        accent: {
          50: '#FFF1F2',
          100: '#FFE4E6',
          200: '#FECDD3',
          300: '#FDA4AF',
          400: '#FB7185',
          500: '#F43F5E', // Rose-500
          600: '#E11D48',
          700: '#BE123C',
          800: '#9F1239',
          900: '#881337',
        },

        // Backgrounds - Off-white (#FFFAFF)
        background: {
          50: '#FFFAFF',
          100: '#F7F4FF',
          200: '#EFEAFF',
          300: '#E7E4FF',
        },

        // Text colors with better contrast
        'text-primary': '#171717', // neutral-900
        'text-secondary': '#525252', // neutral-600
        'text-muted': '#A3A3A3', // neutral-400
        'text-inverted': '#FFFFFF',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        sans: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-bebas)', 'sans-serif'],
      },
      fontSize: {
        'display-xl': [' clamp(3.5rem, 12vw, 7rem)', { lineHeight: '0.95', letterSpacing: '0.02em' }],
        'display-lg': [' clamp(3rem, 10vw, 6rem)', { lineHeight: '0.95', letterSpacing: '0.015em' }],
        'display-md': [' clamp(2.5rem, 8vw, 5rem)', { lineHeight: '1', letterSpacing: '0.01em' }],
        'heading-xl': [' clamp(2rem, 5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '0.01em' }],
        'heading-lg': [' clamp(1.75rem, 4vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '0.005em' }],
        'heading-md': [' clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.2' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'section': 'clamp(4rem, 10vw, 8rem)',
        'section-sm': 'clamp(3rem, 7vw, 5rem)',
      },
      borderRadius: {
        'card': '16px',
        'button': '12px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'warm': '0 8px 30px rgba(35, 60, 42, 0.15)',
        'glow': '0 0 40px rgba(35, 60, 42, 0.2)',
        'lg': '0 10px 40px rgba(35, 60, 42, 0.25)',
        'xl': '0 20px 50px rgba(35, 60, 42, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shine': 'shine 2.5s infinite',
        'bounce-slow': 'bounceSlow 2s infinite',
        'arrow-slide': 'arrowSlide 1.5s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease infinite',
        'slow-pan': 'slowPan 20s linear infinite',
        'slow-zoom': 'slowZoom 20s linear infinite alternate',
        'pulse-slow': 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(35, 60, 42, 0.4)',
          },
          '50%': {
            boxShadow: '0 0 0 10px rgba(35, 60, 42, 0)',
          },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        arrowSlide: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slowPan: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.6' },
        },
      },
      backgroundImage: {
        'pattern-venezuelan': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23E5E7EB\' fill-opacity=\'0.5\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
