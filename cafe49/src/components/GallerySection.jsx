import React, { useState } from 'react';
import { Maximize2, Camera } from 'lucide-react';
import { GALLERY_ITEMS } from '../config/galleryData';
import LightboxModal from './LightboxModal';

export default function GallerySection() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const openLightbox = (index) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const showPrev = () => {
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1));
  };

  const showNext = () => {
    setActiveImageIndex((prev) => (prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="gallery"
      style={{
        paddingTop: 'clamp(3rem, 5vw, 6rem)',
        paddingBottom: 'clamp(3rem, 5vw, 6rem)',
        backgroundColor: 'var(--color-espresso-surface)',
        borderBottom: '1px solid var(--color-espresso-border)',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', margin: '0 auto clamp(2rem, 4vw, 3rem) auto' }}>
          <span className="section-label">Atmosphere & Visuals</span>
          <h2 className="section-title" style={{ margin: '0 auto' }}>
            The Food & Ambience Gallery
          </h2>
          <p className="section-subtitle" style={{ margin: '0.85rem auto 0 auto' }}>
            Explore illustrative visual styling of our signature fast food staples, freshly brewed coffee, and casual café vibe.
          </p>
        </div>

        {/* Gallery Grid with varied aspect ratios */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
            gap: 'clamp(0.85rem, 2vw, 1.25rem)',
          }}
        >
          {GALLERY_ITEMS.map((item, index) => {
            const aspectRatio = item.aspect === 'tall' ? '4 / 5' : item.aspect === 'wide' ? '16 / 10' : '1 / 1';

            return (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                onClick={() => openLightbox(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
                aria-label={`View ${item.title}`}
                style={{
                  position: 'relative',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  aspectRatio: aspectRatio,
                  backgroundColor: 'var(--color-espresso-card)',
                  border: '1px solid rgba(247, 240, 231, 0.08)',
                  cursor: 'pointer',
                  transition: 'transform var(--transition-normal), border-color var(--transition-normal)',
                  minWidth: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.borderColor = 'rgba(243, 182, 74, 0.4)';
                  const overlay = e.currentTarget.querySelector('.gallery-overlay');
                  if (overlay) overlay.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(247, 240, 231, 0.08)';
                  const overlay = e.currentTarget.querySelector('.gallery-overlay');
                  if (overlay) overlay.style.opacity = '0';
                }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />

                {/* Mobile permanent touch badge */}
                <div
                  className="gallery-mobile-badge"
                  style={{
                    position: 'absolute',
                    bottom: '0.5rem',
                    left: '0.5rem',
                    right: '0.5rem',
                    backgroundColor: 'rgba(23, 17, 15, 0.85)',
                    padding: '0.35rem 0.6rem',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--color-cream)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item.title}
                  </span>
                  <Maximize2 size={13} style={{ color: 'var(--color-amber)', flexShrink: 0, marginLeft: '0.35rem' }} />
                </div>

                {/* Hover overlay with title & expand icon on desktop */}
                <div
                  className="gallery-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(23, 17, 15, 0.78)',
                    opacity: 0,
                    transition: 'opacity 0.25s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '1.25rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <span
                      style={{
                        padding: '0.4rem',
                        backgroundColor: 'var(--color-tomato)',
                        color: 'var(--color-cream)',
                        borderRadius: '4px',
                        display: 'inline-flex',
                        alignItems: 'center',
                      }}
                    >
                      <Maximize2 size={16} />
                    </span>
                  </div>

                  <div>
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--color-amber)',
                        display: 'block',
                        marginBottom: '0.2rem',
                      }}
                    >
                      {item.category}
                    </span>
                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        color: 'var(--color-cream)',
                        lineHeight: 1.2,
                      }}
                    >
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Replacement Note */}
        <div
          style={{
            marginTop: 'clamp(1.5rem, 3vw, 2.5rem)',
            padding: '0.85rem 1.15rem',
            backgroundColor: 'var(--color-espresso-card)',
            border: '1px solid rgba(247, 240, 231, 0.08)',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.8125rem',
            color: 'var(--color-taupe)',
            lineHeight: 1.5,
          }}
        >
          <Camera size={16} style={{ color: 'var(--color-amber)', flexShrink: 0 }} />
          <span>
            <strong>Asset Customization Note:</strong> All images above are conceptual placeholders. Simply update
            <code style={{ color: 'var(--color-amber)', margin: '0 0.3rem' }}>galleryData.js</code>
            with real interior and dish photographs taken at Cafe 49.
          </span>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .gallery-mobile-badge {
            display: none !important;
          }
        }
      `}</style>

      {/* Lightbox Modal Component */}
      {activeImageIndex !== null && (
        <LightboxModal
          item={GALLERY_ITEMS[activeImageIndex]}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </section>
  );
}
