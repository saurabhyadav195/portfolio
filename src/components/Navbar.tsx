import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiBars3, HiXMark, HiSun, HiMoon } from 'react-icons/hi2'
import { useTheme } from '../context/ThemeContext'
import { navLinks } from '../data/constants'
import { useTranslation } from '../context/I18nContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active section
  useEffect(() => {
    const sectionIds = navLinks.map(link => link.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -75% 0px' }
    )

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--color-bg-glass)] backdrop-blur-xl border-b border-[var(--color-border)]'
          : 'bg-transparent'
      }`}
      style={
        theme === 'light' && isScrolled
          ? { background: 'var(--color-light-bg-glass)', borderColor: 'var(--color-light-border)' }
          : undefined
      }
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-18" aria-label="Main navigation">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="text-lg font-bold tracking-tight group"
          aria-label="Scroll to top"
        >
          <span className="text-[var(--color-accent)]">&lt;</span>
          <span className={theme === 'light' ? 'text-[var(--color-light-text-primary)]' : 'text-[var(--color-text-primary)]'}>
            {t('navbar.logoText')}
          </span>
          <span className="text-[var(--color-accent)] group-hover:text-[var(--color-accent-light)] transition-colors">
            /&gt;
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                activeSection === link.href.slice(1)
                  ? 'text-[var(--color-accent)] bg-[var(--color-accent-subtle)]'
                  : theme === 'light'
                    ? 'text-[var(--color-light-text-secondary)] hover:text-[var(--color-light-text-primary)] hover:bg-[rgba(0,0,0,0.04)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[rgba(255,255,255,0.04)]'
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`ml-3 p-2 rounded-lg transition-all duration-200 cursor-pointer ${
              theme === 'light'
                ? 'text-[var(--color-light-text-secondary)] hover:text-[var(--color-light-text-primary)] hover:bg-[rgba(0,0,0,0.04)]'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[rgba(255,255,255,0.04)]'
            }`}
            aria-label={theme === 'dark' ? t('navbar.themeLight') : t('navbar.themeDark')}
          >
            {theme === 'dark' ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors cursor-pointer ${
              theme === 'light'
                ? 'text-[var(--color-light-text-secondary)]'
                : 'text-[var(--color-text-secondary)]'
            }`}
            aria-label={theme === 'dark' ? t('navbar.themeLight') : t('navbar.themeDark')}
          >
            {theme === 'dark' ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`p-2 rounded-lg transition-colors cursor-pointer ${
              theme === 'light'
                ? 'text-[var(--color-light-text-primary)]'
                : 'text-[var(--color-text-primary)]'
            }`}
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
            className={`lg:hidden border-b overflow-hidden ${
              theme === 'light'
                ? 'bg-[var(--color-light-bg-glass)] backdrop-blur-xl border-[var(--color-light-border)]'
                : 'bg-[var(--color-bg-glass)] backdrop-blur-xl border-[var(--color-border)]'
            }`}
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    activeSection === link.href.slice(1)
                      ? 'text-[var(--color-accent)] bg-[var(--color-accent-subtle)]'
                      : theme === 'light'
                        ? 'text-[var(--color-light-text-secondary)] hover:text-[var(--color-light-text-primary)] hover:bg-[rgba(0,0,0,0.04)]'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[rgba(255,255,255,0.04)]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
