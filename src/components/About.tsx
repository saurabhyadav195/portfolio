import { motion } from 'framer-motion'
import { HiAcademicCap, HiCpuChip, HiWrenchScrewdriver, HiLightBulb } from 'react-icons/hi2'
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

const highlightIcons = [
  { icon: HiCpuChip, labelKey: 'about.cards.embedded' },
  { icon: HiWrenchScrewdriver, labelKey: 'about.cards.robotics' },
  { icon: HiAcademicCap, labelKey: 'about.cards.ai' },
  { icon: HiLightBulb, labelKey: 'about.cards.iot' },
]

export default function About() {
  const { theme } = useTheme()
  const { t } = useTranslation()

  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-12 lg:gap-16 items-start">
        {/* Text column */}
        <div className="space-y-6">
          <motion.div variants={itemVariants}>
            <p className={`text-sm font-mono tracking-wider uppercase mb-2 ${
              theme === 'light' ? 'text-[var(--color-accent-dark)]' : 'text-[var(--color-accent)]'
            }`}>
              {t('about.subtitle')}
            </p>
            <h2 className="section-title">
              {t('about.title')}{' '}
              <span className="accent-underline gradient-text">{t('about.titleHighlight')}</span>
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className={`text-base leading-relaxed ${
              theme === 'light' ? 'text-[var(--color-light-text-secondary)]' : 'text-[var(--color-text-secondary)]'
            }`}
          >
            {t('about.p1')}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className={`text-base leading-relaxed ${
              theme === 'light' ? 'text-[var(--color-light-text-secondary)]' : 'text-[var(--color-text-secondary)]'
            }`}
          >
            {t('about.p2')}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className={`text-base leading-relaxed ${
              theme === 'light' ? 'text-[var(--color-light-text-secondary)]' : 'text-[var(--color-text-secondary)]'
            }`}
          >
            {t('about.p3')}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className={`text-base leading-relaxed ${
              theme === 'light' ? 'text-[var(--color-light-text-secondary)]' : 'text-[var(--color-text-secondary)]'
            }`}
          >
            {t('about.p4')}
          </motion.p>
        </div>

        {/* Highlight cards column */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
          {highlightIcons.map((item, index) => (
            <motion.div
              key={item.labelKey}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className={`glass-card p-5 flex flex-col items-center text-center gap-3 ${
                index === 0 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'var(--color-accent-subtle)' }}
              >
                <item.icon className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <span className={`text-sm font-semibold ${
                theme === 'light' ? 'text-[var(--color-light-text-primary)]' : 'text-[var(--color-text-primary)]'
              }`}>
                {t(item.labelKey)}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
