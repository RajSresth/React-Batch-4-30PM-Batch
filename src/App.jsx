import React from 'react'
import "./App.css";
const App = () => {
  function bgChange(){
    document.body.style.backgroundColor='deeppink'
  }

  const removeBg=()=>{
    document.body.style.backgroundColor='white'
  }
  const changeBg=()=>{
    const div=document.getElementById('box');
    console.log(div)
    div.style.backgroundColor='black'
    div.style.cursor='pointer'
  }
  const previousBg=()=>{
    const div=document.getElementById('box');
    console.log(div)
    div.style.backgroundColor='rgb(103 232 249)'
    div.style.cursor='default'
  }


  const handleSubmit=(e)=>{
    const input=document.getElementById('userName').value;
    e.preventDefault()
      console.log(e.target)
      console.log(input)
  }
  return (
    <>
        {/* <button className='py-1 px-6 bg-gray-700 text-white rounded-md' onClick={bgChange} onDoubleClick={removeBg}>Dark</button> */}
        {/* <div id="box" className='w-[25vw] h-[65vh] bg-cyan-300' onMouseEnter={changeBg} onMouseLeave={previousBg}></div> */}

        <form className='flex flex-col' id='form' onSubmit={handleSubmit}>

          <input type="text" id="userName" className='border border-black rounded mb-2 pl-2 focus:outline-none' placeholder='Enter Your Name' />

          <button className='py-1 px-6 bg-cyan-300 rounded' id='btn'>Login</button>
        </form>
    </>
  )
}

export default App