export interface NavDict {
  home: string
  appliances: string
  lighting: string
  products: string
  about: string
  contact: string
  orderNow: string
  toggleLight: string
  toggleDark: string
  switchToEn: string
}

export interface HeroDict {
  badge: string
  heading1: string
  heading2: string
  subtitle: string
  ctaAppliances: string
  ctaLighting: string
  badge1Title: string
  badge1Desc: string
  badge2Title: string
  badge2Desc: string
  badge3Title: string
  badge3Desc: string
  badge4Title: string
  badge4Desc: string
}

export interface ProductsDict {
  sectionBadge: string
  sectionDesc: string
  appliancesTitle: string
  lightingTitle: string
  priceLabel: string
  orderBtn: string
  viewAll: string
  currency: string
}

export interface FooterLinksDict {
  homeLighting: string
  outdoorLighting: string
  kitchenAppliances: string
  appliancesLink: string
  warranty: string
  delivery: string
  consulting: string
  maintenance: string
}

export interface FooterDict {
  companyName: string
  companyDesc: string
  productsCol: string
  servicesCol: string
  contactCol: string
  links: FooterLinksDict
  address: string
  phone: string
  email: string
  copyright: string
  privacy: string
  terms: string
}

export interface CatalogDict {
  title: string
  description: string
  searchPlaceholder: string
  allCategories: string
  noResults: string
}

export interface DetailDict {
  specifications: string
  description: string
  orderCTA: string
}

export interface Dictionary {
  locale: string
  dir: 'rtl' | 'ltr'
  nav: NavDict
  hero: HeroDict
  products: ProductsDict
  catalog: CatalogDict
  detail: DetailDict
  footer: FooterDict
}
