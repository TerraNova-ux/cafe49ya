import React, { useState } from 'react';
import { Utensils, Coffee } from 'lucide-react';

export default function FoodImage({
  src,
  alt = 'Cafe 49 food item',
  fallbackSrc = '/images/food-fallback.svg',
  category = '',
  loading = 'lazy',
  className = '',
  style = {},
  onMouseEnter,
  onMouseLeave,
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setFailed(true);
    }
  };

  // If both primary and fallback fail, show sleek branded graphic placeholder
  if (failed) {
    return (
      <div
        className={`food-image-placeholder ${className}`}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1f1917',
          backgroundImage: 'radial-gradient(circle at 50% 40%, rgba(217, 75, 56, 0.16) 0%, rgba(23, 17, 15, 0.98) 100%)',
          color: 'var(--color-cream)',
          padding: '1rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          ...style,
        }}
      >
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: 'rgba(243, 182, 74, 0.12)',
            border: '1px solid rgba(243, 182, 74, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-amber)',
            marginBottom: '0.45rem',
          }}
        >
          {category === 'beverages' ? <Coffee size={20} /> : <Utensils size={20} />}
        </div>
        <span
          style={{
            fontSize: '0.8125rem',
            fontWeight: 700,
            color: 'var(--color-cream)',
            lineHeight: 1.25,
            maxWidth: '18ch',
          }}
        >
          {alt}
        </span>
        <span
          style={{
            fontSize: '0.6875rem',
            color: 'var(--color-amber)',
            marginTop: '0.25rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontWeight: 700,
          }}
        >
          Cafe 49 Selection
        </span>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading={loading}
      onError={handleError}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        ...style,
      }}
    />
  );
}
