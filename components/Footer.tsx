import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Company Branding Column */}
          <div className="md:col-span-5 flex flex-col space-y-6">
            <span className="text-2xl font-extrabold text-white tracking-wider">
              شركة الشهري المحدودة
            </span>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              شركة وطنية رائدة متخصصة في توفير أحدث الأجهزة الكهربائية المنزلية وحلول الإضاءة العصرية لمختلف المشاريع السكنية والتجارية بجودة وموثوقية عالية.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-reverse space-x-4">
              {[
                {
                  name: "Twitter / X",
                  href: "#",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  href: "#",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  href: "#",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-red-600 text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Categories */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <h3 className="text-white font-semibold text-base">أقسام المنتجات</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#appliances" className="hover:text-red-500 transition-colors">
                  الأجهزة الكهربائية المنزلية
                </Link>
              </li>
              <li>
                <Link href="#lighting" className="hover:text-red-500 transition-colors">
                  ثريات وإضاءة داخلية
                </Link>
              </li>
              <li>
                <Link href="#lighting" className="hover:text-red-500 transition-colors">
                  حلول الإضاءة الخارجية
                </Link>
              </li>
              <li>
                <Link href="#appliances" className="hover:text-red-500 transition-colors">
                  مستلزمات المطبخ الذكية
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Columns */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <h3 className="text-white font-semibold text-base">خدماتنا</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-red-500 transition-colors">
                  الضمان المعتمد
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500 transition-colors">
                  خدمات التوصيل والتركيب
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500 transition-colors">
                  الاستشارات والتصميم
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-500 transition-colors">
                  الصيانة الدورية
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Column */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            <h3 className="text-white font-semibold text-base">اتصل بنا</h3>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li className="flex items-start space-x-reverse space-x-3">
                <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>المملكة العربية السعودية، الرياض</span>
              </li>
              <li className="flex items-start space-x-reverse space-x-3">
                <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span dir="ltr">+966 11 000 0000</span>
              </li>
              <li className="flex items-start space-x-reverse space-x-3">
                <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@alshehri.com.sa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>© {currentYear} شركة الشهري المحدودة. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-red-500">سياسة الخصوصية</a>
            <a href="#" className="hover:text-red-500">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
