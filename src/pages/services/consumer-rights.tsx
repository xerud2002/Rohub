import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { NextSeo } from 'next-seo'
import Layout from '../../components/Layout'
import { FiShield, FiCheck, FiPhone } from 'react-icons/fi'
import Link from 'next/link'

export default function ConsumerRights() {
  const { t } = useTranslation('common')

  return (
    <Layout>
      <NextSeo 
        title={`${t('services.consumerRights.title')} - RoHub`}
        description={t('services.consumerRights.summary')}
      />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl">
              <FiShield className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                {t('services.consumerRights.title')}
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            {t('services.consumerRights.summary')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ce Oferim</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
              <FiCheck className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Respingere Vehicul (30 zile & 6 luni)</h3>
                <p className="text-gray-700">
                  Te ajutăm să respingi un vehicul defect în primele 30 de zile sau după 6 luni, în conformitate cu drepturile tale de consumator în UK.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
              <FiCheck className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Redactare Scrisori Înainte de Acțiune</h3>
                <p className="text-gray-700">
                  Pregătim scrisori profesionale înainte de a iniția proceduri legale, maximizând șansele de rezolvare amiabilă.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
              <FiCheck className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Dispute Finanțare Vehicule</h3>
                <p className="text-gray-700">
                  Asistență în disputele cu companiile de finanțare - PCP, HP, leasing și alte contracte de credit auto.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
              <FiCheck className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Reclamații Garanție</h3>
                <p className="text-gray-700">
                  Contestăm refuzurile nejustificate de garanție și te ajutăm să-ți obții drepturile pentru reparații acoperite.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
              <FiCheck className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Vicii Ascunse / Declarații False</h3>
                <p className="text-gray-700">
                  Cazuri de defecte ascunse la cumpărarea de vehicule sau bunuri, inclusiv misrepresentation și fraudă.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
              <FiCheck className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Money Claim Online (MCOL)</h3>
                <p className="text-gray-700">
                  Îndrumare completă pentru depunerea claim-urilor online prin portalul gov.uk - recuperare datorii și dispute.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
              <FiCheck className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Scrisori Dispută Datorii</h3>
                <p className="text-gray-700">
                  Redactăm scrisori de contestare pentru datorii nejustificate sau greșit calculate.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
              <FiCheck className="text-blue-600 text-2xl mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Escaladare Reclamații (Ombudsman)</h3>
                <p className="text-gray-700">
                  Te pregătim pentru escaladarea cazurilor către Financial Ombudsman, Ombudsman Services sau alte organisme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Prețuri</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-xl mb-2">Scrisoare Respingere Vehicul</h3>
              <div className="text-3xl font-bold text-primary mb-4">£150</div>
              <p className="text-gray-600">Scrisoare profesională pentru respingerea vehiculului conform Consumer Rights Act 2015.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-xl mb-2">Scrisoare Înainte de Acțiune</h3>
              <div className="text-3xl font-bold text-primary mb-4">£100-170</div>
              <p className="text-gray-600">Letter before action pentru dispute civile și de consum.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-xl mb-2">Consultanță Juridică</h3>
              <div className="text-3xl font-bold text-primary mb-4">£100-170/oră</div>
              <p className="text-gray-600">Consiliere pentru cazuri complexe de drept consumator.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-xl mb-2">Asistență MCOL</h3>
              <div className="text-3xl font-bold text-primary mb-4">£100+</div>
              <p className="text-gray-600">Ghidare completă pentru Money Claim Online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ai o problemă de consum?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contactează-ne astăzi și te ajutăm să-ți obții drepturile!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold transition-all"
            >
              Solicită Consultație Gratuită
            </Link>
            <a
              href="tel:+441234567890"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
            >
              <FiPhone />
              Sună Acum
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
