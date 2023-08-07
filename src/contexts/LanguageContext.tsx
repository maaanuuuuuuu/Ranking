import i18n from 'language/i18n'
import React, { createContext, useState, useCallback } from 'react'

export enum Language {
  EN = 'en',
  FR = 'fr',
}

interface ILanguageContext {
  language: Language
  setCurrentLanguage: (language: Language) => void
}

export const LanguageContext = createContext<ILanguageContext | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(Language.EN)

  const setCurrentLanguage = useCallback((newLanguage: Language) => {
    i18n.changeLanguage(newLanguage)
    setLanguage(newLanguage)
  }, [])

  return <LanguageContext.Provider value={{ language, setCurrentLanguage }}>{children}</LanguageContext.Provider>
}
