export interface TeamMember {
  id: number
  name: string
  position: string
  image: string
  socialLinks: SocialLink[]
}

export interface SocialLink {
  platform: string
  url: string
  grayIcon: string
  blueIcon: string
}

export interface Testimonial {
  id: number
  author: string
  position: string
  image: string
  content: string
}

export interface FAQItem {
  id: number
  question: string
  answer: string
}

export interface StatItem {
  icon: string
  title: string
  description: string
}