# Implementare Multilingvistică (Română/Engleză)

## Prezentare Generală

Site-ul RoHub este acum complet multilingvistic, cu **română ca limbă principală** și engleză ca limbă secundară. Utilizatorii pot comuta între limbi folosind dropdown-ul din navbar.

## Configurare Tehnică

### Librării Instalate
- `next-i18next` - Framework i18n pentru Next.js
- `react-i18next` - React bindings pentru i18next
- `i18next` - Core i18n framework

### Fișiere de Configurare

#### `next-i18next.config.js`
```js
module.exports = {
  i18n: {
    defaultLocale: 'ro',      // Limba implicită: Română
    locales: ['ro', 'en'],    // Limbi disponibile
    localeDetection: false,   // Dezactivat pentru a forța limba default
  },
  localePath: './public/locales',
}
```

#### `next.config.js`
Configurația i18n este integrată din `next-i18next.config.js`:
```js
const { i18n } = require('./next-i18next.config')
module.exports = {
  i18n,
  // ... rest of config
}
```

## Structura Traducerilor

### Locație Fișiere
- **Română**: `public/locales/ro/common.json`
- **Engleză**: `public/locales/en/common.json`

### Structura JSON
Traducerile sunt organizate pe secțiuni:

```json
{
  "nav": {
    "services": "Servicii",
    "about": "Despre",
    "pricing": "Prețuri",
    "getQuote": "Solicită Ofertă"
  },
  "hero": {
    "title": "Consiliere juridică practică...",
    "subtitle": "...",
    "ctaPrimary": "Solicită Ofertă",
    "ctaSecondary": "Serviciile Noastre"
  },
  "services": { ... },
  "about": { ... },
  "contact": { ... },
  "footer": { ... },
  "testimonials": { ... },
  "languageSwitcher": {
    "label": "Limba",
    "ro": "Română",
    "en": "English"
  }
}
```

## Componente Actualizate

### 1. LanguageSwitcher (`src/components/LanguageSwitcher.tsx`)
Dropdown pentru schimbarea limbii cu următoarele caracteristici:
- Folosește `useRouter` pentru schimbarea locale-ului
- Iconă glob (FiGlobe) pentru UI intuitivă
- Afișare în română: "Limba: Română / English"

```tsx
const changeLanguage = (locale: string) => {
  router.push(router.pathname, router.asPath, { locale })
}
```

### 2. Navbar
- Integrează `LanguageSwitcher` atât în desktop cât și în mobile menu
- Toate link-urile traduse: `{t('nav.services')}`, etc.

### 3. Hero, Services, About, Contact, Footer
- Toate textele statice înlocuite cu `t('key.name')`
- Import `useTranslation('common')` hook
- Suport complet pentru ambele limbi

### 4. Pagini (_app, index, contact)
- `_app.tsx` wrapped cu `appWithTranslation()`
- Toate paginile au `getStaticProps` cu `serverSideTranslations`

Exemplu:
```tsx
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
```

## Cum Funcționează

### Flow-ul Utilizatorului
1. Utilizatorul vizitează `rohub.co.uk` → limba default: **română**
2. Click pe dropdown limba → opțiuni: Română / English
3. Selectare English → URL devine `rohub.co.uk/en`
4. Tot conținutul se schimbă în engleză
5. Selectare Română → URL revine la `rohub.co.uk` (sau `/ro`)

### Flow-ul Tehnic
1. Next.js detectează locale-ul din URL (`/en`) sau folosește default (`ro`)
2. `getStaticProps` încarcă fișierul de traduceri corespunzător
3. Hook-ul `useTranslation` furnizează funcția `t()`
4. Componentele folosesc `t('key')` pentru a afișa textul tradus
5. `LanguageSwitcher` schimbă locale-ul via `router.push(..., { locale })`

## Testare

### Verificări Efectuate
✅ Build reușit (`npm run build`) - 0 erori
✅ Dev server pornit (`npm run dev`) pe localhost:3000
✅ Toate componentele folosesc hook-ul `useTranslation`
✅ Toate paginile au `serverSideTranslations` în `getStaticProps`
✅ `_app.tsx` wrapped cu `appWithTranslation`

### Testare Manuală
1. Accesează `http://localhost:3000` → verifică textul în română
2. Click pe dropdown limba în navbar
3. Selectează "English"
4. URL devine `http://localhost:3000/en`
5. Verifică tot textul este în engleză
6. Navighează între pagini (Contact, Home) → limba rămâne English
7. Selectează "Română" din dropdown
8. Verifică revenirea la limba română

## Adăugare Traduceri Noi

### Pas 1: Adaugă cheie în JSON
**`public/locales/ro/common.json`**:
```json
{
  "newSection": {
    "title": "Titlu Nou în Română"
  }
}
```

**`public/locales/en/common.json`**:
```json
{
  "newSection": {
    "title": "New Title in English"
  }
}
```

### Pas 2: Folosește în componentă
```tsx
import { useTranslation } from 'next-i18next'

export default function NewComponent() {
  const { t } = useTranslation('common')
  return <h2>{t('newSection.title')}</h2>
}
```

