import { motion } from 'framer-motion'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import SectionWrapper from './SectionWrapper'
import { projects } from '../data/constants'
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

export default function Projects() {
  const { theme } = useTheme()
  const { t } = useTranslation()

  return (
    <SectionWrapper id="projects">
      <motion.div variants={itemVariants} className="mb-12">
        <p className={`text-sm font-mono tracking-wider uppercase mb-2 ${
          theme === 'light' ? 'text-[var(--color-accent-dark)]' : 'text-[var(--color-accent)]'
        }`}>
          {t('projects.subtitle')}
        </p>
        <h2 className="section-title">
          {t('projects.title')}{' '}
          <span className="accent-underline gradient-text">{t('projects.titleHighlight')}</span>
        </h2>
        <p className="section-subtitle mt-3">
          {t('projects.description')}
        </p>
      </motion.div>

      <div className="space-y-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -3 }}
            className="glass-card overflow-hidden group"
          >
            {/* Accent top bar */}
            <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}88)` }} />

            <div className="p-6 md:p-8">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Project info */}
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`text-xl md:text-2xl font-bold ${
                        theme === 'light' ? 'text-[var(--color-light-text-primary)]' : 'text-[var(--color-text-primary)]'
                      }`}>
                        {project.title}
                      </h3>
                      <HiArrowTopRightOnSquare className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity ${
                        theme === 'light' ? 'text-[var(--color-light-text-muted)]' : 'text-[var(--color-text-muted)]'
                      }`} />
                    </div>
                    <p className="text-sm font-medium" style={{ color: project.color }}>
                      {project.category}
                    </p>
                  </div>

                  <p className={`text-sm leading-relaxed ${
                    theme === 'light' ? 'text-[var(--color-light-text-secondary)]' : 'text-[var(--color-text-secondary)]'
                  }`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg ${
                          theme === 'light'
                            ? 'bg-[rgba(0,0,0,0.04)] text-[var(--color-light-text-secondary)]'
                            : 'bg-[rgba(255,255,255,0.05)] text-[var(--color-text-secondary)]'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features sidebar */}
                <div className={`lg:w-72 lg:border-l lg:pl-6 pt-4 lg:pt-0 border-t lg:border-t-0 ${
                  theme === 'light' ? 'border-[var(--color-light-border)]' : 'border-[var(--color-border)]'
                }`}>
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                    theme === 'light' ? 'text-[var(--color-light-text-muted)]' : 'text-[var(--color-text-muted)]'
                  }`}>
                    {t('projects.keyFeatures')}
                  </p>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: project.color }}
                        />
                        <span className={`text-xs leading-relaxed ${
                          theme === 'light' ? 'text-[var(--color-light-text-secondary)]' : 'text-[var(--color-text-secondary)]'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
