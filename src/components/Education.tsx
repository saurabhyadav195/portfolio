import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi2'
import SectionWrapper from './SectionWrapper'
import { educationData } from '../data/constants'
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

export default function Education() {
  const { theme } = useTheme()
  const { t } = useTranslation()

  return (
    <SectionWrapper id="education">
      <motion.div variants={itemVariants} className="mb-12">
        <p className={`text-sm font-mono tracking-wider uppercase mb-2 ${
          theme === 'light' ? 'text-[var(--color-accent-dark)]' : 'text-[var(--color-accent)]'
        }`}>
          {t('education.subtitle')}
        </p>
        <h2 className="section-title">
          <span className="accent-underline gradient-text">{t('education.title')}</span>
        </h2>
        <p className="section-subtitle mt-3">
          {t('education.description')}
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div
          className={`absolute left-6 md:left-8 top-0 bottom-0 w-px ${
            theme === 'light' ? 'bg-[rgba(6,182,212,0.15)]' : 'bg-[rgba(6,182,212,0.15)]'
          }`}
        />

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              custom={index}
              className="relative pl-16 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full border-2 border-[var(--color-accent)] z-10"
                style={{
                  background: edu.current ? 'var(--color-accent)' : theme === 'light' ? 'var(--color-light-bg-primary)' : 'var(--color-bg-primary)',
                  boxShadow: edu.current ? '0 0 12px rgba(6, 182, 212, 0.4)' : 'none',
                }}
              />

              {/* Card */}
              <div className="glass-card p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <HiAcademicCap className="w-5 h-5 text-[var(--color-accent)]" />
                      {edu.current && (
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                          {t('education.current')}
                        </span>
                      )}
                    </div>
                    <h3 className={`text-lg md:text-xl font-bold ${
                      theme === 'light' ? 'text-[var(--color-light-text-primary)]' : 'text-[var(--color-text-primary)]'
                    }`}>
                      {edu.degree}
                    </h3>
                    {edu.field && (
                      <p className="text-[var(--color-accent)] text-sm font-medium mt-0.5">
                        {edu.field}
                      </p>
                    )}
                    <p className={`text-sm mt-1 ${
                      theme === 'light' ? 'text-[var(--color-light-text-secondary)]' : 'text-[var(--color-text-secondary)]'
                    }`}>
                      {edu.institution}
                    </p>
                  </div>
                  <span className={`text-sm font-mono whitespace-nowrap ${
                    theme === 'light' ? 'text-[var(--color-light-text-muted)]' : 'text-[var(--color-text-muted)]'
                  }`}>
                    {edu.period}
                  </span>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {edu.topics.map(topic => (
                    <span
                      key={topic}
                      className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-colors ${
                        theme === 'light'
                          ? 'bg-[rgba(6,182,212,0.08)] text-[var(--color-accent-dark)] hover:bg-[rgba(6,182,212,0.15)]'
                          : 'bg-[rgba(6,182,212,0.08)] text-[var(--color-accent-light)] hover:bg-[rgba(6,182,212,0.15)]'
                      }`}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
