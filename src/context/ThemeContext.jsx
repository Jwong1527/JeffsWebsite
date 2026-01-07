import React, {createContext, useState, useEffect} from 'react'

const ThemeContext = createContext()

export function ThemeProvider({children}){
  const getInitial = ()=>{
    try{
      const stored = localStorage.getItem('theme')
      if(stored) return stored
      if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
    }catch(e){}
    return 'light'
  }

  const [theme, setTheme] = useState(getInitial)
  const [weather, setWeather] = useState(null)

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
    try{ localStorage.setItem('theme', theme) }catch(e){}
  },[theme])

  useEffect(()=>{
    if(weather) document.documentElement.setAttribute('data-weather', weather)
  },[weather])

  function toggleTheme(){ setTheme(t => t === 'light' ? 'dark' : 'light') }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme, setTheme, weather, setWeather}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
