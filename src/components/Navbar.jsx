import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { cafe } from '../config/cafe'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !toggleRef.current.contains(e.target)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const navHeight = 80
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <nav className={styles.nav} aria-label="Main navigation">
        {/* Wordmark */}
        <a
          href="#home"
          className={styles.wordmark}
          onClick={(e) => handleNavClick(e, '#home')}
          aria-label={`${cafe.name} – back to top`}
        >
          <span className={styles.wordmarkMain}>SHIVA</span>
          <span className={styles.wordmarkSub}> CAFE2020</span>
        </a>

        {/* Desktop links */}
        <ul className={styles.links} role="list">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={styles.link}
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Toggle */}
        <div className={styles.actions}>
          <a
            href="#contact"
            className={styles.cta}
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Find Us
          </a>
          <button
            ref={toggleRef}
            className={styles.toggle}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        aria-hidden={!open}
      >
        <ul role="list" className={styles.drawerLinks}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={styles.drawerLink}
                onClick={(e) => handleNavClick(e, href)}
                tabIndex={open ? 0 : -1}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className={`${styles.drawerLink} ${styles.drawerCta}`}
              onClick={(e) => handleNavClick(e, '#contact')}
              tabIndex={open ? 0 : -1}
            >
              Find Us →
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

