import { useTranslation } from 'next-i18next'

export default function AboutSection() {
  const { t } = useTranslation('common')

  return (
    <section className="py-12 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">{t('about.title')}</h2>
          <p className="mt-3 text-gray-300">{t('about.description')}</p>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>{t('about.point1')}</li>
            <li>{t('about.point2')}</li>
            <li>{t('about.point3')}</li>
          </ul>
        </div>
        <div className="rounded-lg overflow-hidden bg-gradient-to-br from-primary-900/20 to-primary-800/10 border border-gray-700 flex items-center justify-center" style={{minHeight: '320px'}}>
          <div className="text-center text-gray-500">
            <p className="text-sm">Team Photo Placeholder</p>
            <p className="text-xs mt-1">Add team-photo.jpg to public/images/</p>
          </div>
          {/* Uncomment when image is ready:
          <Image src="/images/team-photo.jpg" alt="RoHub team" width={800} height={520} objectFit="cover"/>
          */}
        </div>
      </div>
    </section>
  )
}
