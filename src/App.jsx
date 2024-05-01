import React, { useState } from 'react'
import Nav from './Components/Props/stateHook/Nav'
import Home from './Components/Props/stateHook/Home'
import About from './Components/Props/stateHook/About'

const App = () => {
  const [page,setPage]=useState(true)
  return (
    <div>
      <Nav></Nav>
      {page?<Home/>:<About/>}     

      {page?<button className='px-4 py-1 bg-cyan-800 text-white' onClick={()=>setPage(false)}>About</button>:<button className='px-4 py-1 bg-cyan-800 text-white' onClick={()=>setPage(true)}>Home</button>}     
      
    </div>
  )
}
export default App