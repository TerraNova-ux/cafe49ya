import { galleryImages } from '../config/cafe'
import styles from './Gallery.module.css'

export default function Gallery() {
  return (
    <section id="gallery" className={styles.section} aria-labelledby="gallery-heading">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>At the Café</p>
          <h2 id="gallery-heading" className={styles.heading}>
            The Experience
          </h2>
          <p className={styles.subtext}>
            Illustrative photography — to be replaced with Shiva Cafe2020 images.
          </p>
        </div>

        <div className={styles.grid} aria-label="Café photo gallery">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className={`${styles.cell} ${styles[`cell--${img.span}`]}`}
            >
              <div className={styles.imgWrap}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className={styles.img}
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                />
                <div className={styles.imgOverlay} aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>

        <p className={styles.disclaimer}>
          📸 Stock photos shown for design purposes only — not images of Shiva Cafe2020.
          Replace with actual café photography before launch.
        </p>
      </div>
    </section>
  )
}

