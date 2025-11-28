# Copilot / AI Agent Instructions — RoHub Website

## Project Overview
RoHub is a Next.js + TypeScript website redesign for rohub.co.uk — a UK-based legal advice service offering practical support for consumer law, housing, court support, and business compliance.

**Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS, EmailJS  
**Deployment:** Vercel (recommended)  
**Key Features:** Mobile-first responsive design, SEO-optimized, EmailJS contact forms, Swiper testimonials, Framer Motion animations

---

## 1) First Things to Read (in order)

1. **`README.md`** — Quick start and project overview
2. **`package.json`** — Dependencies and npm scripts
3. **`CONTENT_GUIDE.md`** — Complete optimized website copy, SEO metadata, and alt text examples
4. **`UX_CONVERSION_RECOMMENDATIONS.md`** — UX improvements, conversion tactics, analytics setup, and implementation roadmap
5. **`src/pages/index.tsx`** — Homepage component composition
6. **`src/components/Layout.tsx`** — Page wrapper with Navbar and Footer
7. **`tailwind.config.js`** — Brand colors and Tailwind setup
8. **`.env.local.example`** — Required environment variables for EmailJS

---

## 2) Architecture & Data Flow

**Architecture:** Static site generation (SSG) with Next.js — no backend database or API routes currently.

**Major Components:**
- **Pages** (`src/pages/`): Route-based page components
  - `index.tsx` — Homepage (Hero, Services, About, Contact, Testimonials)
  - `contact.tsx` — Standalone contact page
  - Future: `services/[slug].tsx`, `pricing.tsx`, `faq.tsx`, `about.tsx`
- **Components** (`src/components/`): Reusable UI components
  - `Layout.tsx` — Wraps all pages with Navbar + Footer
  - `Navbar.tsx` — Sticky header with mobile hamburger menu
  - `Hero.tsx` — Homepage hero section with H1, CTAs, and image
  - `Services.tsx` — Service cards mapped from `src/data/services.json`
  - `ContactForm.tsx` — EmailJS-powered contact form
  - `Footer.tsx` — Site footer with links and contact info
  - `Testimonials.tsx` — Swiper-based testimonial slider
- **Data** (`src/data/`): JSON files for services, testimonials, team info
- **Styles** (`src/styles/`): Global CSS with Tailwind directives
- **Utils** (`src/utils/`): Helper functions (e.g., `seo.ts` for Next-SEO defaults)

**Data Flow:**
1. User visits page → Next.js renders static HTML
2. Contact form submission → EmailJS API (client-side)
3. No server-side state or database — all content is static or fetched client-side

**External Integrations:**
- **EmailJS** — Contact form email delivery (requires API keys in `.env.local`)
- **Cloudinary** (optional) — Image optimization CDN
- **Google Analytics / Plausible** (to be added) — Analytics tracking

---

## 3) Developer Workflows

### Install Dependencies
```powershell
npm install
```

### Run Development Server
```powershell
npm run dev
```
Opens at `http://localhost:3000`

### Build for Production
```powershell
npm run build
```

### Start Production Server
```powershell
npm run start
```

### Lint Code
```powershell
npm run lint
```

### Environment Setup
1. Copy `.env.local.example` to `.env.local`
2. Add EmailJS credentials:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
3. (Optional) Add Google Analytics ID: `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`

---

## 4) Project-Specific Conventions

### File Naming
- **Components:** PascalCase with `.tsx` extension (e.g., `ServiceCard.tsx`)
- **Pages:** lowercase with `.tsx` extension (e.g., `index.tsx`, `contact.tsx`)
- **Data files:** lowercase with `.json` extension (e.g., `services.json`)

### Component Structure
- Functional components with TypeScript types
- Props typed explicitly (use `type Props = { ... }`)
- Export default at bottom of file

### Styling
- **Tailwind utility classes** in JSX (no CSS modules or styled-components)
- **Custom colors:** `primary` (teal: `#0f766e`), `primary-dark` (`#0b5b53`)
- **Responsive:** Mobile-first breakpoints (`md:`, `lg:`)
- **Global styles:** `src/styles/globals.css` (Tailwind directives + base resets)

### Content Management
- **Static content:** Edit directly in components or pull from `CONTENT_GUIDE.md`
- **Services data:** Update `src/data/services.json` to add/edit services
- **Testimonials:** Update `src/components/Testimonials.tsx` inline array (consider moving to `src/data/testimonials.json`)

### SEO
- **Next-SEO:** Default config in `src/utils/seo.ts`, applied in `_app.tsx`
- **Page-specific meta:** Use `<NextSeo />` component in individual pages
- **Structured data:** Add JSON-LD scripts in `_document.tsx` or page-level

---

## 5) Integration Points & Secrets

### EmailJS
- **Service ID, Template ID, Public Key** required in `.env.local`
- **Usage:** `src/components/ContactForm.tsx` uses `@emailjs/browser`
- **Setup:** Create account at emailjs.com, create service + template, copy IDs

### Image Domains (next.config.js)
- Configured domains: `rohub.co.uk`, `s.w.org`, `res.cloudinary.com`
- Add new domains here if using external image CDNs

### Analytics (Not Yet Implemented)
- **Recommended:** Google Analytics 4 or Plausible
- **Setup:** Add tracking code in `_app.tsx` or `_document.tsx`
- **Event tracking:** See `UX_CONVERSION_RECOMMENDATIONS.md` for event list

