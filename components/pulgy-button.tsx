"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type ButtonVariant = "default" | "outlined" | "link" | "destructive"
type ButtonSize = "sm" | "md" | "lg"
type IconPosition = "left" | "right"

export interface PulgyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: IconPosition
  href?: string
}

const PulgyButton = React.forwardRef<HTMLButtonElement, PulgyButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "md",
      fullWidth = false,
      loading = false,
      icon,
      iconPosition = "left",
      disabled = false,
      href,
      children,
      ...props
    },
    ref,
  ) => {
    const sizeClasses = {
      sm: variant === "link" ? "text-xs" : "h-9 text-xs px-3",
      md: variant === "link" ? "text-sm" : "h-11 text-sm px-4",
      lg: variant === "link" ? "text-base" : "h-12 text-base px-5",
    }

    const variantClasses = {
      default: "bg-accent text-accent-foreground hover:opacity-90 active:opacity-80",
      outlined: "border-2 border-border bg-transparent text-foreground hover:bg-foreground hover:text-background",
      link: "text-accent hover:opacity-70 h-auto px-0",
      destructive: "bg-destructive text-destructive-foreground hover:opacity-90 active:opacity-80",
    }

    const classes = cn(
      "inline-flex items-center justify-center rounded-md transition-all duration-150",
      variant === "link" ? "gap-1" : "gap-2",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "font-medium",
      sizeClasses[size],
      variantClasses[variant],
      fullWidth && "w-full",
      className,
    )

    const content =
      variant === "link" ? (
        <span className="inline-flex items-center gap-1 underline underline-offset-2 decoration-1">
          {icon && iconPosition === "left" && <span className="inline-flex items-center justify-center">{icon}</span>}
          {children}
          {icon && iconPosition === "right" && <span className="inline-flex items-center justify-center">{icon}</span>}
        </span>
      ) : (
        <>
          {icon && iconPosition === "left" && <span className="inline-flex items-center justify-center">{icon}</span>}
          {children}
          {icon && iconPosition === "right" && <span className="inline-flex items-center justify-center">{icon}</span>}
        </>
      )

    if (href) {
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      )
    }

    return (
      <button ref={ref} disabled={disabled || loading} className={classes} {...props}>
        {content}
      </button>
    )
  },
)

PulgyButton.displayName = "PulgyButton"

export { PulgyButton }
export type { ButtonVariant, ButtonSize }
