import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { UI, type Lang, type Tr, type UiKey } from './data/i18n'

const STORAGE_KEY = 'mi2-lang'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  /** UI dictionary lookup */
  t: (key: UiKey) => string
  /** pick a trilingual content entry in the current language */
  tr: (entry: Tr) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function initialLang(): Lang {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY)
    if (v === 'zh' || v === 'ko' || v === 'en') return v
  } catch {
    /* ignore */
  }
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : lang
  }, [lang])

  const value: LanguageContextValue = {
    lang,
    setLang,
    t: (key) => UI[key][lang],
    tr: (entry) => entry[lang],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
