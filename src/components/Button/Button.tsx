import buttonStyles from 'components/button/Button.module.scss'

const Button = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
  return (
    <button onClick={onClick} className={buttonStyles.button}>
      <span className={buttonStyles.label}>{children}</span>
    </button>
  )
}

export default Button
