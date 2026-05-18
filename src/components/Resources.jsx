import { useState } from 'react'
import styles from './Resources.module.css'

const resources = [
  {
    type: 'Free Guide',
    typeColor: 'gold',
    icon: '📖',
    title: 'The Caregiver Survival Guide',
    desc: '15-page guide covering the essential self-care habits, daily routines, and boundaries every family caregiver needs.',
    pages: '15 pages',
    format: 'PDF Download',
    free: true,
  },
  {
    type: 'Checklist',
    typeColor: 'sage',
    icon: '✅',
    title: 'Senior Home Safety Checklist',
    desc: 'A comprehensive room-by-room checklist to assess and improve home safety for aging adults. Printable &amp; fillable.',
    pages: '8 pages',
    format: 'PDF Download',
    free: true,
  },
  {
    type: 'Workbook',
    typeColor: 'peach',
    icon: '📝',
    title: 'Wellness Planning Workbook',
    desc: 'A 30-day guided workbook to help seniors and caregivers build meaningful wellness goals and track daily progress.',
    pages: '30 pages',
    format: 'PDF Download',
    free: false,
    price: '$17',
  },
  {
    type: 'Toolkit',
    typeColor: 'gold',
    icon: '🗂️',
    title: 'Care Coordination Toolkit',
    desc: 'Templates, trackers, and scripts for managing medical appointments, medications, and care team communications.',
    pages: '20+ templates',
    format: 'PDF + Excel',
    free: false,
    price: '$37',
  },
  {
    type: 'Mini-Course',
    typeColor: 'peach',
    icon: '🎓',
    title: 'Caregiver Burnout Recovery',
    desc: 'A 5-module self-paced course walking you through identifying, managing, and recovering from caregiver burnout.',
    pages: '5 modules',
    format: 'Video + Workbook',
    free: false,
    price: '$97',
  },
  {
    type: 'Free Template',
    typeColor: 'sage',
    icon: '📅',
    title: 'Weekly Care Schedule Template',
    desc: 'A simple, beautiful weekly planner template designed specifically for managing care routines and appointments.',
    pages: '1 page',
    format: 'PDF + Google Doc',
    free: true,
  },
]

const colorMap = { gold: 'badge-gold', sage: 'badge-sage', peach: 'badge-peach' }

const FILTERS = ['All', 'Free', 'Premium']

export default function Resources() {
  const [filter, setFilter] = useState('All')

  const visible = resources.filter(r => {
    if (filter === 'Free') return r.free
    if (filter === 'Premium') return !r.free
    return true
  })

  return (
    <section className={`section ${styles.section}`} id="resources">
      {/* Glass orbs */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className="badge badge-sage">Downloadable Resources</span>
          <h2 className={styles.heading}>
            Free &amp; Premium Resources{' '}
            <span className="text-gradient">Built for You</span>
          </h2>
          <p className={styles.sub}>
            Practical, immediately actionable tools for caregivers and wellness
            seekers — many completely free, all designed with care.
          </p>

          {/* Filter Tabs */}
          <div className={styles.filterBar}>
            {FILTERS.map(f => (
              <button
                key={f}
                className={`${styles.filterTab} ${filter === f ? styles.filterActive : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'Free' && <span className={styles.filterDot} style={{ background: 'var(--clr-sage)' }} />}
                {f === 'Premium' && <span className={styles.filterDot} style={{ background: 'var(--clr-peach)' }} />}
                {f}
                {f !== 'All' && (
                  <span className={styles.filterCount}>
                    {f === 'Free' ? resources.filter(r => r.free).length : resources.filter(r => !r.free).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Resource Grid */}
        <div className={styles.grid}>
          {visible.map((r, i) => (
            <div key={i} className={`${styles.card} ${r.free ? styles.freeCard : ''}`}>
              {r.free && <div className={styles.freeRibbon}>FREE</div>}

              <div className={styles.cardHead}>
                <span className={styles.icon}>{r.icon}</span>
                <span className={`badge ${colorMap[r.typeColor]}`}>{r.type}</span>
              </div>

              <h4 className={styles.cardTitle}>{r.title}</h4>
              <p className={styles.cardDesc} dangerouslySetInnerHTML={{ __html: r.desc }} />

              <div className={styles.meta}>
                <span className={styles.metaItem}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <rect x="1" y="2" width="10" height="9" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M4 1v2M8 1v2M1 5h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  {r.pages}
                </span>
                <span className={styles.metaItem}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v7M3 5l3 3 3-3M2 10h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {r.format}
                </span>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.price}>{r.free ? 'Free' : r.price}</span>
                <a href="#contact" className={styles.downloadBtn}>
                  {r.free ? '↓ Download Free' : `Get for ${r.price}`}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bundle Strip */}
        <div className={styles.strip}>
          <div className={styles.stripLeft}>
            <span className={styles.stripEmoji}>🎁</span>
            <div>
              <p className={styles.stripTitle}>Complete Wellness Bundle</p>
              <p className={styles.stripText}>Get all premium resources at <strong>40% off</strong> — unlimited access, forever.</p>
            </div>
          </div>
          <a href="#contact" className={styles.stripBtn}>Get the Bundle — $97</a>
        </div>
      </div>
    </section>
  )
}
