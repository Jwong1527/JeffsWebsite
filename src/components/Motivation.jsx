import React from 'react'
import { motion } from 'framer-motion'

export default function Motivation() {
  return (
    <motion.section id="motivation" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
      <p className="section__text__p1">What Motivates Me</p>
      <h1 className="title">People First</h1>
      <div className="motivation-card">
        <p>
          My friends and colleagues I have met along the way continue to motivate me. Family is also very important to me, and they remind me why the work matters beyond the code.
        </p>
        <p>
          Beyond that, I am driven by a simple goal: to help the people around me. I care about building things that make life a little easier, more useful, or more meaningful for others.
        </p>
      </div>
    </motion.section>
  )
}
