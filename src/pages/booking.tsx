import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from '../components/Layout'
import { NextSeo } from 'next-seo'
import { FiMapPin, FiPhone, FiZap } from 'react-icons/fi'

export default function BookingPage() {
  const { t } = useTranslation('common')

  return (
    <Layout>
      <NextSeo
        title="Programare Consultanță - RoHub"
        description="Programează o consultanță juridică la sediul nostru sau online prin telefon"
      />

      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Programare Consultanță
            </h1>
            <p className="text-lg text-gray-300">
              Alege tipul de consultanță potrivit nevoilor tale
            </p>
          </div>

          {/* Booking Options */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* In-Person Booking */}
            <div className="bg-gray-800 rounded-2xl shadow-xl p-6 lg:p-8 border-2 border-gray-700 hover:border-primary-500 transition-all flex flex-col h-full">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl mb-4 mx-auto">
                <FiMapPin className="w-8 h-8" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-white text-center mb-3">
                Programare la Birou
              </h2>
              <p className="text-gray-300 text-center mb-4 text-sm lg:text-base">
                Vizită la sediul nostru pentru o consultanță față în față
              </p>
              <div className="bg-gray-900 rounded-lg p-3 lg:p-4 mb-4 text-sm text-gray-300 border border-gray-700 flex-grow">
                <p className="font-semibold mb-1 text-primary-400">📍 Adresa:</p>
                <p className="text-xs lg:text-sm">Unit 1 Hollies Way, High St</p>
                <p className="text-xs lg:text-sm">Potters Bar EN6 5BH</p>
                <p className="mt-2 font-semibold text-primary-400">🕒 Program:</p>
                <p className="text-xs lg:text-sm">Luni - Vineri: 09:00 - 18:00</p>
                <p className="text-xs lg:text-sm">Sâmbătă: 09:00 - 12:00</p>
              </div>
              <a
                href="tel:+441707659955"
                className="w-full block text-center bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 lg:px-6 lg:py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-primary-500/50 text-sm lg:text-base mt-auto"
              >
                Sună Acum pentru Programare
              </a>
            </div>

            {/* Online Booking */}
            <div className="bg-gray-800 rounded-2xl shadow-xl p-6 lg:p-8 border-2 border-gray-700 hover:border-blue-500 transition-all flex flex-col h-full">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl mb-4 mx-auto">
                <FiPhone className="w-8 h-8" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-white text-center mb-3">
                Consultanță Online
              </h2>
              <p className="text-gray-300 text-center mb-4 text-sm lg:text-base">
                Discuție telefonică sau video call de unde te afli
              </p>
              <div className="bg-gray-900 rounded-lg p-3 lg:p-4 mb-4 text-sm text-gray-300 border border-gray-700 flex-grow">
                <p className="font-semibold mb-1 text-blue-400">💻 Ce primești:</p>
                <p className="text-xs lg:text-sm">✓ Consultanță telefonică completă</p>
                <p className="text-xs lg:text-sm">✓ Flexibilitate maximă</p>
                <p className="text-xs lg:text-sm">✓ Fără deplasare necesară</p>
                <p className="mt-2 font-semibold text-blue-400">🕒 Disponibilitate:</p>
                <p className="text-xs lg:text-sm">Luni - Vineri: 09:00 - 18:00</p>
                <p className="text-red-400 font-semibold mt-2 text-xs lg:text-sm">
                  *Consultanța online este nerambursabilă
                </p>
              </div>
              <a
                href="tel:+441707659955"
                className="w-full block text-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 lg:px-6 lg:py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/50 text-sm lg:text-base mt-auto"
              >
                Sună Acum pentru Programare
              </a>
            </div>

            {/* Emergency Booking */}
            <div className="bg-gray-800 rounded-2xl shadow-xl p-6 lg:p-8 border-2 border-orange-500 hover:border-orange-400 transition-all ring-2 ring-orange-500/30 flex flex-col h-full">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-xl mb-4 mx-auto animate-pulse">
                <FiZap className="w-8 h-8" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-white text-center mb-3">
                Consultanță Urgență
              </h2>
              <p className="text-gray-300 text-center mb-4 text-sm lg:text-base">
                Asistență imediată pentru situații urgente
              </p>
              <div className="bg-gray-900 rounded-lg p-3 lg:p-4 mb-4 text-sm text-gray-300 border border-orange-600 flex-grow">
                <p className="font-semibold mb-1 text-orange-400">⚡ Ce primești:</p>
                <p className="text-xs lg:text-sm">✓ Răspuns în maxim 30 minute</p>
                <p className="text-xs lg:text-sm">✓ Consultanță imediată telefonic</p>
                <p className="text-xs lg:text-sm">✓ Disponibil 24/7</p>
                <p className="text-xs lg:text-sm">✓ Prioritate maximă</p>
                <p className="mt-2 font-semibold text-orange-400">🕒 Disponibilitate:</p>
                <p className="text-orange-300 font-semibold text-xs lg:text-sm">NON-STOP - 24/7</p>
                <p className="text-red-400 font-semibold mt-2 text-xs lg:text-sm">
                  *Tarif majorat pentru urgențe
                </p>
              </div>
              <a
                href="tel:+441707659955"
                className="w-full block text-center bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-4 py-3 lg:px-6 lg:py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-orange-500/50 ring-2 ring-orange-400/50 text-sm lg:text-base mt-auto"
              >
                Sună Acum - URGENȚĂ
              </a>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-12 bg-yellow-900/30 border-l-4 border-yellow-500 p-6 rounded-lg border border-yellow-600/30">
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-yellow-400">ℹ️ Notă importantă:</span> Dacă ești de acord cu termenii și condițiile menționate
              în disclaimer, te rugăm să bifezi căsuța corespunzătoare. În cazul în care nu te prezinți la 
              programare sau anulezi, înțelegi că nu vei primi rambursare pentru suma achitată.
            </p>
          </div>

          {/* Contact Alternatives */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Preferi să ne contactezi direct?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+441707659955"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold"
              >
                <FiPhone /> 01707 659955
              </a>
              <a 
                href="mailto:office@acteinuk.com"
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold"
              >
                📧 office@acteinuk.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'ro', ['common'])),
    },
  }
}
