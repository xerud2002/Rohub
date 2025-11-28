import { useTranslation } from 'next-i18next'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'

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
          <div className="mt-2 space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <FiMapPin className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p>Unit 1 Hollies Way, High St</p>
                <p>Potters Bar EN6 5BH</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="text-primary" />
              <a href="tel:+441707659955" className="hover:text-white transition">01707 659955</a>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-primary" />
              <a href="mailto:office@acteinuk.com" className="hover:text-white transition">office@acteinuk.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
        © {new Date().getFullYear()} RoHub. {t('footer.copyright')}
      </div>
    </footer>
  )
}
