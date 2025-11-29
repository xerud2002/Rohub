import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from '../components/Layout'
import { NextSeo } from 'next-seo'
import { FiMapPin, FiPhone } from 'react-icons/fi'

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
          <div className="grid md:grid-cols-2 gap-8">
            {/* In-Person Booking */}
            <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-gray-700 hover:border-primary-500 transition-all">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl mb-6 mx-auto">
                <FiMapPin className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white text-center mb-4">
                Programare la Birou
              </h2>
              <p className="text-gray-300 text-center mb-6">
                Vizită la sediul nostru pentru o consultanță față în față
              </p>
              <div className="bg-gray-900 rounded-lg p-4 mb-6 text-sm text-gray-300 border border-gray-700">
                <p className="font-semibold mb-2 text-primary-400">📍 Adresa:</p>
                <p>Unit 1 Hollies Way, High St</p>
                <p>Potters Bar EN6 5BH</p>
                <p className="mt-3 font-semibold text-primary-400">🕒 Program:</p>
                <p>Luni - Vineri: 09:00 - 18:00</p>
                <p>Sâmbătă: 09:00 - 12:00</p>
              </div>
              <a
                href="tel:+441707659955"
                className="w-full block text-center bg-primary-500 hover:bg-primary-600 text-white px-6 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-primary-500/50"
              >
                Sună Acum pentru Programare
              </a>
            </div>

            {/* Online Booking */}
            <div className="bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-gray-700 hover:border-blue-500 transition-all">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl mb-6 mx-auto">
                <FiPhone className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white text-center mb-4">
                Consultanță Online
              </h2>
              <p className="text-gray-300 text-center mb-6">
                Discuție telefonică sau video call de unde te afli
              </p>
              <div className="bg-gray-900 rounded-lg p-4 mb-6 text-sm text-gray-300 border border-gray-700">
                <p className="font-semibold mb-2 text-blue-400">💻 Ce primești:</p>
                <p>✓ Consultanță telefonică completă</p>
                <p>✓ Flexibilitate maximă</p>
                <p>✓ Fără deplasare necesară</p>
                <p className="mt-3 font-semibold text-blue-400">🕒 Disponibilitate:</p>
                <p>Luni - Vineri: 09:00 - 18:00</p>
                <p className="text-red-400 font-semibold mt-2">
                  *Consultanța online este nerambursabilă
                </p>
              </div>
              <a
                href="tel:+441707659955"
                className="w-full block text-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/50"
              >
                Sună Acum pentru Programare
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
