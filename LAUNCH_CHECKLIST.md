# ✅ RoHub Launch Checklist

Quick reference for launching the RoHub website.

---

## 🚀 Phase 1: Setup & Deploy (Day 1-2)

### Environment Configuration
- [ ] Copy `.env.local.example` to `.env.local`
- [ ] Create EmailJS account at [emailjs.com](https://www.emailjs.com/)
- [ ] Create email service in EmailJS dashboard
- [ ] Create email template in EmailJS dashboard
- [ ] Copy service ID, template ID, and public key to `.env.local`
- [ ] Test contact form locally (`npm run dev`)

### Content & Images
- [ ] Add hero image to `public/images/hero-office.jpg`
- [ ] Add team photo to `public/images/team-photo.jpg`
- [ ] Add partner logos to `public/images/partners/`
- [ ] Update phone number in `Footer.tsx` and `Navbar.tsx`
- [ ] Update email address in `Footer.tsx` and contact pages

### Deploy to Vercel
- [ ] Push code to GitHub repository
- [ ] Sign up for Vercel account
- [ ] Import GitHub repository in Vercel
- [ ] Add environment variables in Vercel dashboard:
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- [ ] Deploy site
- [ ] Test live contact form submission
- [ ] Configure custom domain `rohub.co.uk` in Vercel

---

## 📝 Phase 2: Content Population (Week 1)

### Homepage
- [ ] Copy hero text from `CONTENT_GUIDE.md` to `Hero.tsx`
- [ ] Update About section text in `AboutSection.tsx`
- [ ] Add all 9 services to `src/data/services.json`
- [ ] Update testimonials in `Testimonials.tsx` (or create `testimonials.json`)

### Service Pages
- [ ] Create `src/pages/services/[slug].tsx` template
- [ ] Create individual service pages:
  - [ ] `/services/consumer-rights`
  - [ ] `/services/housing`
  - [ ] `/services/court-support`
  - [ ] `/services/bailiff`
  - [ ] `/services/immigration`
  - [ ] `/services/hmrc-dwp`
  - [ ] `/services/compliance`
  - [ ] `/services/business`
  - [ ] `/services/documentation`

### Additional Pages
- [ ] Create `/about` page with team info
- [ ] Create `/pricing` page with rate tables
- [ ] Create `/faq` page with schema markup
- [ ] Update navigation in `Navbar.tsx` to include new pages
- [ ] Update sitemap in `Footer.tsx`

---

## 🎨 Phase 3: UX Enhancements (Week 2)

### Trust Signals
- [ ] Create `TrustBadges.tsx` component with partner logos
- [ ] Add "500+ clients helped" badge to hero
- [ ] Add "48-hour response guarantee" to hero
- [ ] Add review count/stars (if available)
- [ ] Add professional credentials to About page

### Conversion Elements
- [ ] Add "How It Works" 3-step section to homepage
- [ ] Create sticky mobile CTA button ("Free Consultation")
- [ ] Add click-to-call buttons (`tel:` links) on mobile
- [ ] Add WhatsApp contact button (if using WhatsApp)
- [ ] Create lead magnet landing page (downloadable checklist)

### Case Studies
- [ ] Write 3 short case studies (use templates in `CONTENT_GUIDE.md`)
- [ ] Create `/case-studies` page
- [ ] Add case study cards with outcomes

---

## 📊 Phase 4: Analytics & SEO (Week 3)

### Analytics Setup
- [ ] Create Google Analytics 4 property
- [ ] Add GA4 tracking code to `_app.tsx` or `_document.tsx`
- [ ] Set up event tracking for:
  - [ ] CTA clicks (Get Quote, View Services)
  - [ ] Form submissions
  - [ ] Phone clicks
  - [ ] Email clicks
  - [ ] Download clicks
- [ ] Add Microsoft Clarity or Hotjar for heatmaps
- [ ] Test tracking in GA4 Real-Time view

### SEO Implementation
- [ ] Add Organization schema to `_document.tsx`
- [ ] Add FAQPage schema to FAQ page
- [ ] Add LegalService schema to homepage
- [ ] Generate `sitemap.xml` (use next-sitemap package)
- [ ] Create `robots.txt` in `public/`
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Bing Webmaster Tools
- [ ] Add Open Graph images for social sharing

---

## ✨ Phase 5: Polish & Optimize (Week 4)

### Performance
- [ ] Run Lighthouse audit
  - [ ] Performance: 90+
  - [ ] Accessibility: 100
  - [ ] Best Practices: 100
  - [ ] SEO: 100
- [ ] Optimize images (use WebP format, proper sizes)
- [ ] Enable font-display: swap in `_document.tsx`
- [ ] Minimize JavaScript bundle size
- [ ] Test mobile page speed on 3G network

### Accessibility
- [ ] Test keyboard navigation (Tab through all elements)
- [ ] Test with screen reader (NVDA or VoiceOver)
- [ ] Check color contrast (use WebAIM tool)
- [ ] Add ARIA labels to icon-only buttons
- [ ] Ensure form labels are properly associated
- [ ] Test with browser accessibility tools

### Cross-Browser Testing
- [ ] Chrome (desktop + mobile)
- [ ] Firefox (desktop + mobile)
- [ ] Safari (desktop + iOS)
- [ ] Edge (desktop)
- [ ] Samsung Internet (Android)

---

## 🎯 Phase 6: Launch & Monitor (Week 5)

### Pre-Launch Checklist
- [ ] Final content proofread (spelling, grammar, accuracy)
- [ ] Test all internal links
- [ ] Test all external links
- [ ] Test contact form on production
- [ ] Test mobile responsiveness on real devices
- [ ] Verify EmailJS emails are delivered correctly
- [ ] Check DNS propagation for custom domain
- [ ] Verify SSL certificate is active

### Launch Day
- [ ] Switch live traffic to new site
- [ ] Monitor error logs in Vercel
- [ ] Check analytics for traffic
- [ ] Test contact form submissions
- [ ] Monitor email inbox for test submissions
- [ ] Share launch announcement on social media

### Post-Launch (Week 1)
- [ ] Monitor Google Analytics daily
- [ ] Check for 404 errors in Search Console
- [ ] Review user session recordings (Hotjar/Clarity)
- [ ] Collect feedback from team/clients
- [ ] Identify conversion bottlenecks
- [ ] Plan first A/B test (hero CTA wording)

---

## 📈 Ongoing Optimization

### Weekly Tasks
- [ ] Review analytics (traffic, conversions, bounce rate)
- [ ] Check form submissions and response times
- [ ] Monitor uptime (set up UptimeRobot or Vercel monitoring)
- [ ] Review heatmaps for user behavior insights

### Monthly Tasks
- [ ] Review SEO rankings for target keywords
- [ ] Update blog/resources with new content
- [ ] Refresh testimonials (add new ones)
- [ ] Analyze conversion funnel drop-offs
- [ ] Plan and run A/B tests
- [ ] Update case studies with new wins

### Quarterly Tasks
- [ ] Comprehensive SEO audit
- [ ] Performance audit (Lighthouse)
- [ ] Accessibility audit
- [ ] Content refresh (update outdated info)
- [ ] Competitor analysis
- [ ] Review and update pricing (if changed)

---

## 🛠️ Technical Maintenance

### Dependencies
- [ ] Update Next.js monthly (check release notes)
- [ ] Update React and other dependencies quarterly
- [ ] Run `npm audit` monthly for security issues
- [ ] Test updates in staging before production

### Backups
- [ ] GitHub repository (automatic with commits)
- [ ] Vercel automatic backups (included)
- [ ] Export analytics data quarterly

### Security
- [ ] Review environment variables (no secrets exposed)
- [ ] Check for security headers (Vercel includes by default)
- [ ] Monitor for spam form submissions
- [ ] Consider adding reCAPTCHA if spam becomes an issue

---

## 🎓 Resources & Support

### Documentation
- [ ] Read `README.md` for common tasks
- [ ] Review `CONTENT_GUIDE.md` before editing copy
- [ ] Check `UX_CONVERSION_RECOMMENDATIONS.md` for ideas
- [ ] Use `.github/copilot-instructions.md` for AI agent help

### External Help
- **Next.js Issues:** [GitHub Discussions](https://github.com/vercel/next.js/discussions)
- **Vercel Support:** [Vercel Docs](https://vercel.com/docs)
- **EmailJS Issues:** [EmailJS Support](https://www.emailjs.com/docs/)
- **Tailwind Help:** [Tailwind Discord](https://discord.gg/tailwindcss)

---

## 📞 Quick Reference

### Key Files to Edit
- **Content:** `CONTENT_GUIDE.md` → Component files
- **Services:** `src/data/services.json`
- **Colors:** `tailwind.config.js`
- **SEO:** `src/utils/seo.ts`
- **Navigation:** `src/components/Navbar.tsx`
- **Footer:** `src/components/Footer.tsx`

### Common Commands
```powershell
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Check for linting errors
```

### Contact Info to Update
1. Phone: `Footer.tsx` (line ~15)
2. Email: `Footer.tsx` (line ~16), `ContactForm.tsx` (error message)
3. Address: `Footer.tsx` (if adding physical address)
4. Social links: `Footer.tsx` (if adding social media)

---

## ✅ Success Criteria

### Week 1
- ✅ Site deployed and accessible at `rohub.co.uk`
- ✅ Contact form working and delivering emails
- ✅ All pages accessible and content populated
- ✅ Mobile responsive on all devices

### Month 1
- ✅ Google Analytics tracking active
- ✅ 100+ organic visitors
- ✅ 3-5 form submissions
- ✅ Lighthouse score 90+ on all metrics

### Month 3
- ✅ 500+ organic visitors/month
- ✅ 10+ keywords ranking in top 20
- ✅ 5% contact form conversion rate
- ✅ 3+ case studies published

---

**Last Updated:** November 28, 2025  
**Status:** Ready to launch 🚀
