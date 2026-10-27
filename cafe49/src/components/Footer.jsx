import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';
import { cafeConfig } from '../config/cafeConfig';

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export default function Footer() {
  const currentYear = cafeConfig.transparency.year;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Signature Bites', href: '#signature' },
    { label: 'Full Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Atmosphere', href: '#experience' },
    { label: 'Food Gallery', href: '#gallery' },
    { label: 'Find Us', href: '#location' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
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
    <footer
      style={{
        backgroundColor: '#120d0c',
        borderTop: '1px solid rgba(247, 240, 231, 0.1)',
        paddingTop: 'clamp(2.5rem, 5vw, 5rem)',
        paddingBottom: 'clamp(2rem, 4vw, 2.5rem)',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
            paddingBottom: 'clamp(2rem, 4vw, 3.5rem)',
            borderBottom: '1px solid rgba(247, 240, 231, 0.08)',
          }}
        >
          {/* Brand & Concept Identity Column */}
          <div style={{ minWidth: 0 }}>
            <div className="wordmark" style={{ marginBottom: '1rem' }}>
              <span>CAFE</span>
              <span className="wordmark-num">49</span>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--color-taupe)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Casual fast food café serving artisanal burgers, stone-baked pizzas, wraps, Indo-Chinese
              specialties, and specialty iced brews in Samrala, Punjab.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                color: 'var(--color-amber)',
                backgroundColor: 'rgba(243, 182, 74, 0.08)',
                padding: '0.35rem 0.65rem',
                borderRadius: '4px',
                border: '1px solid rgba(243, 182, 74, 0.2)',
                lineHeight: 1.35,
              }}
            >
              <span>Design Concept by {cafeConfig.transparency.creator}</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div style={{ minWidth: 0 }}>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.9375rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-cream)',
                marginBottom: '1rem',
              }}
            >
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-taupe)',
                      transition: 'color var(--transition-fast)',
                      display: 'inline-block',
                      padding: '0.15rem 0',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-amber)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-taupe)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Venue Column */}
          <div style={{ minWidth: 0 }}>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.9375rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-cream)',
                marginBottom: '1rem',
              }}
            >
              Location & Access
            </h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-taupe)', lineHeight: 1.6, marginBottom: '0.85rem' }}>
              <strong>Cafe 49</strong>
              <br />
              Global Market, Global Tower,
              <br />
              Khanna–Samrala Road, Samrala,
              <br />
              Punjab 141114, India
            </p>

            <a
              href={cafeConfig.location.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8125rem',
                fontWeight: 700,
                color: 'var(--color-tomato)',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
              }}
            >
              <MapPin size={14} flexShrink={0} />
              <span>Directions on Google Maps</span>
            </a>
          </div>

          {/* Social & Contact Config Column */}
          <div style={{ minWidth: 0 }}>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.9375rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-cream)',
                marginBottom: '1rem',
              }}
            >
              Social Channels
            </h4>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-taupe)', marginBottom: '1rem' }}>
              Configurable profiles. Update in <code>cafeConfig.js</code>.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <a
                href={cafeConfig.contact.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
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
                  transition: 'background-color 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-tomato)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-espresso-surface)')}
              >
                <InstagramIcon size={18} />
              </a>

              <a
                href={cafeConfig.contact.social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook page"
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
                  transition: 'background-color 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-tomato)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-espresso-surface)')}
              >
                <FacebookIcon size={18} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="btn btn-secondary"
              style={{ padding: '0.55rem 1rem', fontSize: '0.75rem', gap: '0.4rem', minHeight: '38px' }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Legal, Disclaimer & TerraNova Credits */}
        <div
          style={{
            paddingTop: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.8125rem',
            color: 'var(--color-taupe)',
          }}
          className="footer-bottom-row"
        >
          <div style={{ textAlign: 'center' }}>
            <p style={{ margin: 0 }}>
              &copy; {currentYear} <strong>Cafe 49</strong>, Samrala. Independent digital concept engineered by{' '}
              <strong style={{ color: 'var(--color-cream)' }}>TerraNova</strong>.
            </p>
          </div>

          <div style={{ textAlign: 'center', maxWidth: '720px' }}>
            <p style={{ fontSize: '0.75rem', color: 'rgba(169, 154, 141, 0.7)', margin: 0, lineHeight: 1.5 }}>
              Disclaimer: This web project is an independent creative and technical proposal created by TerraNova.
              It is not officially commissioned or authorized by Cafe 49 ownership.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-bottom-row {
            flex-direction: row !important;
            text-align: left !important;
          }
          .footer-bottom-row > div {
            text-align: left !important;
          }
        }
      `}</style>
    </footer>
  );
}
