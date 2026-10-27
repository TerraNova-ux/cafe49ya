# Shiva Cafe2020 — TerraNova Website Concept

A premium, responsive café website built by **TerraNova** as a personalized concept for **Shiva Cafe2020**, Sunam, Punjab, India.

---

## Quick Start

```bash
npm install
npm run dev        # Development server at http://localhost:5173
npm run build      # Production build
npm run preview    # Preview production build
```

---

## Project Structure

```
src/
├── config/
│   └── cafe.js          ← 📌 CENTRALIZED CONTENT — edit here first
├── components/
│   ├── Navbar.jsx / .module.css
│   ├── Hero.jsx / .module.css
│   ├── Menu.jsx / .module.css
│   ├── About.jsx / .module.css
│   ├── Gallery.jsx / .module.css
│   ├── WhyVisit.jsx / .module.css
│   ├── Contact.jsx / .module.css
│   └── Footer.jsx / .module.css
├── App.jsx
├── index.css            ← Global design tokens / CSS variables
└── main.jsx
```

---

## ⚠️ Placeholder Content — Action Required

The following items require confirmation from the café owner before the site goes live:

| Item | Status | Location to update |
|------|--------|-------------------|
| **Menu items & descriptions** | 🔴 Placeholder | `src/config/cafe.js` → `menuItems` |
| **Opening hours** | 🔴 Not confirmed | `src/config/cafe.js` → `cafe.hours` |
| **Google Maps link** | 🔴 Not verified | `src/config/cafe.js` → `cafe.mapUrl` |
| **Gallery photography** | 🔴 Stock images | `src/config/cafe.js` → `galleryImages` |
| **Instagram URL** | ⚠️ Assumed | `src/config/cafe.js` → `cafe.instagram.url` |

### Confirmed Details (verified)

| Item | Value |
|------|-------|
| Business name | Shiva Cafe2020 |
| Phone | +91 76588 63919 |
| Instagram handle | @shivacafe2020 |
| Address | Indra Marg, near Mahadev Car Parking, Sunam, Punjab, India |

---

## How to Update Content

### 1. Update business details
Open `src/config/cafe.js` and edit the `cafe` object.

### 2. Add the real menu
Replace the `menuItems` array in `src/config/cafe.js` with actual menu data:
```js
export const menuItems = [
  {
    id: 1,
    category: 'Coffee',       // Must match a value in menuCategories
    name: 'Your Drink Name',
    description: 'Your description.',
    image: 'https://your-image-url.com/photo.jpg', // or local: import img from '../assets/...'
    tag: 'popular',           // 'popular' | 'new' | null
  },
  // ...
]
```

### 3. Add opening hours
```js
cafe.hours = [
  'Monday – Friday: 8:00 AM – 10:00 PM',
  'Saturday – Sunday: 9:00 AM – 11:00 PM',
]
```

### 4. Add the map
Set a verified Google Maps embed or link URL:
```js
cafe.mapUrl = 'https://maps.google.com/?q=...'
```

### 5. Replace gallery photos
Update `galleryImages` in `src/config/cafe.js` with real café photography.
For local images: place files in `src/assets/` and use `import`.

---

## Design System

Design tokens live in `src/index.css` as CSS custom properties:

| Token | Value | Use |
|-------|-------|-----|
| `--espresso` | `#1a0f0a` | Primary dark brown |
| `--terracotta` | `#c56a48` | Primary accent |
| `--cream` | `#ede0d2` | Light text / backgrounds |
| `--olive` | `#6b7c5a` | Secondary accent |
| `--font-serif` | Playfair Display | Headings |
| `--font-sans` | Inter | Body text |

---

## Accessibility

- Semantic HTML landmark elements (`<header>`, `<main>`, `<section>`, `<footer>`)
- Skip-to-content link
- Keyboard-navigable mobile menu with Escape key support
- Visible focus states on all interactive elements
- `aria-label` / `aria-hidden` where appropriate
- `prefers-reduced-motion` respected

---

## Notes for the Developer

- **No fake form submissions** — a contact form is not included because it requires a backend or third-party service (e.g. Formspree, Netlify Forms). Add one when ready.
- **Stock photography** — all gallery and menu card images are Unsplash stock photos used for demonstration only. Replace before launch.
- **Instagram URL** — configured as `https://www.instagram.com/shivacafe2020/`. Verify with the owner.

---

*Website concept by TerraNova. Not affiliated with or endorsed by Shiva Cafe2020.*
