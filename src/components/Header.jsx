import React, {useState, useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
import { motion } from 'framer-motion'

export default function Header(){
  const [open, setOpen] = useState(false)
  const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <motion.header initial={{y:-20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6, ease:'easeOut'}}>
      <nav id="desktop-nav">
        <motion.div className="logo" whileHover={{scale:1.02}} transition={{type:'spring',stiffness:300}}>JeffreyWong.com</motion.div>
        <div>
          <motion.ul className="nav-links" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}}>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
          </motion.ul>
        </div>
        <motion.div id="socials-container" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.15}}>
          <img src="./assets/linkedin.png" alt="LinkedIn" className="icon" onClick={()=>window.open('https://www.linkedin.com/in/jeffrey-wong1215/', '_blank')} />
          <img src="./assets/github.png" alt="Github" className="icon" onClick={()=>window.open('https://github.com/Jwong1527', '_blank')} />
          <button onClick={toggleTheme} className="btn btn-color-2" style={{marginLeft: '1rem'}} aria-pressed={theme==='dark'} title="Toggle theme">{theme === 'light' ? 'Light' : 'Dark'}</button>
        </motion.div>
      </nav>

      <nav id="hamburger-nav">
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${open ? 'open' : ''}`} onClick={()=>setOpen(o => !o)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <motion.div className={`menu-links ${open ? 'open' : ''}`} initial={{opacity:0}} animate={{opacity: open ? 1 : 0}} transition={{duration:0.25}}>
            <a href="#about" onClick={()=>setOpen(false)}>About</a>
            <a href="#projects" onClick={()=>setOpen(false)}>Projects</a>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  )
}
