import React from 'react';
import { Coffee, Users, Bike, CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      num: "01",
      title: "Café Food & Quick Bites",
      desc: "From crispy tandoori paneer pizzas to towering burgers, grilled sandwiches, and peri peri fries — hearty comfort food made to order.",
      tag: "Freshly Prepared",
      accent: "var(--color-tomato)",
      icon: Users
    },
    {
      num: "02",
      title: "Coffee & Cold Beverages",
      desc: "Rich espresso brews, frothy cappuccinos, velvety cold coffee, and thick shakes crafted for refreshing afternoons.",
      tag: "Hot & Chilled",
      accent: "var(--color-amber)",
      icon: Coffee
    },
    {
      num: "03",
      title: "Casual Meetups",
      desc: "A relaxed, contemporary hangout spot in Samrala where you can chat with friends, study, or enjoy a peaceful bite.",
      tag: "Community Space",
      accent: "var(--color-cream)",
      icon: Users
    },
    {
      num: "04",
      title: "Takeaway & Delivery",
      desc: "Grab-and-go packaging for quick road stops on Khanna–Samrala Road. Doorstep delivery options are subject to local confirmation.",
      tag: "Subject to confirmation",
      tagWarning: true,
      accent: "var(--color-taupe-light)",
      icon: Bike
    }
  ];

  return (
    <section
      id="experience"
      style={{
        paddingTop: 'clamp(3rem, 5vw, 6rem)',
        paddingBottom: 'clamp(3rem, 5vw, 6rem)',
        borderBottom: '1px solid var(--color-espresso-border)',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '640px', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}>
          <span className="section-label">Atmosphere & Offerings</span>
          <h2 className="section-title">Built for Real Moments</h2>
          <p className="section-subtitle">
            Whether you have ten minutes between stops or a leisurely afternoon to spare, Cafe 49 is set up to accommodate your pace.
          </p>
        </div>

        {/* 2x2 Editorial Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: 'clamp(1rem, 2.5vw, 1.75rem)',
          }}
        >
          {experiences.map((exp) => (
            <div
              key={exp.num}
              style={{
                backgroundColor: 'var(--color-espresso-surface)',
                border: '1px solid var(--color-espresso-border)',
                borderRadius: '8px',
                padding: 'clamp(1.25rem, 3vw, 2rem) clamp(1.1rem, 2.5vw, 1.75rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color var(--transition-normal), transform var(--transition-normal)',
                minWidth: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(247, 240, 231, 0.25)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-espresso-border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Subtle architectural background number */}
              <span
                style={{
                  position: 'absolute',
                  top: '0.65rem',
                  right: '1rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 6vw, 3.25rem)',
                  fontWeight: 900,
                  color: 'rgba(247, 240, 231, 0.04)',
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              >
                {exp.num}
              </span>

              <div>
                <div style={{ marginBottom: '1rem' }}>
                  <span
                    className={`badge-tag ${exp.tagWarning ? 'badge-unverified' : 'badge-amber'}`}
                  >
                    {exp.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)',
                    fontWeight: 800,
                    color: 'var(--color-cream)',
                    marginBottom: '0.65rem',
                    lineHeight: 1.25,
                  }}
                >
                  {exp.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    color: 'var(--color-taupe)',
                    margin: 0,
                  }}
                >
                  {exp.desc}
                </p>
              </div>

              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '0.85rem',
                  borderTop: '1px solid rgba(247, 240, 231, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.75rem',
                  color: 'var(--color-taupe)',
                }}
              >
                <CheckCircle2 size={14} style={{ color: exp.accent, flexShrink: 0 }} />
                <span>Cafe 49 Experience Focus</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
