import './Button.css'

const Button = ({ children, styles, onClick, role }) =>
  (
    <button className={styles ? `button ${styles}` : 'button'} onClick={onClick} role={role}>
        {
            children
        }
    </button>
  )

export default Button
