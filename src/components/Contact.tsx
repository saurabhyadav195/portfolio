import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si'
import { HiEnvelope, HiMapPin, HiDocumentArrowDown } from 'react-icons/hi2'
import SectionWrapper from './SectionWrapper'
import { useTranslation } from '../context/I18nContext'
import saurabhImg from '../assets/saurabh.jpg'
import resumePdf from '../assets/saurabh_resume.pdf'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export default function Contact() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="contact">
      <motion.div variants={itemVariants} className="mb-12 text-center lg:text-left">
        <p className="text-sm font-mono tracking-wider uppercase mb-2 text-[var(--color-accent)] font-semibold">
          {t('contact.subtitle')}
        </p>
        <h2 className="section-title">
          {t('contact.title')}{' '}
          <span className="accent-underline gradient-text">{t('contact.titleHighlight')}</span>
        </h2>
        <p className="section-subtitle mt-3 max-w-2xl mx-auto lg:mx-0">
          {t('contact.description')}
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-[1fr,1.3fr] gap-12 items-center">
        {/* Profile Image Column */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative group max-w-sm w-full">
            {/* Ambient background glow behind image */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-500 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300" />
            
            <div className="relative rounded-2xl overflow-hidden glass-card p-2 bg-white border border-[var(--color-border)] shadow-2xl">
              <img
                src={saurabhImg}
                alt="Saurabh Yadav"
                className="w-full h-auto object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500 scale-[1.01] group-hover:scale-100"
              />
            </div>
          </div>
        </motion.div>

        {/* Contact Info and Quick Actions Column */}
        <motion.div variants={itemVariants} className="space-y-6 text-left">
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Email Action Card */}
            <a
              href="mailto:saurabhy.in@gmail.com"
              className="flex items-center gap-4 p-5 rounded-xl border border-[var(--color-border)] bg-white hover:bg-[rgba(14,107,168,0.04)] hover:border-[var(--color-accent)] transition-all duration-300 group hover:scale-[1.02]"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-accent-subtle)] text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300">
                <HiEnvelope className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <h4 className="font-bold text-sm text-[var(--color-text-primary)]">
                  Email Me
                </h4>
                <p className="text-xs truncate text-[var(--color-text-secondary)] font-medium">
                  saurabhy.in@gmail.com
                </p>
              </div>
            </a>

            {/* Resume Action Card */}
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl border border-[var(--color-border)] bg-white hover:bg-[rgba(14,107,168,0.04)] hover:border-[var(--color-accent)] transition-all duration-300 group hover:scale-[1.02]"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-accent-subtle)] text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300">
                <HiDocumentArrowDown className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <h4 className="font-bold text-sm text-[var(--color-text-primary)]">
                  View Resume
                </h4>
                <p className="text-xs truncate text-[var(--color-text-secondary)] font-medium">
                  saurabh_resume.pdf
                </p>
              </div>
            </a>

            {/* Location Info Card */}
            <div className="flex items-center gap-4 p-5 rounded-xl border border-[var(--color-border)] bg-white sm:col-span-2">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                <HiMapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[var(--color-text-primary)]">
                  {t('contact.locationLabel')}
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)] font-medium">
                  {t('contact.locationValue')}
                </p>
              </div>
            </div>
          </div>

          {/* Social Links Panel */}
          <div className="pt-6 border-t border-[var(--color-border)]">
            <p className="text-xs font-mono uppercase tracking-wider mb-4 text-center lg:text-left text-[var(--color-text-secondary)]">
              {t('contact.connectWithMe')}
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-4">
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
                  className="p-3.5 rounded-xl border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-accent-subtle)] bg-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
