# Chuks Kitchen – Frontend Documentation
live link --- https://chucks-kitchen.netlify.app/ 
**Last updated:** February 2026  
**Developer handing over:** Abdulrahman (original implementation)  
**Tech handover note:** This is a Next.js 14+ App Router food delivery landing/menu site for Nigerian cuisine. Focus is on clean, responsive UI with reusable components. Auth pages have a split-screen design, public pages use a fixed navbar.

## available pages 
* Onboarding page (´/´)
* signin page (´/signin´)
* signup page(´/signup´)
* Home(´/home´)
* Explore page (´/explore´)

## 1. Project Overview

**What we built**  
Chuks Kitchen is a food delivery web app focused on authentic Nigerian homemade meals.  
The main public-facing pages include:

- Landing/Welcome page (`welcome`) — hero section, popular categories, menu highlights
- Explore/menu pages — category lists, popular/chef's specials grids
- Auth pages (`/signin`, `/signup`) — split-screen (image left + form right)

The site emphasizes:
- Appetizing food photography
- Simple, mobile-first UX
- Reusable card components for menu items
- Consistent orange (#FF7A18) branding

**Current status**  
- Landing + auth pages are functional
- Menu/category grids are reusable and responsive
- Navbar is fixed and responsive (desktop links + mobile hamburger)
- No backend integration yet (static data or Contentful stubs)

## 2. Tech Stack & Why

| Technology          | Version      | Purpose / Why chosen                                                                 |
|---------------------|--------------|---------------------------------------------------------------------------------------|
| Next.js             | 14+ (App Router) | SSR/SSG, image optimization, file-based routing, great DX for React apps             |
| React               | 18+          | Core UI library                                                                      |
| Tailwind CSS        | latest       | Rapid styling, responsive utilities, no CSS file bloat                               |
| TypeScript          | latest       | Type safety for props,                        |
| lucide-react        | latest       | Clean, lightweight icon set (Menu, X, ChevronDown, etc.)                     

**Why this stack?**  
Modern, performant, type-safe, easy to scale. Tailwind + Next.js combo allows fast iteration while keeping bundle size reasonable.

## 3. Project Structure & Key Files
my-app/
├── app/
│   ├── layout.tsx                        # Root layout (fonts, global styles)
│   ├── page.tsx                          # Landing/home page (imports Hero, Popular, etc.)
│   ├── (auth)/                           # Auth-related routes (no navbar)
│   │   ├── layout.tsx                    # Uses AuthLayout (split image + form)
│   │   ├── signin/page.tsx               # Login form
│   │   └── signup/page.tsx               # Signup form
│   └── (Landing)/                        # Public/marketing pages (has navbar)
│       └── layout.tsx                    # Optional: adds Navbar + Footer
├── components/
│   ├── auth/                             # Sign in/up related
│   │   ├── AuthLayout.tsx                # Split-screen (left image + right form)
│   │   ├── AuthRightPanel.tsx            # Right-side wrapper (form + footer)
│   │   ├── BaseInput.tsx                 # Generic text input with icon
│   │   ├── PasswordInput.tsx             # Password field with eye toggle
│   │   └── SocialButtons.tsx             # Google/Facebook login buttons
│   ├── Landing/
│   │   ├── home/
│   │   │   ├── hero.tsx                  # Main hero banner
│   │   │   ├── popular.tsx               # Popular Categories (search + grid)
│   │   │   ├── popular-menu.tsx          # Chef's Specials / Popular items grid
│   │   │   ├── menu-card.tsx             # Reusable food card (image + title + desc + price)
│   │   │   └── new-menu-additions.tsx    # "New Menu Additions" hero
│   │   └── explore/
│   │       └── explore-hero.tsx          # Explore page hero with rating
│   ├── layouts/
│   │   └── BaseLayout.tsx                # Max-width + responsive padding wrapper
│   └── Navbar.tsx                        # Fixed top nav (desktop + mobile menu)
├── public/
│   └── images/
│       ├── auth.png                      # Auth pages background
│       ├── hero.webp                     # Main landing hero
│       ├── welcomeMobile.webp            # Mobile landing hero
│       ├── beforeFooter.webp             # New menu additions background
│       ├── exploreHero.webp              # Explore page hero
│       └── Property*.webp                # Food images for menu cards
└── ...