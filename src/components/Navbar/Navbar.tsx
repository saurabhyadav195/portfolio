import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../../data/constants'
import { useTranslation } from '../../context/I18nContext'
import './Navbar.css'

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="navbar-header"
    >
      <nav className="section-container navbar-inner" aria-label="Main navigation">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsMobileOpen(false)}
          className="navbar-logo"
          aria-label="Go to homepage"
        >
          <span className="navbar-logo-bracket">&lt;</span>
          <span className="navbar-logo-text">{t('navbar.logoText')}</span>
          <span className="navbar-logo-bracket-close">/&gt;</span>
        </Link>

        {/* Desktop nav */}
        <div className="navbar-desktop">
          {navLinks.map(link => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `navbar-link${isActive ? ' active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile controls */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="navbar-mobile-btn"
          aria-label={t('navbar.toggleMenu')}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <HiXMark style={{ width: 24, height: 24 }} /> : <HiBars3 style={{ width: 24, height: 24 }} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="navbar-mobile-menu"
          >
            <div className="section-container navbar-mobile-links">
              {navLinks.map(link => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    `navbar-mobile-link${isActive ? ' active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
