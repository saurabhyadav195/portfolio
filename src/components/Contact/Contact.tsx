import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si'
import { HiEnvelope, HiMapPin, HiDocumentArrowDown } from 'react-icons/hi2'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import { useTranslation } from '../../context/I18nContext'
import saurabhImg from '../../assets/saurabh.jpg'
import resumePdf from '../../assets/saurabh_resume.pdf'
import './Contact.css'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

const socialLinks = [
  { icon: FaGithub,      href: 'https://github.com/saurabhyadav195',             label: 'GitHub'    },
  { icon: FaLinkedinIn,  href: 'https://www.linkedin.com/in/saurabhyadav86',     label: 'LinkedIn'  },
  { icon: SiCodewars,    href: 'https://www.codewars.com/users/saurabhyadav195', label: 'CodeWars'  },
  { icon: FaInstagram,   href: 'https://www.instagram.com/saurabhy___',          label: 'Instagram' },
]

export default function Contact() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="contact">
      {/* Section header */}
      <motion.div variants={itemVariants} className="mb-14">
        <p className="text-xs font-mono tracking-widest uppercase mb-3 text-(--color-accent) font-semibold">
          {t('contact.subtitle')}
        </p>
        <h2 className="section-title">
          {t('contact.title')}{' '}
          <span className="accent-underline gradient-text">{t('contact.titleHighlight')}</span>
        </h2>
        <p className="section-subtitle mt-4">
          {t('contact.description')}
        </p>
      </motion.div>

      {/* Main layout: image left, info right */}
      <div className="contact-layout">
        {/* Profile image */}
        <motion.div variants={itemVariants} className="contact-image-col">
          <div className="contact-image-wrap">
            <div className="contact-image-ring">
              <img
                src={saurabhImg}
                alt="Saurabh Yadav"
                className="contact-image"
              />
            </div>
            <div className="contact-image-outer-ring" />
          </div>
        </motion.div>

        {/* Contact info */}
        <motion.div variants={itemVariants} className="contact-info-col">
          {/* Action cards */}
          <div className="contact-action-grid">
            {/* Email */}
            <a href="mailto:saurabhy.in@gmail.com" className="contact-action-card">
              <div className="contact-action-icon">
                <HiEnvelope className="contact-action-svg" />
              </div>
              <div>
                <h4 className="contact-action-label">{t('contact.emailMe')}</h4>
                <p className="contact-action-value">saurabhy.in@gmail.com</p>
              </div>
            </a>

            {/* Resume */}
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action-card"
            >
              <div className="contact-action-icon">
                <HiDocumentArrowDown className="contact-action-svg" />
              </div>
              <div>
                <h4 className="contact-action-label">{t('contact.viewResume')}</h4>
                <p className="contact-action-value">saurabh_resume.pdf</p>
              </div>
            </a>

            {/* Location — full width */}
            <div className="contact-action-card contact-action-card--wide">
              <div className="contact-action-icon">
                <HiMapPin className="contact-action-svg" />
              </div>
              <div>
                <h4 className="contact-action-label">{t('contact.locationLabel')}</h4>
                <p className="contact-action-value">{t('contact.locationValue')}</p>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="contact-social-section">
            <p className="contact-social-label">{t('contact.connectWithMe')}</p>
            <div className="contact-social-row">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="contact-social-btn"
                >
                  <social.icon className="contact-social-icon" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
