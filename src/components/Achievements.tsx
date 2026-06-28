import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import SectionWrapper from './SectionWrapper'
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

export default function Achievements() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="achievements">
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

      <div className="grid md:grid-cols-2 gap-6 text-left">
        {/* Contribution graph */}
        <motion.div variants={itemVariants} className="glass-card p-6 md:col-span-2">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <FaGithub className="w-5 h-5 text-(--color-text-primary)" />
              <h3 className="text-base font-bold text-(--color-text-primary)">
                {t('github.graphTitle')}
              </h3>
            </div>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-(--color-accent) hover:text-accent-light transition-colors font-semibold"
            >
              {t('github.viewProfile')}
              <HiArrowTopRightOnSquare className="w-4 h-4" />
            </a>
          </div>
          <div className="overflow-x-auto pb-2">
            <img
              src={`https://ghchart.rshah.org/0e6ba8/${GITHUB_USERNAME}`}
              alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
              className="w-full min-w-[680px] rounded-lg"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div variants={itemVariants} className="glass-card p-6">
          <h3 className="text-base font-bold mb-4 text-(--color-text-primary)">
            {t('github.statsTitle')}
          </h3>
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&hide_border=true&bg_color=ffffff&title_color=0e6ba8&icon_color=0e6ba8&text_color=001c55&count_private=true`}
            alt="GitHub Stats"
            className="w-full rounded-lg"
            loading="lazy"
          />
        </motion.div>

        {/* Top Languages */}
        <motion.div variants={itemVariants} className="glass-card p-6">
          <h3 className="text-base font-bold mb-4 text-(--color-text-primary)">
            {t('github.languagesTitle')}
          </h3>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&hide_border=true&bg_color=ffffff&title_color=0e6ba8&text_color=001c55`}
            alt="Top Languages"
            className="w-full rounded-lg"
            loading="lazy"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