### Pas 3: Asigură-te că pagina are `getStaticProps`
```tsx
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
```

## Debugging

### Erori Comune

**1. "useTranslation hook is not working"**
- **Cauză**: Componenta nu primește props de traducere
- **Soluție**: Verifică că pagina părinte are `getStaticProps` cu `serverSideTranslations`

**2. "Text nu se schimbă când comut limba"**
- **Cauză**: Text hardcodat în loc de `t('key')`
- **Soluție**: Înlocuiește tot textul static cu `{t('section.key')}`

**3. "Build error: locale is undefined"**
- **Cauză**: `getStaticProps` lipsește sau nu primește `locale`
- **Soluție**: Adaugă `getStaticProps` cu destructuring `{ locale }`

**4. "Translation key not found"**
- **Cauză**: Cheie lipsă din JSON sau typo
- **Soluție**: Verifică că cheia există în ambele fișiere (`ro/common.json` și `en/common.json`)

### Log-uri Utile
```tsx
// Vezi locale-ul curent
const { i18n } = useTranslation()
console.log('Current locale:', i18n.language)

// Vezi toate traducerile încărcate
console.log('Translations:', i18n.store.data)
```

## Best Practices

### 1. Consistență Chei
- Folosește aceeași structură în ambele fișiere JSON
- Păstrează ordinea cheilor identică pentru ușurință în editare

### 2. Namespace-uri
- Grupează traducerile logic: `nav.*`, `hero.*`, `contact.*`
- Evită chei prea lungi: `contact.form.name` > `contactFormInputNameLabel`

### 3. Pluralizare și Formatare
```json
{
  "items": "{{count}} articole",
  "items_plural": "{{count}} articole"
}
```

Folosire:
```tsx
t('items', { count: 5 }) // "5 articole"
```

### 4. Variabile Dinamice
```json
{
  "welcome": "Bun venit, {{name}}!"
}
```

Folosire:
```tsx
t('welcome', { name: 'Ion' }) // "Bun venit, Ion!"
```

## Pagini Viitoare

Pentru pagini noi (ex: `services/[slug].tsx`, `pricing.tsx`, `faq.tsx`), urmează pattern-ul:

```tsx
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from '../components/Layout'

export default function NewPage() {
  const { t } = useTranslation('common')
  
  return (
    <Layout>
      <h1>{t('newPage.title')}</h1>
      {/* ... */}
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
```

## SEO și Meta Tags

Pentru meta tags multilingvistice, actualizează `src/utils/seo.ts`:

```tsx
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

export function useSEO() {
  const { locale } = useRouter()
  const { t } = useTranslation('common')
  
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    canonical: `https://rohub.co.uk${locale === 'en' ? '/en' : ''}`,
    languageAlternates: [
      { hrefLang: 'ro', href: 'https://rohub.co.uk' },
      { hrefLang: 'en', href: 'https://rohub.co.uk/en' },
      { hrefLang: 'x-default', href: 'https://rohub.co.uk' }
    ]
  }
}
```

## Deployment pe Vercel

Vercel suportă automat Next.js i18n. Asigură-te că:
1. `next.config.js` conține `i18n` config
2. Folder-ul `public/locales/` este commited în Git
3. Environment variables pentru EmailJS sunt setate în Vercel dashboard

După deploy:
- `rohub.co.uk` → română (default)
- `rohub.co.uk/en` → engleză
- URL-urile vor include automat prefix-ul `/en` când e cazul

## Status Implementare

### ✅ Complet
- [x] Instalare librării i18n
- [x] Configurare `next-i18next.config.js`
- [x] Fișiere traduceri RO + EN
- [x] Componentă LanguageSwitcher
- [x] Update toate componentele cu `useTranslation`
- [x] Update _app.tsx cu `appWithTranslation`
- [x] Update pagini cu `getStaticProps`
- [x] Build verificat (0 erori)
- [x] Dev server funcțional

### 🔄 Opțional / Viitor
- [ ] Adaugă traduceri pentru pagini noi (Services, Pricing, FAQ, About)
- [ ] Implementează meta tags multilingvistice
- [ ] Adaugă sitemap XML cu hreflang
- [ ] Configurare Google Analytics tracking per limbă
- [ ] Testimoniale traduse (momentan hardcoded în EN)

## Întrebări Frecvente

**Q: Cum schimb limba default?**  
A: Editează `defaultLocale` în `next-i18next.config.js` (acum este `'ro'`)

**Q: Pot adăuga o a treia limbă (ex: franceză)?**  
A: Da! Adaugă `'fr'` în array-ul `locales` și creează `public/locales/fr/common.json`

**Q: Traducerile se salvează între sesiuni?**  
A: Da, limba aleasă rămâne în URL (`/en`). Pentru persistență în localStorage, adaugă cod custom în LanguageSwitcher

**Q: Cum testez traducerile fără server?**  
A: Build static: `npm run build && npm run start` apoi accesează `localhost:3000` și `localhost:3000/en`

---

**Ultima actualizare:** Noiembrie 2025  
**Autor:** RoHub Development Team
