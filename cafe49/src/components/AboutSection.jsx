import React from 'react';
import { Coffee, Utensils } from 'lucide-react';

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        paddingTop: 'clamp(3rem, 5vw, 6rem)',
        paddingBottom: 'clamp(3rem, 5vw, 6rem)',
        backgroundColor: 'var(--color-espresso-surface)',
        borderBottom: '1px solid var(--color-espresso-border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: 'clamp(2rem, 5vw, 4.5rem)',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Visual Storytelling Collage */}
          <div style={{ position: 'relative', width: '100%', minWidth: 0 }}>
            {/* Primary Image */}
            <div
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(247, 240, 231, 0.12)',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.5)',
                width: '100%',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
                alt="Cozy café interior atmosphere with warm lighting and comfortable seating"
                loading="lazy"
                style={{
                  width: '100%',
                  aspectRatio: '4 / 3',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Overlapping secondary image card (Visible on tablets and desktop, positioned safely) */}
            <div
              style={{
                position: 'absolute',
                bottom: '-1.5rem',
                right: '0',
                width: '52%',
                borderRadius: '6px',
                overflow: 'hidden',
                border: '3px solid var(--color-espresso-surface)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.7)',
                display: 'none',
              }}
              className="about-secondary-img"
            >
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80"
                alt="Barista brewing coffee"
                loading="lazy"
                style={{
                  width: '100%',
                  aspectRatio: '16 / 10',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div style={{ minWidth: 0 }}>
            <span className="section-label">The Cafe 49 Experience</span>
            <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
              A Casual Destination for Food & Conversations
            </h2>

            <p style={{ fontSize: 'clamp(0.9375rem, 2vw, 1.05rem)', lineHeight: '1.7', color: 'var(--color-cream-muted)', marginBottom: '1.25rem' }}>
              Located at <strong>Global Tower</strong> on the Khanna–Samrala Road, <strong>Cafe 49</strong> is
              tailored for everyday moments — whether you are stopping by for a quick roadside coffee break,
              grabbing hot pizza slices after classes, or settling in with friends over shakes and loaded burgers.
            </p>

            <p style={{ fontSize: 'clamp(0.875rem, 1.8vw, 0.95rem)', lineHeight: '1.65', color: 'var(--color-taupe)', marginBottom: '2rem' }}>
              Our concept focuses on the genuine spirit of casual dining: freshly prepared fast food, aromatic
              coffees, wok-tossed street specialties, and a relaxed environment where you are never rushed.
            </p>

            {/* Value Pillars (Truthful & Focused on Real Attributes) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  padding: 'clamp(0.9rem, 2.5vw, 1.15rem)',
                  backgroundColor: 'var(--color-espresso-card)',
                  borderRadius: '6px',
                  border: '1px solid rgba(247, 240, 231, 0.08)',
                  minWidth: 0,
                }}
              >
                <div style={{ color: 'var(--color-tomato)', marginBottom: '0.45rem' }}>
                  <Utensils size={22} />
                </div>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--color-cream)', marginBottom: '0.25rem' }}>
                  Handcrafted Comfort
                </h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-taupe)', margin: 0 }}>
                  Pizzas, burgers, and wraps prepared fresh to satisfy spontaneous cravings.
                </p>
              </div>

              <div
                style={{
                  padding: 'clamp(0.9rem, 2.5vw, 1.15rem)',
                  backgroundColor: 'var(--color-espresso-card)',
                  borderRadius: '6px',
                  border: '1px solid rgba(247, 240, 231, 0.08)',
                  minWidth: 0,
                }}
              >
                <div style={{ color: 'var(--color-amber)', marginBottom: '0.45rem' }}>
                  <Coffee size={22} />
                </div>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--color-cream)', marginBottom: '0.25rem' }}>
                  Sip & Refresh
                </h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-taupe)', margin: 0 }}>
                  Hot espressos, chilled cold coffees, thick dessert shakes, and coolers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-secondary-img {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
