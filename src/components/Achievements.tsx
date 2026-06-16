import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { achievements } from '../data/constants'
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

export default function Achievements() {
  const { theme } = useTheme()
  const { t } = useTranslation()

  return (
    <SectionWrapper id="achievements">
      <motion.div variants={itemVariants} className="mb-12">
        <p className={`text-sm font-mono tracking-wider uppercase mb-2 ${
          theme === 'light' ? 'text-[var(--color-accent-dark)]' : 'text-[var(--color-accent)]'
        }`}>
          {t('achievements.subtitle')}
        </p>
        <h2 className="section-title">
          <span className="accent-underline gradient-text">{t('achievements.title')}</span>
        </h2>
        <p className="section-subtitle mt-3">
          {t('achievements.description')}
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass-card p-6 text-center group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {achievement.icon}
            </div>
            <h3 className={`text-base font-bold mb-2 ${
              theme === 'light' ? 'text-[var(--color-light-text-primary)]' : 'text-[var(--color-text-primary)]'
            }`}>
              {achievement.title}
            </h3>
            <p className={`text-xs leading-relaxed ${
              theme === 'light' ? 'text-[var(--color-light-text-secondary)]' : 'text-[var(--color-text-secondary)]'
            }`}>
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
