import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { skillCategories } from '../data/constants'
import { useTranslation } from '../context/I18nContext'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export default function Skills() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="skills">
      <motion.div variants={itemVariants} className="mb-12">
        <p className="text-sm font-mono tracking-wider uppercase mb-2 text-[var(--color-accent)] font-semibold">
          {t('skills.categoryLabel')}
        </p>
        <h2 className="section-title">
          {t('skills.title')}{' '}
          <span className="accent-underline gradient-text">{t('skills.titleHighlight')}</span>
        </h2>
        <p className="section-subtitle mt-3">
          {t('skills.subtitle')}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="glass-card p-6 group text-left"
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                style={{ background: 'var(--color-accent-subtle)' }}
              >
                <category.icon className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-base font-bold text-[var(--color-text-primary)]">
                {category.title}
              </h3>
            </div>

            {/* Skill items */}
            <div className="space-y-2.5">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors hover:bg-[rgba(14,107,168,0.04)]"
                >
                  <skill.icon className="w-4 h-4 flex-shrink-0 text-[var(--color-accent)]" />
                  <span className="text-sm font-medium text-[var(--color-text-secondary)]">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
