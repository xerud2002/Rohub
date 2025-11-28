import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { FiPhone, FiMail } from 'react-icons/fi'

export default function Hero() {
  const { t } = useTranslation('common')

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900/30">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-block bg-primary-500/20 text-primary-400 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-primary-500/30">
              🇷🇴 Vorbim limba ta | We speak Romanian
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/booking" 
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-center transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50"
              >
                {t('hero.ctaPrimary')}
              </Link>
              <Link 
                href="tel:+441707659955" 
                className="border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-all flex items-center justify-center gap-2"
              >
                <FiPhone className="text-xl" />
                {t('hero.phone')}
              </Link>
            </div>

            {/* Quick Contact Info */}
            <div className="mt-8 flex flex-col sm:flex-row gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FiPhone className="text-primary-400" />
                <span>01707 659955</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="text-primary-400" />
                <span>office@acteinuk.com</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative">
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
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-700">
                <div className="text-2xl font-bold text-primary-400">500+</div>
                <div className="text-xs text-gray-400 mt-1">Clienți Mulțumiți</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-700">
                <div className="text-2xl font-bold text-primary-400">10+</div>
                <div className="text-xs text-gray-400 mt-1">Ani Experiență</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-700">
                <div className="text-2xl font-bold text-primary-400">98%</div>
                <div className="text-xs text-gray-400 mt-1">Rate Succes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
