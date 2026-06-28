import { useTranslation } from '../context/I18nContext'

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-12 bg-(--color-bg-secondary) border-border">
      <div className="section-container text-center space-y-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight text-(--color-text-primary)">
            {t('footer.name')}
          </h3>
          <p className="text-sm max-w-md mx-auto leading-relaxed text-(--color-text-secondary)">
            {t('footer.title')}
          </p>
        </div>

        <blockquote className="text-xs md:text-sm font-mono italic max-w-lg mx-auto text-(--color-text-muted)">
          {t('footer.quote')}
        </blockquote>

        <p className="text-xs pt-4 border-t max-w-xs mx-auto border-border text-(--color-text-muted)">
          &copy; {currentYear} {t('footer.copyright')}
        </p>
      </div>
    </footer>
  )
}
