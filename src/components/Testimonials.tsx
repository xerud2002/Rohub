import { Swiper, SwiperSlide } from 'swiper/react'
import { useTranslation } from 'next-i18next'
import 'swiper/css'

const testimonials = [
  { id: 1, quote: 'Practical and clear advice — helped me through a difficult dispute.', author: 'A. Client' },
  { id: 2, quote: 'Professional support in court prep and witness statements.', author: 'B. Client' }
]

export default function Testimonials() {
  const { t } = useTranslation('common')

  return (
    <div>
      <h3 className="text-xl font-semibold">{t('testimonials.title')}</h3>
      <div className="mt-4">
        <Swiper spaceBetween={12} slidesPerView={1}>
          {testimonials.map(t => (
            <SwiperSlide key={t.id}>
              <blockquote className="p-4 border rounded bg-white">"
                {t.quote}
                "
                <footer className="mt-2 text-sm text-gray-600">— {t.author}</footer>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
