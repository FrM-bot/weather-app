import { Github, Linkedin } from './Links'

const Footer = () => {
  return (
      <footer className='mt-5 flex space-between align-x md-col'>
        <p className="p-1">Built and Design by <span className="link p-0">Maciel Franco</span></p>
        <div className='flex gap-2'>
            <Linkedin />
            <Github />
        </div>
      </footer>

  )
}

export default Footer
