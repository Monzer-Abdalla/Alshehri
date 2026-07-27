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

export interface ContactDict {
  title: string
  description: string
  form: {
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    subjectLabel: string
    subjectPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    submitBtn: string
    submittingBtn: string
    successTitle: string
    successDesc: string
    errorMsg: string
    validation: {
      nameRequired: string
      emailRequired: string
      emailInvalid: string
      subjectRequired: string
      messageRequired: string
      messageMin: string
    }
  }
  info: {
    title: string
    addressTitle: string
    address: string
    emailTitle: string
    phoneTitle: string
    workingHoursTitle: string
    workingHours: string
  }
}

export interface AboutDict {
  title: string
  description: string
  storyTitle: string
  storyText: string
  visionTitle: string
  visionText: string
}

export interface CartDict {
  title: string
  emptyMessage: string
  total: string
  checkoutBtn: string
}

export interface CheckoutDict {
  successTitle: string
  successMessage: string
  cancelTitle: string
  cancelMessage: string
  backBtn: string
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
  about: AboutDict
  cart: CartDict
  checkout: CheckoutDict
  contact: ContactDict
  footer: FooterDict
}
