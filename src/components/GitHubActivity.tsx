import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
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

const GITHUB_USERNAME = 'saurabhyadav195'

export default function GitHubActivity() {
  const { theme } = useTheme()
  const { t } = useTranslation()

  return (
    <SectionWrapper id="github">
      <motion.div variants={itemVariants} className="mb-12">
        <p className={`text-sm font-mono tracking-wider uppercase mb-2 ${
          theme === 'light' ? 'text-[var(--color-accent-dark)]' : 'text-[var(--color-accent)]'
        }`}>
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

      <div className="grid md:grid-cols-2 gap-6">
        {/* Contribution graph */}
        <motion.div variants={itemVariants} className="glass-card p-6 md:col-span-2">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <FaGithub className={`w-5 h-5 ${
                theme === 'light' ? 'text-[var(--color-light-text-primary)]' : 'text-[var(--color-text-primary)]'
              }`} />
              <h3 className={`text-base font-bold ${
                theme === 'light' ? 'text-[var(--color-light-text-primary)]' : 'text-[var(--color-text-primary)]'
              }`}>
                {t('github.graphTitle')}
              </h3>
            </div>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
            >
              {t('github.viewProfile')}
              <HiArrowTopRightOnSquare className="w-4 h-4" />
            </a>
          </div>
          <div className="overflow-x-auto pb-2">
            <img
              src={`https://ghchart.rshah.org/06b6d4/${GITHUB_USERNAME}`}
              alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
              className="w-full min-w-[680px] rounded-lg"
              loading="lazy"
              style={{
                filter: theme === 'light' ? 'none' : 'brightness(0.9)',
              }}
            />
          </div>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div variants={itemVariants} className="glass-card p-6">
          <h3 className={`text-base font-bold mb-4 ${
            theme === 'light' ? 'text-[var(--color-light-text-primary)]' : 'text-[var(--color-text-primary)]'
          }`}>
            {t('github.statsTitle')}
          </h3>
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&hide_border=true&bg_color=${
              theme === 'light' ? 'ffffff' : '0d1117'
            }&title_color=06b6d4&icon_color=06b6d4&text_color=${
              theme === 'light' ? '475569' : '94a3b8'
            }&count_private=true`}
            alt="GitHub Stats"
            className="w-full rounded-lg"
            loading="lazy"
          />
        </motion.div>

        {/* Top Languages */}
        <motion.div variants={itemVariants} className="glass-card p-6">
          <h3 className={`text-base font-bold mb-4 ${
            theme === 'light' ? 'text-[var(--color-light-text-primary)]' : 'text-[var(--color-text-primary)]'
          }`}>
            {t('github.languagesTitle')}
          </h3>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&hide_border=true&bg_color=${
              theme === 'light' ? 'ffffff' : '0d1117'
            }&title_color=06b6d4&text_color=${
              theme === 'light' ? '475569' : '94a3b8'
            }`}
            alt="Top Languages"
            className="w-full rounded-lg"
            loading="lazy"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
