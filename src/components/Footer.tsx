import { useTheme } from '../context/ThemeContext'
import { useTranslation } from '../context/I18nContext'

export default function Footer() {
  const { theme } = useTheme()
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={`border-t py-12 transition-colors duration-300 ${
        theme === 'light'
          ? 'bg-[var(--color-light-bg-secondary)] border-[var(--color-light-border)]'
          : 'bg-[var(--color-bg-secondary)] border-[var(--color-border)]'
      }`}
    >
      <div className="section-container text-center space-y-6">
        <div className="space-y-2">
          <h3 className={`text-xl font-bold tracking-tight ${
            theme === 'light' ? 'text-[var(--color-light-text-primary)]' : 'text-[var(--color-text-primary)]'
          }`}>
            {t('footer.name')}
          </h3>
          <p className={`text-sm max-w-md mx-auto leading-relaxed ${
            theme === 'light' ? 'text-[var(--color-light-text-secondary)]' : 'text-[var(--color-text-secondary)]'
          }`}>
            {t('footer.title')}
          </p>
        </div>

        <blockquote className={`text-xs md:text-sm font-mono italic max-w-lg mx-auto ${
          theme === 'light' ? 'text-[var(--color-light-text-muted)]' : 'text-[var(--color-text-muted)]'
        }`}>
          {t('footer.quote')}
        </blockquote>

        <p className={`text-xs pt-4 border-t max-w-xs mx-auto ${
          theme === 'light'
            ? 'border-[rgba(0,0,0,0.06)] text-[var(--color-light-text-muted)]'
            : 'border-[rgba(255,255,255,0.06)] text-[var(--color-text-muted)]'
        }`}>
          &copy; {currentYear} {t('footer.copyright')}
        </p>
      </div>
    </footer>
  )
}
