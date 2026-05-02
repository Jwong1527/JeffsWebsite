import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Profile from './components/Profile'
import About from './components/About'
import Motivation from './components/Motivation'
import Experience from './components/Experience'
import Hobbies from './components/Hobbies'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

export default function App(){
  return (
    <ThemeProvider>
      <CustomCursor />
        <Header />
      <main>
        <Profile />
        <About />
        <Motivation />
        <Experience />
        <Resume />
        <Projects />
        <Hobbies />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
