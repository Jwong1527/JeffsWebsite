import React, { useEffect, useRef } from 'react'

export default function CustomCursor(){
  const ring = useRef(null)
  const pos = useRef({x:0,y:0})
  const ringPos = useRef({x:0,y:0})
  const moved = useRef(false)

  useEffect(()=>{
    let mounted = true

    const onMouseMove = (e)=>{
      pos.current.x = e.clientX
      pos.current.y = e.clientY
      // reveal ring on first move to avoid top-left flash
      if(ring.current && !moved.current){ ring.current.style.opacity = '1'; moved.current = true }
    }

    const render = ()=>{
      if(!mounted) return
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.14
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.14
      if(ring.current){
        ring.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`
      }
      requestAnimationFrame(render)
    }

    const setHover = ()=>{ if(ring.current) ring.current.classList.add('cursor-hover') }
    const clearHover = ()=>{ if(ring.current) ring.current.classList.remove('cursor-hover') }

    document.addEventListener('mousemove', onMouseMove)
    requestAnimationFrame(render)

    const hoverables = Array.from(document.querySelectorAll('a, button, .icon, .btn'))
    hoverables.forEach(el=>{ el.addEventListener('mouseenter', setHover); el.addEventListener('mouseleave', clearHover) })

    return ()=>{
      mounted = false
      document.removeEventListener('mousemove', onMouseMove)
      hoverables.forEach(el=>{ el.removeEventListener('mouseenter', setHover); el.removeEventListener('mouseleave', clearHover) })
    }
  },[])

  return (
    <div ref={ring} className="cursor-ring" aria-hidden />
  )
}
