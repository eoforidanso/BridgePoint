import { useState } from 'react'
import styles from './Services.module.css'

const services = [
  {
    id: 0,
    icon: '🌿',
    tab: 'Strategy Sessions',
    badge: 'Most Popular',
    badgeType: 'gold',
    title: 'Wellness Strategy Sessions',
    desc: 'One-on-one coaching calls to help caregivers and individuals build sustainable wellness routines without clinical barriers. We map your unique needs, strengths, and goals into a clear, actionable roadmap.',
    price: 'Starting at $97',
    tags: ['1-on-1 Coaching', '60 min', 'Virtual'],
    features: ['60-min virtual session', 'Custom wellness roadmap', 'Follow-up resource pack', 'Email support for 7 days'],
    cta: 'Book a Session',
    accent: '#2C5F4A',
    glow: 'rgba(44,95,74,0.18)',
  },
  {
    id: 1,
    icon: '📋',
    tab: 'Caregiver Kits',
    badge: 'Quick Launch',
    badgeType: 'peach',
    title: 'Caregiver Starter Kits',
    desc: 'Ready-to-use digital toolkits packed with checklists, daily planners, and wellness trackers designed for family caregivers. Download instantly and start today.',
    price: 'Starting at $27',
    features: ['Printable checklists', 'Daily care planner', 'Wellness tracker sheets', 'Medication log templates'],
    cta: 'Get the Kit',
    accent: '#E8956D',
    glow: 'rgba(232,149,109,0.18)',
  },
  {
    id: 2,
    icon: '🏢',
    tab: 'Consulting',
    badge: 'Corporate',
    badgeType: 'sage',
    title: 'Organizational Wellness Consulting',
    desc: "Partner with care facilities, nonprofits, and senior centers to implement effective wellness programs and staff training solutions built for your community's unique needs.",
    price: 'Custom Quote',
    features: ['Needs assessment', 'Custom program design', 'Staff training modules', 'Ongoing retainer support'],
    cta: 'Request Proposal',
    accent: '#5B8FA8',
    glow: 'rgba(91,143,168,0.18)',
  },
  {
    id: 3,
    icon: '🎓',
    tab: 'Mini-Courses',
    badge: 'Self-Paced',
    badgeType: 'gold',
    title: 'Wellness Mini-Courses',
    desc: 'Short, focused digital courses covering caregiver burnout prevention, senior nutrition basics, and daily wellness habits. Learn at your own pace, on your schedule.',
    price: 'Starting at $47',
    features: ['Lifetime access', 'Video + workbook format', 'Completion certificate', 'Private community access'],
    cta: 'Browse Courses',
    accent: '#B8920A',
    glow: 'rgba(242,201,76,0.18)',
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const current = services[active]

  return (
    <section className={`section ${styles.section}`} id="services">
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="badge badge-sage">Our Services</span>
          <h2 className={styles.heading}>
            Simple Offers, <span className="text-gradient">Real Impact</span>
          </h2>
          <p className={styles.sub}>
            Fast-to-launch, high-value services built specifically for the caregiving and senior wellness market.
          </p>
        </div>

        {/* 3D Tab Bar */}
        <div className={styles.tabScene}>
          <div className={styles.tabBar}>
            {services.map((s, i) => (
              <button
                key={s.id}
                className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
                onClick={() => setActive(i)}
                style={active === i ? { '--tab-accent': s.accent } : {}}
              >
                <span className={styles.tabIcon}>{s.icon}</span>
                <span className={styles.tabLabel}>{s.tab}</span>
                {active === i && <span className={styles.tabGlow} style={{ background: s.glow }} />}
              </button>
            ))}
          </div>
        </div>

        {/* Glass Panel */}
        <div className={styles.panelWrap} key={active}>
          <div className={styles.glassPanel}>
            {/* Left: Content */}
            <div className={styles.panelLeft}>
              <div className={styles.panelTopRow}>
                <span className={styles.panelIcon}>{current.icon}</span>
                <span className={`badge badge-${current.badgeType}`}>{current.badge}</span>
              </div>
              <h3 className={styles.panelTitle}>{current.title}</h3>
              <p className={styles.panelDesc}>{current.desc}</p>

              <ul className={styles.features}>
                {current.features.map(f => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.featureCheck} style={{ color: current.accent }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className={styles.panelActions}>
                <a href="#contact" className={styles.panelCta} style={{ '--cta-bg': current.accent }}>
                  {current.cta}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <span className={styles.panelPrice}>{current.price}</span>
              </div>
            </div>

            {/* Right: 3D Glass Card */}
            <div className={styles.panelRight}>
              <div className={styles.card3dWrap}>
                <div className={styles.card3d} style={{ '--card-accent': current.accent, '--card-glow': current.glow }}>
                  <div className={styles.card3dInner}>
                    <span className={styles.card3dIcon}>{current.icon}</span>
                    <p className={styles.card3dTitle}>What's Included</p>
                    <ul className={styles.card3dList}>
                      {current.features.map(f => (
                        <li key={f}>
                          <span style={{ color: current.accent }}>✦</span> {f}
                        </li>
                      ))}
                    </ul>
                    <div className={styles.card3dPrice}>{current.price}</div>
                  </div>
                  <div className={styles.card3dGlow} style={{ background: current.glow }} />
                  <div className={styles.card3dShine} />
                </div>
                <div className={styles.microCard}>
                  <span>⚡</span> Instant Access
                </div>
                <div className={`${styles.microCard} ${styles.microCard2}`}>
                  <span>🔒</span> Secure Checkout
                </div>
              </div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className={styles.dots}>
            {services.map((s, i) => (
              <button
                key={i}
                className={`${styles.dot} ${active === i ? styles.dotActive : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Service ${i + 1}`}
                style={active === i ? { '--dot-color': s.accent } : {}}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
