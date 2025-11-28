import { useTranslation } from 'next-i18next'

export default function Footer() {
  const { t } = useTranslation('common')

  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold text-white">RoHub</h4>
          <p className="text-sm mt-2">{t('footer.tagline')}</p>
        </div>
        <div>
          <h5 className="font-semibold">{t('footer.services')}</h5>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="/services/consumer-rights">{t('footer.consumerRights')}</a></li>
            <li><a href="/services/housing">{t('footer.housing')}</a></li>
            <li><a href="/services/court-support">{t('footer.courtSupport')}</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">{t('footer.contact')}</h5>
          <p className="text-sm mt-2">{t('footer.phone')}: +44 1234 567890</p>
          <p className="text-sm">{t('footer.email')}: info@rohub.co.uk</p>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
        © {new Date().getFullYear()} RoHub. {t('footer.copyright')}
      </div>
    </footer>
  )
}
