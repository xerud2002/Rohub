import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'next-i18next'

export default function ContactForm() {
  const { t } = useTranslation('common')
  const formRef = useRef<HTMLFormElement | null>(null)
  const [status, setStatus] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formRef.current as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      setStatus('sent')
      formRef.current?.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 max-w-xl" aria-label="Contact form">
      <label className="block">
        <span className="text-sm font-medium">{t('contact.form.name')}</span>
        <input name="user_name" required className="mt-1 w-full border rounded px-3 py-2" />
      </label>
      <label className="block">
        <span className="text-sm font-medium">{t('contact.form.email')}</span>
        <input type="email" name="user_email" required className="mt-1 w-full border rounded px-3 py-2" />
      </label>
      <label className="block">
        <span className="text-sm font-medium">{t('contact.form.message')}</span>
        <textarea name="message" rows={5} required className="mt-1 w-full border rounded px-3 py-2"></textarea>
      </label>
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">{t('contact.form.submit')}</button>
      {status === 'sending' && <p className="text-sm text-gray-600">{t('contact.form.sending')}</p>}
      {status === 'sent' && <p className="text-sm text-green-600">{t('contact.form.success')}</p>}
      {status === 'error' && <p className="text-sm text-red-600">{t('contact.form.error')}</p>}
    </form>
  )
}
