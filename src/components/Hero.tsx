import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { FiPhone, FiMail } from 'react-icons/fi'

export default function Hero() {
  const { t } = useTranslation('common')

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900/30 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-20 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="order-2 md:order-1">
            <div className="inline-block bg-primary-500/20 text-primary-400 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4 border border-primary-500/30">
              🇷🇴 Vorbim limba ta | We speak Romanian
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
              {t('hero.title')}
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-300 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            {/* CTAs */}
            <div className="mt-6 md:mt-8 flex flex-col gap-3 md:gap-4">
              <Link 
                href="/booking" 
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-center transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 text-sm md:text-base"
              >
                {t('hero.ctaPrimary')}
              </Link>
              <Link 
                href="tel:+441707659955" 
                className="border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-center transition-all flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <FiPhone className="text-lg md:text-xl" />
                {t('hero.phone')}
              </Link>
            </div>

            {/* Quick Contact Info */}
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 md:gap-6 text-xs md:text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FiPhone className="text-primary-400" />
                <span>01707 659955</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="text-primary-400" />
                <span className="truncate">office@acteinuk.com</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative order-1 md:order-2">
            <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden bg-gray-800 border border-gray-700">
              <Image 
                src="/images/office-hero.png" 
                alt="RoHub - Consiliere juridică pentru românii din UK"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl opacity-90"
                priority
              />
            </div>
            
            {/* Trust Badges */}
            <div className="mt-4 md:mt-6 grid grid-cols-3 gap-2 md:gap-4 text-center">
              <div className="bg-gray-800 rounded-lg p-2 md:p-4 shadow-lg border border-gray-700">
                <div className="text-lg md:text-2xl font-bold text-primary-400">500+</div>
                <div className="text-[10px] md:text-xs text-gray-400 mt-0.5 md:mt-1">Clienți Mulțumiți</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-2 md:p-4 shadow-lg border border-gray-700">
                <div className="text-lg md:text-2xl font-bold text-primary-400">10+</div>
                <div className="text-[10px] md:text-xs text-gray-400 mt-0.5 md:mt-1">Ani Experiență</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-2 md:p-4 shadow-lg border border-gray-700">
                <div className="text-lg md:text-2xl font-bold text-primary-400">98%</div>
                <div className="text-[10px] md:text-xs text-gray-400 mt-0.5 md:mt-1">Rate Succes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
