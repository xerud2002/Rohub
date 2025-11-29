import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { FiPhone, FiMail } from 'react-icons/fi'

export default function Hero() {
  const { t } = useTranslation('common')

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-20 w-full">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-14 items-center">
          {/* Left Column - Content */}
          <div className="order-2 md:order-1">
            <div className="inline-block bg-primary-500/20 text-primary-400 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base font-medium mb-4 md:mb-5 border border-primary-500/30">
              🇷🇴 Vorbim limba ta | We speak Romanian
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              <span className="text-red-500">{t('hero.titlePart1')}</span>{' '}
              <span className="text-yellow-400">{t('hero.titlePart2')}</span>{' '}
              <span className="text-blue-400">{t('hero.titlePart3')}</span>
            </h1>
            <p className="mt-5 md:mt-7 text-lg md:text-xl text-gray-300 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            {/* CTAs */}
            <div className="mt-7 md:mt-10 flex flex-col gap-4 md:gap-5">
              <Link 
                href="/booking" 
                className="bg-primary-500 hover:bg-primary-600 text-white px-7 py-4 md:px-10 md:py-5 rounded-lg font-semibold text-center transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 text-base md:text-lg"
              >
                {t('hero.ctaPrimary')}
              </Link>
              <Link 
                href="tel:+441707659955" 
                className="border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-7 py-4 md:px-10 md:py-5 rounded-lg font-semibold text-center transition-all flex items-center justify-center gap-2 text-base md:text-lg"
              >
                <FiPhone className="text-xl md:text-2xl" />
                {t('hero.phone')}
              </Link>
            </div>

            {/* Quick Contact Info */}
            <div className="mt-7 md:mt-10 flex flex-col sm:flex-row gap-5 md:gap-7 text-sm md:text-base text-gray-400">
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
            <div className="mt-5 md:mt-7 grid grid-cols-3 gap-3 md:gap-5 text-center">
              <div className="bg-gray-800 rounded-lg p-3 md:p-5 shadow-lg border border-gray-700">
                <div className="text-xl md:text-3xl font-bold text-primary-400">500+</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1 md:mt-1.5">Clienți Mulțumiți</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 md:p-5 shadow-lg border border-gray-700">
                <div className="text-xl md:text-3xl font-bold text-primary-400">10+</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1 md:mt-1.5">Ani Experiență</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 md:p-5 shadow-lg border border-gray-700">
                <div className="text-xl md:text-3xl font-bold text-primary-400">98%</div>
                <div className="text-xs md:text-sm text-gray-400 mt-1 md:mt-1.5">Rate Succes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