### Deployment (Vercel)
- **Auto-deploy:** Connect GitHub repo to Vercel
- **Environment variables:** Add EmailJS keys in Vercel dashboard
- **Custom domain:** Configure `rohub.co.uk` in Vercel domain settings

---

## 6) Guidance for Edits

### When Adding New Components
1. Create `.tsx` file in `src/components/`
2. Type props explicitly with TypeScript
3. Use Tailwind classes for styling
4. Import and use in page components
5. Consider extracting data to `src/data/*.json` if component is data-driven

### When Adding New Pages
1. Create `.tsx` file in `src/pages/`
2. Wrap content in `<Layout>` component
3. Add page-specific `<NextSeo />` for meta tags
4. Update `Navbar.tsx` links if page should be in navigation
5. Update `Footer.tsx` sitemap links

### When Editing Copy
- **Source of truth:** `CONTENT_GUIDE.md` contains all optimized copy
- Update components to match CONTENT_GUIDE
- Ensure H1 hierarchy (one H1 per page, H2 for sections, H3 for subsections)
- Include alt text for all images (examples in CONTENT_GUIDE)

### When Adding Features
- **Check roadmap:** `UX_CONVERSION_RECOMMENDATIONS.md` has prioritized features
- Prefer small, incremental changes
- Test mobile responsiveness (use browser DevTools mobile emulation)
- Test EmailJS integration in development before deploying

### Accessibility
- Use semantic HTML (`<nav>`, `<main>`, `<footer>`, `<article>`)
- Add `aria-label` to icon-only buttons
- Ensure keyboard navigation works (test with Tab key)
- Maintain 4.5:1 color contrast for text

---

## 7) Common Tasks & How-Tos

### Add a New Service
1. Edit `src/data/services.json` and add entry:
   ```json
   {
     "id": "new-service",
     "title": "Service Name",
     "summary": "Short description",
     "link": "/services/new-service"
   }
   ```
2. Create service detail page: `src/pages/services/new-service.tsx`
3. Copy content from `CONTENT_GUIDE.md` or write new content

### Update Contact Form
- Edit `src/components/ContactForm.tsx`
- EmailJS field names: `user_name`, `user_email`, `message`
- Test form submission in dev environment
- Check EmailJS dashboard for delivery confirmation

### Add Testimonial
- Edit `src/components/Testimonials.tsx`
- Add entry to `testimonials` array
- Consider moving to `src/data/testimonials.json` for easier management

### Add Trust Badges / Partner Logos
1. Place logo images in `public/images/partners/`
2. Create `src/components/TrustBadges.tsx` component
3. Use `next/image` with logo paths
4. Add component to homepage (`src/pages/index.tsx`)

### Implement FAQ Page
1. Create `src/pages/faq.tsx`
2. Add FAQ data to `src/data/faq.json`
3. Add JSON-LD schema for FAQPage (see `UX_CONVERSION_RECOMMENDATIONS.md`)
4. Add link in Footer and Navbar

---

## 8) Known Issues & TODOs

### Current Limitations
- No blog/resources section (planned)
- No service detail pages beyond homepage cards (planned)
- No analytics tracking configured (needs setup)
- Testimonials hardcoded in component (should move to JSON)
- Missing placeholder images (need to add actual photos)

### Priority TODOs (from UX_CONVERSION_RECOMMENDATIONS.md)
1. Add trust signals (partner logos, review count)
2. Implement sticky mobile CTA
3. Create FAQ page with schema markup
4. Add lead magnet (downloadable checklist)
5. Set up Google Analytics or Plausible
6. Create 3 case study pages
7. Add "How It Works" section to homepage
8. Implement Calendly booking widget
9. Add click-to-call buttons
10. Run Lighthouse audit and optimize

---

## 9) Testing Checklist

Before deploying changes:
- [ ] Run `npm run build` successfully
- [ ] Test on mobile viewport (Chrome DevTools)
- [ ] Test contact form submission (check EmailJS inbox)
- [ ] Check all navigation links work
- [ ] Verify images load (check console for errors)
- [ ] Test keyboard navigation (Tab through interactive elements)
- [ ] Check color contrast with WebAIM tool
- [ ] Validate HTML (W3C validator)
- [ ] Run Lighthouse audit (target 90+ scores)

---

## 10) Questions for Maintainers

When unclear on implementation:
- **Content:** Refer to `CONTENT_GUIDE.md` for approved copy
- **UX decisions:** Check `UX_CONVERSION_RECOMMENDATIONS.md` for rationale
- **Design choices:** Follow existing Tailwind classes and component patterns
- **Business logic:** Contact stakeholder for pricing, service descriptions, legal disclaimers
- **Images:** Request high-res photos of team, office, or use placeholder service (Unsplash)

---

## Quick Reference

**Project Language:** TypeScript + React (Next.js)  
**Build Command:** `npm run build`  
**Dev Command:** `npm run dev`  
**Test Command:** (Not yet configured — add tests as needed)  
**Main Entrypoint:** `src/pages/index.tsx` (homepage)  
**Layout Wrapper:** `src/components/Layout.tsx`  
**Key Config Files:** `next.config.js`, `tailwind.config.js`, `.env.local`

---

**Last Updated:** November 2025  
**Maintained By:** RoHub Development Team
