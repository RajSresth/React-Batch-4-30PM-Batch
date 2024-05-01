import React from 'react'
import Nav from './Nav'

const Home = (props) => {
    console.log(props)
  return (
    <div className='w-[100vw] h-[90vh] bg-[salmon] flex justify-center items-center'>        
        <button className='px-4 py-1 bg-cyan-800'>Home</button>
    </div>
  )
}

export default Home