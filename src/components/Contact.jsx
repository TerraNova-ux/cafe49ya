import { Phone, MapPin, Clock } from 'lucide-react'

// Inline Instagram icon (not available in this version of lucide-react)
function InstagramIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
import { cafe } from '../config/cafe'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Come Visit Us</p>
          <h2 id="contact-heading" className={styles.heading}>
            Find Shiva Cafe2020
          </h2>
          <p className={styles.subtext}>
            We're in the heart of Sunam — easy to find, even easier to love.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Info card */}
          <div className={styles.infoCard}>
            {/* Address */}
            <div className={styles.infoItem}>
              <div className={styles.iconBox} aria-hidden="true">
                <MapPin size={20} />
              </div>
              <div>
                <p className={styles.infoLabel}>Location</p>
                <address className={styles.address}>
                  {cafe.address.line1}<br />
                  {cafe.address.line2}<br />
                  {cafe.address.city}, {cafe.address.state}<br />
                  {cafe.address.country}
                </address>
                {cafe.mapUrl ? (
                  <a
                    href={cafe.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapLink}
                  >
                    Open in Maps →
                  </a>
                ) : (
                  <p className={styles.placeholder}>
                    [Map link — to be added once verified]
                  </p>
                )}
              </div>
            </div>

            {/* Phone */}
            <div className={styles.infoItem}>
              <div className={styles.iconBox} aria-hidden="true">
                <Phone size={20} />
              </div>
              <div>
                <p className={styles.infoLabel}>Call Us</p>
                <a href={cafe.phoneLink} className={styles.phone}>
                  {cafe.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className={styles.infoItem}>
              <div className={styles.iconBox} aria-hidden="true">
                <InstagramIcon size={20} />
              </div>
              <div>
                <p className={styles.infoLabel}>Instagram</p>
                <a
                  href={cafe.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  {cafe.instagram.handle}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className={styles.infoItem}>
              <div className={styles.iconBox} aria-hidden="true">
                <Clock size={20} />
              </div>
              <div>
                <p className={styles.infoLabel}>Opening Hours</p>
                {cafe.hours ? (
                  <ul className={styles.hours}>
                    {cafe.hours.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.placeholder}>
                    [Opening hours — to be confirmed by café owner]
                  </p>
                )}
              </div>
            </div>

            {/* Primary CTA */}
            <a href={cafe.phoneLink} className={styles.callBtn}>
              <Phone size={18} aria-hidden="true" />
              Call to Confirm &amp; Plan Your Visit
            </a>
          </div>

          {/* Map / visual panel */}
          <div className={styles.mapPanel}>
            {cafe.mapUrl ? (
              <iframe
                title="Shiva Cafe2020 location map"
                src={cafe.mapUrl}
                className={styles.iframe}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapPlaceholderInner}>
                  <MapPin size={40} aria-hidden="true" className={styles.mapPinIcon} />
                  <p className={styles.mapPlaceholderTitle}>Sunam, Punjab</p>
                  <p className={styles.mapPlaceholderSub}>
                    Indra Marg, near Mahadev Car Parking
                  </p>
                  <p className={styles.mapNote}>
                    [Interactive map to be embedded once the verified Google Maps link is provided]
                  </p>
                  <a
                    href={`https://maps.google.com/?q=Indra+Marg+near+Mahadev+Car+Parking+Sunam+Punjab+India`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.searchLink}
                  >
                    Search on Google Maps →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
