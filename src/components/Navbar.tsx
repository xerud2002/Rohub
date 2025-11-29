import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi'
import { useTranslation } from 'next-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import { SiTiktok } from 'react-icons/si'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation('common')

  return (
    <>
      {/* Top Bar with Contact Info */}
      <div className="bg-slate-900 text-white py-2 text-sm border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
            <a href="tel:+441707659955" className="flex items-center gap-1 sm:gap-2 hover:text-yellow-300 transition text-xs sm:text-sm font-semibold no-underline">
              <FiPhone className="text-sm sm:text-base" />
              <span>01707 659955</span>
            </a>
            <a href="mailto:office@acteinuk.com" className="flex items-center gap-1 sm:gap-2 hover:text-yellow-300 transition text-xs sm:text-sm font-semibold no-underline">
              <FiMail className="text-sm sm:text-base" />
              <span className="hidden sm:inline">office@acteinuk.com</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="https://www.tiktok.com/@acteinuk.com8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-300 transition font-semibold"
              aria-label="TikTok RoHub"
            >
              <SiTiktok className="text-sm sm:text-base" />
            </a>
            <a 
              href="https://www.tiktok.com/@acteinuk.com4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-yellow-300 transition font-semibold"
              aria-label="TikTok RoHub Alternative"
            >
              <SiTiktok className="text-sm sm:text-base" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <header className="bg-slate-900 sticky top-0 z-40 shadow-lg border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt="RoHub Logo" 
            width={160} 
            height={53}
            className="h-10 sm:h-14 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-6 items-center text-gray-300">
          <Link href="/services" className="hover:text-primary-400 transition-colors font-semibold">{t('nav.services')}</Link>
          <Link href="/about" className="hover:text-primary-400 transition-colors font-semibold">{t('nav.about')}</Link>
          <Link href="/pricing" className="hover:text-primary-400 transition-colors font-semibold">{t('nav.pricing')}</Link>
          <LanguageSwitcher />
          <Link href="/contact" className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-lg shadow-lg transition-all font-semibold">{t('nav.getQuote')}</Link>
        </nav>
        <button className="md:hidden text-2xl text-gray-300 hover:text-primary-400 transition-colors" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-slate-800 px-4 pb-4 border-t border-slate-700">
          <Link href="/services" className="block py-2 text-gray-300 hover:text-primary-400 transition-colors font-semibold">{t('nav.services')}</Link>
          <Link href="/about" className="block py-2 text-gray-300 hover:text-primary-400 transition-colors font-semibold">{t('nav.about')}</Link>
          <Link href="/pricing" className="block py-2 text-gray-300 hover:text-primary-400 transition-colors font-semibold">{t('nav.pricing')}</Link>
          <div className="py-2">
            <LanguageSwitcher />
          </div>
          <Link href="/contact" className="block py-2">{t('nav.getQuote')}</Link>
        </div>
      )}
    </header>
    </>
  )
}
