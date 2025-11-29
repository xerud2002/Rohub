import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'
import Link from 'next/link'
import { FiShield, FiHome, FiUsers, FiDollarSign, FiFileText, FiAlertCircle, FiTrendingUp, FiBook, FiCheckCircle } from 'react-icons/fi'

export default function Services() {
  const { t } = useTranslation('common')

  const services = [
    {
      icon: FiShield,
      title: t('services.consumerRights.title'),
      description: t('services.consumerRights.summary'),
      link: '/services/consumer-rights',
      color: 'blue'
    },
    {
      icon: FiHome,
      title: t('services.housing.title'),
      description: t('services.housing.summary'),
      link: '/services/housing',
      color: 'green'
    },
    {
      icon: FiUsers,
      title: t('services.courtSupport.title'),
      description: t('services.courtSupport.summary'),
      link: '#',
      color: 'purple'
    },
    {
      icon: FiAlertCircle,
      title: t('services.bailiff.title'),
      description: t('services.bailiff.summary'),
      link: '#',
      color: 'red'
    },
    {
      icon: FiDollarSign,
      title: t('services.government.title'),
      description: t('services.government.summary'),
      link: '#',
      color: 'yellow'
    },
    {
      icon: FiCheckCircle,
      title: t('services.compliance.title'),
      description: t('services.compliance.summary'),
      link: '#',
      color: 'teal'
    },
    {
      icon: FiTrendingUp,
      title: t('services.business.title'),
      description: t('services.business.summary'),
      link: '#',
      color: 'orange'
    },
    {
      icon: FiBook,
      title: t('services.documentation.title'),
      description: t('services.documentation.summary'),
      link: '#',
      color: 'indigo'
    }
  ]

  return (
    <Layout>
      <NextSeo 
        title={`${t('services.title')} - RoHub`}
        description={t('services.subtitle')}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link 
                  key={index} 
                  href={service.link}
                  className="bg-gray-800 rounded-2xl p-8 border-2 border-gray-700 hover:border-primary-500 transition-all group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary-500/20 text-primary-400 rounded-xl group-hover:bg-primary-500 group-hover:text-white transition-all">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Nu găsești ce cauți?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contactează-ne și îți vom spune dacă te putem ajuta cu problema ta juridică.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-primary-500/50"
            >
              Contactează-ne
            </Link>
            <a
              href="tel:+441707659955"
              className="border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
            >
              <FiShield />
              Sună Acum
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
