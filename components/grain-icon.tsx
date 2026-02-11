"use client"

import React, { useId } from 'react'

interface GrainIconProps {
  size?: number | string
  className?: string
  color?: string
}

export function GrainIcon({ size = 200, className = '', color = '#c12a6a' }: GrainIconProps) {
  const idSuffix = useId().replace(/:/g, '')
  const gradientId = `pink-gradient-${idSuffix}`
  const noiseId = `noise-${idSuffix}`

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Grainy texture"
    >
      <defs>
        {/* Radial Gradient */}
        <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="30%" stopColor={color} stopOpacity="0.6" />
          <stop offset="60%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>

        {/* Noise filter */}
        <filter id={noiseId}>
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
          <feComposite in="SourceGraphic" in2="noise" operator="in" />
        </filter>
      </defs>

      {/* Main gradient blob */}
      <circle
        cx="100"
        cy="100"
        r="100"
        fill={`url(#${gradientId})`}
      />

      {/* Grain texture overlay */}
      <circle
        cx="100"
        cy="100"
        r="95"
        fill={`url(#${gradientId})`}
        filter={`url(#${noiseId})`}
        opacity="0.4"
        style={{ mixBlendMode: 'overlay' }}
      />
    </svg>
  )
}
