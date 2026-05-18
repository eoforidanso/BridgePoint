import styles from './Hero.module.css'

const stats = [
  { value: '10K+', label: 'Caregivers Served' },
  { value: '95%',  label: 'Client Satisfaction' },
  { value: '50+',  label: 'Speaking Events' },
]

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Animated background blobs */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />
      <div className={styles.blob3} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Left Content */}
        <div className={styles.content}>
          <span className={`badge badge-peach ${styles.topBadge}`}>
            <span>✦</span> Wellness &amp; Care Consulting
          </span>

          <h1 className={styles.heading}>
            Bridging the Gap in{' '}
            <span className={styles.highlight}>Senior &amp; Caregiver</span>{' '}
            Wellness
          </h1>

          <p className={styles.sub}>
            BridgePoint Wellness, LLC offers practical, non-clinical solutions for
            caregivers, seniors, and wellness-seekers — through coaching, downloadable
            resources, speaking engagements, and community-focused programs.
          </p>

          <div className={styles.actions}>
            <a href="#services" className={styles.btnPrimary}>
              Explore Services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#resources" className={styles.btnGhost}>
              Free Resources
            </a>
          </div>

          {/* Stats Row */}
          <div className={styles.stats}>
            {stats.map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statVal}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual — floating card stack */}
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.cardStack}>
            <div className={`${styles.floatCard} ${styles.cardTop}`}>
              <div className={styles.cardIcon}>🌿</div>
              <p className={styles.cardTitle}>Senior Wellness Plans</p>
              <p className={styles.cardDesc}>Holistic, non-clinical care roadmaps</p>
            </div>
            <div className={`${styles.floatCard} ${styles.cardMid}`}>
              <div className={styles.cardIcon}>💛</div>
              <p className={styles.cardTitle}>Caregiver Support</p>
              <p className={styles.cardDesc}>Tools &amp; coaching for family caregivers</p>
            </div>
            <div className={`${styles.floatCard} ${styles.cardBot}`}>
              <div className={styles.cardIcon}>🎤</div>
              <p className={styles.cardTitle}>Speaking &amp; Workshops</p>
              <p className={styles.cardDesc}>Engaging talks for orgs &amp; communities</p>
            </div>
          </div>

          {/* Decorative ring */}
          <div className={styles.ring} />
          <div className={styles.ring2} />
        </div>
      </div>

      {/* Scroll cue */}
      <div className={styles.scrollCue}>
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll to explore</span>
      </div>
    </section>
  )
}
