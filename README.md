# BEETOO — Brand Manager in a Box

A production-ready Next.js website for BEETOO: the AI-native on-chain IP sovereignty platform.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17+ 
- npm or yarn

### Installation

```bash
# Clone or download the repository
cd beetoo

# Install dependencies
npm install

# Create .env.local (optional, uses defaults if missing)
cp .env.local.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 What's Included

- **Next.js 14+** - App Router, Server Components, optimized performance
- **React 18** - Latest React features with hooks
- **Tailwind CSS 3** - Utility-first styling with custom BEETOO color theme
- **Framer Motion** - Smooth animations and transitions
- **Lucide Icons** - Beautiful, minimal icon library
- **TypeScript** - Full type safety
- **Responsive Design** - Mobile-first, works perfectly on all devices
- **SEO Optimized** - Metadata, Open Graph, Twitter Card, canonical URLs
- **Performance** - Image optimization, code splitting, lazy loading

## 🎨 Design System

### Colors
- **Primary**: `#ff6b35` (BEETOO Orange)
- **Secondary**: `#f7931e` (Orange Light)
- **Dark**: `#1a1a1a` (Near Black)
- **Light**: `#f9f9f9` (Off White)

### Tailwind Custom Classes
- `.text-gradient` - Orange gradient text
- `.btn-gradient` - Gradient button styling
- `.glass` - Glassmorphism effect
- `.container-max` - Max-width container with padding

## 🏗️ Project Structure

```
beetoo/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx       # Fixed header navigation
│   ├── Hero.tsx            # Hero section with CTA
│   ├── Problem.tsx         # Problem statement cards
│   ├── Solution.tsx        # Features grid
│   ├── HowItWorks.tsx      # 4-step process
│   ├── Pricing.tsx         # Pricing tiers
│   ├── Timeline.tsx        # 9-week MVP timeline
│   ├── EarlyAccess.tsx     # Email waitlist
│   └── Footer.tsx          # Footer with links
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── tailwind.config.ts      # Tailwind customization
├── next.config.js          # Next.js config
├── postcss.config.js       # PostCSS plugins
├── vercel.json             # Vercel deployment config
├── .env.local.example      # Environment variables template
└── README.md               # This file
```

## 📝 Sections

### 1. Navigation
- Fixed header with logo
- Mobile hamburger menu
- Smooth scroll to sections
- CTA button

### 2. Hero
- Headline with gradient text
- Subheading
- Dual CTA buttons
- Floating device visual
- Smooth animations

### 3. Problem
- 3-column grid of problems
- Icons and descriptions
- Hover effects
- Section title

### 4. Solution (Features)
- 6 feature cards in grid layout
- Icons from Lucide React
- Hover animations
- Responsive grid

### 5. How It Works
- 4 steps with numbers
- Connected flow (desktop)
- Orange gradient background
- Glassmorphic cards

### 6. Pricing
- 3 tier options (Free, Creator, Brand)
- Highlighted "popular" tier
- Feature lists with checkmarks
- Responsive grid

### 7. Timeline
- 9-week MVP roadmap
- Vertical timeline design
- Responsive layout
- Phase labels

### 8. Early Access
- Email waitlist form
- Early backer benefits box
- Success feedback
- Centered layout

### 9. Footer
- Brand info
- Navigation links
- Legal links
- Social media icons

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
# Then redeploy
```

Or use Vercel GitHub integration for automatic deployments.

### Custom Domain

1. Go to Vercel Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Environment Variables

Set in Vercel Dashboard → Settings → Environment Variables:
- `NEXT_PUBLIC_SITE_URL` (default: `https://beetoo.app`)
- Any API keys for future integrations

## 🎬 Customization

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  beetoo: {
    orange: "#ff6b35",
    // ... add your colors
  },
}
```

### Add Sections
1. Create new component in `components/` (e.g., `components/Newsletter.tsx`)
2. Import in `app/page.tsx`
3. Add `<YourComponent />` to the page

### Update Content
Edit the JSX in each component. All content is hardcoded for easy editing.

### Add Images
Place images in `public/` folder:
```bash
mkdir public
# Add images here
```

Then import and use:
```jsx
import Image from "next/image";

<Image src="/image.png" alt="..." width={400} height={300} />
```

## 🔍 SEO Features

- OpenGraph tags for social sharing
- Twitter Card meta tags
- Canonical URL
- Mobile viewport optimization
- Semantic HTML
- Structured data ready (add `schema.org` JSON-LD as needed)

To add schema:
```tsx
import Head from "next/head";

<Head>
  <script type="application/ld+json">
    {JSON.stringify(schemaData)}
  </script>
</Head>
```

## ⚡ Performance

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic per-route code splitting
- **Lazy Loading**: Components lazy load as viewport scrolls
- **Framer Motion**: Hardware-accelerated animations
- **CSS**: Tailwind purges unused styles
- **Build**: Production builds are ~50KB gzipped

## 📊 Analytics (Optional)

To enable Google Analytics:

1. Add `NEXT_PUBLIC_GA_ID=GA_XXXX` to `.env.local`
2. Uncomment analytics setup in `app/layout.tsx`

Or use PostHog for session recordings:
1. Add `NEXT_PUBLIC_POSTHOG_KEY=key` to `.env.local`
2. Add PostHog setup

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
npm run export   # Export static HTML (if needed)
```

### Code Quality

This project includes ESLint configuration. Run before committing:
```bash
npm run lint
```

## 📱 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/name`
2. Make changes
3. Test: `npm run dev`
4. Commit: `git commit -am 'Add feature'`
5. Push: `git push origin feature/name`
6. Open pull request

## 📄 License

© 2026 BEETOO. All rights reserved.

## 🎯 Midjourney Prompts

Hero image prompts are available in `BEETOO_MIDJOURNEY_PROMPTS.md`. 

To use:
1. Copy prompt from the file
2. Paste into Midjourney Discord
3. Download generated image
4. Add to `public/images/` folder
5. Update Hero component to use your image

Example prompts:
- Midnight Blue Device (Hero Shot)
- Sunset Orange Device (Lifestyle)
- Forest Green Device (Team Setting)
- Designer at Work
- Creative Team Workshop

## 🚦 Status

- ✅ Navigation & Layout
- ✅ All 9 Sections
- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ SEO Metadata
- ✅ Performance Optimized
- ✅ Ready for Vercel Deployment
- ⏳ Hero Images (add your Midjourney images)
- ⏳ Contact Form Backend (implement form service)

## 📞 Support

- **Twitter**: @beetoo_official
- **Email**: contact@beetoo.app
- **Discord**: [Join our community](#)

## 🔐 Security

- No sensitive data in code
- Environment variables for secrets
- CSP headers (add via vercel.json or server)
- No known vulnerabilities (run `npm audit`)

---

**Built with ❤️ for creators who own their work.**
