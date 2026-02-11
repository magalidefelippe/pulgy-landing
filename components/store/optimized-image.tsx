"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  variant?: "product" | "avatar"
  priority?: boolean
  className?: string
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  variant = "product",
  priority = false,
  className,
}: OptimizedImageProps) {
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={cn(
        "object-cover",
        variant === "avatar" && "rounded-full",
        variant === "product" && "rounded-md",
        className,
      )}
    />
  )
}
