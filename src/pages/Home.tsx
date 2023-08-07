import Button from 'components/Button/Button'
import { Language, LanguageContext } from 'contexts/LanguageContext'
import i18n from 'language/i18n'
import { useContext } from 'react'

export const Home = () => {
  const { setCurrentLanguage } = useContext(LanguageContext)
  return (
    <div>
      <div>{i18n.t('greeting')}</div>
      <Button onClick={() => setCurrentLanguage(Language.FR)}> {i18n.t('changeLanguage')}</Button>
    </div>
  )
}
