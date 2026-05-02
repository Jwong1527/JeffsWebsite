import React, { useState } from 'react'
import { motion } from 'framer-motion'
import WeatherDemo from './WeatherDemo'
import HeapDemo from './HeapDemo'
import ShorDemo from './ShorDemo'

const projects = [
  {
    year: '2026',
    type: 'Content + Education',
    title: 'How2Leetcode with Jeff',
    role: 'Creator',
    description: [
      'A YouTube series for students and new grads focused on LeetCode walkthroughs, interview prep, and landing internships.',
      'Packed with practical coding strategies, resume advice, and real-world software engineering tips.'
    ],
    link: 'https://www.youtube.com/watch?v=A60oFn8pTSg&t=889s',
    channelLink: 'https://www.youtube.com/@jeffy-1527',
    thumbnail: './assets/leetcode-thumbnail.png',
    tags: ['YouTube', 'Interview Prep', 'LeetCode', 'New Grad']
  },
  {
    year: '2026',
    type: 'Cryptography Demo',
    title: 'Shor Algorithm Visualizer',
    role: 'Developer',
    description: [
      'A sample cryptography demo that illustrates RSA semiprime factorization with a simplified quantum-inspired flow.',
      'Designed as a compact sample to build intuition for why RSA security depends on large prime factors and order-finding.'
    ],
    demo: <ShorDemo />,
    tags: ['Cryptography', 'RSA', 'Quantum', 'Visualization']
  },
  {
    year: '2025',
    type: 'Algorithm Platform',
    title: 'Algorhythm',
    role: 'Full-stack Developer',
    description: [
      'Interactive platform with algorithm visualizations, guided puzzles, and performance metrics.',
      'Built using React, Node.js, and phpMyAdmin with a Figma-driven design system.'
    ],
    media: [
      {
        type: 'pdf',
        src: './assets/Orange and Green Illustration Computer Science Presentation.pdf',
        alt: 'Orange and green computer science project illustration',
        label: 'Project Illustration'
      },
      {
        type: 'image',
        src: './assets/dash.png',
        alt: 'Algorithm Tools dashboard screenshot',
        label: 'Dashboard'
      },
      {
        type: 'image',
        src: './assets/compare.png',
        alt: 'Algorithm Tools compare screenshot',
        label: 'Compare View'
      }
    ],
    tags: ['React', 'Node.js', 'Algorithms', 'UI']
  },
  {
    year: '2025',
    type: 'Interactive UI',
    title: 'Weather Background App',
    role: 'Frontend Developer',
    description: [
      'Location-aware weather scene that updates dynamically using a public weather API.',
      'Animated skies, day/night transitions, and responsive, polished visuals.'
    ],
    demo: <WeatherDemo />,
    tags: ['API', 'Animation', 'UX']
  },
  {
    year: '2025',
    type: 'Systems Visualization',
    title: 'Heap Allocator Visualizer',
    role: 'C++ Systems Developer',
    description: [
      'Systems-level C++ project with custom heap allocation, free lists, and coalescing behavior.',
      'Includes a compact visual demo of allocation, free, and defragmentation flow.'
    ],
    demo: <HeapDemo />,
    tags: ['C++', 'Systems', 'Memory', 'Visualization']
  }
]

function ProjectCard({ year, type, title, role, description, demo, media, tags, link, channelLink, thumbnail, index }) {
  return (
    <motion.article
      className="project-flow-item"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
    >
      <div className="project-flow-meta">
        <span className="project-flow-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="project-flow-year">{year}</span>
      </div>
      <div className="project-flow-content">
        <p className="section__text__p1">{type}</p>
        <div className="project-flow-heading">
          <h3>{title}</h3>
          <span>{role}</span>
        </div>
        <div className="project-flow-body">
          {thumbnail && (
            <a href={link} target="_blank" rel="noreferrer" className="project-thumbnail-link">
              <img className="project-thumbnail" src={thumbnail} alt={`${title} thumbnail`} />
            </a>
          )}
          {description.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
          {channelLink && (
            <a className="project-link" href={channelLink} target="_blank" rel="noreferrer">
              Visit my YouTube channel
            </a>
          )}
          {media && (
            <div className="project-media-grid" aria-label={`${title} screenshots`}>
              {media.map((item) => (
                <figure key={item.src} className="project-media-item">
                  {item.type === 'pdf' ? (
                    <object className="project-media-pdf" data={item.src} type="application/pdf" aria-label={item.alt}>
                      <a className="project-link" href={item.src} target="_blank" rel="noreferrer">Open {item.label}</a>
                    </object>
                  ) : (
                    <img src={item.src} alt={item.alt} />
                  )}
                  <figcaption>{item.label}</figcaption>
                </figure>
              ))}
            </div>
          )}
          {demo && <div className="demo-area">{demo}</div>}
        </div>
        <div className="project-tags" aria-label="Project tags">
          {tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <motion.section id="projects" className="project-flow-section" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
      <div className="project-flow-intro">
        <p className="section__text__p1">Past Projects</p>
        <h1 className="title">Project Flow</h1>
        <p className="section-intro">
          A guided look through the work I have built across education, security, algorithms, and systems. Each project moves from problem space to implementation, with demos where the work is interactive.
        </p>
      </div>

      <div className="project-flow-list" role="list">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.title} {...project} index={index} />
        ))}
      </div>

      <div className="projects-footer">
        <button className="btn btn-color-1" onClick={() => setShowAll((current) => !current)}>
          {showAll ? 'Show fewer projects' : 'Show all projects'}
        </button>
      </div>
    </motion.section>
  )
}
