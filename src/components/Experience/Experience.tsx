import { motion } from 'framer-motion'
import { HiBriefcase, HiCheckCircle } from 'react-icons/hi2'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import { internships } from '../../data/constants'
import { useTranslation } from '../../context/I18nContext'
import './Experience.css'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export default function Experience() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="experience">
      {/* Section header */}
      <motion.div variants={itemVariants} className="mb-12">
        <p className="text-sm font-mono tracking-wider uppercase mb-2 text-(--color-accent) font-semibold">
          {t('experience.subtitle')}
        </p>
        <h2 className="section-title">
          {t('experience.title')}{' '}
          <span className="accent-underline gradient-text">{t('experience.titleHighlight')}</span>
        </h2>
        <p className="section-subtitle mt-3">
          {t('experience.description')}
        </p>
      </motion.div>

      {/* Experience cards grid */}
      <div className="experience-grid">
        {internships.map((internship) => (
          <motion.div
            key={internship.id}
            variants={itemVariants}
            className="experience-card"
          >
            {/* ── Gradient Blue Header ── */}
            <div className="experience-card-header">
              <div className="experience-header-top">
                <div className="experience-icon-wrap">
                  <HiBriefcase className="experience-icon" />
                </div>
                <span className="experience-period">{internship.period}</span>
              </div>
              <h3 className="experience-title">{internship.title}</h3>
              <p className="experience-company">{internship.company}</p>
            </div>

            {/* ── White Content Body ── */}
            <div className="experience-card-body">
              <ul className="experience-list">
                {internship.responsibilities.map((resp, index) => (
                  <li key={index} className="experience-list-item">
                    <HiCheckCircle className="experience-check-icon" />
                    <span className="experience-resp-text">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
