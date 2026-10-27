import { Phone, MapPin } from 'lucide-react'
import { cafe } from '../config/cafe'
import styles from './Footer.module.css'

const CURRENT_YEAR = new Date().getFullYear()

// Inline Instagram icon (not available in this version of lucide-react)
function InstagramIcon({ size = 15 }) {
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

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const handleNav = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.top}>
        <div className={styles.inner}>
          {/* Brand column */}
          <div className={styles.brand}>
            <p className={styles.wordmark}>
              <span className={styles.wordmarkMain}>SHIVA</span>
              <span className={styles.wordmarkSub}> CAFE2020</span>
            </p>
            <p className={styles.tagline}>{cafe.tagline}</p>
            <p className={styles.location}>
              <MapPin size={14} aria-hidden="true" />
              {cafe.address.city}, {cafe.address.state}
            </p>
          </div>

          {/* Nav column */}
          <nav className={styles.navCol} aria-label="Footer navigation">
            <p className={styles.colLabel}>Navigate</p>
            <ul className={styles.navList} role="list">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={styles.navLink}
                    onClick={(e) => handleNav(e, href)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact column */}
          <div className={styles.contactCol}>
            <p className={styles.colLabel}>Contact</p>
            <div className={styles.contactItems}>
              <a href={cafe.phoneLink} className={styles.contactItem}>
                <Phone size={15} aria-hidden="true" />
                <span>{cafe.phoneDisplay}</span>
              </a>
              <a
                href={cafe.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
              >
                <InstagramIcon size={15} />
                <span>{cafe.instagram.handle}</span>
              </a>
              <div className={styles.contactItem}>
                <MapPin size={15} aria-hidden="true" />
                <span>{cafe.address.full}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copy}>
              &copy; {CURRENT_YEAR} {cafe.name}. All rights reserved.
            </p>
          <p className={styles.credit}>{cafe.credit}</p>
        </div>
      </div>
    </footer>
  )
}
