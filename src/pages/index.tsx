import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Services from '../components/Services'
import AboutSection from '../components/AboutSection'
import ContactForm from '../components/ContactForm'
import Testimonials from '../components/Testimonials'

export default function Home() {
  const { t } = useTranslation('common')
  
  return (
    <Layout>
      <Hero />
      <Services />
      <AboutSection />
      <section className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white">{t('contact.title')}</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <div>
              <ContactForm />
            </div>
            <div>
              <Testimonials />
            </div>
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
