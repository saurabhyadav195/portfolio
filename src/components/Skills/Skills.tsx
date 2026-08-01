import { motion } from 'framer-motion'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import { skillCategories } from '../../data/constants'
import { useTranslation } from '../../context/I18nContext'
import './Skills.css'

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
      {/* Section header */}
      <motion.div variants={itemVariants} className="mb-12">
        <p className="text-sm font-mono tracking-wider uppercase mb-2 text-(--color-accent) font-semibold">
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

      {/* Cards grid */}
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="skills-card"
          >
            {/* ── Gradient Blue Header ── */}
            <div className="skills-card-header">
              <div className="skills-icon-circle">
                <category.icon className="skills-icon" />
              </div>
              <h3 className="skills-category-title">{category.title}</h3>
            </div>

            {/* ── White Content Body ── */}
            <div className="skills-card-body">
              <ul className="skills-list">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="skill-item">
                    <skill.icon className="skill-icon" />
                    <span className="skill-name">{skill.name}</span>
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
