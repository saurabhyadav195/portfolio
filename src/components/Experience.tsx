import { motion } from 'framer-motion'
import { HiBriefcase, HiCheckCircle } from 'react-icons/hi2'
import SectionWrapper from './SectionWrapper'
import { internships } from '../data/constants'
import { useTranslation } from '../context/I18nContext'

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

      <div className="grid md:grid-cols-2 gap-6">
        {internships.map((internship) => (
          <motion.div
            key={internship.id}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="glass-card p-6 md:p-8 flex flex-col h-full text-left"
          >
            <div className="flex items-start gap-4 mb-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'var(--color-accent-subtle)' }}
              >
                <HiBriefcase className="w-6 h-6 text-(--color-accent)" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-(--color-text-primary)">
                  {internship.title}
                </h3>
                <p className="text-(--color-accent) text-sm font-semibold mt-0.5">
                  {internship.company}
                </p>
                <p className="text-xs font-mono font-semibold mt-1 text-(--color-text-secondary)">
                  {internship.period}
                </p>
              </div>
            </div>

            <ul className="space-y-3 flex-1">
              {internship.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start gap-3">
                  <HiCheckCircle className="w-4 h-4 text-(--color-accent) mt-0.5 shrink-0" />
                  <span className="text-sm leading-relaxed text-(--color-text-secondary)">
                    {resp}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
