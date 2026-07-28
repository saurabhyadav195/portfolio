import { motion } from 'framer-motion'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import { projects } from '../../data/constants'
import { useTranslation } from '../../context/I18nContext'
import './Projects.css'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export default function Projects() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="projects">
      {/* Section header */}
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

      {/* Project cards */}
      <div className="projects-list">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="project-card"
          >
            {/* Colored top accent bar */}
            <div
              className="project-card-accent-bar"
              style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}88)` }}
            />

            <div className="project-card-body">
              <div className="project-card-layout">
                {/* Left: project info */}
                <div className="project-info">
                  <div>
                    <div className="project-title-row">
                      <h3 className="project-title">{project.title}</h3>
                      <HiArrowTopRightOnSquare className="project-external-icon" />
                    </div>
                    <p className="project-category" style={{ color: project.color }}>
                      {project.category}
                    </p>
                  </div>

                  <p className="project-description">{project.description}</p>

                  {/* Tech tags */}
                  <div className="project-tech-row">
                    {project.technologies.map(tech => (
                      <span key={tech} className="project-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Right: key features */}
                <div className="project-features">
                  <p className="project-features-label">{t('projects.keyFeatures')}</p>
                  <ul className="project-features-list">
                    {project.features.map((feature, i) => (
                      <li key={i} className="project-feature-item">
                        <div
                          className="project-feature-dot"
                          style={{ background: project.color }}
                        />
                        <span className="project-feature-text">{feature}</span>
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
