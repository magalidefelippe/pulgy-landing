import type { CreatorPublic, ProductPublic } from "@/types/store"

export const mockCreator: CreatorPublic = {
  name: "Sofía Martínez",
  handle: "sofiamtz",
  avatar: "/portrait-young-woman-creator.jpg",
  bio: "Creadora de contenido & emprendedora. Comparto recursos para hacer crecer tu marca personal.",
  instagram: "sofiamtz",
  tiktok: "sofiamtz",
}

export const mockProducts: ProductPublic[] = [
  {
    id: 1,
    title: "Pack de Presets Lightroom",
    description:
      "Los 12 presets que uso en todas mis fotos. Incluye versiones para móvil y desktop con instrucciones de instalación.",
    price: 4500,
    image: "/lightroom-presets-pack-warm-tones.jpg",
    kind: "digital",
  },
  {
    id: 2,
    title: "Guía: Monetiza tu Instagram",
    description: "PDF de 45 páginas con estrategias probadas para conseguir colaboraciones y monetizar tu audiencia.",
    price: 8900,
    image: "/ebook-guide-instagram-monetization.jpg",
    kind: "digital",
  },
  {
    id: 3,
    title: "Plantillas Canva Stories",
    description: "Pack de 30 plantillas editables para historias de Instagram. Estética minimalista y profesional.",
    price: 3200,
    image: "/canva-templates-instagram-stories-minimal.jpg",
    kind: "digital",
  },
  {
    id: 4,
    title: "Mentoría 1:1 (30 min)",
    description:
      "Sesión personalizada por videollamada. Resolvemos tus dudas sobre contenido, marca personal o monetización.",
    price: 15000,
    image: "/video-call-mentorship-session-professional.jpg",
    kind: "meeting",
    meetingConfig: {
      duration: 30,
      schedule: [
        { day: "monday", startTime: "09:00", endTime: "12:00" },
        { day: "wednesday", startTime: "14:00", endTime: "18:00" },
        { day: "friday", startTime: "10:00", endTime: "14:00" },
      ],
    },
  },
  {
    id: 5,
    title: "Curso: Reels que Viralizan",
    description: "Acceso de por vida al curso completo. 8 módulos con técnicas de edición, hooks y storytelling.",
    price: 24900,
    image: "/online-course-video-editing-reels.jpg",
    kind: "digital",
  },
]
