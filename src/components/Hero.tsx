import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si'
import { HiDocumentArrowDown, HiEnvelope, HiArrowRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { useTranslation } from '../context/I18nContext'
import resumePdf from '../assets/saurabh_resume.pdf'

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

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-container relative z-10 pt-16 pb-16"
      >
        <div className="max-w-4xl">
          {/* Text content */}
          <div className="space-y-6 text-left">
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-sm font-mono tracking-wider uppercase text-(--color-accent) font-semibold">
                {t('hero.hello')}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="text-(--color-text-primary)">
                  {t('hero.name')}{' '}
                </span>
                <span className="gradient-text">{t('hero.surname')}</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg font-semibold text-(--color-accent)"
            >
              {t('hero.title')}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg leading-relaxed max-w-xl text-(--color-text-secondary)"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base leading-relaxed max-w-2xl text-(--color-text-secondary)"
            >
              {t('hero.intro')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/projects"
                className="btn-primary"
              >
                {t('hero.viewProjects')}
                <HiArrowRight className="w-4 h-4 animate-pulse" />
              </Link>
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <HiDocumentArrowDown className="w-4 h-4" />
                {t('hero.downloadResume')}
              </a>
              <Link
                to="/contact"
                className="btn-outline"
              >
                <HiEnvelope className="w-4 h-4" />
                {t('hero.contactMe')}
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-12">
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
                  className="p-2.5 rounded-lg border transition-all duration-200 hover:scale-110 border-border text-(--color-text-secondary) hover:text-(--color-accent) hover:border-border-hover hover:bg-accent-subtle"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          
        </div>
      </motion.div>
    </section>
  )
}
