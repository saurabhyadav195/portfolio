import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si'
import { HiArrowDown, HiDocumentArrowDown, HiEnvelope } from 'react-icons/hi2'
import { useTheme } from '../context/ThemeContext'
import { useTranslation } from '../context/I18nContext'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

// Floating particles component
function FloatingParticles() {
  const { theme } = useTheme()
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: theme === 'light'
              ? 'rgba(6, 182, 212, 0.2)'
              : 'rgba(6, 182, 212, 0.15)',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// Code-style terminal widget
function TerminalWidget() {
  const { theme } = useTheme()
  const { t } = useTranslation()
  return (
    <motion.div
      variants={itemVariants}
      className={`relative w-full max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border ${theme === 'light'
          ? 'bg-[#1e293b] border-[var(--color-light-border)]'
          : 'bg-[#0d1117] border-[var(--color-border)]'
        }`}
      style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)' }}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[rgba(255,255,255,0.04)]">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-xs text-[var(--color-text-muted)] font-mono">saurabh@dev ~</span>
      </div>
      {/* Terminal body */}
      <div className="px-4 py-4 font-mono text-sm leading-relaxed space-y-1">
        <div>
          <span className="text-[var(--color-accent)]">const</span>
          <span className="text-[#e2e8f0]"> developer </span>
          <span className="text-[var(--color-accent)]">=</span>
          <span className="text-[#e2e8f0]"> {'{'}</span>
        </div>
        <div className="pl-4">
          <span className="text-[#a78bfa]">name</span>
          <span className="text-[#e2e8f0]">: </span>
          <span className="text-[#86efac]">"{t('hero.terminalName')}"</span>
          <span className="text-[#e2e8f0]">,</span>
        </div>
        <div className="pl-4">
          <span className="text-[#a78bfa]">focus</span>
          <span className="text-[#e2e8f0]">: </span>
          <span className="text-[#86efac]">"{t('hero.terminalFocus')}"</span>
          <span className="text-[#e2e8f0]">,</span>
        </div>
        <div className="pl-4">
          <span className="text-[#a78bfa]">passion</span>
          <span className="text-[#e2e8f0]">: </span>
          <span className="text-[#86efac]">"{t('hero.terminalPassion')}"</span>
          <span className="text-[#e2e8f0]">,</span>
        </div>
        <div className="pl-4">
          <span className="text-[#a78bfa]">status</span>
          <span className="text-[#e2e8f0]">: </span>
          <span className="text-[#86efac]">"{t('hero.terminalStatus')}"</span>
        </div>
        <div>
          <span className="text-[#e2e8f0]">{'}'}</span>
          <span className="text-[#e2e8f0]">;</span>
        </div>
        <div className="mt-2">
          <span className="text-[var(--color-text-muted)]">{'>'} </span>
          <motion.span
            className="inline-block w-2 h-4 bg-[var(--color-accent)] rounded-sm"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const { theme } = useTheme()
  const { t } = useTranslation()

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg noise-overlay"
    >
      <FloatingParticles />

      {/* Gradient orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, var(--color-accent), transparent 70%)' }}
      />
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)' }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-container relative z-10 pt-24 pb-16"
      >
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <p className={`text-sm font-mono tracking-wider uppercase ${theme === 'light' ? 'text-[var(--color-accent-dark)]' : 'text-[var(--color-accent)]'
                }`}>
                {t('hero.hello')}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className={theme === 'light' ? 'text-[var(--color-light-text-primary)]' : 'text-[var(--color-text-primary)]'}>
                  {t('hero.name')}{' '}
                </span>
                <span className="gradient-text">{t('hero.surname')}</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className={`text-base md:text-lg font-medium ${theme === 'light' ? 'text-[var(--color-accent-dark)]' : 'text-[var(--color-accent)]'
                }`}
            >
              {t('hero.title')}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className={`text-base md:text-lg leading-relaxed max-w-xl ${theme === 'light' ? 'text-[var(--color-light-text-secondary)]' : 'text-[var(--color-text-secondary)]'
                }`}
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => handleScrollTo('projects')}
                className="btn-primary"
              >
                {t('hero.viewProjects')}
                <HiArrowDown className="w-4 h-4" />
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <HiDocumentArrowDown className="w-4 h-4" />
                {t('hero.downloadResume')}
              </a>
              <button
                onClick={() => handleScrollTo('contact')}
                className="btn-outline"
              >
                <HiEnvelope className="w-4 h-4" />
                {t('hero.contactMe')}
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
              {[
                { icon: FaGithub, href: 'https://github.com/saurabhyadav195', label: 'GitHub' },
                { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/saurabhyadav86', label: 'LinkedIn' },
                { icon: SiCodewars, href: 'https://www.codewars.com/users/saurabhyadav195', label: 'CodeWars' },
                { icon: FaInstagram, href: 'https://www.instagram.com/saurabhy___', label: 'Instagram' },
              ].map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`p-2.5 rounded-lg border transition-all duration-200 hover:scale-110 ${theme === 'light'
                      ? 'border-[var(--color-light-border)] text-[var(--color-light-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-light-border-hover)] hover:bg-[var(--color-accent-subtle)]'
                      : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-accent-subtle)]'
                    }`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Terminal widget */}
          <TerminalWidget />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={() => handleScrollTo('about')}
          className={`p-2 rounded-full border cursor-pointer ${theme === 'light'
              ? 'border-[var(--color-light-border)] text-[var(--color-light-text-muted)]'
              : 'border-[var(--color-border)] text-[var(--color-text-muted)]'
            }`}
          aria-label={t('hero.scrollDown')}
        >
          <HiArrowDown className="w-5 h-5" />
        </button>
      </motion.div>
    </section>
  )
}
