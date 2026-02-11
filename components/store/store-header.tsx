import { HandwrittenUnderline } from "@/components/handwritten-underline"
import { OptimizedImage } from "./optimized-image"
import type { CreatorPublic } from "@/types/store"

interface BrandWatermarkProps {
  alwaysShow?: boolean
}

function BrandWatermark({ alwaysShow = false }: BrandWatermarkProps) {
  return (
    <div
      className={`absolute -top-[5%] left-0 right-0 overflow-hidden pointer-events-none select-none text-right ${alwaysShow ? "" : "lg:hidden"}`}
      aria-hidden="true"
    >
      <img 
        src="/logo.png" 
        alt="Pulgy" 
        className="inline-block p-4 opacity-50" 
        style={{ width: "min(120px, 30vw)", height: "auto" }}
      />
    </div>
  )
}

export { BrandWatermark }

interface StoreHeaderProps {
  creator: CreatorPublic
}

export function StoreHeader({ creator }: StoreHeaderProps) {
  const socialLinks = [
    { label: "Instagram", url: creator.instagram },
    { label: "TikTok", url: creator.tiktok },
    { label: "YouTube", url: creator.youtube },
    { label: "Twitter", url: creator.twitter },
  ].filter((link) => link.url)

  return (
    <header className="relative px-5 pt-12 pb-8 max-w-md mx-auto border-b border-dashed border-border">
      <BrandWatermark />
      <div className="text-center">
        <OptimizedImage
          src={creator.avatar}
          alt={creator.name}
          width={80}
          height={80}
          variant="avatar"
          priority
          className="w-20 h-20 bg-secondary mx-auto mb-4 rounded-full animate-fade-in"
        />

        <h1 className="type-title text-foreground animate-fade-in" style={{ animationDelay: "50ms" }}>
          {creator.name}
        </h1>
        <p className="type-mono text-muted-foreground mt-1 animate-fade-in" style={{ animationDelay: "100ms" }}>
          @{creator.handle}
        </p>

        {creator.bio && (
          <p className="type-body mt-4 max-w-xs mx-auto animate-fade-in" style={{ animationDelay: "150ms" }}>
            {creator.bio}
          </p>
        )}

        {socialLinks.length > 0 && (
          <div
            className="flex items-center justify-center gap-4 mt-5 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            {socialLinks.map((link) => (
              <HandwrittenUnderline key={link.label}>
                <a
                  href={`https://${link.label.toLowerCase()}.com/${link.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-caption text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </HandwrittenUnderline>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
