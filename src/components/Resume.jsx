import React from 'react'
import { motion } from 'framer-motion'

const techList = [
  'Python',
  'C++',
  'Ping Identity',
  'Ping DaVinci',
  'OAuth / SSO flows',
  'Cryptography',
  'REST APIs',
  'Git & CI/CD'
]

export default function Resume() {
  return (
    <motion.section id="resume" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
      <p className="section__text__p1">Resume</p>
      <h1 className="title">Skills & Tools</h1>
      <div className="resume-card details-container">
        <div className="resume-summary">
          <p>
            I am a Software / Security Engineer at CVS Health focused on building secure application flows, identity integrations, and developer tooling.
          </p>
          <p>
            I have experience building security flows using Ping Identity and Ping DaVinci, with a strong foundation in Python, C++, cryptography, and modern API-driven systems.
          </p>
        </div>
        <div className="resume-skills">
          <h3>Core technologies</h3>
          <div className="skill-tags resume-skills-list">
            {techList.map((tech) => (
              <span key={tech} className="skill-tag">{tech}</span>
            ))}
          </div>
        </div>
        <div className="resume-actions">
          <button className="btn btn-color-1" onClick={() => window.open('./assets/JeffreyWongResumeSu2026.pdf', '_blank')}>
            View Full Resume
          </button>
          <p className="skill-copy">
            This section surfaces the exact tools, identity workflows, and technologies I use across systems and security engineering projects.
          </p>
        </div>
      </div>
    </motion.section>
  )
}
