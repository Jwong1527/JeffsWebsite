import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section id="about" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="about-grid">
        <motion.div className="about-cards" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          <motion.div className="details-container" whileHover={{ scale: 1.02 }}>
            <img src="./assets/experience.png" alt="Experience icon" className="icon" />
            <h3>Security & Systems Engineering</h3>
            <p>Focused on identity-driven security flows, application integration, and high-performance software.</p>
            <p>Hi, I’m Jeff — a software engineer with experience in Python, C++, Ping Identity, and Ping DaVinci, building secure identity and API workflows for enterprise products.</p>
          </motion.div>

          <motion.div className="details-container" whileHover={{ scale: 1.02 }}>
            <img src="./assets/education.png" alt="Education icon" className="icon" />
            <h3>Education</h3>
            <p>B.S. Computer Science</p>
            <p>University at Buffalo</p>
          </motion.div>
        </motion.div>

        <motion.div className="skills-panel" id="skills" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.15 }}>
          <p className="section__text__p1">Skills & Tools</p>
          <h2 className="title small">What I use</h2>
          <div className="skill-tags">
            {['Python', 'C++', 'Ping Identity', 'Ping DaVinci', 'OAuth / SSO', 'Cryptography', 'React', 'Node.js'].map((skill) => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
          <h3 className="skills-subtitle">Physics & Mathematics</h3>
          <div className="skill-tags">
            {['Quantum Mechanics', 'Quantum Computing', 'Statistical Inference', 'Linear Algebra', 'Calculus', 'Differential Equations', 'Data Analysis'].map((skill) => (
              <span key={skill} className="skill-tag skill-tag-secondary">{skill}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
