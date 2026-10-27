import { useState } from 'react'
import { menuItems, menuCategories } from '../config/cafe'
import styles from './Menu.module.css'

function MenuCard({ item }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={item.image}
          alt={`Illustrative placeholder for ${item.name} — replace with actual café photography`}
          className={styles.img}
          loading="lazy"
          decoding="async"
          width="400"
          height="280"
        />
        {item.tag && (
          <span className={`${styles.tag} ${styles[`tag--${item.tag}`]}`}>
            {item.tag === 'popular' ? '★ Popular' : '✦ New'}
          </span>
        )}
      </div>
      <div className={styles.cardBody}>
        <p className={styles.category}>{item.category}</p>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.desc}>{item.description}</p>
      </div>
    </article>
  )
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((i) => i.category === activeCategory)

  return (
    <section id="menu" className={styles.section} aria-labelledby="menu-heading">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>What We Serve</p>
          <h2 id="menu-heading" className={styles.heading}>
            The Menu
          </h2>
          <p className={styles.note}>
            <em>
              ⚠ Placeholder menu — awaiting confirmed items from the café owner.
              All items and descriptions are illustrative only.
            </em>
          </p>
        </div>

        {/* Filters */}
        <div className={styles.filters} role="tablist" aria-label="Menu categories">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          className={styles.grid}
          role="tabpanel"
          aria-label={`${activeCategory} items`}
        >
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div className={styles.ctaWrap}>
          <p className={styles.ctaNote}>
            Full menu available at the café. Items and availability may vary.
          </p>
          <a href="#contact" className={styles.cta}
            onClick={(e) => {
              e.preventDefault()
              const el = document.querySelector('#contact')
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
            }}
          >
            Visit Us to Explore More
          </a>
        </div>
      </div>
    </section>
  )
}

