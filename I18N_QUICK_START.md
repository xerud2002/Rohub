# 🌍 Quick Start: Schimbarea Limbii (RO ↔ EN)

## Pentru Utilizatori

### Cum schimb limba site-ului?
1. **Desktop**: Click pe dropdown-ul "Limba" din navbar (sus, dreapta)
2. **Mobile**: Deschide meniul hamburger → selectează limba
3. Alege "Română" sau "English"
4. Site-ul se va reîncărca în limba selectată

### URL-uri
- **Română** (default): `https://rohub.co.uk` sau `https://rohub.co.uk/ro`
- **Engleză**: `https://rohub.co.uk/en`

---

## Pentru Dezvoltatori

### Testare Local
```powershell
npm run dev
```

- **Română**: http://localhost:3000
- **Engleză**: http://localhost:3000/en

### Adăugare Text Nou

#### 1. Adaugă în fișierele JSON

**`public/locales/ro/common.json`**:
```json
{
  "sectionNouă": {
    "titlu": "Textul în română",
    "descriere": "Descrierea în română"
  }
}
```

**`public/locales/en/common.json`**:
```json
{
  "sectionNouă": {
    "titlu": "Text in English",
    "descriere": "Description in English"
  }
}
```

#### 2. Folosește în componentă

```tsx
import { useTranslation } from 'next-i18next'

export default function ComponentaNouă() {
  const { t } = useTranslation('common')
  
  return (
    <div>
      <h2>{t('sectionNouă.titlu')}</h2>
      <p>{t('sectionNouă.descriere')}</p>
    </div>
  )
}
```

#### 3. Adaugă getStaticProps (dacă e pagină nouă)

```tsx
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
```

### Verificare Erori

**Eroare: "Text nu se traduce"**
```powershell
# Verifică că pagina are getStaticProps
# Rebuild project:
npm run build
```

**Eroare: "useTranslation hook not working"**
- Verifică că `_app.tsx` are `appWithTranslation`
- Verifică că pagina are `serverSideTranslations` în `getStaticProps`

### Comenzi Utile

```powershell
# Build și verificare
npm run build

# Start server de producție
npm run build
npm run start

# Check TypeScript errors
npm run build
```

---

## Structura Traducerilor

Toate traducerile sunt în:
```
public/locales/
├── ro/
│   └── common.json  (Română - LIMBA PRINCIPALĂ)
└── en/
    └── common.json  (English - limba secundară)
```

**Secțiuni disponibile:**
- `nav.*` — Navigare (Services, About, Pricing, etc.)
- `hero.*` — Secțiunea hero homepage
- `services.*` — Servicii
- `about.*` — Despre noi
- `contact.*` — Formular contact
- `footer.*` — Footer
- `testimonials.*` — Testimoniale
- `languageSwitcher.*` — Dropdown limba

---

## Exemple Rapide

### Exemplu 1: Titlu simplu
```tsx
const { t } = useTranslation('common')
<h1>{t('hero.title')}</h1>
```

### Exemplu 2: Text cu variabile
JSON:
```json
{
  "welcome": "Bun venit, {{name}}!"
}
```

Component:
```tsx
<p>{t('welcome', { name: 'Ion' })}</p>
// Output: "Bun venit, Ion!"
```

### Exemplu 3: Pluralizare
JSON:
```json
{
  "items": "{{count}} articol",
  "items_plural": "{{count}} articole"
}
```

Component:
```tsx
<p>{t('items', { count: 5 })}</p>
// Output: "5 articole"
```

---

## Checklist pentru Pagină Nouă

- [ ] Creează componenta/pagina
- [ ] Import `useTranslation` hook
- [ ] Adaugă traduceri în `ro/common.json` și `en/common.json`
- [ ] Folosește `{t('key')}` pentru tot textul
- [ ] Adaugă `getStaticProps` cu `serverSideTranslations`
- [ ] Testează în ambele limbi (`/` și `/en`)
- [ ] Verifică build: `npm run build`

---

## Link-uri Utile

- **Documentație completă:** [I18N_IMPLEMENTATION.md](./I18N_IMPLEMENTATION.md)
- **Next-i18next docs:** https://github.com/i18next/next-i18next
- **i18next docs:** https://www.i18next.com/

---

**Ultima actualizare:** Noiembrie 2025
