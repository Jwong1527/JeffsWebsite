import React, { useState } from 'react'
import { motion } from 'framer-motion'

const responses = {
  'about': {
    summary: 'Jeff is a Software Development Engineer passionate about identity security, IAM systems, and building scalable authentication workflows.',
    bullets: [
      'Specializes in Ping Identity IAM, OAuth2.0, JWT, and SAML-based authentication.',
      'Has experience as a Software Security Engineer Intern at CVS Health.',
      'Incoming full-time Software Development Engineer at CVS Health, Ping Identity IAM team.'
    ],
    link: '#about'
  },
  'experience': {
    summary: 'Jeff has professional experience at CVS Health focusing on identity and access management.',
    bullets: [
      'Ping Identity IAM build team: OAuth2.0, JWT, SAML onboarding applications.',
      'Ping Identity risk team: Agentic AI workflows using Ping DaVinci.',
      'Built secure identity solutions leveraging AI tools for enterprise SSO integration.'
    ],
    link: '#experience'
  },
  'projects': {
    summary: 'Jeff has built projects including algorithm visualizations, cryptography demos, and educational content.',
    bullets: [
      'Shor Algorithm Visualizer: Demonstrates RSA factorization with quantum-inspired flow.',
      'How2Leetcode with Jeff: YouTube series for coding interviews and LeetCode walkthroughs.',
      'Heap Allocator Visualizer: C++ systems project visualizing memory management.'
    ],
    link: '#projects'
  },
  'skills': {
    summary: 'Jeff\'s technical expertise includes Python, C++, identity platforms, web technologies, and AI workflows.',
    bullets: [
      'Identity & Security: Ping Identity, Ping DaVinci, OAuth2.0, JWT, SAML, SSO.',
      'Languages: Python, C++, JavaScript/TypeScript, Java.',
      'Web & Tools: React, Node.js, Rest APIs, Git, Docker.'
    ],
    link: '#skills'
  },
  'hobbies': {
    summary: 'Jeff enjoys powerlifting, bodybuilding, music, and playing piano.',
    bullets: [
      'Competes in IPF powerlifting and enjoys bodybuilding for fitness.',
      'Listens to Coldplay and plays piano to unwind.',
      'Has a black cat named Luna.'
    ],
    link: '#hobbies'
  }
}

export default function AIIDE() {
  const [query, setQuery] = useState('')
  const [response, setResponse] = useState(null)
  const [expanded, setExpanded] = useState([false, false, false])

  const handleAsk = () => {
    const lowerQuery = query.toLowerCase()
    let matched = null
    if (lowerQuery.includes('about') || lowerQuery.includes('jeff')) matched = 'about'
    else if (lowerQuery.includes('experience') || lowerQuery.includes('work')) matched = 'experience'
    else if (lowerQuery.includes('project')) matched = 'projects'
    else if (lowerQuery.includes('skill')) matched = 'skills'
    else if (lowerQuery.includes('hobby') || lowerQuery.includes('interest')) matched = 'hobbies'
    else matched = 'about' // default

    setResponse(responses[matched])
    setExpanded([false, false, false])
  }

  const toggleBullet = (index) => {
    setExpanded(prev => prev.map((val, i) => i === index ? !val : val))
  }

  return (
    <motion.section id="ai-ide" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
      <p className="section__text__p1">AI Assistant</p>
      <h1 className="title">Ask About Jeff</h1>
      <div className="ai-ide-container">
        <div className="ai-input">
          <input
            type="text"
            placeholder="Ask about Jeff's experience, skills, projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
          />
          <button onClick={handleAsk}>Ask AI</button>
        </div>
        {response && (
          <div className="ai-response">
            <p>{response.summary}</p>
            <div className="ai-bullets">
              {response.bullets.map((bullet, index) => (
                <div key={index} className="ai-bullet">
                  <button onClick={() => toggleBullet(index)}>
                    {expanded[index] ? '▼' : '▶'} {bullet.split(':')[0]}
                  </button>
                  {expanded[index] && <p>{bullet}</p>}
                </div>
              ))}
            </div>
            <a href={response.link} className="ai-link">View Section</a>
          </div>
        )}
      </div>
    </motion.section>
  )
}