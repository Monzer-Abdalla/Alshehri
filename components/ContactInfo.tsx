import type { Dictionary } from "@/lib/i18n/types";

interface ContactInfoProps {
  dict: Dictionary;
}

export default function ContactInfo({ dict }: ContactInfoProps) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
          {dict.contact.info.title}
        </h2>
        
        <div className="space-y-6">
          {/* Address */}
          <div className="flex gap-4">
            <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-red-50 dark:bg-red-900/20 text-red-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">{dict.contact.info.addressTitle}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">{dict.contact.info.address}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-4">
            <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-red-50 dark:bg-red-900/20 text-red-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">{dict.contact.info.emailTitle}</h3>
              <a href={`mailto:${dict.footer.email}`} className="text-zinc-600 dark:text-zinc-400 text-sm hover:text-red-600 transition-colors">
                {dict.footer.email}
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4">
            <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-red-50 dark:bg-red-900/20 text-red-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">{dict.contact.info.phoneTitle}</h3>
              <a href={`tel:${dict.footer.phone}`} className="text-zinc-600 dark:text-zinc-400 text-sm hover:text-red-600 transition-colors">
                {dict.footer.phone}
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex gap-4">
            <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-red-50 dark:bg-red-900/20 text-red-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">{dict.contact.info.workingHoursTitle}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">{dict.contact.info.workingHours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Embed */}
      <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115856.8488056291!2d46.75837699190137!3d24.84651357606399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efbdef7f205c3%3A0xc3d3390c50d754b!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1704987654321!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location Map"
          className="absolute inset-0 dark:brightness-75 dark:contrast-125 dark:opacity-80 dark:grayscale transition-all"
        />
      </div>
    </div>
  );
}
