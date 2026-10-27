import React, { useState, useMemo } from 'react';
import { Search, X, AlertCircle, RotateCcw } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../config/menuData';
import FoodImage from './FoodImage';

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Combined search and category filtering
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const queryNormalized = searchQuery.trim().toLowerCase();
      const matchesSearch =
        queryNormalized === '' ||
        item.name.toLowerCase().includes(queryNormalized) ||
        (item.description && item.description.toLowerCase().includes(queryNormalized)) ||
        (item.categoryLabel && item.categoryLabel.toLowerCase().includes(queryNormalized));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <section
      id="menu"
      style={{
        paddingTop: 'clamp(3rem, 5vw, 6rem)',
        paddingBottom: 'clamp(3.5rem, 6vw, 7rem)',
        borderBottom: '1px solid var(--color-espresso-border)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', margin: '0 auto clamp(2rem, 4vw, 3rem) auto' }}>
          <span className="section-label">Interactive Menu Explorer</span>
          <h2 className="section-title" style={{ margin: '0 auto' }}>
            Discover the Cafe 49 Spread
          </h2>
          <p className="section-subtitle" style={{ margin: '0.85rem auto 0 auto' }}>
            Browse through candidate items compiled from public listings. Filter by category or search by dish name.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div
          style={{
            backgroundColor: 'var(--color-espresso-surface)',
            border: '1px solid var(--color-espresso-border)',
            borderRadius: '10px',
            padding: 'clamp(1rem, 2.5vw, 1.25rem)',
            marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {/* Search Bar Input */}
          <div style={{ position: 'relative', width: '100%' }}>
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--color-taupe)',
                pointerEvents: 'none',
              }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g. Pizza, Burger, Coffee)..."
              aria-label="Search menu items"
              style={{
                width: '100%',
                padding: '0.85rem 2.5rem 0.85rem 2.85rem',
                backgroundColor: 'var(--color-espresso)',
                border: '1px solid rgba(247, 240, 231, 0.14)',
                borderRadius: '6px',
                color: 'var(--color-cream)',
                fontSize: '0.9375rem',
                outline: 'none',
                transition: 'border-color var(--transition-fast)',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--color-amber)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(247, 240, 231, 0.14)')}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search input"
                style={{
                  position: 'absolute',
                  right: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--color-taupe)',
                  padding: '0.35rem',
                  borderRadius: '3px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Filter Pills (Horizontal Scrollable with Smooth Momentum) */}
          <div
            className="menu-categories-scroll"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              overflowX: 'auto',
              paddingBottom: '0.35rem',
              paddingTop: '0.1rem',
              scrollbarWidth: 'none',
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-x',
            }}
          >
            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  type="button"
                  style={{
                    whiteSpace: 'nowrap',
                    padding: '0.55rem 0.95rem',
                    borderRadius: '6px',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    letterSpacing: '0.01em',
                    transition: 'all var(--transition-fast)',
                    backgroundColor: isActive ? 'var(--color-tomato)' : 'var(--color-espresso-card)',
                    color: isActive ? 'var(--color-cream)' : 'var(--color-taupe-light)',
                    border: `1px solid ${isActive ? 'var(--color-tomato)' : 'rgba(247, 240, 231, 0.1)'}`,
                    flexShrink: 0,
                    minHeight: '38px',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--color-cream)';
                      e.currentTarget.style.borderColor = 'rgba(247, 240, 231, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--color-taupe-light)';
                      e.currentTarget.style.borderColor = 'rgba(247, 240, 231, 0.1)';
                    }
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Result Count Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.8125rem',
              color: 'var(--color-taupe)',
              paddingTop: '0.5rem',
              borderTop: '1px solid rgba(247, 240, 231, 0.06)',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <span style={{ minWidth: 0, overflowWrap: 'break-word' }}>
              Showing <strong style={{ color: 'var(--color-cream)' }}>{filteredItems.length}</strong> items
              {searchQuery && (
                <span>
                  {' '}
                  matching &ldquo;<span style={{ color: 'var(--color-amber)' }}>{searchQuery}</span>&rdquo;
                </span>
              )}
            </span>

            {(selectedCategory !== 'all' || searchQuery !== '') && (
              <button
                type="button"
                onClick={handleResetFilters}
                style={{
                  color: 'var(--color-amber)',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.2rem 0',
                }}
              >
                <RotateCcw size={13} />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: 'clamp(2.5rem, 6vw, 4rem) 1.5rem',
              backgroundColor: 'var(--color-espresso-surface)',
              borderRadius: '8px',
              border: '1px dashed var(--color-espresso-border)',
              maxWidth: '520px',
              margin: '0 auto',
            }}
          >
            <AlertCircle size={36} style={{ color: 'var(--color-amber)', margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-cream)', marginBottom: '0.5rem' }}>
              No dishes found
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-taupe)', marginBottom: '1.5rem' }}>
              We could not find any items matching &ldquo;{searchQuery}&rdquo; in this category.
            </p>
            <button
              onClick={handleResetFilters}
              type="button"
              className="btn btn-secondary"
              style={{ fontSize: '0.875rem', padding: '0.65rem 1.25rem' }}
            >
              <RotateCcw size={15} />
              <span>Show All Dishes</span>
            </button>
          </div>
        ) : (
          /* Menu Grid */
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
              gap: 'clamp(1rem, 2.5vw, 1.5rem)',
            }}
          >
            {filteredItems.map((dish) => (
              <article
                key={dish.id}
                style={{
                  backgroundColor: 'var(--color-espresso-card)',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  border: '1px solid rgba(247, 240, 231, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color var(--transition-fast), transform var(--transition-fast)',
                  minWidth: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(247, 240, 231, 0.25)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(247, 240, 231, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Dish Image */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16 / 10',
                    backgroundColor: 'var(--color-espresso)',
                    overflow: 'hidden',
                  }}
                >
                  <FoodImage
                    src={dish.imageUrl}
                    fallbackSrc={dish.fallbackUrl || "/images/food-fallback.svg"}
                    alt={dish.name}
                    category={dish.category}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  {dish.isSpecial && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '0.55rem',
                        left: '0.55rem',
                        backgroundColor: 'var(--color-tomato)',
                        color: 'var(--color-cream)',
                        fontSize: '0.6875rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        padding: '0.2rem 0.45rem',
                        borderRadius: '3px',
                      }}
                    >
                      Special
                    </span>
                  )}

                  <span
                    style={{
                      position: 'absolute',
                      bottom: '0.55rem',
                      right: '0.55rem',
                      backgroundColor: 'rgba(23, 17, 15, 0.9)',
                      border: '1px solid rgba(247, 240, 231, 0.15)',
                      color: 'var(--color-cream-muted)',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.5rem',
                      borderRadius: '3px',
                    }}
                  >
                    {dish.priceDisplay}
                  </span>
                </div>

                {/* Dish Info */}
                <div
                  style={{
                    padding: 'clamp(0.9rem, 2vw, 1.15rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    justifyContent: 'space-between',
                    minWidth: 0,
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.5rem',
                        marginBottom: '0.35rem',
                        flexWrap: 'wrap',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.6875rem',
                          textTransform: 'uppercase',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          color: 'var(--color-amber)',
                        }}
                      >
                        {dish.categoryLabel}
                      </span>
                      <span
                        style={{
                          fontSize: '0.6875rem',
                          color: 'var(--color-taupe)',
                        }}
                      >
                        {dish.dietary}
                      </span>
                    </div>

                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.05rem, 2vw, 1.15rem)',
                        fontWeight: 800,
                        color: 'var(--color-cream)',
                        marginBottom: '0.4rem',
                        lineHeight: 1.25,
                      }}
                    >
                      {dish.name}
                    </h4>

                    <p
                      style={{
                        fontSize: '0.8125rem',
                        color: 'var(--color-taupe)',
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {dish.description}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: '0.85rem',
                      paddingTop: '0.65rem',
                      borderTop: '1px solid rgba(247, 240, 231, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        color: 'var(--color-taupe)',
                        fontStyle: 'italic',
                      }}
                    >
                      Public listing item
                    </span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--color-amber)',
                        fontWeight: 600,
                      }}
                    >
                      Ask at counter
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Menu Transparency Note */}
        <div
          style={{
            marginTop: 'clamp(2rem, 4vw, 3rem)',
            padding: '1rem 1.25rem',
            backgroundColor: 'var(--color-espresso-surface)',
            border: '1px dashed rgba(243, 182, 74, 0.25)',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
          }}
        >
          <AlertCircle size={18} style={{ color: 'var(--color-amber)', flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-taupe-light)', margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: 'var(--color-cream)' }}>Notice regarding menu & pricing:</strong> The items
            above represent dishes extracted from public web listings for <strong>Cafe 49</strong>. Current daily
            availability, specials, and prices should be confirmed directly with the café upon visiting.
          </p>
        </div>
      </div>

      <style>{`
        .menu-categories-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
