import styles from './Speaking.module.css'

const formats = [
  {
    icon: '🎤',
    title: 'Keynote Speaking',
    desc: 'Powerful, story-driven keynotes on caregiver wellness, aging with dignity, and building resilient care communities — for conferences, hospitals, and nonprofits.',
    duration: '45–90 min',
  },
  {
    icon: '🛠️',
    title: 'Workshops & Trainings',
    desc: 'Interactive half-day or full-day sessions for care organizations, senior centers, and employee wellness programs.',
    duration: 'Half / Full Day',
  },
  {
    icon: '💼',
    title: 'Consulting Retainers',
    desc: 'Ongoing strategic consulting for care-focused organizations looking to build or enhance their wellness programming.',
    duration: 'Monthly Retainer',
  },
  {
    icon: '🌐',
    title: 'Webinars & Virtual Events',
    desc: 'Engaging online sessions for distributed teams, caregiver support groups, or community health platforms.',
    duration: '60–120 min',
  },
]

const topics = [
  'Preventing Caregiver Burnout',
  'Building Wellness Without a Clinical License',
  'Dignity in Aging — A Family Guide',
  'Senior Nutrition & Daily Wellness Habits',
  'Navigating Care Transitions',
  'Emotional Resilience for Family Caregivers',
  'Community-Based Senior Wellness Programs',
  'Monetizing Your Wellness Expertise',
]

export default function Speaking() {
  return (
    <section className={`section ${styles.section}`} id="speaking">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="badge badge-gold">Speaking &amp; Consulting</span>
          <h2 className={styles.heading}>
            Bring BridgePoint to{' '}
            <span className="text-gradient-gold">Your Organization</span>
          </h2>
          <p className={styles.sub}>
            Engaging, practical, and rooted in real caregiving experience —
            our speaking and consulting services create lasting impact.
          </p>
        </div>

        {/* Format Grid */}
        <div className={styles.grid}>
          {formats.map((f, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.cardIcon}>{f.icon}</span>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <h4 className={styles.cardTitle}>{f.title}</h4>
                  <span className={styles.duration}>{f.duration}</span>
                </div>
                <p className={styles.cardDesc}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Topics Banner */}
        <div className={styles.topicsBanner}>
          <h3 className={styles.topicsHeading}>Popular Topics</h3>
          <div className={styles.topicsGrid}>
            {topics.map(t => (
              <div key={t} className={styles.topicPill}>
                <span className={styles.dot} />
                {t}
              </div>
            ))}
          </div>
          <a href="#contact" className={styles.inquireBtn}>
            Inquire About Booking
          </a>
        </div>
      </div>
    </section>
  )
}
