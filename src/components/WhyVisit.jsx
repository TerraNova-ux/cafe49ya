import styles from './WhyVisit.module.css'

const reasons = [
  {
    icon: '☕',
    title: 'Your Daily Escape',
    body:
      'Sometimes you just need a good cup and a quiet moment. Shiva Cafe2020 is the kind of place you come back to every day.',
  },
  {
    icon: '🤝',
    title: 'Catch Up with Friends',
    body:
      "The best conversations happen over coffee. Bring someone you\u2019ve been meaning to see \u2014 this is the place for it.",
  },
  {
    icon: '📍',
    title: 'Right in Sunam',
    body:
      'Conveniently located on Indra Marg near Mahadev Car Parking. Easy to find, easy to love.',
  },
]

export default function WhyVisit() {
  return (
    <section className={styles.section} aria-labelledby="why-heading">
      {/* Decorative strip */}
      <div className={styles.strip} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Why Come In</p>
          <h2 id="why-heading" className={styles.heading}>
            More Than Just Coffee
          </h2>
        </div>

        <div className={styles.cards}>
          {reasons.map(({ icon, title, body }) => (
            <article key={title} className={styles.card}>
              <div className={styles.iconWrap} aria-hidden="true">
                <span className={styles.icon}>{icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
