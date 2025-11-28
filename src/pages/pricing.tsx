import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'
import { FiCheck, FiPhone } from 'react-icons/fi'
import Link from 'next/link'

export default function Pricing() {
  const { t } = useTranslation('common')

  return (
    <Layout>
      <NextSeo 
        title={`${t('pricing.title')} - RoHub`}
        description={t('pricing.subtitle')}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-white to-primary/10 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            {t('pricing.title')}
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>
      </section>

      {/* Hourly Rates */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('pricing.hourlyRates.title')}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Legal Consultancy */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Legal Consultancy</h3>
              <div className="text-4xl font-extrabold text-primary mb-2">£100-170</div>
              <div className="text-gray-600 mb-6">per hour</div>
              <p className="text-sm text-gray-700">
                Consiliere juridică profesională pentru cazuri civile, drept consumator, dispute contractuale și mai mult.
              </p>
            </div>

            {/* McKenzie Friend */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200 transform scale-105 shadow-xl">
              <div className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
                POPULAR
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">McKenzie Friend</h3>
              <div className="text-4xl font-extrabold text-primary mb-2">£100-180</div>
              <div className="text-gray-600 mb-6">per hour</div>
              <p className="text-sm text-gray-700">
                Asistență în instanță, pregătire dosare, declarații martori și suport complet în proceduri judiciare.
              </p>
            </div>

            {/* Compliance */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance Work</h3>
              <div className="text-4xl font-extrabold text-primary mb-2">£60-150</div>
              <div className="text-gray-600 mb-6">per hour</div>
              <p className="text-sm text-gray-700">
                GDPR, politici companie, template-uri conformitate și suport reglementare pentru afaceri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Fee Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('pricing.feeServices.title')}</h2>
            <p className="text-gray-600 mt-2">Tarife fixe pentru servicii specifice</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900">Letter Before Action</h3>
                <span className="text-2xl font-bold text-primary">£100-170</span>
              </div>
              <p className="text-sm text-gray-600">Scrisoare formală înainte de acțiune juridică</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900">Vehicle Rejection Letter</h3>
                <span className="text-2xl font-bold text-primary">£150</span>
              </div>
              <p className="text-sm text-gray-600">Scrisoare respingere vehicul (30 zile sau 6 luni)</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900">Complaint Letter</h3>
                <span className="text-2xl font-bold text-primary">£160</span>
              </div>
              <p className="text-sm text-gray-600">Scrisoare de reclamație profesională</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900">Vulnerability Letter</h3>
                <span className="text-2xl font-bold text-primary">£50-90</span>
              </div>
              <p className="text-sm text-gray-600">Declarație de vulnerabilitate pentru protecție</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900">Witness Statement</h3>
                <span className="text-2xl font-bold text-primary">£60-150</span>
              </div>
              <p className="text-sm text-gray-600">Declarație martor pentru instanță</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900">Document Drafting</h3>
                <span className="text-2xl font-bold text-primary">£60+</span>
              </div>
              <p className="text-sm text-gray-600">Redactare documente și template-uri</p>
            </div>
          </div>
        </div>
      </section>

      {/* Court Support Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">{t('pricing.courtSupport.title')}</h2>
            <p className="text-gray-600 mt-2">Asistență profesională în instanță (McKenzie Friend)</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-8 text-center border-2 border-yellow-200">
              <div className="text-5xl font-bold text-primary mb-2">£600</div>
              <h3 className="font-bold text-gray-900 mb-2">Half Day</h3>
              <p className="text-sm text-gray-600">Up to 3 hours</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 text-center border-2 border-orange-200 transform scale-105 shadow-xl">
              <div className="inline-block bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                BEST VALUE
              </div>
              <div className="text-5xl font-bold text-primary mb-2">£1800</div>
              <h3 className="font-bold text-gray-900 mb-2">Full Day</h3>
              <p className="text-sm text-gray-600">Complete court attendance</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 text-center border-2 border-red-200">
              <div className="text-5xl font-bold text-primary mb-2">£800+</div>
              <h3 className="font-bold text-gray-900 mb-2">Case Prep</h3>
              <p className="text-sm text-gray-600">Bundle & documents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Subscription */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-primary">
            <div className="text-center mb-8">
              <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                💎 PREMIUM PLAN
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('pricing.subscription.title')}</h2>
              <p className="text-gray-600">Acces complet la toate serviciile RoHub</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <FiCheck className="text-primary text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-700">{t('pricing.subscription.benefit1')}</p>
              </div>
              <div className="flex items-start gap-3">
                <FiCheck className="text-primary text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-700">{t('pricing.subscription.benefit2')}</p>
              </div>
              <div className="flex items-start gap-3">
                <FiCheck className="text-primary text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-700">{t('pricing.subscription.benefit3')}</p>
              </div>
              <div className="flex items-start gap-3">
                <FiCheck className="text-primary text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-700">{t('pricing.subscription.benefit4')}</p>
              </div>
              <div className="flex items-start gap-3">
                <FiCheck className="text-primary text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-700">{t('pricing.subscription.benefit5')}</p>
              </div>
              <div className="flex items-start gap-3">
                <FiCheck className="text-primary text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-700">{t('pricing.subscription.benefit6')}</p>
              </div>
              <div className="flex items-start gap-3">
                <FiCheck className="text-primary text-xl mt-1 flex-shrink-0" />
                <p className="text-gray-700">{t('pricing.subscription.benefit7')}</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                <FiPhone />
                Contactează-ne pentru Detalii
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ai nevoie de ajutor juridic?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Contactează-ne astăzi pentru o consultație și să discutăm despre cazul tău.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-all"
            >
              Solicită o Consultație
            </Link>
            <a
              href="tel:+441234567890"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
            >
              <FiPhone />
              +44 1234 567890
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
