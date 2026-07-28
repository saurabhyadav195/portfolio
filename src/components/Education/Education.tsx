import { motion } from 'framer-motion'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import { educationData } from '../../data/constants'
import { useTranslation } from '../../context/I18nContext'
import './Education.css'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export default function Education() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="education">
      {/* Section header */}
      <motion.div variants={itemVariants} className="mb-14">
        <p className="text-xs font-mono tracking-widest uppercase mb-3 text-(--color-accent) font-semibold">
          {t('education.subtitle')}
        </p>
        <h2 className="section-title">
          <span className="accent-underline gradient-text">{t('education.title')}</span>
        </h2>
        <p className="section-subtitle mt-4">
          {t('education.description')}
        </p>
      </motion.div>

      {/* Education cards */}
      <div className="education-list">
        {educationData.map((edu, index) => (
          <motion.article
            key={edu.id}
            variants={itemVariants}
            custom={index}
            className="education-card"
          >
            {/* ── Colored Header ── */}
            <div className="education-header">
              {/* Top row: current badge + period pill */}
              <div className="education-header-top">
                <div>
                  {edu.current && (
                    <span className="education-badge">{t('education.current')}</span>
                  )}
                </div>
                <span className="education-period">{edu.period}</span>
              </div>

              {/* Institution name */}
              <p className="education-institution">{edu.institution}</p>

              {/* Degree */}
              <h3 className="education-degree">{edu.degree}</h3>

              {/* Field of study */}
              {edu.field && (
                <p className="education-field">{edu.field}</p>
              )}
            </div>

            {/* ── White Body ── */}
            <div className="education-body">
              <p className="education-topics-label">Coursework &amp; Focus Areas</p>
              <div className="education-topics">
                {edu.topics.map(topic => (
                  <span key={topic} className="education-topic-tag">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  )
}
