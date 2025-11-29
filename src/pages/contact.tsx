import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  const { t } = useTranslation('common')
  
  return (
    <Layout>
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold">{t('contact.pageTitle')}</h1>
          <p className="mt-2 text-gray-600">{t('contact.pageSubtitle')}</p>
          <div className="mt-6">
            <ContactForm />
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
