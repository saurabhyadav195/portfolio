import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { navLinks } from '../../data/constants'
import { useTranslation } from '../../context/I18nContext'
import './Navbar.css'

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('#hero')
  const { t } = useTranslation()
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  /* ── Scroll-spy: track which section is in view ── */
  useEffect(() => {
    const sectionIds = navLinks.map(link => link.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    // Build an ordered map of which sections are visible
    const visibilityMap: Record<string, boolean> = {}

    const updateActive = () => {
      // Walk the sections in DOM order and pick the first visible one
      for (const id of sectionIds) {
        if (visibilityMap[id]) {
          setActiveSection(`#${id}`)
          return
        }
      }
    }

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          visibilityMap[id] = entry.isIntersecting
          updateActive()
        },
        {
          rootMargin: '-10% 0px -70% 0px', // trigger when top 30% of viewport is hit
          threshold: 0,
        }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  /* ── Click-outside to close mobile menu ── */
  const closeMobile = useCallback(() => setIsMobileOpen(false), [])

  useEffect(() => {
    if (!isMobileOpen) return

    const handleOutside = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        closeMobile()
      }
    }

    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [isMobileOpen, closeMobile])

  /* ── Keyboard close on Escape ── */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobile()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [closeMobile])

  const handleNavClick = (href: string) => {
    closeMobile()
    // Smooth scroll to target section
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      ref={mobileMenuRef as React.RefObject<HTMLElement>}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="navbar-header"
    >
      <nav className="section-container navbar-inner" aria-label="Main navigation">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
          className="navbar-logo"
          aria-label="Go to homepage"
        >
          <span className="navbar-logo-bracket">&lt;</span>
          <span className="navbar-logo-text">{t('navbar.logoText')}</span>
          <span className="navbar-logo-bracket-close">/&gt;</span>
        </a>

        {/* Desktop nav */}
        <div className="navbar-desktop">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className={`navbar-link${activeSection === link.href ? ' active' : ''}`}
              aria-current={activeSection === link.href ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMobileOpen(prev => !prev)}
          className="navbar-mobile-btn"
          aria-label={t('navbar.toggleMenu')}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
        >
          {isMobileOpen
            ? <HiXMark style={{ width: 24, height: 24 }} />
            : <HiBars3 style={{ width: 24, height: 24 }} />
          }
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="navbar-mobile-menu"
          >
            <div className="section-container navbar-mobile-links">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className={`navbar-mobile-link${activeSection === link.href ? ' active' : ''}`}
                  aria-current={activeSection === link.href ? 'page' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
