export interface ProductPublic {
  id: number
  title: string
  description: string
  price: number
  image: string
  badge?: string
  kind: "product" | "digital" | "meeting"
  meetingConfig?: MeetingConfig
}

export interface MeetingConfig {
  duration: number
  schedule?: {
    day: string
    startTime: string
    endTime: string
  }[]
}

export interface CreatorPublic {
  name: string
  handle: string
  avatar: string
  bio?: string
  instagram?: string
  tiktok?: string
  youtube?: string
  twitter?: string
}

export interface CartItem extends ProductPublic {
  quantity: number
}
