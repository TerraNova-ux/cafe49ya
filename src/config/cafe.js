/**
 * ─────────────────────────────────────────────────────────────
 *  SHIVA CAFE2020 — CENTRALIZED CONFIGURATION
 *  TerraNova Website Concept
 * ─────────────────────────────────────────────────────────────
 *
 *  Update this file with confirmed details from the café owner.
 *  Every section with a [PLACEHOLDER] comment needs real information.
 *
 *  DO NOT present placeholder values as confirmed facts.
 */

export const cafe = {
  name: 'Shiva Cafe2020',
  tagline: 'Good Coffee. Good Food. Good Moments.',
  shortDescription:
    'Your next coffee break, catch-up, or slow afternoon starts here.',

  /**
   * CONTACT — verified
   */
  phone: '+91 76588 63919',
  phoneDisplay: '+91 76588 63919',
  phoneLink: 'tel:+917658863919',

  /**
   * LOCATION — verified
   */
  address: {
    line1: 'Indra Marg',
    line2: 'near Mahadev Car Parking',
    city: 'Sunam',
    state: 'Punjab',
    country: 'India',
    full: 'Indra Marg, near Mahadev Car Parking, Sunam, Punjab, India',
  },

  /**
   * SOCIAL — [PLACEHOLDER] Replace with verified URLs when confirmed
   * Instagram handle: @shivacafe2020
   * Update instagramUrl once the profile URL is confirmed.
   */
  instagram: {
    handle: '@shivacafe2020',
    url: 'https://www.instagram.com/shivacafe2020/', // update if URL differs
  },

  /**
   * HOURS — [PLACEHOLDER] Confirm with café owner before publishing
   */
  hours: null, // Set to an array of strings once confirmed, e.g.:
  // hours: [
  //   'Monday – Friday: 8:00 AM – 10:00 PM',
  //   'Saturday – Sunday: 8:00 AM – 11:00 PM',
  // ],

  /**
   * MAP — [PLACEHOLDER] Confirm exact coordinates / Google Maps link before publishing
   * Set to a verified Google Maps URL once location is confirmed.
   */
  mapUrl: null, // e.g. 'https://maps.google.com/?q=...'

  /**
   * BRAND
   */
  credit: 'Website concept by TerraNova',
};

/**
 * MENU — [PLACEHOLDER]
 * Replace with the café's real menu items and remove the placeholder notice.
 *
 * Structure:
 *   { id, category, name, description, image, tag }
 *   tag: 'popular' | 'new' | null
 *   image: Unsplash URL (replace with real photography when available)
 *
 * IMPORTANT: These are illustrative placeholders only.
 * Do not present them as confirmed Shiva Cafe2020 menu items.
 */
export const menuItems = [
  {
    id: 1,
    category: 'Coffee',
    name: 'Classic Espresso',
    description:
      '[Placeholder] Rich, full-bodied espresso shot. Update with your actual coffee offerings.',
    image:
      'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&q=80',
    tag: 'popular',
  },
  {
    id: 2,
    category: 'Coffee',
    name: 'Creamy Latte',
    description:
      '[Placeholder] Smooth espresso with steamed milk. Replace with your signature drink.',
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
    tag: null,
  },
  {
    id: 3,
    category: 'Coffee',
    name: 'Cold Brew',
    description:
      '[Placeholder] Slow-steeped, refreshing cold coffee. Update with your cold drinks.',
    image:
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=80',
    tag: 'new',
  },
  {
    id: 4,
    category: 'Snacks',
    name: 'Samosa',
    description:
      '[Placeholder] Crispy, golden snack. Replace with your actual snack menu.',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80',
    tag: 'popular',
  },
  {
    id: 5,
    category: 'Snacks',
    name: 'Sandwich',
    description:
      '[Placeholder] Fresh, toasted sandwich. Update with your real food items.',
    image:
      'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80',
    tag: null,
  },
  {
    id: 6,
    category: 'Drinks',
    name: 'Masala Chai',
    description:
      '[Placeholder] Warm spiced tea. Replace with your actual beverages.',
    image:
      'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80',
    tag: 'popular',
  },
  {
    id: 7,
    category: 'Drinks',
    name: 'Fresh Juice',
    description:
      '[Placeholder] Seasonal fresh juice. Update with your drinks list.',
    image:
      'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&q=80',
    tag: null,
  },
  {
    id: 8,
    category: 'Desserts',
    name: 'Gulab Jamun',
    description:
      '[Placeholder] Classic Indian sweet. Replace with your dessert offerings.',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    tag: null,
  },
  {
    id: 9,
    category: 'Desserts',
    name: 'Pastry',
    description:
      '[Placeholder] Freshly baked pastry. Update with your baked goods.',
    image:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80',
    tag: 'new',
  },
];

export const menuCategories = ['All', 'Coffee', 'Snacks', 'Drinks', 'Desserts'];

/**
 * GALLERY IMAGES — [PLACEHOLDER]
 * These are Unsplash stock images used for demonstration only.
 * Replace with actual photography of Shiva Cafe2020.
 */
export const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80',
    alt: '[Placeholder café interior photo — replace with Shiva Cafe2020 photography]',
    span: 'large',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
    alt: '[Placeholder coffee photo — replace with actual café photos]',
    span: 'small',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80',
    alt: '[Placeholder café scene — replace with actual café photos]',
    span: 'small',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80',
    alt: '[Placeholder coffee cup photo — replace with actual café photos]',
    span: 'small',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&q=80',
    alt: '[Placeholder food photo — replace with actual café photos]',
    span: 'medium',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80',
    alt: '[Placeholder café ambiance photo — replace with actual café photos]',
    span: 'small',
  },
];

