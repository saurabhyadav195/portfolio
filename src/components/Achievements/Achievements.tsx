import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import SectionWrapper from '../SectionWrapper/SectionWrapper'
import { useTranslation } from '../../context/I18nContext'
import './Achievements.css'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

const GITHUB_USERNAME = 'saurabhyadav195'

export default function Achievements() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="achievements">
      {/* Section header */}
      <motion.div variants={itemVariants} className="mb-12">
        <p className="text-sm font-mono tracking-wider uppercase mb-2 text-(--color-accent) font-semibold">
          {t('github.subtitle')}
        </p>
        <h2 className="section-title">
          {t('github.title')}{' '}
          <span className="accent-underline gradient-text">{t('github.titleHighlight')}</span>
        </h2>
        <p className="section-subtitle mt-3">
          {t('github.description')}
        </p>
      </motion.div>

      <div className="achievements-grid">
        {/* Contribution graph — full width */}
        <motion.div variants={itemVariants} className="achievements-card achievements-card--wide">
          <div className="achievements-card-header">
            <div className="achievements-card-title-row">
              <FaGithub className="achievements-card-icon" />
              <h3 className="achievements-card-title">{t('github.graphTitle')}</h3>
            </div>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="achievements-profile-link"
            >
              {t('github.viewProfile')}
              <HiArrowTopRightOnSquare style={{ width: 16, height: 16 }} />
            </a>
          </div>
          <div className="achievements-chart-wrap">
            <img
              src={`https://ghchart.rshah.org/0e6ba8/${GITHUB_USERNAME}`}
              alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
              className="achievements-chart-img"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div variants={itemVariants} className="achievements-card">
          <h3 className="achievements-stat-title">{t('github.statsTitle')}</h3>
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&hide_border=true&bg_color=ffffff&title_color=0e6ba8&icon_color=0e6ba8&text_color=001c55&count_private=true`}
            alt="GitHub Stats"
            className="achievements-stat-img"
            loading="lazy"
          />
        </motion.div>

        {/* Top Languages */}
        <motion.div variants={itemVariants} className="achievements-card">
          <h3 className="achievements-stat-title">{t('github.languagesTitle')}</h3>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&hide_border=true&bg_color=ffffff&title_color=0e6ba8&text_color=001c55`}
            alt="Top Languages"
            className="achievements-stat-img"
            loading="lazy"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
