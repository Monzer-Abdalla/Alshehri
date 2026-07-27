import 'server-only'
import type { Dictionary } from './types'

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  ar: () => import('./dictionaries/ar').then((m) => m.default),
  en: () => import('./dictionaries/en').then((m) => m.default),
}

export type Locale = 'ar' | 'en'

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]()
