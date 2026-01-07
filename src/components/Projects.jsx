import React from 'react'
import { motion } from 'framer-motion'
import WeatherDemo from './WeatherDemo'
import HeapDemo from './HeapDemo'

function ProjectCard({img, title, children}){
  return (
    <motion.div className="project-card details-container" whileHover={{translateY:-8}} transition={{type:'spring',stiffness:250}}>
      {img && <motion.img src={img} alt={title} className="project-img" initial={{scale:0.98}} whileInView={{scale:1}} transition={{duration:0.6}} />}
      <h3 className="project-title">{title}</h3>
      <div className="project-body">{children}</div>
    </motion.div>
  )
}

export default function Projects(){
  return (
    <motion.section id="projects" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.7}}>
      <p className="section__text__p1">Recent Work</p>
      <h1 className="title">Projects</h1>

      <div className="projects-row" role="list">
        <ProjectCard img={'./assets/project1.png'} title={'Algorithm Tools'}>
          <p>Built using React.js, Node.js, phpMyAdmin, and designed with Figma.</p>
          <p>A platform offering interactive algorithm visualizations and quizzes for learning BFS, DFS, Dijkstra's and more.</p>
        </ProjectCard>

        <ProjectCard img={null} title={'Weather Background App'}>
          <p>An interactive front-end demo that uses the user's location and a public weather API to change an animated scene to match current conditions.</p>
          <WeatherDemo />
        </ProjectCard>

        <ProjectCard img={null} title={'Custom Heap Allocator (C++)'}>
          <p>A systems project implementing a custom heap allocator in C++ with free lists, coalescing, and benchmarking. Below is a small visual demo of allocation/free/defrag behavior.</p>
          <HeapDemo />
        </ProjectCard>
      </div>
    </motion.section>
  )
}
