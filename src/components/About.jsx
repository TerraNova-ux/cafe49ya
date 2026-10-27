import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className={styles.inner}>
        {/* Image column */}
        <div className={styles.imageCol}>
          <div className={styles.imageStack}>
            <img
              src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=80"
              alt="[Placeholder: warm café interior — replace with actual Shiva Cafe2020 photo]"
              className={styles.imgMain}
              loading="lazy"
              decoding="async"
              width="560"
              height="680"
            />
            <div className={styles.floatingCard} aria-hidden="true">
              <p className={styles.floatingEmoji}>☕</p>
              <p className={styles.floatingText}>Your place to slow down</p>
            </div>
          </div>
        </div>

        {/* Text column */}
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>Our Story</p>
          <h2 id="about-heading" className={styles.heading}>
            A Café Made for<br />
            <span className={styles.italic}>Real Moments</span>
          </h2>

          <div className={styles.prose}>
            <p>
              Nestled on Indra Marg near Mahadev Car Parking in Sunam, Punjab,
              Shiva Cafe2020 is the kind of place where you linger a little
              longer than planned—and that's exactly the point.
            </p>
            <p>
              Whether you're stepping in for a quick cup of chai before work,
              catching up with an old friend over coffee, or simply finding a
              quiet corner to gather your thoughts, this is your café.
            </p>
            <p>
              We believe the best café is the one that feels like it belongs to
              you. Come as you are, stay as long as you like.
            </p>
          </div>

          <div className={styles.pillars}>
            {[
              { icon: '🌿', label: 'Warm atmosphere', desc: 'A space designed for comfort and connection.' },
              { icon: '🫖', label: 'Curated drinks', desc: 'Coffee, chai, and more — crafted with care.' },
              { icon: '📍', label: 'Heart of Sunam', desc: 'Right in the neighbourhood, easy to find.' },
            ].map(({ icon, label, desc }) => (
              <div key={label} className={styles.pillar}>
                <span className={styles.pillarIcon} aria-hidden="true">{icon}</span>
                <div>
                  <p className={styles.pillarLabel}>{label}</p>
                  <p className={styles.pillarDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

