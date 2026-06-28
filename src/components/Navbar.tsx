import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../data/constants'
import { useTranslation } from '../context/I18nContext'

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-bg-glass backdrop-blur-xl border-b border-border shadow-sm"
    >
      <nav className="section-container flex items-center justify-between h-20" aria-label="Main navigation">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsMobileOpen(false)}
          className="text-4xl font-bold tracking-tight group flex items-center"
          aria-label="Go to homepage"
        >
          <span className="text-(--color-accent) font-mono">&lt;</span>
          <span className="text-(--color-text-primary)">
            {t('navbar.logoText')}
          </span>
          <span className="text-(--color-accent) group-hover:text-accent-light transition-colors font-mono">
            /&gt;
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-200 ${isActive
                  ? 'text-(--color-accent)'
                  : 'text-(--color-text-secondary) hover:text-(--color-text-primary)'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 rounded-lg transition-colors cursor-pointer text-(--color-text-primary) hover:bg-[rgba(14,107,168,0.06)]"
            aria-label={t('navbar.toggleMenu')}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <HiXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-b overflow-hidden bg-bg-glass backdrop-blur-xl border-border shadow-md"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) =>
                    `text-left px-4 py-3 rounded-lg text-lg font-semibold transition-all ${
                      isActive
                        ? 'text-(--color-accent) bg-accent-subtle'
                        : 'text-(--color-text-secondary) hover:text-(--color-text-primary) hover:bg-[rgba(14,107,168,0.04)]'
                    }`
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
