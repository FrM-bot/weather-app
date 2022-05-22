import { Link } from 'react-router-dom'
import Button from './Button.jsx'
import SvgInfo from './icons/info.jsx'

const AboutButton = () =>
  (
    <Link to='/about'>
        <Button styles='center'>
            <SvgInfo />
        </Button>
    </Link>
  )

export default AboutButton
