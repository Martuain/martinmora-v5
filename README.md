# Martin Mora Website v5
# AIM: Independent Advisor for Product, Innovation, Payments & Transformation (Product & Innovation Advisory, Payments & Fintech Strategy, Transformation Guidance, Fractional Leadership), while maintaining a premium and strategic profile.

Production-ready Next.js website — complete rebuild based on the ChatGPT-designed proposal.

## Stack

- **Next.js 14** App Router
- **Tailwind CSS** with custom design tokens
- **Framer Motion** for animations
- **DM Sans + DM Serif Display** typography
- **Vercel Analytics** built-in

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — full narrative single-scroll |
| `/approach` | Approach page — philosophy, framework, engagement models |
| `/case-studies` | Case studies index |
| `/case-studies/[slug]` | Individual case study |
| `/insights` | Insights index |
| `/insights/[slug]` | Individual article |
| `/contact` | Contact page with form + Calendly |

## Structure

```
app/                        Next.js App Router pages
components/
  layout/                   Navbar, Footer
  home/                     All homepage sections
  ui/                       Reusable components (Button, Reveal, ContactForm)
content/
  caseStudies.ts            All 4 case studies with full copy
  insights.ts               All 4 insight articles with full copy
lib/
  site.ts                   Site config, nav, social links
  utils.ts                  cn() utility
public/                     favicon.svg, icon.svg
```

## Design System

**Colors (CSS vars):**
- `--bg: #090909` — page background
- `--surface: #111111` — cards/sections
- `--accent: #14b8a6` — teal accent
- `--primary: #fafafa` — primary text
- `--secondary: #a1a1aa` — muted text

**Typography:**
- Display: DM Serif Display (headings)
- Body: DM Sans (everything else)

## Deploy to Vercel

1. Push to GitHub
2. Import repo in Vercel
3. Add env vars from `.env.example`
4. Deploy

## Production Checklist

- [ ] Set `NEXT_PUBLIC_SITE_URL` env var
- [ ] Add real email provider in `app/api/contact/route.ts` (Resend recommended)
- [ ] Verify Formspree endpoint in `components/ui/ContactForm.tsx`
- [ ] Add DNS and SSL via Vercel
- [ ] Run `npm run lint && npm run typecheck && npm run build`
