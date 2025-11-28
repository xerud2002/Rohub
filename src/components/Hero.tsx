import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { FiPhone, FiMail } from 'react-icons/fi'

export default function Hero() {
  const { t } = useTranslation('common')

  return (
    <section className="bg-gradient-to-br from-primary/5 via-white to-primary/10">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              🇷🇴 Vorbim limba ta | We speak Romanian
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-center transition-all shadow-lg hover:shadow-xl"
              >
                {t('hero.ctaPrimary')}
              </Link>
              <Link 
                href="tel:+441234567890" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-all flex items-center justify-center gap-2"
              >
                <FiPhone className="text-xl" />
                {t('hero.phone')}
              </Link>
            </div>

            {/* Quick Contact Info */}
            <div className="mt-8 flex flex-col sm:flex-row gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FiPhone className="text-primary" />
                <span>+44 1234 567890</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="text-primary" />
                <span>info@rohub.co.uk</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative">
            <div className="relative w-full h-80 md:h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 p-8 text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                  <p className="text-sm font-medium text-gray-700">📸 Hero Image</p>
                  <p className="text-xs mt-2 text-gray-500">Add hero-office.jpg to<br />public/images/</p>
                </div>
              </div>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-xs text-gray-600 mt-1">Clienți Mulțumiți</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-xs text-gray-600 mt-1">Ani Experiență</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-xs text-gray-600 mt-1">Rate Succes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
