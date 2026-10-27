import { cafe } from '../config/cafe'
import styles from './Hero.module.css'

export default function Hero() {
  const handleScroll = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className={styles.hero} aria-label="Welcome to Shiva Cafe2020">
      {/* Background image layer */}
      <div className={styles.bg} role="presentation" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1800&q=85"
          alt=""
          className={styles.bgImg}
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
        <div className={styles.overlay} />
        <div className={styles.grain} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <p className={styles.eyebrow}>Your Local Café in Sunam, Punjab</p>

        <h1 className={styles.headline}>
          Good Coffee.<br />
          Good Food.<br className={styles.mobileBreak} />
          <span className={styles.accentWord}>Good Moments.</span>
        </h1>

        <p className={styles.sub}>{cafe.shortDescription}</p>

        <div className={styles.ctas}>
          <a
            href="#menu"
            className={styles.primaryCta}
            onClick={(e) => handleScroll(e, '#menu')}
          >
            Explore the Menu
          </a>
          <a
            href="#contact"
            className={styles.secondaryCta}
            onClick={(e) => handleScroll(e, '#contact')}
          >
            Find Our Café
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollLine} />
      </div>
    </section>
  )
}

