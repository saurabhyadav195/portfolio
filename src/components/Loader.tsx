import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '../context/I18nContext'

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [percent, setPercent] = useState(0)
  const { t } = useTranslation()

  useEffect(() => {
    const duration = 1200 // 1.2s total loader time
    const interval = 12 // speed increment
    const step = 100 / (duration / interval)

    const timer = setInterval(() => {
      setPercent((prev) => {
        const next = prev + step
        if (next >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 200) // complete callback
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
        className="fixed inset-0 z-100 bg-bg-primary flex flex-col items-center justify-center font-mono"
      >
        <div className="space-y-6 w-72 text-left">
          {/* Header */}
          <div className="flex items-center justify-between text-xs text-(--color-accent) font-semibold uppercase tracking-wider">
            <span>{t('loader.initializing')}</span>
            <span>{Math.round(percent)}%</span>
          </div>

          {/* Loading bar */}
          <div className="h-1.5 w-full bg-border rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-linear-to-r from-(--color-accent) to-accent-light"
              style={{ width: `${percent}%` }}
              layout
            />
          </div>

          {/* Status logs */}
          <div className="text-[10px] text-(--color-text-muted) space-y-1 h-12 overflow-hidden">
            {percent > 10 && <p className="animate-pulse">{t('loader.log1')}</p>}
            {percent > 35 && <p className="animate-pulse">{t('loader.log2')}</p>}
            {percent > 65 && <p className="animate-pulse">{t('loader.log3')}</p>}
            {percent > 85 && <p className="animate-pulse">{t('loader.log4')}</p>}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
