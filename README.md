# 🚀 AI MANTRAAS - Coming Soon Site

> **India's First AI Sales Employee** — The autonomous outreach system that finds, writes, follows up, and books meetings for B2B teams.

A premium, high-performance marketing landing page built with modern web technologies, featuring smooth animations, responsive design, and multiple engagement pathways.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Recent Updates](#recent-updates)
- [Environment Variables](#environment-variables)
- [Building for Production](#building-for-production)
- [API Endpoints](#api-endpoints)
- [Component Architecture](#component-architecture)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 Overview

**AI MANTRAAS** presents **SAARTHI** – a comprehensive AI-powered Sales Development Representative (SDR) automation platform designed specifically for B2B enterprises. This coming soon site serves as the marketing hub, featuring:

- **Countdown Timer** - Launch date tracking (March 6, 2026)
- **Email Waitlist** - Pre-launch user registration and lead capture
- **Product Showcase** - Deep dive into SAARTHI's capabilities
- **Social Integration** - Quick access to all social channels via "Connect with us" modal
- **Enterprise Focus** - Manual application review for enterprise clients only

### Key Value Propositions

✨ **4-Stage Automation Loop**
1. Finds ideal prospects with precision ICP filters
2. Writes persona-aware, personalized outreach
3. Follows up automatically with adaptive sequencing
4. Books meetings with calendar routing

🎯 **Competitive Advantages**
- Self-optimizing playbooks tuned to replies, not opens
- Dynamic personalization at scale with live firmographic signals
- Full-loop automation: sourcing → sequencing → scheduling → CRM sync
- Systemized approach vs. manual agency work

---

## ✨ Features

### Frontend Features
- **Animated Hero Section** - Custom SAARTHI text animations with hover effects
- **Interactive Countdown Timer** - Real-time countdown to launch date
- **Email Signup Forms** - Dual email capture (newsletter + waitlist)
- **Modal Communications** - "Connect with us" modal with social links
- **Responsive Design** - Fully responsive from mobile to 4K displays
- **Performance Optimized** - CSS animations, lazy loading, optimized images
- **Dark Theme** - Premium dark UI with electric blue accent colors

### Backend Features
- **Email Capture API** (`/api/subscribe`) - Newsletter subscription handling
- **Waitlist API** (`/api/waitlist`) - Application form submission to Google Sheets
- **Google Sheets Integration** - Real-time data sync with authorized Google Sheet
- **Environment-based Configuration** - Development, testing, and production support

### Social Integration
- WhatsApp Community
- Instagram
- X (Twitter)
- LinkedIn

---

## 🛠️ Tech Stack

### Core Framework
- **Next.js** - `15.5.12` - React framework with SSR, SSG, and API routes
- **React** - `19.0.0` - UI library with hooks and concurrent rendering
- **TypeScript** - `5.7.2` - Static typing for JavaScript

### Styling & Animation
- **TailwindCSS** - `3.4.17` - Utility-first CSS framework
- **Framer Motion** - `12.4.10` - Advanced React animations
- **GSAP** - `3.12.7` - Professional-grade animation library
- **PostCSS** - `8.4.49` - CSS preprocessing

### Development Tools
- **ESLint** - `9.39.3` - Code quality and linting
- **Autoprefixer** - `10.4.20` - CSS vendor prefixing

### Security
- **Next.js 15.5.12** - Latest patched version with CVE-2025-66478 fix applied

---

## 📦 Installation

### Prerequisites
- Node.js >= 18.x
- npm >= 9.x or yarn >= 3.x

### Clone & Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/aimantraas-coming-soon.git
cd aimantraas-coming-soon

# Install dependencies
npm install

# Verify installation
npm run build
```

---

## 🏃 Running the Project

### Development Mode
```bash
npm run dev
```
- Opens on `http://localhost:3000`
- Hot-reload enabled for instant feedback
- API routes available at `http://localhost:3000/api/*`

### Production Build
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

---

## 📁 Project Structure

```
aimantraas-coming-soon/
├── app/                          # Next.js app directory
│   ├── api/
│   │   ├── subscribe/           # Newsletter subscription endpoint
│   │   │   └── route.ts
│   │   └── waitlist/            # Waitlist form submission endpoint
│   │       └── route.ts
│   ├── layout.tsx               # Root layout with modal management
│   ├── page.tsx                 # Main landing page
│   └── globals.css              # Global styles
│
├── components/                  # React components
│   ├── countdown-timer.tsx      # Launch date countdown
│   ├── electric-background.tsx  # Animated background
│   ├── email-signup.tsx         # Newsletter email form
│   ├── navbar.tsx               # Navigation bar with "Connect with us" button
│   ├── reveal.tsx               # Scroll animation wrapper
│   ├── waitlist-form.tsx        # Enterprise waitlist form
│   └── whatsapp-modal.tsx       # Social links modal
│
├── data/
│   └── wait.csv                 # Waitlist submissions export
│
├── public/                      # Static assets
│   ├── bglogo.png              # AI MANTRAAS logo
│   ├── apify.jpeg              # Partner logo
│   └── [other assets]
│
├── tailwind.config.ts           # TailwindCSS configuration
├── tsconfig.json               # TypeScript configuration
├── .eslintrc.json              # ESLint configuration
├── package.json                # Dependencies & scripts
└── README.md                   # This file
```

---

## 🔄 Recent Updates (February 2026)

### Latest Changes
✅ **Google Sheets Integration**
- Replaced CSV file storage with Google Sheets API
- Real-time data sync with authorized Google Sheet
- Secure service account authentication
- Removed `wait.csv` file from repository
- Added `googleapis` dependency

✅ **UI/UX Improvements**
- Replaced WhatsApp-only button with "Connect with us" button
- Added electric blue gradient styling (matches brand theme)
- Unified social channel access in modal

✅ **Security Patches**
- Updated Next.js from v16.1.6 → v15.2.4
- Fixed CVE-2025-66478 vulnerability
- Fixed hydration mismatch in countdown timer
- Secure credential management with environment variables

✅ **Code Quality**
- Fixed unescaped apostrophe in text (HTML entity encoding)
- Fixed hydration mismatch in countdown component
- Cleaned up removed components and imports
- Improved TypeScript type safety

✅ **Performance**
- Optimized build output
- Maintained First Load JS under 107 kB
- All pages prerendered as static content

### File Changes
- `app/api/waitlist/route.ts` - Switched to Google Sheets API
- `components/countdown-timer.tsx` - Fixed hydration mismatch
- `.env.local` - Added Google Sheets configuration
- `components/navbar.tsx` - Button text & handler updated
- `app/layout.tsx` - Updated state management
- `app/page.tsx` - Minor cleanup
- `package.json` - Added googleapis, updated dependencies
- Removed `data/wait.csv` - Using Google Sheets now

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000

# Google Sheets Configuration
GOOGLE_SHEET_ID=your-sheet-id
GOOGLE_PROJECT_ID=your-google-project-id
GOOGLE_PRIVATE_KEY_ID=your-private-key-id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account-email
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_CLIENT_X509_CERT_URL=your-cert-url

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-ga-id

# Environment
NODE_ENV=development
```

**Note:** The `.env.local` file is gitignored for security. All Google Sheets credentials come from your service account JSON file.

---

## 🏗️ Building for Production

### Pre-deployment Checklist
```bash
# 1. Run full build with type checking
npm run build

# 2. Run linting
npm run lint

# 3. Test production build locally
npm run start

# 4. Verify all pages load
# - http://localhost:3000 (Homepage)
# - http://localhost:3000/program (Learning program)
# - http://localhost:3000/products (Product showcase)
```

### Build Output
- Static pages: `/`, `/products`, `/program`
- Dynamic routes: `/api/subscribe`, `/api/waitlist`
- Total size: ~110kB First Load JS

### Production Deployment

**Vercel** (Recommended for Next.js)
```bash
npm install -g vercel
vercel deploy
```

**Docker**
```bash
docker build -t aimantraas-coming-soon .
docker run -p 3000:3000 aimantraas-coming-soon
```

**Traditional Server**
```bash
npm run build
npm run start
```

---

## 🔌 API Endpoints

### 1. Newsletter Subscription
**Endpoint:** `POST /api/subscribe`

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Subscribed successfully"
}
```

### 2. Waitlist Registration
**Endpoint:** `POST /api/waitlist`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@company.com",
  "company": "TechCorp Inc",
  "industry": "Technology",
  "phone": "+1-555-0123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Application received",
  "updatedRows": 1
}
```

**Data Storage:** Submissions are automatically saved to your Google Sheet in real-time via the Google Sheets API.

---

## 🎨 Component Architecture

### Core Components

#### `Navbar`
- Navigation with "Connect with us" button
- Responsive design with mobile menu support
- SAARTHI branding logo
- Smooth transitions and hover effects

#### `WhatsAppModal` → "Connect with us" Modal
- Social media link aggregator
- WhatsApp community link
- Instagram, X (Twitter), LinkedIn links
- Smooth open/close animations

#### `WaitlistForm`
- Enterprise application form
- Name, email, company, industry fields
- Form validation
- Submission to `/api/waitlist`

#### `CountdownTimer`
- Real-time countdown to launch
- Responsive display (days, hours, minutes, seconds)
- Live update every second

#### `EmailSignup`
- Newsletter subscription form
- Email validation
- Integration with `/api/subscribe`

#### `Reveal`
- Scroll-based animation wrapper
- Fade-in on scroll effect
- Configurable delay

#### `ElectricBackground`
- Animated gradient background
- Radial gradient blobs
- Performance optimized

---

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Auto-deploys on push to main
4. Environment variables in Vercel dashboard

### Environment Variables for Vercel
```
NEXT_PUBLIC_API_URL=https://api.aimantraas.com
GOOGLE_SHEET_ID=
GOOGLE_PROJECT_ID=
GOOGLE_PRIVATE_KEY_ID=
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_CLIENT_ID=
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY=
GOOGLE_CLIENT_X509_CERT_URL=
```

**Google Sheets Setup:**
1. Create a Google Cloud project
2. Create a service account with Sheets API access
3. Download the service account JSON
4. Copy credentials to environment variables above
5. Share your Google Sheet with the service account email address

### Custom Domain
1. Add domain in Vercel settings
2. Update DNS records (CNAME/A records)
3. SSL certificate auto-provisioned

---

## 👥 Contributing

### Development Workflow
1. Create feature branch: `git checkout -b feature/amazing-feature`
2. Make changes and commit: `git commit -m "Add amazing feature"`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open pull request with detailed description

### Code Style
- Use TypeScript for type safety
- Follow ESLint rules (auto-format with lint)
- Use TailwindCSS for styling
- Keep components small and reusable

### Before Submitting PR
```bash
npm run lint      # Fix linting issues
npm run build    # Ensure build succeeds
npm run dev      # Test locally
```

---

## 📊 Performance Metrics

### Current Performance
- **First Load JS:** ~107-110 kB
- **Static Pages:** 8 pre-rendered routes
- **Build Time:** ~20s
- **Lighthouse Score:** 95+ (Performance)

### Optimizations
- Image lazy loading
- CSS-in-JS with TailwindCSS
- Code splitting via Next.js
- Responsive images

---

## 🐛 Known Issues & TODOs

### Current
- Consider using Next.js `<Image />` component instead of `<img>` for better LCP
- ESLint warnings on image optimization (non-blocking)

### Future Enhancements
- [ ] Add analytics integration
- [ ] Implement dark/light mode toggle
- [ ] Add more detailed product comparison
- [ ] Mobile app deep links
- [ ] Blog/content section
- [ ] Video testimonials

---

## 📞 Support & Contact

- **Website:** https://aimantraas.com (coming soon)
- **LinkedIn:** https://www.linkedin.com/company/aimantraas/
- **Instagram:** https://www.instagram.com/aimantraas
- **Twitter/X:** https://x.com/AIMantraas
- **WhatsApp Community:** https://chat.whatsapp.com/Lg1bDXw5DsWH4UjQpfxVLS

---

## 📄 License

This project is proprietary and confidential. Unauthorized copying, distribution, or modification is prohibited.

---

## 🙏 Acknowledgments

- **Framework:** Next.js & React teams
- **Animation:** Framer Motion & GSAP
- **Styling:** TailwindCSS
- **Partner:** Apify

---

## 📝 Version Info

- **Project Version:** 1.0.0
- **Next.js:** 15.2.4 (latest patched)
- **React:** 19.0.0
- **TypeScript:** 5.7.2
- **Google APIs:** googleapis@171.4.0
- **Last Updated:** February 23, 2026

---

**Built with ❤️ for B2B sales teams**
