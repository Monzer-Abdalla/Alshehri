export interface Product {
  id: number
  slug: string
  nameAr: string
  nameEn: string
  category: 'appliances' | 'lighting'
  categoryLabelAr: string
  categoryLabelEn: string
  price: number
  image: string
  specsAr: string[]
  specsEn: string[]
  descriptionAr: string
  descriptionEn: string
}

export type Locale = 'ar' | 'en'

export interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}
