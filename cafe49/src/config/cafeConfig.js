/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CAFE 49 — CENTRAL BUSINESS CONFIGURATION
 * Independent Website Concept by TerraNova
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * NOTE FOR CAFE OWNER / DEVELOPER:
 * This configuration file drives the business details displayed throughout the
 * website. Fields flagged with `isVerified: false` are candidate or placeholder
 * values obtained from public internet listings and must be verified with the
 * official Cafe 49 management before going live in production.
 *
 * DO NOT invent credentials, awards, reviews, or owner names.
 */

export const cafeConfig = {
  // Brand identity
  name: "Cafe 49",
  shortName: "49",
  tagline: "Your Next Favourite Bite.",
  subTagline: "Comfort food, specialty coffees, and everyday cravings in Samrala.",
  conceptBadge: "TerraNova Concept",

  // Location details (Verified public listing address)
  location: {
    venue: "Global Tower, Global Market",
    street: "Khanna–Samrala Road",
    city: "Samrala",
    district: "Ludhiana",
    state: "Punjab",
    postalCode: "141114",
    country: "India",
    formattedAddress: "Global Market, Global Tower, Khanna–Samrala Road, Samrala, Punjab 141114, India",
    landmark: "Global Tower, Khanna–Samrala Road",
    
    // Google Maps search & directions links
    mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Cafe+49+Global+Tower+Khanna+Samrala+Road+Samrala+Punjab+141114",
    mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Cafe+49+Global+Tower+Khanna+Samrala+Road+Samrala+Punjab+141114",
  },

  // Contact details
  // Note: Public listings display divergent contact numbers. Keep configurable and unverified.
  contact: {
    // Set to verified phone number string when confirmed (e.g. "+91 98XXX XXXXX")
    phoneNumber: null,
    // Whether this number has been verified directly with the owner
    isPhoneVerified: false,
    phoneNote: "Phone number awaiting owner verification. Update in cafeConfig.js.",
    // Safe placeholder for dial link if not set
    phoneLink: null,
    
    // Social links (Configurable — placeholder for official profile)
    social: {
      instagram: {
        handle: "@cafe49_samrala",
        url: "https://instagram.com", // update with direct URL upon verification
        isVerified: false,
        note: "Unverified handle. Confirm before launch."
      },
      facebook: {
        name: "Cafe 49 Samrala",
        url: "https://facebook.com",
        isVerified: false
      }
    }
  },

  // Operating Hours
  // NOTE: Public listing hours vary and are not verified. Do not invent exact opening hours.
  hours: {
    statusText: "Hours to be confirmed with café management",
    isVerified: false,
    notice: "Please check directly with the café for holiday or updated timing.",
    schedule: [
      { day: "Monday – Sunday", timing: "Timings subject to local confirmation" }
    ]
  },

  // Service Offerings (Standard casual café capabilities)
  services: [
    {
      id: "dine-in",
      title: "Casual Hangouts",
      shortDesc: "A warm, contemporary space to unwind, connect with friends, and enjoy fresh bites.",
      icon: "Coffee",
      statusNote: "Dine-in seating available"
    },
    {
      id: "takeaway",
      title: "Quick Takeaway",
      shortDesc: "Freshly prepped pizzas, wraps, burgers, and cold brews packed for your road trips or busy days.",
      icon: "ShoppingBag",
      statusNote: "On-the-go convenience"
    },
    {
      id: "chilled-drinks",
      title: "Handcrafted Sips",
      shortDesc: "From thick signature shakes and bold cold coffees to thirst-quenching mojitos.",
      icon: "GlassWater",
      statusNote: "Freshly made to order"
    },
    {
      id: "delivery",
      title: "Doorstep Delivery",
      shortDesc: "Local delivery availability is subject to confirmation with café staff.",
      icon: "Bike",
      statusNote: "Subject to confirmation"
    }
  ],

  // Disclaimer / Project Transparency
  transparency: {
    creator: "TerraNova",
    creatorNote: "This website is an independent design and web architecture concept engineered by TerraNova. It is not an officially commissioned or owner-approved production site.",
    year: new Date().getFullYear(),
  }
};
