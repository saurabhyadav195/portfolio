import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si'
import { HiDocumentArrowDown, HiEnvelope, HiArrowRight } from 'react-icons/hi2'

import { useTranslation } from '../../context/I18nContext'
import resumePdf from '../../assets/saurabh_resume.pdf'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import './Hero.css'

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

const socialLinks = [
  { icon: FaGithub,      href: 'https://github.com/saurabhyadav195',                 label: 'GitHub'    },
  { icon: FaLinkedinIn,  href: 'https://www.linkedin.com/in/saurabhyadav86',         label: 'LinkedIn'  },
  { icon: SiCodewars,    href: 'https://www.codewars.com/users/saurabhyadav195',     label: 'CodeWars'  },
  { icon: FaInstagram,   href: 'https://www.instagram.com/saurabhy___',              label: 'Instagram' },
]

export default function Hero() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="hero">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="hero-content"
      >
        <div className="flex flex-col gap-y-3">
          <motion.div variants={itemVariants} className="space-y-2">
            <p className="hero-label">{t('hero.hello')}</p>
            <h1 className="hero-title">
              <span className="hero-title-name">{t('hero.name')} </span>
              <span className="gradient-text">{t('hero.surname')}</span>
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="hero-role">
            {t('hero.title')}
          </motion.p>

          <motion.p variants={itemVariants} className="hero-subtitle">
            {t('hero.subtitle')}
          </motion.p>

          <motion.p variants={itemVariants} className="hero-intro">
            {t('hero.intro')}
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="hero-cta-row">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary"
            >
              {t('hero.viewProjects')} <HiArrowRight style={{ width: 16, height: 16 }} className="animate-pulse" />
            </a>
            <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <HiDocumentArrowDown style={{ width: 16, height: 16 }} /> {t('hero.downloadResume')}
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-outline"
            >
              <HiEnvelope style={{ width: 16, height: 16 }} /> {t('hero.contactMe')}
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={itemVariants} className="hero-social-row">
            {socialLinks.map(social => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hero-social-btn"
              >
                <social.icon style={{ width: 20, height: 20 }} />
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
