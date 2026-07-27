import type { Dictionary } from '../types'

const en: Dictionary = {
  locale: 'en',
  dir: 'ltr',

  nav: {
    home: 'Home',
    appliances: 'Appliances',
    lighting: 'Lighting',
    products: 'Products',
    about: 'About Us',
    contact: 'Contact',
    orderNow: 'Order Now',
    toggleLight: 'Light Mode',
    toggleDark: 'Dark Mode',
    switchToEn: 'عربي',
  },

  hero: {
    badge: 'Welcome to Alshehri Company Ltd.',
    heading1: 'Home Electrical Appliances',
    heading2: 'and Lighting Equipment',
    subtitle:
      'Transform your home with the latest smart home appliances and premium contemporary lighting designs. Exceptional efficiency, certified warranty, and future-forward designs.',
    ctaAppliances: 'Browse Appliances',
    ctaLighting: 'Explore Lighting',
    badge1Title: '2-Year Warranty',
    badge1Desc: 'On all electrical products',
    badge2Title: 'Fast & Safe Delivery',
    badge2Desc: 'Across the Kingdom',
    badge3Title: '100% Genuine Products',
    badge3Desc: 'From leading global brands',
    badge4Title: 'Full Technical Support',
    badge4Desc: 'A team always ready to serve you',
  },

  products: {
    sectionBadge: 'Exclusive Collection',
    sectionDesc:
      'Discover the latest models combining world-class efficiency and premium design to meet your modern home needs.',
    appliancesTitle: 'Home Electrical Appliances',
    lightingTitle: 'Lighting Systems & Equipment',
    priceLabel: 'Price',
    orderBtn: 'Order Now',
    viewAll: 'View All Products',
    currency: 'SAR',
  },

  catalog: {
    title: 'Product Catalog',
    description: 'Discover our complete range of electrical appliances and lighting solutions',
    searchPlaceholder: 'Search products...',
    allCategories: 'All Categories',
    noResults: 'No products found.',
  },

  detail: {
    specifications: 'Technical Specifications',
    description: 'Product Description',
    orderCTA: 'Order This Product Now',
  },

  contact: {
    title: 'Contact Us',
    description: 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
    form: {
      nameLabel: 'Full Name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email Address',
      emailPlaceholder: 'john@example.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'How can we help?',
      messageLabel: 'Message',
      messagePlaceholder: 'Write your message here...',
      submitBtn: 'Send Message',
      submittingBtn: 'Sending...',
      successTitle: 'Message Sent!',
      successDesc: 'Thank you for contacting us. We will get back to you shortly.',
      errorMsg: 'Something went wrong. Please try again later.',
      validation: {
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Invalid email address',
        subjectRequired: 'Subject is required',
        messageRequired: 'Message is required',
        messageMin: 'Message must be at least 10 characters',
      },
    },
    info: {
      title: 'Contact Information',
      addressTitle: 'Our Office',
      address: 'King Fahd Road, Riyadh, Saudi Arabia',
      emailTitle: 'Email Us',
      phoneTitle: 'Call Us',
      workingHoursTitle: 'Working Hours',
      workingHours: 'Sun - Thu: 9:00 AM - 6:00 PM',
    },
  },

  about: {
    title: 'About Us',
    description: 'Learn about Alshehri Company Ltd. and our future vision in the world of home appliances and lighting.',
    storyTitle: 'Our Story',
    storyText: 'Alshehri Company Ltd. was founded with a clear vision to provide the latest home appliances and modern lighting solutions to the Saudi market. Over years of experience, we have built a solid reputation based on trust, quality, and exceptional customer service.',
    visionTitle: 'Our Vision',
    visionText: 'We strive to be the first choice and leading destination for every home in Saudi Arabia by offering innovative products that combine high efficiency with elegant designs to meet the needs of modern living.',
  },

  cart: {
    title: 'Shopping Cart',
    emptyMessage: 'Your cart is currently empty',
    total: 'Total',
    checkoutBtn: 'Proceed to Checkout',
  },

  checkout: {
    successTitle: 'Order Received Successfully!',
    successMessage: 'Thank you for shopping with us. We will process your order shortly.',
    cancelTitle: 'Payment Cancelled',
    cancelMessage: 'No charges were made. You can return and complete your order at any time.',
    backBtn: 'Return to Store',
  },

  footer: {
    companyName: 'Alshehri Company Ltd.',
    companyDesc:
      'A leading national company specializing in the latest home electrical appliances and modern lighting solutions for residential and commercial projects.',
    productsCol: 'Product Categories',
    servicesCol: 'Our Services',
    contactCol: 'Contact Us',
    links: {
      homeLighting: 'Chandeliers & Indoor Lighting',
      outdoorLighting: 'Outdoor Lighting Solutions',
      kitchenAppliances: 'Smart Kitchen Appliances',
      appliancesLink: 'Home Electrical Appliances',
      warranty: 'Certified Warranty',
      delivery: 'Delivery & Installation',
      consulting: 'Consulting & Design',
      maintenance: 'Periodic Maintenance',
    },
    address: 'Kingdom of Saudi Arabia, Riyadh',
    phone: '+966 11 000 0000',
    email: 'info@alshehri.com.sa',
    copyright: 'Alshehri Company Ltd. All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
  },
}

export default en
