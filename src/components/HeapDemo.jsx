import React, {useState} from 'react'

function makeInitial(size=200){
  return [{start:0,size,free:true}]
}

export default function HeapDemo(){
  const [segments, setSegments] = useState(makeInitial())
  const [nextSize, setNextSize] = useState(16)

  function allocate(sz){
    setSegments(prev=>{
      const arr = JSON.parse(JSON.stringify(prev))
      for(let i=0;i<arr.length;i++){
        if(arr[i].free && arr[i].size >= sz){
          const leftover = arr[i].size - sz
          arr[i].free = false
          arr[i].size = sz
          if(leftover>0){
            arr.splice(i+1,0,{start:arr[i].start+sz,size:leftover,free:true})
          }
          break
        }
      }
      return arr
    })
  }

  function freeLast(){
    setSegments(prev=>{
      const arr = JSON.parse(JSON.stringify(prev))
      for(let i=arr.length-1;i>=0;i--){
        if(!arr[i].free){ arr[i].free = true; break }
      }
      // coalesce
      const res = []
      for(let seg of arr){
        const last = res[res.length-1]
        if(last && last.free && seg.free){ last.size += seg.size }
        else res.push(seg)
      }
      return res
    })
  }

  function defrag(){
    setSegments(prev=>{
      const allocated = prev.filter(s=>!s.free)
      const freeSize = prev.reduce((a,b)=>a+(b.free?b.size:0),0)
      const arr = []
      let cur = 0
      for(let s of allocated){ arr.push({start:cur,size:s.size,free:false}); cur+=s.size }
      if(freeSize>0) arr.push({start:cur,size:freeSize,free:true})
      return arr
    })
  }

  function randomAlloc(){
    const sz = Math.min(64, Math.max(8, Math.round(Math.random()*48)))
    allocate(sz)
  }

  return (
    <div className="demo-area demo-heap">
      <div className="demo-overlay">
        <div className="demo-title">Custom Heap Allocator (visualizer)</div>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <input type="number" value={nextSize} onChange={e=>setNextSize(Number(e.target.value))} style={{width:80}} />
          <button className="btn btn-color-1" onClick={()=>allocate(nextSize)}>Allocate</button>
          <button className="btn btn-color-2" onClick={freeLast}>Free Last</button>
          <button className="btn btn-color-2" onClick={defrag}>Defragment</button>
          <button className="btn btn-color-2" onClick={randomAlloc}>Random</button>
        </div>
      </div>

      <div className="heap-visual" aria-hidden>
        {segments.map((s,i)=> (
          <div key={i} className={`heap-seg ${s.free? 'free':'alloc'}`} style={{flex:s.size}} title={`${s.free? 'Free':'Allocated'} — ${s.size}`} />
        ))}
      </div>
      <div className="heap-legend"><span className="legend-box alloc"/> Allocated <span className="legend-box free"/> Free</div>
    </div>
  )
}
