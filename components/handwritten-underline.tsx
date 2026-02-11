import type React from "react"

const HANDWRITTEN_PATH = "M 0,6 Q 5,5.3 10,6.5 Q 15,5.8 20,6.3 Q 25,6.7 30,5.6 Q 35,6.2 40,5.4 Q 45,6.6 50,5.9 Q 55,5.5 60,6.7 Q 65,5.7 70,6.4 Q 75,6.1 80,5.5 Q 85,6.5 90,6.2 Q 95,5.8 100,6.3"

interface HandwrittenLineProps {
  className?: string
  animated?: boolean
}

export function HandwrittenLine({ className = "", animated = false }: HandwrittenLineProps) {
  return (
    <svg
      className={`w-full h-3 overflow-visible ${className}`}
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={HANDWRITTEN_PATH}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.8"
        pathLength={100}
        className={animated ? "animate-draw-line" : ""}
        style={animated ? {
          strokeDasharray: 100,
          strokeDashoffset: 100,
        } : undefined}
      />
    </svg>
  )
}

interface HandwrittenUnderlineProps {
  children: React.ReactNode
  className?: string
}

export function HandwrittenUnderline({ children, className = "" }: HandwrittenUnderlineProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute  -bottom-1  left-0 w-full text-accent">
        <HandwrittenLine />
      </span>
    </span>
  )
}
