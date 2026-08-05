import { createContext, useContext, useState, type ReactNode } from 'react'
import { translations, type Language } from '../data/translations'

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (path: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

// Helper to access nested objects via string dot notation (e.g., 'skills.title')
function getNestedValue(obj: unknown, path: string): string {
  const keys = path.split('.')
  let current: unknown = obj

  for (const key of keys) {
    if (
      current &&
      typeof current === 'object' &&
      key in (current as Record<string, unknown>)
    ) {
      current = (current as Record<string, unknown>)[key]
    } else {
      return path
    }
  }

  return typeof current === 'string' ? current : path
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (path: string): string => {
    const langDict = translations[language]
    return getNestedValue(langDict, path)
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTranslation() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider')
  }
  return context
}
