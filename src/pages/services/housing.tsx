import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { NextSeo } from 'next-seo'
import Layout from '../../components/Layout'
import { FiHome, FiCheck, FiPhone } from 'react-icons/fi'
import Link from 'next/link'

export default function Housing() {
  const { t } = useTranslation('common')

  return (
    <Layout>
      <NextSeo 
        title={`${t('services.housing.title')} - RoHub`}
        description={t('services.housing.summary')}
      />
      
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl">
              <FiHome className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              {t('services.housing.title')}
            </h1>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            {t('services.housing.summary')}
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Serviciile Noastre</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-green-50 rounded-xl">
              <FiCheck className="text-green-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Scrisori Dispută Depozit</h3>
                <p className="text-gray-700">Contestăm rețineri nejustificate ale depozitului de garanție de către proprietari sau agenții imobiliare.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-green-50 rounded-xl">
              <FiCheck className="text-green-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Explicații Secțiunea 21 / Secțiunea 8</h3>
                <p className="text-gray-700">Îți explicăm drepturile când primești Section 21 (no-fault eviction) sau Section 8 (grounds for possession).</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-green-50 rounded-xl">
              <FiCheck className="text-green-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Obligații Reparații</h3>
                <p className="text-gray-700">Asistență când proprietarul refuză să facă reparații obligatorii - heating, damp, structural issues.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-green-50 rounded-xl">
              <FiCheck className="text-green-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Reclamații Mucegai/Umiditate</h3>
                <p className="text-gray-700">Redactăm scrisori de reclamație pentru probleme de mould, damp și health hazards în locuință.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-green-50 rounded-xl">
              <FiCheck className="text-green-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Apeluri Locuințe Consiliu</h3>
                <p className="text-gray-700">Suport pentru apeluri împotriva deciziilor consiliului local privind housing applications sau bidding.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-green-50 rounded-xl">
              <FiCheck className="text-green-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Acorduri Restanțe Chirie</h3>
                <p className="text-gray-700">Negociem payment plans și te ajutăm să eviți eviction-ul când ai rent arrears.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Prețuri</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-xl mb-2">Scrisoare Dispută Depozit</h3>
              <div className="text-3xl font-bold text-primary mb-4">£100-150</div>
              <p className="text-gray-600">Contestare profesională pentru deposit retention.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-xl mb-2">Consultanță Housing</h3>
              <div className="text-3xl font-bold text-primary mb-4">£100-170/oră</div>
              <p className="text-gray-600">Consiliere pentru probleme complexe de housing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Probleme cu proprietarul sau agenția?</h2>
          <p className="text-xl mb-8 text-green-100">Te ajutăm să-ți cunoști și să-ți aperi drepturile ca chiriași!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-bold transition-all">
              Contactează-ne
            </Link>
            <a href="tel:+441234567890" className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2">
              <FiPhone /> Sună Acum
            </a>
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
