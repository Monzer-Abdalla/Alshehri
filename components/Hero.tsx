import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 py-24 sm:py-32 flex items-center justify-center min-h-[85vh]">
      {/* Background visual elements */}
      <div className="absolute inset-0 z-0">
        {/* Soft glowing ambient circles */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-red-800/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Subtle dot pattern grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Announcement Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/40 border border-red-800/30 text-red-400 text-xs sm:text-sm font-semibold mb-8 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          مرحباً بكم في شركة الشهري المحدودة
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
          للأجهزة الكهربائية المنزلية <br />
          <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-400 bg-clip-text text-transparent">
            ومعدات الإضاءة
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-400 leading-relaxed mb-12">
          نصنع من منزلك مساحة تنبض بالحياة بأحدث الأجهزة المنزلية الذكية وأرقى تصاميم الإضاءة العصرية. كفاءة استثنائية، ضمان معتمد، وتصاميم تواكب المستقبل.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#appliances"
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-red-600/20 hover:shadow-red-600/40 transition-all duration-300 transform hover:scale-[1.03] active:scale-98 text-center"
          >
            تصفح الأجهزة الكهربائية
          </Link>
          <Link
            href="#lighting"
            className="w-full sm:w-auto bg-zinc-900/80 hover:bg-zinc-800 text-zinc-100 hover:text-white font-semibold px-8 py-4 rounded-xl border border-zinc-700/60 hover:border-zinc-600/80 transition-all duration-300 transform hover:scale-[1.03] active:scale-98 text-center"
          >
            استكشف معدات الإضاءة
          </Link>
        </div>

        {/* Features badges row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-10 border-t border-zinc-800/60 max-w-4xl mx-auto">
          {[
            {
              title: "ضمان لمدة سنتين",
              desc: "على كافة المنتجات الكهربائية",
              icon: (
                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
            },
            {
              title: "توصيل سريع وآمن",
              desc: "لجميع أنحاء المملكة",
              icon: (
                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              ),
            },
            {
              title: "منتجات أصلية 100%",
              desc: "من كبرى الماركات العالمية",
              icon: (
                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              ),
            },
            {
              title: "دعم فني متكامل",
              desc: "فريق جاهز لخدمتكم دائماً",
              icon: (
                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ),
            },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/40 backdrop-blur-sm">
              <div className="p-3 bg-red-600/10 rounded-xl mb-3">{item.icon}</div>
              <h3 className="text-zinc-100 font-semibold text-sm sm:text-base mb-1">{item.title}</h3>
              <p className="text-zinc-500 text-xs text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
