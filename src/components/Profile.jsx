import React from 'react'
import { motion } from 'framer-motion'

export default function Profile() {
  return (
    <motion.section id="profile" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
      <motion.div className="section__pic-container" initial={{ scale: 0.98 }} whileInView={{ scale: 1 }} transition={{ duration: 0.6 }}>
        <img src="./assets/Jeffpfp.jpeg" alt="Jeffrey Wong profile picture" />
      </motion.div>
      <motion.div className="section__text" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Jeffrey Wong</h1>
        <p className="section__text__p2">Software Development Engineer @ CVS Health</p>
        <div className="btn-container">
          <button className="btn btn-color-1" onClick={() => window.location.hash = '#projects'}>View Projects</button>
          <button className="btn btn-color-2" onClick={() => window.open('./assets/JeffreyWongResumeSu2026.pdf', '_blank')}>View Resume</button>
        </div>
      </motion.div>
    </motion.section>
  )
}
