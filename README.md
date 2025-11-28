# RoHub — Next.js Website Redesign

Modern, mobile-first, **bilingual** website for rohub.co.uk — a UK-based legal advice service.

**Stack:** Next.js 14 · React 18 · TypeScript · Tailwind CSS · EmailJS · Next-SEO · next-i18next  
**Languages:** 🇷🇴 Română (default) · 🇬🇧 English  
**Status:** ✅ Scaffolded & ready for development

---

## Quick Start

### 1. Install Dependencies
```powershell
npm install
```

### 2. Environment Setup
Copy `.env.local.example` to `.env.local` and add your EmailJS credentials:
```powershell
cp .env.local.example .env.local
```

Required variables:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID` — Your EmailJS service ID
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` — Your EmailJS template ID  
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` — Your EmailJS public key

Get these from [emailjs.com](https://www.emailjs.com/) after creating an account.

### 3. Run Development Server
```powershell
npm run dev
```
Opens at [http://localhost:3000](http://localhost:3000)

**Language URLs:**
- Romanian (default): `http://localhost:3000`
- English: `http://localhost:3000/en`

### 4. Build for Production
```powershell
npm run build
npm run start
```

---

## 🌍 Multilingual Support (i18n)

The site is fully internationalized with **Romanian as the primary language** and English as secondary.

### How It Works
- Default language: **Română** (Romanian)
- Available languages: Română, English
- Language switcher in navbar (both desktop and mobile)
- URL-based locale: `/en` for English, `/` or `/ro` for Romanian
- All content translated via `public/locales/ro/common.json` and `public/locales/en/common.json`

### Documentation
See **[I18N_IMPLEMENTATION.md](I18N_IMPLEMENTATION.md)** for:
- Complete i18n setup guide
- How to add new translations
- Debugging tips
- Best practices

### Quick Translation Example
```tsx
import { useTranslation } from 'next-i18next'

export default function MyComponent() {
  const { t } = useTranslation('common')
  return <h1>{t('hero.title')}</h1>
}
```

---

## Project Structure

```
C:\Users\cipri\Desktop\ROHUB\
├── .github/
│   └── copilot-instructions.md    # AI agent guidance
├── public/
│   ├── images/                    # Static images (add your photos here)
│   └── locales/                   # 🌍 i18n translations
│       ├── ro/
│       │   └── common.json        # Romanian translations (primary)
│       └── en/
│           └── common.json        # English translations
├── src/
│   ├── components/                # React components
│   │   ├── Layout.tsx            # Page wrapper with Navbar + Footer
│   │   ├── Navbar.tsx            # Sticky header with mobile menu + 🌍 language switcher
│   │   ├── Hero.tsx              # Homepage hero section
│   │   ├── Services.tsx          # Service cards grid
│   │   ├── ServiceCard.tsx       # Individual service card
│   │   ├── AboutSection.tsx      # About section with image
│   │   ├── ContactForm.tsx       # EmailJS contact form
│   │   ├── Testimonials.tsx      # Swiper testimonial slider
│   │   ├── LanguageSwitcher.tsx  # 🌍 Language dropdown (RO/EN)
│   │   └── Footer.tsx            # Site footer with links
│   ├── data/
│   │   └── services.json         # Service data (edit to add services)
│   ├── pages/
│   │   ├── _app.tsx              # App wrapper with SEO defaults + 🌍 i18n
│   │   ├── index.tsx             # Homepage
│   │   └── contact.tsx           # Contact page
│   ├── styles/
│   │   └── globals.css           # Tailwind imports + global styles
│   └── utils/
│       └── seo.ts                # Next-SEO default configuration
├── CONTENT_GUIDE.md              # Optimized website copy & SEO text
├── UX_CONVERSION_RECOMMENDATIONS.md  # UX improvements & roadmap
├── I18N_IMPLEMENTATION.md        # 🌍 i18n setup & translation guide
├── next.config.js                # Next.js config (image domains + i18n)
├── next-i18next.config.js        # 🌍 i18n configuration
├── tailwind.config.js            # Tailwind config (brand colors)
└── package.json                  # Dependencies & scripts
```

---

## Key Documents

