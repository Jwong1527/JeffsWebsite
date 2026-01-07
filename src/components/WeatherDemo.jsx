import React, {useEffect, useState, useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

const weatherMap = (code)=>{
  if(code === 0) return 'clear'
  if(code <= 3) return 'cloudy'
  if(code >= 51 && code < 60) return 'drizzle'
  if(code >= 61 && code < 70) return 'rain'
  if(code >= 71 && code < 80) return 'snow'
  if(code >= 80 && code < 100) return 'rain'
  return 'cloudy'
}

export default function WeatherDemo(){
  const [cond, setCond] = useState('clear')
  const [temp, setTemp] = useState(null)
  const [loading, setLoading] = useState(true)
  const { setWeather } = useContext(ThemeContext)

  useEffect(()=>{
    const fetchWeather = async (lat, lon)=>{
      try{
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
        const data = await res.json()
        if(data && data.current_weather){
          const code = data.current_weather.weathercode
          setCond(weatherMap(code))
          setTemp(data.current_weather.temperature)
          // sync site weather theme to detected condition (kept separate from light/dark)
          try{ setWeather(weatherMap(code)) }catch(e){}
        }
      }catch(e){
        // fallback
        setCond('cloudy')
      }finally{ setLoading(false) }
    }

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos)=>{
        fetchWeather(pos.coords.latitude, pos.coords.longitude)
      }, ()=>{ fetchWeather(40.7128, -74.0060) })
    }else{
      fetchWeather(40.7128, -74.0060)
    }
  },[])

  const { setTheme } = useContext(ThemeContext)

  return (
    <div className={`demo-area demo-weather demo-${cond}`}>
      <div className="demo-overlay">
        <div className="demo-title">Weather Background Demo</div>
        {loading ? <div>Detecting weather…</div> : <div>{cond.toUpperCase()} • {temp}°C</div>}
      </div>
      <div className="weather-visual">
        {cond === 'rain' || cond === 'drizzle' ? <div className="rain-layer"/> : null}
        {cond === 'snow' ? <div className="snow-layer"/> : null}
        {cond === 'cloudy' ? <div className="clouds-layer"/> : null}
        {cond === 'clear' ? <div className="sun"/> : null}
      </div>
    </div>
  )
}
