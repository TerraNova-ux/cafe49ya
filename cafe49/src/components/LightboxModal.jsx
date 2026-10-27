import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 110,
        backgroundColor: 'rgba(15, 10, 8, 0.94)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(0.5rem, 2vw, 1.25rem)',
      }}
      onClick={onClose}
    >
      {/* Lightbox Container */}
      <div
        style={{
          position: 'relative',
          maxWidth: '960px',
          width: '100%',
          backgroundColor: 'var(--color-espresso-surface)',
          border: '1px solid rgba(247, 240, 231, 0.16)',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 30px 70px rgba(0, 0, 0, 0.8)',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '92vh',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.75rem clamp(0.75rem, 2.5vw, 1.25rem)',
            borderBottom: '1px solid var(--color-espresso-border)',
            gap: '0.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', minWidth: 0 }}>
            <span className="badge-tag badge-amber">{item.category}</span>
            <span
              style={{
                fontSize: '0.75rem',
                color: 'var(--color-taupe)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              Concept Photography
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            style={{
              color: 'var(--color-cream)',
              width: '40px',
              height: '40px',
              minWidth: '40px',
              minHeight: '40px',
              borderRadius: '6px',
              backgroundColor: 'var(--color-espresso-card)',
              border: '1px solid var(--color-espresso-border)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Central Image View with Navigation Controls */}
        <div
          style={{
            position: 'relative',
            maxHeight: '62vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0d0908',
            overflow: 'hidden',
          }}
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            style={{
              maxWidth: '100%',
              maxHeight: '62vh',
              objectFit: 'contain',
              display: 'block',
            }}
          />

          {/* Prev Button */}
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous image"
            style={{
              position: 'absolute',
              left: 'clamp(0.35rem, 1.5vw, 1rem)',
              top: '50%',
              transform: 'translateY(-50%)',
              width: 'clamp(36px, 6vw, 44px)',
              height: 'clamp(36px, 6vw, 44px)',
              borderRadius: '50%',
              backgroundColor: 'rgba(23, 17, 15, 0.82)',
              border: '1px solid rgba(247, 240, 231, 0.25)',
              color: 'var(--color-cream)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 3,
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={onNext}
            aria-label="Next image"
            style={{
              position: 'absolute',
              right: 'clamp(0.35rem, 1.5vw, 1rem)',
              top: '50%',
              transform: 'translateY(-50%)',
              width: 'clamp(36px, 6vw, 44px)',
              height: 'clamp(36px, 6vw, 44px)',
              borderRadius: '50%',
              backgroundColor: 'rgba(23, 17, 15, 0.82)',
              border: '1px solid rgba(247, 240, 231, 0.25)',
              color: 'var(--color-cream)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 3,
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Bottom Details Footer */}
        <div
          style={{
            padding: 'clamp(0.85rem, 2vw, 1.25rem) clamp(0.75rem, 2.5vw, 1.25rem)',
            borderTop: '1px solid var(--color-espresso-border)',
            backgroundColor: 'var(--color-espresso-card)',
            overflowY: 'auto',
          }}
        >
          <h4
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
              fontWeight: 800,
              color: 'var(--color-cream)',
              marginBottom: '0.2rem',
              lineHeight: 1.25,
            }}
          >
            {item.title}
          </h4>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-taupe)', margin: 0, lineHeight: 1.5 }}>
            {item.caption}
          </p>
        </div>
      </div>
    </div>
  );
}