📄 **[CONTENT_GUIDE.md](./CONTENT_GUIDE.md)**  
Complete optimized website copy including:
- Homepage hero, services, about, CTAs
- SEO metadata (title, description, keywords)
- Image alt text examples
- Testimonial templates
- FAQ content

📄 **[UX_CONVERSION_RECOMMENDATIONS.md](./UX_CONVERSION_RECOMMENDATIONS.md)**  
UX improvements and conversion tactics:
- Trust signals (partner logos, reviews)
- Lead magnets (downloadable checklists)
- Analytics setup (GA4, Hotjar)
- Mobile optimizations
- Implementation roadmap (5-week plan)

📄 **[I18N_IMPLEMENTATION.md](./I18N_IMPLEMENTATION.md)** 🌍  
Complete multilingual implementation guide:
- Romanian + English setup
- Translation structure and best practices
- How to add new languages
- Debugging and testing
- SEO for multilingual sites

📄 **[.github/copilot-instructions.md](./.github/copilot-instructions.md)**  
AI agent guidance for working with this codebase.

---

## Next Steps

### Phase 1: Content Population (You are here)
- [ ] Add real images to `public/images/`
- [ ] Copy optimized text from `CONTENT_GUIDE.md` into components
- [ ] Update `src/data/services.json` with all 9 services
- [ ] Get EmailJS credentials and add to `.env.local`
- [ ] Test contact form submission

### Phase 2: Additional Pages
- [ ] Create `/services/[slug].tsx` for service detail pages
- [ ] Create `/pricing.tsx` page
- [ ] Create `/faq.tsx` with schema markup
- [ ] Create `/about.tsx` page

### Phase 3: Conversion Features
- [ ] Add partner logos / trust badges
- [ ] Implement "How It Works" section
- [ ] Add sticky mobile CTA button
- [ ] Create 2-3 case study pages
- [ ] Add lead magnet landing pages

### Phase 4: Analytics & Launch
- [ ] Set up Google Analytics or Plausible
- [ ] Add event tracking on CTAs
- [ ] Run Lighthouse audit (target 90+)
- [ ] Deploy to Vercel
- [ ] Configure custom domain

---

## Common Tasks

### Add a New Service
1. Edit `src/data/services.json`:
   ```json
   {
     "id": "new-service",
     "title": "Service Name",
     "summary": "Short description",
     "link": "/services/new-service"
   }
   ```
2. Create detail page: `src/pages/services/new-service.tsx`
3. Copy content from `CONTENT_GUIDE.md`

### Update Contact Form Fields
Edit `src/components/ContactForm.tsx` — EmailJS expects these field names:
- `user_name`
- `user_email`
- `message`

### Change Brand Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#0f766e',        // Teal
  'primary-dark': '#0b5b53'  // Darker teal
}
```

### Add a New Page
1. Create file in `src/pages/` (e.g., `pricing.tsx`)
2. Wrap content in `<Layout>` component
3. Add `<NextSeo />` for meta tags
4. Update `Navbar.tsx` and `Footer.tsx` links

---

## Deployment (Vercel)

### One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/rohub)

### Manual Deploy
1. Push code to GitHub
2. Import project in [Vercel dashboard](https://vercel.com/new)
3. Add environment variables (EmailJS keys)
4. Deploy!

**Custom Domain Setup:**
1. Go to Vercel project settings → Domains
2. Add `rohub.co.uk` and `www.rohub.co.uk`
3. Update DNS records as instructed

---

## Tech Stack Details

- **Framework:** [Next.js 14](https://nextjs.org/) — React framework with SSG
- **Language:** [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- **Forms:** [EmailJS](https://www.emailjs.com/) — Client-side email service
- **SEO:** [Next-SEO](https://github.com/garmeeh/next-seo) — Meta tag management
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) — Icon library
- **Slider:** [Swiper](https://swiperjs.com/) — Testimonial carousel
- **Animation:** [Framer Motion](https://www.framer.com/motion/) — React animations (optional)

---

## Support & Resources

- **EmailJS Docs:** https://www.emailjs.com/docs/
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Deployment Guide:** https://vercel.com/docs

---

## License

© 2025 RoHub. All rights reserved.

---

**Built with ❤️ for RoHub**
