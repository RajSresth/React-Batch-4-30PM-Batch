import React, { useRef } from 'react'
import { Fragment } from 'react'
import "./App.css";

const App = () => {
    // hooks:- useRef()
    const myRef=useRef()

  const handleClick=()=>{
    // console.log(myRef.current)
      myRef.current.style.backgroundColor='salmon'
   
  }
  return (
    <Fragment>
      <div className='border cursor-pointer  border-white rounded-md py-1 px-5 text-white'  onClick={handleClick} ref={myRef}>Click</div>
    </Fragment>
  )
}

export default App