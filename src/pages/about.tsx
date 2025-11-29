import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { FiCheckCircle, FiUsers, FiAward, FiHeart, FiPhone } from 'react-icons/fi'

export default function About() {
  const { t } = useTranslation('common')

  return (
    <Layout>
      <NextSeo 
        title={`${t('about.title')} - RoHub`}
        description={t('about.description')}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                {t('about.title')}
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                {t('about.description')}
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-primary-500/50"
                >
                  Contactează-ne
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
                >
                  Vezi Servicii
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-800 rounded-2xl p-8 border-2 border-gray-700">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                    <div className="text-4xl font-bold text-primary-400 mb-2">500+</div>
                    <div className="text-sm text-gray-400">Clienți Mulțumiți</div>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                    <div className="text-4xl font-bold text-primary-400 mb-2">10+</div>
                    <div className="text-sm text-gray-400">Ani Experiență</div>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                    <div className="text-4xl font-bold text-primary-400 mb-2">98%</div>
                    <div className="text-sm text-gray-400">Rate Succes</div>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                    <div className="text-4xl font-bold text-primary-400 mb-2">24/7</div>
                    <div className="text-sm text-gray-400">Disponibilitate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('about.whyChooseUs')}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Oferim servicii juridice de calitate pentru comunitatea românească din UK
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-2xl p-8 border-2 border-gray-700 hover:border-primary-500 transition-all">
              <div className="p-4 bg-primary-500/20 text-primary-400 rounded-xl w-fit mb-4">
                <FiCheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {t('about.point1')}
              </h3>
              <p className="text-gray-400">
                Înțelegem perfect nevoile tale și vorbim limba ta maternă pentru a-ți explica totul clar.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 border-2 border-gray-700 hover:border-primary-500 transition-all">
              <div className="p-4 bg-primary-500/20 text-primary-400 rounded-xl w-fit mb-4">
                <FiUsers className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {t('about.point2')}
              </h3>
              <p className="text-gray-400">
                Asistență McKenzie Friend în instanțele din UK, cu experiență dovedită în cazuri complexe.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 border-2 border-gray-700 hover:border-primary-500 transition-all">
              <div className="p-4 bg-primary-500/20 text-primary-400 rounded-xl w-fit mb-4">
                <FiAward className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {t('about.point3')}
              </h3>
              <p className="text-gray-400">
                Colaborăm cu Solicitors, Barristers și specialiști pentru a-ți oferi cele mai bune soluții.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Valorile Noastre
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="p-4 bg-primary-500/20 text-primary-400 rounded-xl w-fit mx-auto mb-4">
                <FiCheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Transparență</h3>
              <p className="text-gray-400 text-sm">Prețuri clare și fără costuri ascunse</p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-primary-500/20 text-primary-400 rounded-xl w-fit mx-auto mb-4">
                <FiHeart className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Empatie</h3>
              <p className="text-gray-400 text-sm">Înțelegem provocările tale și suntem alături de tine</p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-primary-500/20 text-primary-400 rounded-xl w-fit mx-auto mb-4">
                <FiAward className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Profesionalism</h3>
              <p className="text-gray-400 text-sm">Servicii de cea mai înaltă calitate</p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-primary-500/20 text-primary-400 rounded-xl w-fit mx-auto mb-4">
                <FiUsers className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Comunitate</h3>
              <p className="text-gray-400 text-sm">Dedicați comunității românești din UK</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hai să discutăm despre cazul tău
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contactează-ne astăzi pentru o consultație și să vedem cum te putem ajuta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-primary-500/50"
            >
              Programează Consultanță
            </Link>
            <a
              href="tel:+441707659955"
              className="border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
            >
              <FiPhone />
              01707 659955
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
