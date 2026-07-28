import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '../../context/I18nContext'
import './Loader.css'

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [percent, setPercent] = useState(0)
  const { t } = useTranslation()

  useEffect(() => {
    const duration = 1200 // 1.2s total loader time
    const interval = 12  // speed increment
    const step = 100 / (duration / interval)

    const timer = setInterval(() => {
      setPercent((prev) => {
        const next = prev + step
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 200)
          return 100
        }
        return next
      })
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -20, transition: { duration: 0.4, ease: 'easeInOut' } }}
        className="loader-overlay"
      >
        <div className="loader-inner">
          {/* Header */}
          <div className="loader-header">
            <span>{t('loader.initializing')}</span>
            <span>{Math.round(percent)}%</span>
          </div>

          {/* Progress bar */}
          <div className="loader-bar-track">
            <div className="loader-bar-fill" style={{ width: `${percent}%` }} />
          </div>

          {/* Status logs */}
          <div className="loader-logs">
            {percent > 10 && <p className="loader-log-line animate-pulse">{t('loader.log1')}</p>}
            {percent > 35 && <p className="loader-log-line animate-pulse">{t('loader.log2')}</p>}
            {percent > 65 && <p className="loader-log-line animate-pulse">{t('loader.log3')}</p>}
            {percent > 85 && <p className="loader-log-line animate-pulse">{t('loader.log4')}</p>}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
