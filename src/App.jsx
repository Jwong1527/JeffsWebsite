import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Profile from './components/Profile'
import About from './components/About'
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
        <Projects />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
