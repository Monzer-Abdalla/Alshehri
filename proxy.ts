import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['ar', 'en']
const defaultLocale = 'ar'

function getLocale(request: NextRequest): string {
  // Check Accept-Language header for browser preference
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferred = acceptLanguage.split(',')[0].split('-')[0].toLowerCase()
    if (locales.includes(preferred)) return preferred
  }
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the pathname already has a supported locale prefix
  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect bare paths to the detected or default locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip _next internals, API routes, static files
    '/((?!_next|api|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp)).*)',
  ],
}
