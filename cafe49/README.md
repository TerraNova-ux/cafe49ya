# Cafe 49 — Premium Café Website Concept by TerraNova

A bold, modern, responsive website concept engineered by **TerraNova** for **Cafe 49**, a casual café and fast-food spot in Samrala, Punjab, India.

---

## 1. Quick Start

Ensure you have [Node.js](https://nodejs.org/) (v18 or newer) installed.

```bash
# Navigate to the project directory
cd cafe49

# Install dependencies
npm install

# Run the local development server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## 2. Business Information & Location

- **Business Name:** Cafe 49
- **Address:** Global Market, Global Tower, Khanna–Samrala Road, Samrala, Punjab 141114, India
- **Type:** Casual Café, Fast Food, Specialty Hot & Chilled Coffees, Shakes, Wok Specialties
- **Status:** Independent design concept created by TerraNova. Candidate menu items and details are compiled from publicly available web listings for demonstration and review.

---

## 3. Project Structure

```
cafe49/
├── index.html                   # HTML template with Google Fonts (Syne + Plus Jakarta Sans) & SEO meta
├── package.json                 # Scripts and dependencies (React 19, Vite, Lucide Icons)
├── vite.config.js               # Vite configuration with React plugin
├── src/
│   ├── main.jsx                 # Application entry point
│   ├── App.jsx                  # Main layout container
│   ├── index.css                # Custom CSS design system, typography & color variables
│   ├── config/
│   │   ├── cafeConfig.js        # 📌 CENTRAL CONFIG: Phone, addresses, hours, maps, socials
│   │   ├── menuData.js          # 📌 MENU DATA: All 38 candidate items, categories, tags, images
│   │   └── galleryData.js       # 📌 GALLERY DATA: Aspect ratios, editorial captions, photo links
│   └── components/
│       ├── ConceptBanner.jsx    # Transparent concept disclaimer banner
│       ├── Navbar.jsx           # Sticky nav with text-based wordmark & mobile menu drawer
│       ├── Hero.jsx             # Hero section with bold typography & asymmetrical composition
│       ├── SignatureFavourites.jsx # 6 highlighted popular candidate bites
│       ├── MenuSection.jsx      # Interactive explorer: 7 categories + instant search + empty states
│       ├── AboutSection.jsx     # Editorial layout on casual café culture & friends gathering
│       ├── ExperienceSection.jsx# 4 core experiential highlights (dine-in, sips, bites, takeaway)
│       ├── GallerySection.jsx   # Responsive grid with varied aspect ratios & interactive lightbox
│       ├── LightboxModal.jsx    # Fullscreen accessible image modal with keyboard & touch navigation
│       ├── LocationSection.jsx  # Map navigation links, configurable contact, hours & directions
│       └── Footer.jsx           # Wordmark, links, copyright, TerraNova attribution & disclaimer
```

---

## 4. Customizing the Content Before Going Live

All business details, candidate menu items, and photographs are isolated into single editable data files under `src/config/`:

### A. Updating Business Details (`src/config/cafeConfig.js`)
1. **Phone Number:** Update `contact.phoneNumber` with the verified business telephone number and set `contact.isPhoneVerified: true`.
2. **Opening Hours:** Update `hours.schedule` with the confirmed schedule (e.g., `10:00 AM – 10:30 PM`) and set `hours.isVerified: true`.
3. **Social Links:** Update `contact.social.instagram.url` with the authentic Instagram profile URL.

### B. Updating Menu Items & Prices (`src/config/menuData.js`)
- Each dish contains `id`, `name`, `category`, `description`, `priceDisplay`, and `imageUrl`.
- When actual menu prices are confirmed, replace `"Ask for price"` with the verified amount (e.g. `"₹149"`).
- Add or remove dishes in the array as desired; the search filter and category buttons adapt automatically.

### C. Replacing Stock Photography with Real Café Photos (`src/config/galleryData.js`)
- Replace the Unsplash URLs in `src/config/galleryData.js` and `src/config/menuData.js` with direct image URLs or local assets stored in `public/`.

---

## 5. Technical Details

- **Framework:** React 19 + Vite 8
- **Icons:** Lucide React
- **Design System:** Custom CSS tokens (no heavy CSS framework dependencies)
- **Typography:**
  - Headlines: *Syne* (weights 700, 800, 900)
  - Body: *Plus Jakarta Sans* (weights 400, 500, 600, 700)
- **Palette:**
  - Deep Espresso: `#17110F`
  - Warm Cream: `#F7F0E7`
  - Tomato Red: `#D94B38`
  - Golden Amber: `#F3B64A`
  - Muted Taupe: `#A99A8D`
- **Accessibility:** Semantic HTML elements, accessible keyboard traps, `:focus-visible` styling, ARIA attributes on modals and drawers, and `prefers-reduced-motion` support.

---

## 6. Credits

Designed and engineered by **TerraNova** as an independent creative concept for Cafe 49, Samrala.
