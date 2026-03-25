import React, { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  fullWidth?: boolean
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, fullWidth, asChild = false, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-button transition-all duration-300 focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden'

    const variants = {
      primary: 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:from-secondary-600 hover:to-secondary-700 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]',
      secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 shadow-soft hover:shadow-medium',
      ghost: 'bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200',
      outline: 'border-2 border-neutral-300 text-neutral-700 hover:border-secondary-500 hover:text-secondary-500 hover:bg-secondary-50',
    }

    const sizes = {
      sm: 'px-4 py-2 text-body-sm',
      md: 'px-6 py-3 text-body',
      lg: 'px-8 py-4 text-body-lg',
    }

    const buttonClasses = cn(baseStyles, variants[variant], sizes[size], fullWidth && 'w-full', className)

    if (asChild) {
      const child = React.Children.only(children) as React.ReactElement<any>
      return React.cloneElement(child, {
        className: cn(buttonClasses, (child.props as any).className),
        ref: ref as any,
        ...props,
      })
    }

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
