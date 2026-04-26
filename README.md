# SpaceAI — AI + AR Interior Design Platform

A production-ready Next.js 14 website for SpaceAI, an AI + AR powered interior design platform. Built with dark glassmorphism design, Framer Motion animations, and fully responsive layouts.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter + Syne (Google Fonts)
- **Deployment**: Vercel

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, HowItWorks, Features, Before/After, Testimonials, Pricing |
| `/features` | Deep-dive feature showcase |
| `/pricing` | Full pricing table + feature comparison + FAQ |
| `/about` | Mission, team, company timeline |

## Local Development

### Prerequisites

- Node.js 18.17+
- npm 9+

### Setup

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd interior-website

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env.local

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

## Deploy to Vercel

### Option 1 — Vercel CLI (fastest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

### Option 2 — Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live in ~60 seconds

### Environment Variables on Vercel

In the Vercel dashboard → Project → Settings → Environment Variables, add any variables from `.env.example` that you need.

## Project Structure

```
interior-website/
├── app/
│   ├── layout.tsx          # Root layout with Navbar + Footer
│   ├── globals.css         # Global styles + Tailwind layers
│   ├── page.tsx            # Home page
│   ├── features/
│   │   └── page.tsx
│   ├── pricing/
│   │   └── page.tsx
│   └── about/
│       └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── HowItWorks.tsx
│   ├── FeaturesGrid.tsx
│   ├── BeforeAfterSlider.tsx
│   ├── TestimonialsCarousel.tsx
│   ├── PricingCards.tsx
│   ├── CTABanner.tsx
│   ├── StatsSection.tsx
│   ├── AnimatedCounter.tsx
│   ├── FeaturesPageContent.tsx
│   ├── PricingPageContent.tsx
│   └── AboutPageContent.tsx
├── lib/
│   └── utils.ts
├── public/
├── .env.example
├── .gitignore
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── package.json
```

## Customization

- **Colors**: Edit `tailwind.config.ts` — change `electric-blue` and `gold` values
- **Content**: All text content is co-located in each component file
- **Fonts**: Change `Inter` and `Syne` in `app/layout.tsx`
- **SEO**: Update metadata in each `page.tsx` and `app/layout.tsx`

## License

MIT
