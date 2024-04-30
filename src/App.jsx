import React, { useState } from 'react'
import Login from './Components/Props/stateHook/Login'
import "./App.css";
import Signup from './Components/Props/stateHook/Signup';

const App = () => {
  const [userExist,setUserExist]=useState(true);
  return (
   <section>
        <article className='bg-white shadow-lg shadow-gray-400 rounded-md w-[450px] h-[400px] py-3 px-8 flex flex-col gap-6'>
        {userExist?<Login/>:<Signup/>}

        {userExist?<button className='px-4 py-1 bg-[#c10303] font-semibold  text-white rounded' onClick={()=>setUserExist(false)}>Signup</button>
        :<button className='px-4 text-white py-1 bg-[#0866ff] font-semibold rounded' onClick={()=>setUserExist(true)}>Login</button>}              
        </article>
    </section>
  )
}

export default App