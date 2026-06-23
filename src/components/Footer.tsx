import { useTranslation } from '../context/I18nContext'

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-12 bg-[var(--color-bg-secondary)] border-[var(--color-border)]">
      <div className="section-container text-center space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight text-[var(--color-text-primary)]">
            {t('footer.name')}
          </h3>
          <p className="text-sm max-w-md mx-auto leading-relaxed text-[var(--color-text-secondary)]">
            {t('footer.title')}
          </p>
        </div>

        <blockquote className="text-xs md:text-sm font-mono italic max-w-lg mx-auto text-[var(--color-text-muted)]">
          {t('footer.quote')}
        </blockquote>

        <p className="text-xs pt-4 border-t max-w-xs mx-auto border-[var(--color-border)] text-[var(--color-text-muted)]">
          &copy; {currentYear} {t('footer.copyright')}
        </p>
      </div>
    </footer>
  )
}
