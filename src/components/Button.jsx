import './Button.css'

const Button = ({ children, styles, onClick }) =>
  (
    <button className={styles ? `button ${styles}` : 'button'} onClick={onClick}>
        {
            children
        }
    </button>
  )

export default Button
