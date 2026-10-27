import React from 'react';
import { ArrowDownRight, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
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
      id="home"
      style={{
        position: 'relative',
        paddingTop: 'clamp(2rem, 4vw, 4.5rem)',
        paddingBottom: 'clamp(3rem, 6vw, 6rem)',
        overflow: 'hidden',
        borderBottom: '1px solid var(--color-espresso-border)',
      }}
    >
      {/* Background ambient architectural tint */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '55vw',
          height: '55vw',
          maxWidth: '750px',
          maxHeight: '750px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217, 75, 56, 0.08) 0%, rgba(243, 182, 74, 0.03) 45%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Asymmetrical Grid: Left Column Text & Positioning, Right Column Food Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: 'clamp(2rem, 5vw, 4.5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Bold Editorial Content */}
          <div style={{ minWidth: 0 }}>
            {/* Samrala Location & Category pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--color-espresso-surface)',
                border: '1px solid var(--color-espresso-border)',
                padding: '0.35rem 0.75rem',
                borderRadius: '50px',
                fontSize: 'clamp(0.75rem, 2vw, 0.8125rem)',
                fontWeight: 600,
                color: 'var(--color-taupe-light)',
                marginBottom: '1.25rem',
                flexWrap: 'wrap',
                maxWidth: '100%',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  color: 'var(--color-tomato)',
                }}
              >
                <MapPin size={14} style={{ flexShrink: 0 }} />
                <span>Samrala, Punjab</span>
              </span>
              <span style={{ color: 'var(--color-espresso-border)' }}>•</span>
              <span style={{ color: 'var(--color-amber)' }}>Casual Café & Fast Food</span>
            </div>

            {/* Giant Display Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.1rem, 7vw, 4.5rem)',
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                color: 'var(--color-cream)',
                marginBottom: '1.25rem',
                wordBreak: 'break-word',
              }}
            >
              Your Next{' '}
              <span
                style={{
                  color: 'var(--color-tomato)',
                  fontStyle: 'italic',
                  fontFamily: 'var(--font-display)',
                  display: 'inline-block',
                }}
              >
                Favourite
              </span>{' '}
              Bite.
            </h1>

            {/* Truthful supporting copy */}
            <p
              style={{
                fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
                lineHeight: 1.65,
                color: 'var(--color-taupe-light)',
                maxWidth: '48ch',
                marginBottom: '2rem',
              }}
            >
              Step into <strong>Cafe 49</strong> at Global Tower. From fresh stone-baked pizzas
              and stacked burgers to wok-tossed noodles, crunchy wraps, and creamy cold brews —
              made for casual afternoons and comfortable catch-ups.
            </p>

            {/* Action Buttons */}
            <div
              className="hero-btn-group"
              style={{
                display: 'flex',
                alignItems: 'stretch',
                gap: '0.85rem',
                flexWrap: 'wrap',
                marginBottom: '2.25rem',
              }}
            >
              <button
                type="button"
                onClick={() => scrollTo('#menu')}
                className="btn btn-primary hero-btn"
                style={{ fontSize: '0.9375rem', padding: '0.9rem 1.75rem' }}
              >
                <span>Explore the Menu</span>
                <ArrowDownRight size={18} />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('#location')}
                className="btn btn-secondary hero-btn"
                style={{ fontSize: '0.9375rem', padding: '0.9rem 1.5rem' }}
              >
                <span>Find Us in Samrala</span>
              </button>
            </div>

            {/* Quick Experience Feature Strip */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 105px), 1fr))',
                gap: 'clamp(0.75rem, 2vw, 1rem)',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--color-espresso-border)',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
                    fontWeight: 800,
                    color: 'var(--color-amber)',
                    lineHeight: 1.2,
                  }}
                >
                  Global Tower
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-taupe)' }}>
                  Khanna–Samrala Rd
                </span>
              </div>

              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
                    fontWeight: 800,
                    color: 'var(--color-cream)',
                    lineHeight: 1.2,
                  }}
                >
                  Fresh Bites
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-taupe)' }}>
                  Burgers, Pizza & Wraps
                </span>
              </div>

              <div>
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
                    fontWeight: 800,
                    color: 'var(--color-cream)',
                    lineHeight: 1.2,
                  }}
                >
                  Hot & Chilled
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-taupe)' }}>
                  Espressos & Shakes
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Food Showcase */}
          <div style={{ position: 'relative', width: '100%', minWidth: 0 }}>
            {/* Primary Main Food Image Frame */}
            <div
              style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
                border: '1px solid rgba(247, 240, 231, 0.14)',
                backgroundColor: 'var(--color-espresso-card)',
                width: '100%',
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmzQgPtejucCKyVLvk-_kNsCgT9TcrTzpCt2LVBY7Nert9M7-iAqfn3KsE&s=10"
                alt="Stacked artisanal burger with melted cheese and fresh crisp lettuce"
                style={{
                  width: '100%',
                  aspectRatio: '4 / 3.2',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
              />

              {/* Gradient Overlay for Text Legibility */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(23, 17, 15, 0.88) 0%, rgba(23, 17, 15, 0) 50%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Overlay Caption on main image */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 'clamp(0.75rem, 2vw, 1.25rem)',
                  left: 'clamp(0.75rem, 2vw, 1.25rem)',
                  right: 'clamp(0.75rem, 2vw, 1.25rem)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  gap: '0.5rem',
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-amber)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    Candidate Item Highlight
                  </span>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                      fontWeight: 800,
                      color: 'var(--color-cream)',
                      lineHeight: 1.2,
                      margin: 0,
                    }}
                  >
                    Special 49 Burger
                  </p>
                </div>
                <span
                  style={{
                    backgroundColor: 'rgba(23, 17, 15, 0.9)',
                    border: '1px solid rgba(247, 240, 231, 0.2)',
                    color: 'var(--color-cream)',
                    fontSize: 'clamp(0.6875rem, 2vw, 0.8125rem)',
                    fontWeight: 700,
                    padding: '0.3rem 0.55rem',
                    borderRadius: '4px',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  Ask for price
                </span>
              </div>
            </div>

            {/* Floating Asymmetrical Side Card: Cold Coffee & Shakes (Visible on desktop & tablet) */}
            <div
              style={{
                position: 'absolute',
                bottom: '-1.5rem',
                left: '-1rem',
                maxWidth: '220px',
                backgroundColor: 'var(--color-espresso-surface)',
                border: '1px solid rgba(247, 240, 231, 0.16)',
                borderRadius: '8px',
                padding: '0.75rem',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
                display: 'none',
                zIndex: 2,
              }}
              className="floating-hero-card"
            >
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <img
                  src="https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=300&q=80"
                  alt="Iced cold coffee"
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '6px',
                    objectFit: 'cover',
                    flexShrink: 0,
                  }}
                />
                <div>
                  <span
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.9375rem',
                      fontWeight: 800,
                      color: 'var(--color-cream)',
                      lineHeight: 1.2,
                    }}
                  >
                    Cold Coffee
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--color-taupe)',
                    }}
                  >
                    Whipped & Chilled
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .hero-btn {
            width: 100% !important;
          }
        }
        @media (min-width: 768px) {
          .floating-hero-card {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
