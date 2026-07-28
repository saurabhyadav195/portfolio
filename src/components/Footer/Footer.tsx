import { useTranslation } from '../../context/I18nContext'
import './Footer.css'

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="section-container footer-inner">
        <div>
          <h3 className="footer-name">{t('footer.name')}</h3>
          <p className="footer-title">{t('footer.title')}</p>
        </div>

        <blockquote className="footer-quote">
          {t('footer.quote')}
        </blockquote>

        <p className="footer-copyright">
          &copy; {currentYear} {t('footer.copyright')}
        </p>
      </div>
    </footer>
  )
}
