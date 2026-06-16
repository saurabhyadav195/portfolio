import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si'
import { HiEnvelope, HiMapPin, HiPaperAirplane } from 'react-icons/hi2'
import SectionWrapper from './SectionWrapper'
import { useTheme } from '../context/ThemeContext'
import { useTranslation } from '../context/I18nContext'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export default function Contact() {
  const { theme } = useTheme()
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Simulate contact form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <SectionWrapper id="contact">
      <motion.div variants={itemVariants} className="mb-12">
        <p className={`text-sm font-mono tracking-wider uppercase mb-2 ${
          theme === 'light' ? 'text-[var(--color-accent-dark)]' : 'text-[var(--color-accent)]'
        }`}>
          {t('contact.subtitle')}
        </p>
        <h2 className="section-title">
          {t('contact.title')}{' '}
          <span className="accent-underline gradient-text">{t('contact.titleHighlight')}</span>
        </h2>
        <p className="section-subtitle mt-3">
          {t('contact.description')}
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-[1fr,1.3fr] gap-8 lg:gap-12 items-start">
        {/* Contact Information */}
        <motion.div variants={itemVariants} className="space-y-6">
          <div className="glass-card p-6 space-y-6">
            <h3 className={`text-lg font-bold mb-4 ${
              theme === 'light' ? 'text-[var(--color-light-text-primary)]' : 'text-[var(--color-text-primary)]'
            }`}>
              {t('contact.infoTitle')}
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:saurabhy.in@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-accent-subtle)] text-[var(--color-accent)] group-hover:scale-105 transition-transform">
                  <HiEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <p className={`text-xs font-mono ${
                    theme === 'light' ? 'text-[var(--color-light-text-muted)]' : 'text-[var(--color-text-muted)]'
                  }`}>
                    {t('contact.emailLabel')}
                  </p>
                  <p className={`text-sm font-medium ${
                    theme === 'light' ? 'text-[var(--color-light-text-primary)]' : 'text-[var(--color-text-primary)]'
                  } group-hover:text-[var(--color-accent)] transition-colors`}>
                    saurabhy.in@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                  <HiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className={`text-xs font-mono ${
                    theme === 'light' ? 'text-[var(--color-light-text-muted)]' : 'text-[var(--color-text-muted)]'
                  }`}>
                    {t('contact.locationLabel')}
                  </p>
                  <p className={`text-sm font-medium ${
                    theme === 'light' ? 'text-[var(--color-light-text-primary)]' : 'text-[var(--color-text-primary)]'
                  }`}>
                    {t('contact.locationValue')}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-4 border-t border-[var(--color-border)]">
              <p className={`text-xs font-mono uppercase tracking-wider mb-3 ${
                theme === 'light' ? 'text-[var(--color-light-text-muted)]' : 'text-[var(--color-text-muted)]'
              }`}>
                {t('contact.connectWithMe')}
              </p>
              <div className="flex items-center gap-3">
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
                    className={`p-2.5 rounded-lg border transition-all duration-200 hover:scale-110 ${
                      theme === 'light'
                        ? 'border-[var(--color-light-border)] text-[var(--color-light-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-light-border-hover)] hover:bg-[var(--color-accent-subtle)]'
                        : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-accent-subtle)]'
                    }`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants}>
          <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-xs font-mono mb-1.5 ${
                    theme === 'light' ? 'text-[var(--color-light-text-secondary)]' : 'text-[var(--color-text-secondary)]'
                  }`}
                >
                  {t('contact.nameLabel')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none transition-all ${
                    theme === 'light'
                      ? 'bg-[var(--color-light-bg-primary)] border-[var(--color-light-border)] text-[var(--color-light-text-primary)] focus:border-[var(--color-accent)]'
                      : 'bg-[var(--color-bg-primary)] border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-accent)]'
                  }`}
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`block text-xs font-mono mb-1.5 ${
                    theme === 'light' ? 'text-[var(--color-light-text-secondary)]' : 'text-[var(--color-text-secondary)]'
                  }`}
                >
                  {t('contact.emailLabelField')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none transition-all ${
                    theme === 'light'
                      ? 'bg-[var(--color-light-bg-primary)] border-[var(--color-light-border)] text-[var(--color-light-text-primary)] focus:border-[var(--color-accent)]'
                      : 'bg-[var(--color-bg-primary)] border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-accent)]'
                  }`}
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className={`block text-xs font-mono mb-1.5 ${
                  theme === 'light' ? 'text-[var(--color-light-text-secondary)]' : 'text-[var(--color-text-secondary)]'
                }`}
              >
                {t('contact.subjectLabel')}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none transition-all ${
                  theme === 'light'
                    ? 'bg-[var(--color-light-bg-primary)] border-[var(--color-light-border)] text-[var(--color-light-text-primary)] focus:border-[var(--color-accent)]'
                    : 'bg-[var(--color-bg-primary)] border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-accent)]'
                }`}
                placeholder={t('contact.subjectPlaceholder')}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className={`block text-xs font-mono mb-1.5 ${
                  theme === 'light' ? 'text-[var(--color-light-text-secondary)]' : 'text-[var(--color-text-secondary)]'
                }`}
              >
                {t('contact.messageLabel')}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-lg border focus:outline-none transition-all resize-none ${
                  theme === 'light'
                    ? 'bg-[var(--color-light-bg-primary)] border-[var(--color-light-border)] text-[var(--color-light-text-primary)] focus:border-[var(--color-accent)]'
                    : 'bg-[var(--color-bg-primary)] border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-accent)]'
                }`}
                placeholder={t('contact.messagePlaceholder')}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full justify-center py-3 cursor-pointer"
            >
              {status === 'sending' ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  {t('contact.btnSending')}
                </span>
              ) : status === 'success' ? (
                t('contact.btnSuccess')
              ) : (
                <>
                  {t('contact.btnSend')}
                  <HiPaperAirplane className="w-4 h-4" />
                </>
              )}
            </button>

            {status === 'error' && (
              <p className="text-sm text-red-500 text-center font-medium mt-2">
                {t('contact.errorMessage')}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
