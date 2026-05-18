import { useState } from 'react'
import styles from './Contact.module.css'

const interests = [
  'Coaching / Strategy Session',
  'Caregiver Resources',
  'Speaking Engagement',
  'Organizational Consulting',
  'Mini-Course / Workshop',
  'Other',
]

export default function Contact() {
  const [selected, setSelected] = useState([])
  const [submitted, setSubmitted] = useState(false)

  const toggle = item =>
    setSelected(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    )

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className={`section ${styles.section}`} id="contact">
      <div className="container">
        <div className={styles.layout}>
          {/* Left — Info */}
          <div className={styles.info}>
            <span className="badge badge-peach">Get In Touch</span>
            <h2 className={styles.heading}>
              Ready to Bridge the Gap in{' '}
              <span className="text-gradient">Your Wellness Journey?</span>
            </h2>
            <p className={styles.desc}>
              Whether you're a family caregiver seeking support, an organization looking for
              training, or someone ready to invest in your wellness — we'd love to hear from you.
            </p>

            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <span className={styles.cIcon}>📧</span>
                <div>
                  <p className={styles.cLabel}>Email</p>
                  <p className={styles.cValue}>hello@bridgepointwellness.com</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.cIcon}>📍</span>
                <div>
                  <p className={styles.cLabel}>Location</p>
                  <p className={styles.cValue}>Serving clients nationwide &amp; virtually</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.cIcon}>⏰</span>
                <div>
                  <p className={styles.cLabel}>Response Time</p>
                  <p className={styles.cValue}>Within 1–2 business days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>🌿</span>
                <h3>Thank you for reaching out!</h3>
                <p>We'll be in touch within 1–2 business days. In the meantime, explore our free resources above.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" type="text" placeholder="Jane" required />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" type="text" placeholder="Smith" required />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" placeholder="jane@example.com" required />
                </div>

                <div className={styles.field}>
                  <label htmlFor="org">Organization (optional)</label>
                  <input id="org" type="text" placeholder="Your organization or company" />
                </div>

                <div className={styles.field}>
                  <label>I'm interested in… <span className={styles.optional}>(select all that apply)</span></label>
                  <div className={styles.chips}>
                    {interests.map(item => (
                      <button
                        type="button"
                        key={item}
                        className={`${styles.chip} ${selected.includes(item) ? styles.chipActive : ''}`}
                        onClick={() => toggle(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={4} placeholder="Tell us a little about what you're looking for…" required />
                </div>

                <button type="submit" className={styles.submit}>
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8h12M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
