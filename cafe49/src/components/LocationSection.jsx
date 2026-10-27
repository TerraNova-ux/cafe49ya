import React from 'react';
import {
  MapPin,
  Navigation,
  Phone,
  Clock,
  ExternalLink,
  AlertTriangle,
  Compass,
} from 'lucide-react';
import { cafeConfig } from '../config/cafeConfig';

export default function LocationSection() {
  const { location, contact, hours } = cafeConfig;

  return (
    <section
      id="location"
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
          <span className="section-label">Find Us in Samrala</span>
          <h2 className="section-title">Visit Cafe 49</h2>
          <p className="section-subtitle">
            Conveniently positioned at Global Tower along the Khanna–Samrala Road in Punjab.
            Easily navigate via Google Maps or drop by for a fresh bite.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Business Details & Maps Link Navigation */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            alignItems: 'stretch',
          }}
        >
          {/* Left Column: Configurable Location & Contact Cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(1rem, 2vw, 1.5rem)',
              minWidth: 0,
            }}
          >
            {/* Address Card */}
            <div
              style={{
                backgroundColor: 'var(--color-espresso-surface)',
                border: '1px solid var(--color-espresso-border)',
                borderRadius: '8px',
                padding: 'clamp(1.15rem, 3vw, 1.75rem)',
                minWidth: 0,
              }}
            >
              <div
                className="location-card-inner"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    backgroundColor: 'var(--color-espresso-card)',
                    padding: '0.65rem',
                    borderRadius: '6px',
                    color: 'var(--color-tomato)',
                    border: '1px solid var(--color-espresso-border)',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={22} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-amber)',
                      display: 'block',
                      marginBottom: '0.25rem',
                    }}
                  >
                    Physical Address
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.15rem, 2.5vw, 1.3rem)',
                      fontWeight: 800,
                      color: 'var(--color-cream)',
                      marginBottom: '0.45rem',
                      lineHeight: 1.25,
                      wordBreak: 'break-word',
                    }}
                  >
                    {location.venue}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-taupe-light)', lineHeight: 1.6, margin: 0 }}>
                    {location.street}
                    <br />
                    {location.city}, {location.state} {location.postalCode}, {location.country}
                  </p>

                  <div
                    className="location-btn-group"
                    style={{
                      marginTop: '1.25rem',
                      display: 'flex',
                      gap: '0.65rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    <a
                      href={location.mapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary loc-btn"
                      style={{ fontSize: '0.8125rem', padding: '0.65rem 1.15rem', minHeight: '40px' }}
                    >
                      <Navigation size={15} />
                      <span>Get Driving Directions</span>
                    </a>
                    <a
                      href={location.mapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary loc-btn"
                      style={{ fontSize: '0.8125rem', padding: '0.65rem 1.15rem', minHeight: '40px' }}
                    >
                      <ExternalLink size={15} />
                      <span>View on Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Configurable Contact Phone Card */}
            <div
              style={{
                backgroundColor: 'var(--color-espresso-surface)',
                border: '1px solid var(--color-espresso-border)',
                borderRadius: '8px',
                padding: 'clamp(1.15rem, 3vw, 1.75rem)',
                minWidth: 0,
              }}
            >
              <div
                className="location-card-inner"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    backgroundColor: 'var(--color-espresso-card)',
                    padding: '0.65rem',
                    borderRadius: '6px',
                    color: 'var(--color-amber)',
                    border: '1px solid var(--color-espresso-border)',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={22} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                      marginBottom: '0.35rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--color-amber)',
                      }}
                    >
                      Telephone & Inquiries
                    </span>
                    {!contact.isPhoneVerified && (
                      <span className="badge-tag badge-unverified">
                        Unverified in public listings
                      </span>
                    )}
                  </div>

                  {contact.phoneNumber ? (
                    <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-cream)', margin: 0 }}>
                      <a href={`tel:${contact.phoneNumber}`} style={{ textDecoration: 'underline' }}>
                        {contact.phoneNumber}
                      </a>
                    </p>
                  ) : (
                    <div>
                      <p style={{ fontSize: '0.875rem', color: 'var(--color-taupe)', marginBottom: '0.5rem', lineHeight: 1.5 }}>
                        Multiple phone numbers exist across public directories.
                      </p>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.75rem',
                          color: '#fbd38d',
                          backgroundColor: 'rgba(251, 211, 141, 0.08)',
                          padding: '0.35rem 0.65rem',
                          borderRadius: '4px',
                          border: '1px dashed rgba(251, 211, 141, 0.3)',
                          lineHeight: 1.4,
                        }}
                      >
                        <AlertTriangle size={14} style={{ flexShrink: 0 }} />
                        <span>Confirm primary contact with owner in cafeConfig.js</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div
              style={{
                backgroundColor: 'var(--color-espresso-surface)',
                border: '1px solid var(--color-espresso-border)',
                borderRadius: '8px',
                padding: 'clamp(1.15rem, 3vw, 1.75rem)',
                minWidth: 0,
              }}
            >
              <div
                className="location-card-inner"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    backgroundColor: 'var(--color-espresso-card)',
                    padding: '0.65rem',
                    borderRadius: '6px',
                    color: 'var(--color-cream)',
                    border: '1px solid var(--color-espresso-border)',
                    flexShrink: 0,
                  }}
                >
                  <Clock size={22} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-amber)',
                      display: 'block',
                      marginBottom: '0.25rem',
                    }}
                  >
                    Opening Hours
                  </span>
                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                      fontWeight: 700,
                      color: 'var(--color-cream)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {hours.statusText}
                  </h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-taupe)', margin: 0, lineHeight: 1.5 }}>
                    {hours.notice}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Location Card & Visual Navigation Hub */}
          <div
            style={{
              backgroundColor: 'var(--color-espresso-surface)',
              border: '1px solid var(--color-espresso-border)',
              borderRadius: '8px',
              padding: 'clamp(1.25rem, 3vw, 2rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              minWidth: 0,
            }}
          >
            {/* Visual Header */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '4px',
                  backgroundColor: 'var(--color-tomato-soft)',
                  color: 'var(--color-cream)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  marginBottom: '1.25rem',
                }}
              >
                <Compass size={14} style={{ color: 'var(--color-tomato)', flexShrink: 0 }} />
                <span>Map Navigation Hub</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.35rem, 3.5vw, 1.65rem)',
                  fontWeight: 800,
                  color: 'var(--color-cream)',
                  marginBottom: '0.75rem',
                  lineHeight: 1.25,
                }}
              >
                Khanna–Samrala Road Connection
              </h3>

              <p style={{ fontSize: '0.9rem', color: 'var(--color-taupe-light)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Cafe 49 is situated in <strong>Global Market, Global Tower</strong>, a notable commercial hub in Samrala.
                Whether you are driving from Khanna, Ludhiana, or local surrounding areas, access via the main highway corridor is straightforward.
              </p>

              {/* Graphic Waypoint Display */}
              <div
                style={{
                  backgroundColor: 'var(--color-espresso-card)',
                  borderRadius: '6px',
                  padding: '1rem',
                  border: '1px solid rgba(247, 240, 231, 0.08)',
                  marginBottom: '1.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.65rem' }}>
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-tomato)',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-cream)', fontWeight: 600 }}>
                    Destination: Cafe 49, Global Tower
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-amber)',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-taupe)' }}>
                    Pin Code: 141114 • Samrala (Ludhiana Dist.)
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div>
              <a
                href={location.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-amber"
                style={{ width: '100%', padding: '0.9rem', fontSize: '0.9375rem', marginBottom: '0.85rem' }}
              >
                <Navigation size={18} />
                <span>Launch Turn-by-Turn Navigation</span>
              </a>

              <p style={{ fontSize: '0.75rem', color: 'var(--color-taupe)', textAlign: 'center', margin: 0, lineHeight: 1.5 }}>
                Directly opens your device&apos;s native maps app with destination pre-filled.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .loc-btn {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
