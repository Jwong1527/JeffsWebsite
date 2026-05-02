import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Software Development Engineer',
    company: 'CVS Health',
    timeframe: 'Present',
    location: 'New York',
    details: [
      'Selected for the CVS Health Innotech Tech Leadership development program.'
    ]
  },
  {
    title: 'Software Security Engineer Intern',
    company: 'CVS Health',
    timeframe: 'Summer 2025',
    location: 'Hartford, Connecticut',
    details: [
      'Worked on the Ping Identity IAM and Ping Risk teams building secure identity solutions.',
      'Designed agentic AI workflows using Ping DaVinci for identity automation and compliance.',
      'Built OAuth2.0 and JWT-based authentication systems for enterprise SAML onboarding.',
      'Contributed to SSO integration infrastructure for secure enterprise applications.'
    ]
  },
  {
    title: 'Mathematics Teacher',
    company: 'Logos Community Church',
    timeframe: 'May 2026 - August 2026',
    location: 'New York',
    details: [
      'Tutored SAT math prep for a group of 15 students.',
      'Developed lesson plans focused on core math concepts, practice problems, and test-taking strategies.'
    ]
  }
]

export default function Experience() {
  return (
    <motion.section id="experience" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
      <p className="section__text__p1">Professional Experience</p>
      <h1 className="title">Experience</h1>
      <div className="experience-timeline">
        {experiences.map((item, index) => (
          <motion.article
            key={item.title}
            className="experience-entry"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <div className="experience-date">
              <span>{item.timeframe}</span>
            </div>
            <div className="experience-card">
              <div className="experience-heading">
                <div>
                  <h3>{item.title}</h3>
                  <p className="experience-company">{item.company}</p>
                </div>
                <span className="experience-location">{item.location}</span>
              </div>
            <ul>
              {item.details.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
