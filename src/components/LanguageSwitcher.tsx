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
      <FiGlobe className="text-gray-600" />
      <select
        value={router.locale}
        onChange={(e) => changeLanguage(e.target.value)}
        className="text-sm border rounded px-2 py-1 cursor-pointer bg-white"
        aria-label="Change language"
      >
        <option value="ro">{t('languageSwitcher.romanian')}</option>
        <option value="en">{t('languageSwitcher.english')}</option>
      </select>
    </div>
  )
}
