import React, { useState } from 'react'
import "./App.css";

const App = () => {
  // useState Hook
  const [count,setCount]=useState(0)

  const increment=()=>{
    setCount(()=>count+1)
  }
  const decrement=()=>{
   if(count>0){
    setCount(()=>count-1)
   }
  }
  const reset=()=>{
    setCount(()=>0)
  }

  return (
    <div className='flex flex-col gap-8 h-screen justify-center items-center'>
            <h1>Count: <span>{count}</span></h1>
            <div className='flex gap-6'>
              <button className='border-2 border-emerald-400 cursor-pointer\ py-1 px-4 rounded-md text-white' onClick={increment}>Increment</button>

              <button className='border-2 border-red-400 cursor-pointer py-1 px-4 rounded-md text-white' onClick={decrement}>Decrement</button>

              <button className='border-2 border-white cursor-pointer py-1 px-4 rounded-md text-white' onClick={reset}>Reset</button>
            </div>
    </div>
  )
}

export default App