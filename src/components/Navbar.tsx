import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useTranslation } from 'next-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation('common')

  return (
    <header className="bg-white sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">RoHub</Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/services" className="hover:text-primary">{t('nav.services')}</Link>
          <Link href="/about" className="hover:text-primary">{t('nav.about')}</Link>
          <Link href="/pricing" className="hover:text-primary">{t('nav.pricing')}</Link>
          <LanguageSwitcher />
          <Link href="/contact" className="bg-primary text-white px-4 py-2 rounded">{t('nav.getQuote')}</Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white px-4 pb-4">
          <Link href="/services" className="block py-2">{t('nav.services')}</Link>
          <Link href="/about" className="block py-2">{t('nav.about')}</Link>
          <Link href="/pricing" className="block py-2">{t('nav.pricing')}</Link>
          <div className="py-2">
            <LanguageSwitcher />
          </div>
          <Link href="/contact" className="block py-2">{t('nav.getQuote')}</Link>
        </div>
      )}
    </header>
  )
}
