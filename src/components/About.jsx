import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <motion.section id="about" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.7}}>
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <motion.div className="about-details-container" style={{display:'flex', justifyContent:'center', alignItems:'flex-start', gap:'2rem', flexWrap:'wrap', maxWidth:'900px', margin:'0 auto'}}
          initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.1}}>
          <motion.div className="details-container" style={{flex:1, minWidth:300, maxWidth:400}} whileHover={{scale:1.02}}>
            <img src="./assets/experience.png" alt="Experience icon" className="icon" />
            <h3>Experience</h3>
            <p>Prev SWE Intern @ CVS Health</p>
            <p>I enjoy building full-stack web applications and working with operating systems in C++.</p>
          </motion.div>
          <motion.div className="details-container" style={{flex:1, minWidth:400, maxWidth:600}} whileHover={{scale:1.02}}>
            <img src="./assets/education.png" alt="Education icon" className="icon" />
            <h3>Education</h3>
            <p>B.S Computer Science<br />University at Buffalo</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
