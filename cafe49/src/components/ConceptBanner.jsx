import React, { useState } from 'react';
import { Info, X } from 'lucide-react';
import { cafeConfig } from '../config/cafeConfig';

export default function ConceptBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside
      aria-label="Website Concept Notice"
      style={{
        backgroundColor: '#201917',
        borderBottom: '1px solid rgba(243, 182, 74, 0.25)',
        color: 'var(--color-cream-muted)',
        fontSize: 'clamp(0.75rem, 1.8vw, 0.8125rem)',
        padding: '0.5rem 0.75rem',
        position: 'relative',
        zIndex: 60,
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: '1 1 auto', minWidth: 0 }}>
          <Info size={15} style={{ color: 'var(--color-amber)', flexShrink: 0 }} />
          <span style={{ lineHeight: 1.45, wordBreak: 'break-word' }}>
            <strong style={{ color: 'var(--color-cream)' }}>Concept Showcase by {cafeConfig.transparency.creator}:</strong>{' '}
            Bespoke design concept for <strong>{cafeConfig.name}</strong>, Samrala. Candidate listings displayed for review.
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <a
            href="#location"
            style={{
              color: 'var(--color-amber)',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              fontWeight: 600,
              fontSize: '0.75rem',
            }}
          >
            Review Details
          </a>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss concept announcement"
            style={{
              color: 'var(--color-taupe)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              minWidth: '36px',
              minHeight: '36px',
              borderRadius: '4px',
              transition: 'color 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-cream)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-taupe)')}
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}
