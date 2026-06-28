import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi2'
import SectionWrapper from './SectionWrapper'
import { educationData } from '../data/constants'
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
  const { t } = useTranslation()

  return (
    <SectionWrapper id="education">
      <motion.div variants={itemVariants} className="mb-12">
        <p className="text-sm font-mono tracking-wider uppercase mb-2 text-(--color-accent) font-semibold">
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
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-[rgba(14,107,168,0.15)]" />

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              custom={index}
              className="relative pl-16 md:pl-20 text-left"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full border-2 border-(--color-accent) z-10"
                style={{
                  background: edu.current ? 'var(--color-accent)' : 'var(--color-bg-primary)',
                  boxShadow: edu.current ? '0 0 12px rgba(14, 107, 168, 0.4)' : 'none',
                }}
              />

              {/* Card */}
              <div className="glass-card p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <HiAcademicCap className="w-5 h-5 text-(--color-accent)" />
                      {edu.current && (
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-accent-subtle text-(--color-accent)">
                          {t('education.current')}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-(--color-text-primary)">
                      {edu.degree}
                    </h3>
                    {edu.field && (
                      <p className="text-(--color-accent) text-sm font-semibold mt-0.5 font-display">
                        {edu.field}
                      </p>
                    )}
                    <p className="text-sm mt-1 text-(--color-text-secondary)">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-semibold whitespace-nowrap text-(--color-text-secondary) px-3 py-1 rounded-full bg-[rgba(14,107,168,0.06)] self-start">
                    {edu.period}
                  </span>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {edu.topics.map(topic => (
                    <span
                      key={topic}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg transition-colors bg-[rgba(14,107,168,0.06)] text-(--color-accent) hover:bg-accent-glow"
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
