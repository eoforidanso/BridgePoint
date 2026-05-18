import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Services',   href: '#services' },
  { label: 'Caregiving', href: '#caregiving' },
  { label: 'Speaking',   href: '#speaking' },
  { label: 'Resources',  href: '#resources' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="var(--clr-sage)" />
              <path d="M16 8C12 8 9 11 9 15C9 20 16 25 16 25C16 25 23 20 23 15C23 11 20 8 16 8Z" fill="var(--clr-peach)" />
              <circle cx="16" cy="15" r="3" fill="white" />
            </svg>
          </span>
          <span className={styles.logoText}>
            Bridge<span>Point</span> Wellness
          </span>
        </a>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>{link.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={styles.cta}>Book a Call</a>

        {/* Mobile Toggle */}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.open : ''}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className={styles.drawer}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={styles.drawerLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className={styles.drawerCta} onClick={() => setMenuOpen(false)}>
            Book a Call
          </a>
        </div>
      )}
    </nav>
  )
}
