import styles from './Caregiving.module.css'

const pillars = [
  {
    icon: '🧓',
    title: 'Senior Wellness',
    desc: 'Non-clinical wellness programming that improves quality of life for aging adults — from mobility routines to social engagement strategies.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Family Caregiver Support',
    desc: 'Practical guidance, emotional wellness tools, and structured plans to prevent caregiver burnout and build sustainable caregiving habits.',
  },
  {
    icon: '🏥',
    title: 'Care Transition Coaching',
    desc: 'Support families navigating transitions from hospital to home, or home to assisted living, with confidence and clarity.',
  },
  {
    icon: '🧠',
    title: 'Cognitive & Emotional Health',
    desc: 'Programs and resources focused on mental wellness, memory support, and emotional resilience for seniors and their caregivers.',
  },
]

const whyItems = [
  { stat: '53M+', label: 'unpaid caregivers in the US' },
  { stat: '70%',  label: 'of caregivers report burnout' },
  { stat: '$522B', label: 'annual value of informal care' },
]

export default function Caregiving() {
  return (
    <section className={`section ${styles.section}`} id="caregiving">
      {/* Background accent */}
      <div className={styles.bgAccent} aria-hidden="true" />

      <div className="container">
        <div className={styles.layout}>
          {/* Left — Why This Niche */}
          <div className={styles.left}>
            <span className="badge badge-peach">High-Demand Niche</span>
            <h2 className={styles.heading}>
              The Caregiving &amp; Senior Wellness Market{' '}
              <em className={styles.em}>Is Exploding</em>
            </h2>
            <p className={styles.desc}>
              As America ages, the need for accessible, non-clinical wellness
              support has never been greater. BridgePoint Wellness sits at the
              intersection of need and opportunity — serving real families with
              practical, scalable solutions.
            </p>

            <div className={styles.stats}>
              {whyItems.map(w => (
                <div key={w.label} className={styles.statCard}>
                  <span className={styles.statNum}>{w.stat}</span>
                  <span className={styles.statLabel}>{w.label}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className={styles.learnBtn}>
              Work With Us
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right — Pillars */}
          <div className={styles.right}>
            {pillars.map((p, i) => (
              <div key={i} className={styles.pillar}>
                <span className={styles.pillarIcon}>{p.icon}</span>
                <div>
                  <h4 className={styles.pillarTitle}>{p.title}</h4>
                  <p className={styles.pillarDesc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
