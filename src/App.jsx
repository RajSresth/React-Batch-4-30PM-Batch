import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const [login,setUserLogin]=useState(true)
  return (
    <div>
      {login?<h1>Login</h1>:<h1>Not Login</h1>}
      
      <button className='border-[1px] py-1 px-4 rounded-md border-black mt-5' onClick={()=>setUserLogin(false)}>Click</button>
    </div>
  )
}

export default App