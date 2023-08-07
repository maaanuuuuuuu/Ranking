import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import EN from 'language/locales/en.json'
import FR from 'language/locales/fr.json'

i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: { translation: EN },
    fr: { translation: FR },
  },
})

export default i18n
