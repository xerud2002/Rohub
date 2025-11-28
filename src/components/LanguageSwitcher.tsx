import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { FiGlobe } from 'react-icons/fi'

export default function LanguageSwitcher() {
  const router = useRouter()
  const { t } = useTranslation('common')

  const changeLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <div className="flex items-center gap-2">
      <FiGlobe className="text-gray-700" />
      <select
        value={router.locale}
        onChange={(e) => changeLanguage(e.target.value)}
        className="text-sm border border-gray-300 rounded px-3 py-1.5 cursor-pointer bg-white text-gray-700 hover:border-primary-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
        aria-label="Change language"
      >
        <option value="ro">{t('languageSwitcher.romanian')}</option>
        <option value="en">{t('languageSwitcher.english')}</option>
      </select>
    </div>
  )
}
