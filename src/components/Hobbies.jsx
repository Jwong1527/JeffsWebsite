import React from 'react'
import { motion } from 'framer-motion'

export default function Hobbies() {
  return (
    <motion.section id="hobbies" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
      <p className="section__text__p1">What I do to unwind and destress</p>
      <h1 className="title">Interests</h1>
      <div className="hobbies-grid">
        <motion.div className="details-container" whileHover={{ scale: 1.02 }}>
          <img src="./assets/luna.png" alt="Luna the cat" className="hobby-image" />
          <p>This is my cat Luna.</p>
        </motion.div>
        <motion.div className="details-container" whileHover={{ scale: 1.02 }}>
          <h3>Interests</h3>
          <img src="./assets/POWERLIFT.png" alt="Jeff at a powerlifting meet" className="hobby-image hobby-image-wide" />
          <p>I enjoy bodybuilding and leading a healthy lifestyle. I compete in powerlifting, my favorite band is Coldplay, and I enjoy playing piano.</p>
        </motion.div>
        <motion.div className="details-container" whileHover={{ scale: 1.02 }}>
          <h3>Current Reads</h3>
          <ul>
            <li>C++ Concurrency in Action</li>
            <li>Atomic Habits by James Clear</li>
            <li>How Not to Be Wrong: The Power of Mathematical Thinking by Jordan Ellenberg</li>
            <li>Why Machines Learn by Anil Ananthaswamy</li>
            <li>Quantum Algorithms via Linear Algebra by Kenneth Regan</li>
            <li>Operating Systems: Three Easy Pieces</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  )
}
