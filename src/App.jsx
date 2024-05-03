import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./App.css"

const App = () => {
  const[data,setData]=useState([])

  useEffect(()=>{
    (async function (){
          let response=await fetch("https://fakestoreapi.com/products")
          let result=await response.json()
          setData(result)
    })()
  },[])
 

  return (
    <div className='flex justify-center flex-wrap gap-x-[5rem] gap-y-[5rem] p-11'>
       {
              data.map((val,i)=>{
                console.log(val)
                return (
                  <div key={i}>
                       <div className='flex flex-col items-center py-8 w-[350px] bg-white shadow-md shadow-black '>
                        <img src={val.image} className='w-[100px] h-[100px]'/>
                          <h2 className='text-[2.2rem] font-extrabold my-4'>{val.category}</h2>
                          <h3 className='text-[1.5rem]'><strong>Price: </strong>{val.price}</h3>
                       </div>                        
                  </div>
                )
              })
       }
    </div>
  )
}

export default App