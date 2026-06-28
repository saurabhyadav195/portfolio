import { motion } from 'framer-motion'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import SectionWrapper from './SectionWrapper'
import { projects } from '../data/constants'
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
  const t = useTranslation().t

  return (
    <SectionWrapper id="projects">
      <motion.div variants={itemVariants} className="mb-12">
        <p className="text-sm font-mono tracking-wider uppercase mb-2 text-(--color-accent) font-semibold">
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
            className="glass-card overflow-hidden group text-left"
          >
            {/* Accent top bar */}
            <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}88)` }} />

            <div className="p-6 md:p-8">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Project info */}
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-(--color-text-primary)">
                        {project.title}
                      </h3>
                      <HiArrowTopRightOnSquare className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-(--color-text-secondary)" />
                    </div>
                    <p className="text-sm font-semibold" style={{ color: project.color }}>
                      {project.category}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-(--color-text-secondary)">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[rgba(14,107,168,0.06)] text-(--color-accent)"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features sidebar */}
                <div className="lg:w-72 lg:border-l lg:pl-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-border">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-3 text-(--color-text-secondary) font-mono">
                    {t('projects.keyFeatures')}
                  </p>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ background: project.color }}
                        />
                        <span className="text-xs leading-relaxed text-(--color-text-secondary)">
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
