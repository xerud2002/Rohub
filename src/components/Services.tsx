import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { FiCheck, FiShield, FiHome, FiAlertCircle, FiFileText, FiUsers, FiBriefcase, FiEdit3 } from 'react-icons/fi'
import { MdGavel, MdAccountBalance } from 'react-icons/md'
import { HiDocumentText } from 'react-icons/hi'
import { BsPassport } from 'react-icons/bs'

export default function Services() {
  const { t } = useTranslation('common')

  const services = [
    {
      id: 'consumer-rights',
      icon: <FiShield className="w-8 h-8" />,
      title: t('services.consumerRights.title'),
      summary: t('services.consumerRights.summary'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'housing',
      icon: <FiHome className="w-8 h-8" />,
      title: t('services.housing.title'),
      summary: t('services.housing.summary'),
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'court-support',
      icon: <MdGavel className="w-8 h-8" />,
      title: t('services.courtSupport.title'),
      summary: t('services.courtSupport.summary'),
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'bailiff',
      icon: <FiAlertCircle className="w-8 h-8" />,
      title: t('services.bailiff.title'),
      summary: t('services.bailiff.summary'),
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'immigration',
      icon: <BsPassport className="w-8 h-8" />,
      title: t('services.immigration.title'),
      summary: t('services.immigration.summary'),
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'government',
      icon: <MdAccountBalance className="w-8 h-8" />,
      title: t('services.government.title'),
      summary: t('services.government.summary'),
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      id: 'compliance',
      icon: <FiCheck className="w-8 h-8" />,
      title: t('services.compliance.title'),
      summary: t('services.compliance.summary'),
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 'business',
      icon: <FiBriefcase className="w-8 h-8" />,
      title: t('services.business.title'),
      summary: t('services.business.summary'),
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'documentation',
      icon: <HiDocumentText className="w-8 h-8" />,
      title: t('services.documentation.title'),
      summary: t('services.documentation.summary'),
      color: 'from-pink-500 to-pink-600'
    }
  ]

  return (
    <section id="services" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t('services.title')}</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">{t('services.subtitle')}</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${service.color} text-white mb-4`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>

              {/* Summary */}
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {service.summary}
              </p>

              {/* Learn More Link */}
              <Link
                href={`/services/${service.id}`}
                className="inline-flex items-center text-primary-400 font-medium text-sm hover:text-primary-300 transition-colors"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50"
          >
            {t('hero.ctaPrimary')}
          </Link>
        </div>
      </div>
    </section>
  )
}
