# ZEE Sol Tech — Premium Software House Website

Production-ready Next.js website for ZEE Sol Tech (zeesoltech.com) — a software house offering branding, websites, custom software, CRMs, dashboards, UI/UX, mobile apps, and SaaS.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide Icons

## Configure your business

Edit these files before launch:

| File | Purpose |
|------|---------|
| `src/config/site.ts` | Company name, contact, WhatsApp, social, stats |
| `src/config/packages.ts` | All package features + starting prices (`[PRICE]`) |
| `src/config/services.ts` | Service catalog |
| `src/config/portfolio.ts` | Case studies |
| `src/config/testimonials.ts` | Testimonials |
| `src/config/faq.ts` | FAQ content |
| `src/config/seo.ts` | SEO helpers |
| `src/config/navigation.ts` | Nav, footer, process, tech stack, why-us |

Set `contact.whatsapp` in `site.ts` to enable the floating WhatsApp button.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Notes

- Pricing uses **Starting From [PRICE]** placeholders — no invented exact prices.
- Portfolio and testimonials are clearly marked placeholders.
- Contact form is front-end ready (validation + states); wire an API route when needed.
- Legal pages are placeholders — replace with counsel-reviewed copy before production.
