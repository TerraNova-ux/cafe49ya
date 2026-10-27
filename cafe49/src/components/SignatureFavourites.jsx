import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SIGNATURE_FAVOURITES } from '../config/menuData';
import FoodImage from './FoodImage';

export default function SignatureFavourites() {
  const scrollToMenu = () => {
    const el = document.querySelector('#menu');
    if (el) {
      const navOffset = 76;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="signature"
      style={{
        paddingTop: 'clamp(3rem, 5vw, 6rem)',
        paddingBottom: 'clamp(3rem, 5vw, 6rem)',
        backgroundColor: 'var(--color-espresso-surface)',
        borderBottom: '1px solid var(--color-espresso-border)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}
          className="signature-header-row"
        >
          <div>
            <span className="section-label">Signature Highlights</span>
            <h2 className="section-title">Popular Candidate Bites</h2>
            <p className="section-subtitle">
              Frequently noted items across public listings for Cafe 49. Handcrafted to order
              with fresh ingredients and robust café seasoning.
            </p>
          </div>

          <div className="signature-cta-wrap" style={{ alignSelf: 'flex-start' }}>
            <button
              onClick={scrollToMenu}
              className="btn btn-secondary signature-btn"
              style={{
                fontSize: '0.875rem',
                padding: '0.75rem 1.4rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>Explore All 38 Items</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(1.25rem, 3vw, 1.75rem)',
          }}
        >
          {SIGNATURE_FAVOURITES.map((item) => (
            <article
              key={item.id}
              style={{
                backgroundColor: 'var(--color-espresso-card)',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(247, 240, 231, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal)',
                minWidth: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'rgba(243, 182, 74, 0.3)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 0, 0, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(247, 240, 231, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Image Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16 / 10',
                  overflow: 'hidden',
                  backgroundColor: 'var(--color-espresso)',
                }}
              >
                <FoodImage
                  src={item.imageUrl}
                  fallbackSrc={item.fallbackUrl || "/images/food-fallback.svg"}
                  alt={item.imageAlt || item.name}
                  category={item.category}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
                />

                {/* Tag Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    left: '0.75rem',
                  }}
                >
                  <span className="badge-tag badge-amber">{item.tag}</span>
                </div>

                {/* Price Display */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    right: '0.75rem',
                  }}
                >
                  <span
                    style={{
                      backgroundColor: 'rgba(23, 17, 15, 0.9)',
                      border: '1px solid rgba(247, 240, 231, 0.16)',
                      color: 'var(--color-cream)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.6rem',
                      borderRadius: '4px',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {item.priceDisplay}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: 'clamp(1rem, 2.5vw, 1.35rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                  minWidth: 0,
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.15rem, 2.5vw, 1.3rem)',
                      fontWeight: 800,
                      color: 'var(--color-cream)',
                      marginBottom: '0.5rem',
                      lineHeight: 1.25,
                    }}
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      lineHeight: 1.55,
                      color: 'var(--color-taupe)',
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.25rem',
                    paddingTop: '0.85rem',
                    borderTop: '1px solid rgba(247, 240, 231, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.6875rem',
                      color: 'var(--color-taupe)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      fontWeight: 600,
                    }}
                  >
                    Public Listing Item
                  </span>

                  <button
                    onClick={scrollToMenu}
                    style={{
                      fontSize: '0.8125rem',
                      color: 'var(--color-amber)',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      padding: '0.25rem 0',
                    }}
                  >
                    <span>View in Menu</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .signature-cta-wrap {
            align-self: stretch !important;
          }
          .signature-btn {
            width: 100% !important;
          }
        }
        @media (min-width: 768px) {
          .signature-header-row {
            flex-direction: row !important;
            align-items: flex-end !important;
          }
        }
      `}</style>
    </section>
  );
}
