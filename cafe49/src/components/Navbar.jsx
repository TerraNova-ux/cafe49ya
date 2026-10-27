import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MapPin } from 'lucide-react';
import { cafeConfig } from '../config/cafeConfig';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Signature', href: '#signature' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Find Us', href: '#location' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 76;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        transition: 'background-color 0.3s ease, border-color 0.3s ease, padding 0.3s ease, box-shadow 0.3s ease',
        backgroundColor: isScrolled ? 'rgba(23, 17, 15, 0.96)' : 'rgba(23, 17, 15, 0.88)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: `1px solid ${isScrolled ? 'rgba(247, 240, 231, 0.12)' : 'transparent'}`,
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.4)' : 'none',
        padding: isScrolled ? '0.65rem 0' : '1rem 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {/* Text-based Cafe 49 Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="wordmark"
          aria-label="Cafe 49 Home"
        >
          <span>CAFE</span>
          <span className="wordmark-num">49</span>
        </a>

        {/* Desktop Navigation Links (>= 1024px) */}
        <nav
          aria-label="Primary Navigation"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: 'clamp(1.25rem, 2vw, 2rem)',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: 'var(--color-cream-muted)',
                letterSpacing: '0.01em',
                position: 'relative',
                padding: '0.25rem 0',
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-amber)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-cream-muted)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions (>= 1024px) */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.25rem',
            flexShrink: 0,
          }}
          className="desktop-actions"
        >
          <a
            href={cafeConfig.location.mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.875rem',
              color: 'var(--color-taupe)',
              transition: 'color var(--transition-fast)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cream)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-taupe)')}
            title="Open in Google Maps"
          >
            <MapPin size={16} style={{ color: 'var(--color-tomato)' }} />
            <span>Samrala, Punjab</span>
          </a>

          <a
            href="#menu"
            onClick={(e) => handleLinkClick(e, '#menu')}
            className="btn btn-primary"
            style={{
              padding: '0.65rem 1.35rem',
              fontSize: '0.875rem',
              minHeight: '40px',
            }}
          >
            <span>Explore Menu</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle (< 1024px) */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            minWidth: '44px',
            minHeight: '44px',
            borderRadius: '6px',
            backgroundColor: 'var(--color-espresso-surface)',
            border: '1px solid var(--color-espresso-border)',
            color: 'var(--color-cream)',
            cursor: 'pointer',
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer / Fullscreen Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: '100vh',
            minHeight: '100dvh',
            backgroundColor: 'var(--color-espresso)',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            padding: '1.25rem 1.25rem max(1.5rem, env(safe-area-inset-bottom, 1.5rem)) 1.25rem',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* Header row in mobile overlay */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '1rem',
              borderBottom: '1px solid var(--color-espresso-border)',
            }}
          >
            <div className="wordmark">
              <span>CAFE</span>
              <span className="wordmark-num">49</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Navigation Menu"
              style={{
                width: '44px',
                height: '44px',
                minWidth: '44px',
                minHeight: '44px',
                borderRadius: '6px',
                backgroundColor: 'var(--color-espresso-surface)',
                border: '1px solid var(--color-espresso-border)',
                color: 'var(--color-cream)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              marginTop: '2rem',
              marginBottom: '2rem',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.35rem, 5vw, 1.75rem)',
                  fontWeight: 700,
                  color: 'var(--color-cream)',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.4rem 0',
                }}
              >
                <span>{link.label}</span>
                <span style={{ fontSize: '1rem', color: 'var(--color-taupe)' }}>→</span>
              </a>
            ))}
          </nav>

          {/* Bottom actions for mobile */}
          <div
            style={{
              marginTop: 'auto',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--color-espresso-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
            }}
          >
            <a
              href="#menu"
              onClick={(e) => handleLinkClick(e, '#menu')}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.95rem' }}
            >
              <span>Explore Menu</span>
              <ArrowUpRight size={18} />
            </a>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                color: 'var(--color-taupe)',
                justifyContent: 'center',
                paddingTop: '0.35rem',
                textAlign: 'center',
              }}
            >
              <MapPin size={15} style={{ color: 'var(--color-tomato)', flexShrink: 0 }} />
              <span>Global Market, Samrala, Punjab</span>
            </div>
          </div>
        </div>
      )}

      {/* Responsive media query helper for Navbar */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
