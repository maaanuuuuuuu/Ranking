import React from 'react'
import styles from './Compare.module.scss'

interface CompareProps {
  comparedComponents: [React.ReactElement, React.ReactElement]
  onWinnerSelected: (selectedComponent: React.ReactElement) => void
}

const Compare: React.FC<CompareProps> = ({ comparedComponents, onWinnerSelected }) => {
  return (
    <div className={styles.container}>
      <div onClick={() => onWinnerSelected(comparedComponents[0])} className={styles.componentBox}>
        {comparedComponents[0]}
      </div>
      <div onClick={() => onWinnerSelected(comparedComponents[1])} className={styles.componentBox}>
        {comparedComponents[1]}
      </div>
    </div>
  )
}

export default Compare
